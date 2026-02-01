import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export const metadata: Metadata = {
  title: "Gustavo Kresko — Analista de Cibersegurança",
  description:
    "Analista de Cibersegurança com atuação em SOC e SIEM, focado em monitoramento, detecção e resposta a incidentes. Experiência em análise de logs, investigação de eventos de segurança, hardening de ambientes e governança de segurança da informação, com base em frameworks como ISO/IEC 27001 e práticas de GRC."
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24">
      {/* Hero */}
      <section className="grid gap-10 pt-20 md:grid-cols-2 md:items-center">
        {/* Text */}
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight">
            Gustavo <span className="text-primary">Kresko</span>
          </h1>

          <div className="max-w-xl text-lg text-muted-foreground">
            <TextGenerateEffect
              words="Analista de Cibersegurança com foco em proteção de ambientes corporativos, 
              monitoramento de ameaças, resposta a incidentes e implementação de controles de segurança em sistemas críticos e infraestrutura."
            />
          </div>

          <div className="flex items-center gap-4">
            {/* Primary CTA */}
            <Button
              asChild
              className="
                relative
                px-6
                font-medium
                transition-all
                duration-300
                ease-in-out
                hover:shadow-lg
                hover:ring-4
                hover:ring-green-400/30
                "
              >
              <Link href="/resume">Veja o Resumo</Link>
            </Button>

            {/* Secondary CTA */}
            <Button
              variant="outline"
              asChild
              className="
                px-6
                transition-all
                duration-300
                ease-in-out
                hover:border-primary
              "
              >
              <Link href="/projects">Projetos</Link>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <div
            className="
      relative h-64 w-64 overflow-hidden rounded-2xl
      ring-2 ring-green-400/60
      shadow-sm
      transition-all duration-700 ease-out
      hover:scale-105 hover:ring-green-400 hover:shadow-md
    "
          >
            <Image
              src="/me.jpeg"
              alt="Gustavo Kresko"
              fill
              priority
              className="
        object-cover
        transition-transform duration-700 ease-out
        hover:scale-110
      "
            />
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Short bio */}
      <section className="max-w-xl space-y-4 text-sm text-muted-foreground">
        <p>
          Trabalho com cibersegurança aplicada a ambientes empresariais, focando na detecção de ameaças, 
          resposta a incidentes e evolução contínua dos controles de segurança.
        </p>
        <p>
          Aqui compartilho experiências técnicas e aprendizados obtidos em 
          ambientes complexos de produção.
        </p>
      </section>

    </main>
  )
}
