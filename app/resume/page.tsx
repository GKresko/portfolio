import Image from "next/image"
import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Code2, Database, Layers, LucideProps, Server } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export const metadata: Metadata = {
  title: "Resumo — Gustavo Kresko | Analista de Cibersegurança",
  description:
    "Analista de Cibersegurança com atuação em SOC e SIEM, focado em monitoramento, detecção e resposta a incidentes. Experiência em análise de logs, investigação de eventos de segurança, hardening de ambientes e governança de segurança da informação, com base em frameworks como ISO/IEC 27001 e práticas de GRC."
}

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl py-10 text-sm leading-relaxed antialiased relative">
      <TracingBeam className="px-6">
        <div className="pl-6">
          {/* Header */}
          <header className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-md">
              <Image
                src="/me.jpeg"
                alt="Gustavo Kresko"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl font-semibold tracking-tight">
                Gustavo Kresko
              </h1>
              <p className="text-muted-foreground">
                Analista de Cibersegurança
              </p>
            </div>
          </header>

          <Separator className="my-8" />

          {/* Summary */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Summary</h2>
            <p className="text-muted-foreground">
              Analista de Cibersegurança, com foco em detecção de ameaças, automação de segurança e arquitetura corporativa. Experiência em governança, risco e conformidade (GRC), certificações ISO 27001 (Lead Implementer) e condução de certificação TISAX, incluindo auditorias regulatórias. Forte atuação em engenharia de cibersegurança, SOC, monitoramento e resposta a incidentes, construção de pipelines de SIEM, automação com n8n e integração de segurança em aplicações (SAST/DAST), além da administração de controles de segurança em ambientes corporativos e financeiros.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Experience */}
          <section className="space-y-6">
            <h2 className="text-lg font-semibold">Experience</h2>

            {/* Cybersecurity */}
            <Card>
              <CardContent className="space-y-4 px-6">
                <div>
                  <p className="font-medium">
                    Analista de Cibersegurança — Operações de Segurança e Governança
                  </p>
                  <p className="text-muted-foreground">
                    Banco Finaxis · Ago 2025 — Present
                  </p>
                </div>

              <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                    <li>
                      Atuação na criação e operação de um SOC interno, incluindo engenharia de SIEM, pipelines de monitoramento e correlação de eventos de segurança.
                    </li>
                    <li>
                      Desenvolvimento de automações de cibersegurança com n8n para resposta a incidentes, integração de ferramentas e otimização de processos operacionais.
                    </li>
                    <li>
                      Administração de controles de segurança corporativos, incluindo IAM, PAM, DLP, antivírus, firewall Fortigate e gestão de vulnerabilidades (Nessus).
                    </li>
                    <li>
                      Implementação de práticas de segurança em aplicações (SAST/DAST) e integração de segurança ao ciclo de desenvolvimento (DevSecOps).
                    </li>
                    <li>
                      Condução de treinamentos e campanhas de conscientização em segurança da informação para colaboradores.
                    </li>
                    <li>
                      Atendimento a auditorias regulatórias (Banco Central), evidenciando controles técnicos e organizacionais.
                    </li>
                    <li>
                      Participação no desenho e evolução da arquitetura de segurança corporativa em ambientes financeiros críticos.
                    </li>
                  </ul>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="blue">SIEM - Wazuh</Badge>
                      <Badge variant="blue">SOC</Badge>
                      <Badge variant="blue">Fortigate</Badge>
                      <Badge variant="blue">IAM - Horacius</Badge>
                      <Badge variant="blue">PAM - SenhaSegura</Badge>
                      <Badge variant="blue">DLP</Badge>
                      <Badge variant="blue">Nessus</Badge>
                      <Badge variant="blue">n8n</Badge>
                      <Badge variant="blue">SAST</Badge>
                      <Badge variant="blue">DAST</Badge>
                    </div>

              </CardContent>
            </Card>

            {/* GRC */}
            <Card>
              <CardContent className="space-y-4 px-6">
                <div>
                  <p className="font-medium">
                    Analista de Segurança da Informação (GRC) — ISO 27001 & TISAX
                  </p>
                  <p className="text-muted-foreground">
                    WHB Automotive S.A · Nov 2022 — Ago 2025
                  </p>
                </div>

                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                  <li>
                    Implementação e governança de controles de segurança baseados na ISO/IEC 27001, incluindo políticas, procedimentos, gestão de riscos e framework de controles organizacionais e técnicos.
                  </li>
                  <li>
                    Liderança do processo de certificação TISAX, incluindo preparação organizacional, levantamento de evidências, coordenação de auditorias e aprovação final da empresa.
                  </li>
                  <li>
                    Estruturação do programa de Governança, Risco e Conformidade (GRC), com mapeamento de controles, auditorias internas, gestão de não conformidades e acompanhamento de planos de ação.
                  </li>
                  <li>
                    Criação e implementação de processos corporativos de Gestão de Mudanças, Gestão de Incidentes de Segurança (RISI), Continuidade de Negócios e Plano de Contingência / DRP.
                  </li>
                  <li>
                    Desenvolvimento de cultura organizacional de segurança da informação, com definição de procedimentos operacionais, fluxos de aprovação e conscientização das áreas de negócio.
                  </li>
                  <li>
                    Suporte a auditorias internas e externas em ambientes industriais e corporativos, garantindo aderência regulatória e maturidade dos controles de segurança.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="blue">GRC</Badge>
                  <Badge variant="blue">ISO 27001</Badge>
                  <Badge variant="blue">TISAX</Badge>
                  <Badge variant="blue">Gestão de Riscos</Badge>
                  <Badge variant="blue">Auditoria</Badge>
                  <Badge variant="blue">Continuidade de Negócios</Badge>
                  <Badge variant="blue">Gestão de Incidentes</Badge>
                  <Badge variant="blue">Gestão de Mudanças</Badge>
                  <Badge variant="blue">Políticas de Segurança</Badge>
                  <Badge variant="blue">Compliance</Badge>
                </div>
              </CardContent>
            </Card>

            {/* WHB */}
            <Card>
              <CardContent className="space-y-4 px-6">
                <div>
                  <p className="font-medium">Analista de Infraestrutura de TI</p>
                  <p className="text-muted-foreground">
                    WHB Automotive S.A · Mar 2022 — Nov 2022
                  </p>
                </div>

              <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                <li>
                  Administração de Active Directory, incluindo usuários, grupos, GPOs e políticas de segurança.
                </li>
                <li>
                  Implementação de monitoramento com Zabbix e Grafana para servidores, rede e infraestrutura crítica.
                </li>
                <li>
                  Administração de infraestrutura corporativa, incluindo servidores, switches, storage e data center.
                </li>
                <li>
                  Instalação física de infraestrutura, incluindo cabeamento estruturado, racks, crimpagem e organização de data center.
                </li>
                <li>
                  Suporte e manutenção de ambientes on-premise industriais e corporativos.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                <Badge variant="blue">Active Directory</Badge>
                <Badge variant="blue">GPO</Badge>
                <Badge variant="blue">Zabbix</Badge>
                <Badge variant="blue">Grafana</Badge>
                <Badge variant="blue">Windows Server</Badge>
                <Badge variant="blue">Redes</Badge>
                <Badge variant="blue">Data Center</Badge>
                <Badge variant="blue">Cabeamento Estruturado</Badge>
              </div>

              </CardContent>
            </Card>
          </section>

          <Separator className="my-8" />

          {/* Skills */}
          <section className="space-y-6">
            <h2 className="text-lg font-semibold">Skills</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              
              {/* SOC & SIEM */}
              <Card>
                <CardContent className="space-y-4 px-6">
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="px-2 py-2 border rounded border-green-400 text-green-400 dark:text-green-300">
                      <Server className="size-4" />
                    </div>
                    <h3 className="text-sm font-semibold">SOC & SIEM</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="blue">SIEM</Badge>
                    <Badge variant="blue">SOC</Badge>
                    <Badge variant="blue">Wazuh</Badge>
                    <Badge variant="blue">MITRE ATT&CK</Badge>
                    <Badge variant="blue">Resposta a Incidentes</Badge>
                    <Badge variant="blue">Correlação de Eventos</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Automação & DevSecOps */}
              <Card>
                <CardContent className="space-y-4 px-6">
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="px-2 py-2 border rounded border-green-400 text-green-400 dark:text-green-300">
                      <Layers className="size-4" />
                    </div>
                    <h3 className="text-sm font-semibold">Automação & DevSecOps</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="blue">n8n</Badge>
                    <Badge variant="blue">BurpSuite</Badge>
                    <Badge variant="blue">OWASP ZAP</Badge>
                    <Badge variant="blue">SonarQube</Badge>
                    <Badge variant="blue">Segurança em APIs</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Infra & Network Security */}
              <Card>
                <CardContent className="space-y-4 px-6">
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="px-2 py-2 border rounded border-green-400 text-green-400 dark:text-green-300">
                      <Cloud className="size-4" />
                    </div>
                    <h3 className="text-sm font-semibold">Infraestrutura & Rede</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="blue">Fortigate</Badge>
                    <Badge variant="blue">Firewall</Badge>
                    <Badge variant="blue">VPN</Badge>
                    <Badge variant="blue">Zabbix</Badge>
                    <Badge variant="blue">Windows Server</Badge>
                    <Badge variant="blue">Linux</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* IAM & AD */}
              <Card>
                <CardContent className="space-y-4 px-6">
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="px-2 py-2 border rounded border-green-400 text-green-400 dark:text-green-300">
                      <Database className="size-4" />
                    </div>
                    <h3 className="text-sm font-semibold">Identidade & Acesso</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="blue">IAM</Badge>
                    <Badge variant="blue">PAM</Badge>
                    <Badge variant="blue">Active Directory</Badge>
                    <Badge variant="blue">GPO</Badge>
                    <Badge variant="blue">RBAC</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* GRC */}
              <Card className="sm:col-span-2">
                <CardContent className="space-y-4 px-6">
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="px-2 py-2 border rounded border-green-400 text-green-400 dark:text-green-300">
                      <Layers className="size-4" />
                    </div>
                    <h3 className="text-sm font-semibold">GRC & Compliance</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="blue">ISO 27001</Badge>
                    <Badge variant="blue">Lead Implementer</Badge>
                    <Badge variant="blue">TISAX</Badge>
                    <Badge variant="blue">Gestão de Riscos</Badge>
                    <Badge variant="blue">Auditorias</Badge>
                    <Badge variant="blue">BCB</Badge>
                    <Badge variant="blue">Continuidade de Negócios</Badge>
                    <Badge variant="blue">DRP</Badge>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>


          <Separator className="my-8" />

          {/* Educations */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Educação e Certificações</h2>

            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">
                  Graduação — Engenharia de Software
                </span>{" "}
                · Universidade Positivo · Jan 2023 — Dez 2026
              </li>
            <li>
              <span className="font-medium text-foreground">
                Graduação — Engenharia de Computação (Transferência para Engenharia de Software)
              </span>{" "}
              · Universidade Positivo · Jan 2021 — Dez 2022
            </li>

            <li>
              <span className="font-medium text-foreground">
                ISO/IEC 27001:2022 Lead Implementer — ISMS
              </span>{" "}
              · Certificação em Segurança da Informação - Acreditação Internacional pela Exemplar Global
            </li>

            </ul>
          </section>

          <Separator className="my-8" />

          {/* Contact */}
          <section className="space-y-2">
            <h2 className="text-lg font-semibold">Contato</h2>

            <p className="">
              Email:{" "}
              <a
                href="mailto:gustavokresko0510@gmail.com"
                className="underline underline-offset-4"
              >
                gustavokresko0510@gmail.com
              </a>
            </p>

            <p className="">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/gustavo-kresko-364454264/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                linkedin.com/in/gustavo-kresko
              </a>
            </p>
          </section>
        </div>
      </TracingBeam>
    </main>
  )
}
