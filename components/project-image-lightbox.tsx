"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react"
import type {
  MouseEvent as ReactMouseEvent,
  WheelEvent as ReactWheelEvent
} from "react"

type ProjectImage = {
  src: string
  alt: string
  fit?: "cover" | "contain"
  aspect?: "video" | "wide" | "ultrawide"
}

type ProjectImageLightboxProps = {
  images?: ProjectImage[]
  image?: string
  imageAlt?: string
  aspectClassName?: string
}

export function ProjectImageLightbox({
  images,
  image,
  imageAlt,
  aspectClassName
}: ProjectImageLightboxProps) {
  const normalizedImages = useMemo<ProjectImage[]>(() => {
    if (images?.length) return images
    if (image) {
      return [{ src: image, alt: imageAlt ?? "Imagem do projeto" }]
    }
    return []
  }, [images, image, imageAlt])

  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const zoomContainerRef = useRef<HTMLDivElement | null>(null)
  const prevButtonRef = useRef<HTMLButtonElement | null>(null)
  const nextButtonRef = useRef<HTMLButtonElement | null>(null)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef(0)
  const dragStart = useRef({ x: 0, y: 0, offsetX: 0, offsetY: 0 })

  const total = normalizedImages.length
  const canNavigate = total > 1
  const safeIndex = total ? Math.min(index, total - 1) : 0
  const current = normalizedImages[safeIndex]
  const currentFit = current?.fit ?? "cover"
  const currentAspect = current?.aspect ?? "video"
  const aspectClass =
    currentAspect === "ultrawide"
      ? "aspect-[21/9]"
      : currentAspect === "wide"
      ? "aspect-[16/10]"
      : "aspect-video"
  const cardAspectClass = aspectClassName ?? aspectClass

  const goTo = useCallback(
    (nextIndex: number) => {
      if (!total) return
      const normalized =
        (nextIndex + total) % total
      setIndex(normalized)
    },
    [total]
  )

  const goNext = useCallback(() => {
    if (!canNavigate) return
    goTo(safeIndex + 1)
  }, [canNavigate, goTo, safeIndex])

  const goPrev = useCallback(() => {
    if (!canNavigate) return
    goTo(safeIndex - 1)
  }, [canNavigate, goTo, safeIndex])

  const handleOpen = useCallback(() => {
    if (!total) return
    setIsOpen(true)
    setIsVisible(true)
  }, [total])

  const handleClose = useCallback(() => {
    setZoom(1)
    setOffset({ x: 0, y: 0 })
    setIsVisible(false)
    window.setTimeout(() => setIsOpen(false), 160)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    if (canNavigate) {
      prevButtonRef.current?.focus()
    } else {
      dialogRef.current?.focus()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose()
      }
      if (event.key === "ArrowRight") {
        goNext()
      }
      if (event.key === "ArrowLeft") {
        goPrev()
      }
      if (event.key === "Tab" && canNavigate) {
        event.preventDefault()
        const focusables = [prevButtonRef.current, nextButtonRef.current].filter(
          Boolean
        ) as HTMLButtonElement[]
        if (!focusables.length) return
        const currentIndex = focusables.indexOf(
          document.activeElement as HTMLButtonElement
        )
        const direction = event.shiftKey ? -1 : 1
        const nextIndex =
          currentIndex === -1
            ? 0
            : (currentIndex + direction + focusables.length) % focusables.length
        focusables[nextIndex]?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, handleClose, goNext, goPrev, canNavigate])

  useEffect(() => {
    if (!isOpen) return
    const id = window.setTimeout(() => setIsVisible(true), 10)
    return () => window.clearTimeout(id)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    setZoom(1)
    setOffset({ x: 0, y: 0 })
  }, [safeIndex, isOpen])

  useEffect(() => {
    if (!isDragging) return

    const handleMove = (event: MouseEvent) => {
      const rect = zoomContainerRef.current?.getBoundingClientRect()
      if (!rect) return
      const dx = event.clientX - dragStart.current.x
      const dy = event.clientY - dragStart.current.y
      const maxX = (zoom - 1) * rect.width * 0.5
      const maxY = (zoom - 1) * rect.height * 0.5
      const nextX = Math.min(
        maxX,
        Math.max(-maxX, dragStart.current.offsetX + dx)
      )
      const nextY = Math.min(
        maxY,
        Math.max(-maxY, dragStart.current.offsetY + dy)
      )
      setOffset({ x: nextX, y: nextY })
    }

    const handleUp = () => {
      setIsDragging(false)
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseup", handleUp)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseup", handleUp)
    }
  }, [isDragging, zoom])

  const handleTouchStart = (event: React.TouchEvent) => {
    if (!canNavigate) return
    touchStartX.current = event.touches[0]?.clientX ?? null
    touchDeltaX.current = 0
  }

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!canNavigate || touchStartX.current === null) return
    touchDeltaX.current = event.touches[0].clientX - touchStartX.current
  }

  const handleTouchEnd = () => {
    if (!canNavigate || touchStartX.current === null) return
    if (Math.abs(touchDeltaX.current) > 40) {
      if (touchDeltaX.current < 0) {
        goNext()
      } else {
        goPrev()
      }
    }
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  const clampOffset = useCallback(
    (nextZoom: number, nextOffset: { x: number; y: number }) => {
      const rect = zoomContainerRef.current?.getBoundingClientRect()
      if (!rect) return nextOffset
      const maxX = (nextZoom - 1) * rect.width * 0.5
      const maxY = (nextZoom - 1) * rect.height * 0.5
      return {
        x: Math.min(maxX, Math.max(-maxX, nextOffset.x)),
        y: Math.min(maxY, Math.max(-maxY, nextOffset.y))
      }
    },
    []
  )

  const handleWheel = (event: ReactWheelEvent) => {
    if (!isOpen) return
    event.preventDefault()
    if (!zoomContainerRef.current) return

    const rect = zoomContainerRef.current.getBoundingClientRect()
    const delta = -event.deltaY
    const factor = delta > 0 ? 1.12 : 0.9
    const nextZoom = Math.min(4, Math.max(1, zoom * factor))
    if (nextZoom === zoom) return

    const cx = event.clientX - rect.left - rect.width / 2
    const cy = event.clientY - rect.top - rect.height / 2
    const ratio = nextZoom / zoom
    const nextOffset = {
      x: ratio * offset.x + (1 - ratio) * cx,
      y: ratio * offset.y + (1 - ratio) * cy
    }

    setZoom(nextZoom)
    setOffset(clampOffset(nextZoom, nextOffset))
  }

  const handleDoubleClick = (event: ReactMouseEvent) => {
    if (!zoomContainerRef.current) return
    const rect = zoomContainerRef.current.getBoundingClientRect()
    const targetZoom = zoom > 1 ? 1 : 2
    const cx = event.clientX - rect.left - rect.width / 2
    const cy = event.clientY - rect.top - rect.height / 2
    const ratio = targetZoom / zoom
    const nextOffset =
      targetZoom === 1
        ? { x: 0, y: 0 }
        : {
            x: ratio * offset.x + (1 - ratio) * cx,
            y: ratio * offset.y + (1 - ratio) * cy
          }

    setZoom(targetZoom)
    setOffset(clampOffset(targetZoom, nextOffset))
  }

  const handleMouseDown = (event: ReactMouseEvent) => {
    if (zoom <= 1) return
    event.preventDefault()
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      offsetX: offset.x,
      offsetY: offset.y
    }
    setIsDragging(true)
  }

  if (!current) return null

  return (
    <>
      <div className={`relative w-full ${cardAspectClass || aspectClass}`}>
        <button
          type="button"
          onClick={handleOpen}
          className={`group relative h-full w-full overflow-hidden rounded-lg border border-transparent transition hover:border-green-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/60 ${
            currentFit === "contain" ? "bg-black/40" : ""
          }`}
          aria-label="Abrir imagem do projeto"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 768px) 640px, 100vw"
            className={`transition-opacity duration-200 ${
              currentFit === "contain" ? "object-contain" : "object-cover"
            }`}
          />
          {currentFit === "contain" ? (
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.12),transparent_45%)]" />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(34,197,94,0.08)_0,rgba(34,197,94,0.08)_1px,transparent_1px,transparent_4px)]" />
            </div>
          ) : null}
          <span className="absolute bottom-3 right-3 rounded-full border border-green-400/50 bg-black/60 p-2 text-green-200 shadow-[0_0_12px_rgba(34,197,94,0.25)] transition group-hover:scale-105">
            <Search className="h-4 w-4" />
          </span>
        </button>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Imagem anterior"
          disabled={!canNavigate}
          className={`absolute left-3 top-1/2 -translate-y-1/2 rounded-full border px-2 py-2 text-green-200 shadow-[0_0_10px_rgba(34,197,94,0.25)] transition ${
            canNavigate
              ? "border-green-400/50 bg-black/60 hover:border-green-300 hover:text-green-100 active:scale-95"
              : "cursor-not-allowed border-green-400/20 bg-black/40 opacity-40"
          }`}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Próxima imagem"
          disabled={!canNavigate}
          className={`absolute right-3 top-1/2 -translate-y-1/2 rounded-full border px-2 py-2 text-green-200 shadow-[0_0_10px_rgba(34,197,94,0.25)] transition ${
            canNavigate
              ? "border-green-400/50 bg-black/60 hover:border-green-300 hover:text-green-100 active:scale-95"
              : "cursor-not-allowed border-green-400/20 bg-black/40 opacity-40"
          }`}
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {total > 1 ? (
          <div className="absolute bottom-3 left-3 rounded-full border border-green-400/40 bg-black/60 px-2 py-0.5 text-[11px] text-green-200">
            {safeIndex + 1}/{total}
          </div>
        ) : null}
      </div>

      {isOpen ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6 transition-opacity duration-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
          aria-hidden={!isOpen}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            onClick={(event) => event.stopPropagation()}
            ref={dialogRef}
            tabIndex={-1}
            className={`relative w-full max-w-5xl transition-transform duration-200 ${
              isVisible ? "scale-100" : "scale-95"
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden rounded-2xl border border-green-400/30 bg-background/80 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
              <div className="flex h-[78vh] w-full max-w-[90vw] flex-col">
                <div className="flex h-12 items-center justify-between gap-3 border-b border-green-400/20 bg-black/40 px-4 text-green-100 backdrop-blur">
                  <h3
                    className="truncate text-sm font-medium"
                    aria-live="polite"
                    title={current.alt}
                  >
                    {current.alt}
                  </h3>
                  {total > 1 ? (
                    <span className="shrink-0 text-xs text-green-200">
                      {safeIndex + 1}/{total}
                    </span>
                  ) : null}
                </div>
                <div
                  ref={zoomContainerRef}
                  className={`relative flex-1 overflow-hidden ${
                    zoom > 1
                      ? isDragging
                        ? "cursor-grabbing"
                        : "cursor-grab"
                      : "cursor-zoom-in"
                  }`}
                  onWheel={handleWheel}
                  onDoubleClick={handleDoubleClick}
                  onMouseDown={handleMouseDown}
                >
                  <div
                    className={`absolute inset-0 ${
                      isDragging
                        ? ""
                        : "transition-transform duration-150 ease-out"
                    }`}
                    style={{
                      transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`
                    }}
                  >
                    <Image
                      src={current.src}
                      alt={current.alt}
                      fill
                      className="object-contain select-none"
                      sizes="90vw"
                      draggable={false}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              ref={prevButtonRef}
              type="button"
              onClick={goPrev}
              aria-label="Imagem anterior"
              disabled={!canNavigate}
              className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full border px-3 py-3 text-green-200 shadow-[0_0_16px_rgba(34,197,94,0.3)] transition ${
                canNavigate
                  ? "border-green-400/60 bg-black/60 hover:border-green-300 hover:text-green-100 active:scale-95"
                  : "cursor-not-allowed border-green-400/20 bg-black/40 opacity-40"
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              ref={nextButtonRef}
              type="button"
              onClick={goNext}
              aria-label="Próxima imagem"
              disabled={!canNavigate}
              className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full border px-3 py-3 text-green-200 shadow-[0_0_16px_rgba(34,197,94,0.3)] transition ${
                canNavigate
                  ? "border-green-400/60 bg-black/60 hover:border-green-300 hover:text-green-100 active:scale-95"
                  : "cursor-not-allowed border-green-400/20 bg-black/40 opacity-40"
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {total > 1 ? (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-green-400/40 bg-black/70 px-3 py-1 text-xs text-green-100">
                {safeIndex + 1} / {total}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}
