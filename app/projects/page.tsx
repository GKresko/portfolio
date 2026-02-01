import { Metadata } from "next"

import { projects } from "@/lib/projects"
import { AlertTriangle } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectImageLightbox } from "@/components/project-image-lightbox"

export const metadata: Metadata = {
  title: "Projetos — Gustavo Kresko | Cibersegurança",
  description:
    "Projetos em cibersegurança, observabilidade e automação aplicados a ambientes críticos."
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Projetos</h1>
        <p className="text-muted-foreground">
          Estudos e entregas focadas em segurança, observabilidade e automação.
        </p>
      </header>

      <section className="mb-8">
        <div className="flex gap-3 rounded-xl border border-yellow-400/60 bg-yellow-400/10 p-5 shadow-[0_0_20px_rgba(250,204,21,0.12)]">
          <div className="mt-0.5 text-yellow-300">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-yellow-200">Aviso</p>
            <p className="text-sm text-yellow-100/90">
              Os cenários, logs, arquiteturas e indicadores apresentados nestes
              projetos são fictícios ou mascarados. Qualquer semelhança com
              ambientes reais é meramente ilustrativa. O objetivo é demonstrar
              competências técnicas, jamais expor informações corporativas.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>

              <ProjectImageLightbox images={project.images} />

              {project.links?.length ? (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <Button
                      key={link.url}
                      asChild
                      variant="outline"
                      size="sm"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
