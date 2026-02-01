import type { Metadata } from "next"

import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { inter } from "./fonts"
import { ThemeProvider } from "next-themes"
import { Providers } from "./providers"
import { Suspense } from "react"
import { AppLoading } from "@/components/app-loading"


export const metadata: Metadata = {
  title: {
    default: "Gustavo Kresko",
    template: "%s | Gustavo Kresko"
  },
  description:
    "Analista de Cibersegurança focado em arquitetura, monitoramento e desempenho de ambientes de segurança.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
      nocache: true
    }
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background font-sans antialiased dark`}
      >
        <Suspense fallback={<AppLoading />}>
          <Providers>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
