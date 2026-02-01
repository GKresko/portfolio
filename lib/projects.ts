export type ProjectLink = {
  label: string
  url: string
}

export type ProjectImage = {
  src: string
  alt: string
  fit?: "cover" | "contain"
  aspect?: "video" | "wide" | "ultrawide"
}

export type Project = {
  title: string
  description: string
  images: ProjectImage[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    title: "Monitoramento Inteligente de Transações TEDs com SIEM",
    description:
      "Solução de monitoramento e detecção de anomalias em transações TED, com alertas orientados ao risco do negócio. A arquitetura integra banco de dados, n8n, SIEM, OpenSearch e Grafana para transformar dados transacionais em eventos de segurança, possibilitando visibilidade em tempo real, criação de regras personalizadas e resposta eficiente a eventos críticos.",
    images: [
      {
        src: "/projects/Projeto1.png",
        alt: "Dashboard de observabilidade",
        fit: "contain",
        aspect: "ultrawide"
      }
    ]
  },
  {
    title: "Arquitetura de Observabilidade e Detecção para Operação SOC",
    description:
      "As telas apresentadas representam apenas a camada final de visualização. Por trás delas existe uma engenharia completa de segurança e monitoramento, baseada em SIEM altamente customizável (Wazuh), com criação e ajuste fino de decoders, regras, correlações e ingestão de múltiplas fontes de dados — Active Directory, servidores, firewall, VPN, DLP, OCS, antivírus e bancos de dados. A arquitetura foi pensada para operação em modelo SOC, priorizando alertas visuais claros e acionáveis, como acessos fora de horário via SSH e VPN, identificação de ataques DDoS e outros comportamentos anômalos, permitindo análise rápida, priorização por risco e resposta eficiente a incidentes.",
    images: [
      {
        src: "/projects/Projeto2-1.png",
        alt: "Conexões via SSH",
        fit: "contain",
        aspect: "ultrawide"
      },
      {
        src: "/projects/Projeto2-2.png",
        alt: "Monitoramento Active Directory",
        fit: "contain",
        aspect: "ultrawide"
      },
      {
        src: "/projects/Projeto2-3.png",
        alt: "Monitoramento Fortigate",
        fit: "contain",
        aspect: "ultrawide"
      },
      {
        src: "/projects/Projeto2-4.png",
        alt: "Monitoramento Conexões VPN",
        fit: "contain",
        aspect: "ultrawide"
      },
      {
        src: "/projects/Projeto2-5.png",
        alt: "Ativos - OCS + Grafana",
        fit: "contain",
        aspect: "ultrawide"
      },
      {
        src: "/projects/Projeto2-6.png",
        alt: "DLP + SIEM + Grafana",
        fit: "contain",
        aspect: "ultrawide"
      }
    ]
  },
  {
    title: "Projeto de Certificação TISAX e Governança em Segurança da Informação",
    description:
      "Projeto de implementação e condução da certificação TISAX, abrangendo o mapeamento e aplicação dos principais controles de segurança da informação, incluindo gestão de acessos, proteção de informações sensíveis, segurança organizacional, classificação da informação, segurança em fornecedores, continuidade de negócios e gestão de riscos. O trabalho envolveu a criação e formalização de dezenas de políticas, procedimentos e fluxogramas operacionais, alinhados às diretrizes da TISAX e boas práticas de mercado. Além da implementação técnica e documental, foi realizada a preparação do ambiente para auditoria, coleta e organização de evidências, suporte às áreas envolvidas e condução da auditoria final, garantindo aderência aos requisitos e rastreabilidade dos controles implementados.",
    images: [
      {
        src: "/projects/Projeto3.png",
        alt: "Certificação",
        fit: "contain",
        aspect: "wide"
      }
    ]
  },
  {
    title: "Automação de Compliance e Auditoria com IA Integrada",
    description:
      "Projeto pessoal de automação utilizando n8n para integrar inteligência artificial ao suporte de atividades de compliance e auditoria em segurança da informação. O workflow realiza a extração automática de documentos — como políticas, normas e procedimentos — armazenados em pastas do OneDrive, converte o conteúdo para texto estruturado e armazena os dados em um banco de dados vetorial. Essa abordagem permite consultas eficientes e contextualizadas, reduzindo o consumo de tokens e otimizando o uso do modelo de IA. Um agente de IA conectado ao banco vetorial e ao modelo de linguagem é responsável por responder perguntas relacionadas a requisitos de compliance, auditorias e controles, buscando evidências diretamente na base documental. O projeto demonstra a aplicação prática de IA para apoio à governança, rastreabilidade e análise de documentação de segurança.",
    images: [
      {
        src: "/projects/Projeto4.png",
        alt: "Workflow n8n",
        fit: "contain",
        aspect: "ultrawide"
      },
      {
        src: "/projects/Projeto4-2.png",
        alt: "Exemplo de consulta",
        fit: "contain",
        aspect: "ultrawide"
      }
    ]
  },
  {
    title: "Automação de Análise de Phishing com Enriquecimento de URLs",
    description:
      "Projeto pessoal de automação voltado à resposta a incidentes de phishing, desenvolvido em n8n para orquestrar o tratamento de e-mails reportados por usuários. O workflow realiza a extração automática de URLs contidas nas mensagens, submete os endereços a serviços de inteligência de ameaças para análise de reputação e detecção de comportamento malicioso, e avalia os resultados de forma automatizada. Com base no veredito da análise, o sistema envia ao usuário um feedback personalizado por e-mail, informando se o link é malicioso ou legítimo e orientando sobre as ações adequadas. A solução reduz o tempo de resposta, padroniza a comunicação com usuários finais e apoia a operação de segurança na triagem e tratamento eficiente de incidentes de phishing.",
    images: [
      {
        src: "/projects/Projeto5.png",
        alt: "Workflow n8n",
        fit: "contain",
        aspect: "wide"
      },
      {
        src: "/projects/Projeto5-2.png",
        alt: "Feedback para usuário - Phishing Detectado",
        fit: "contain",
        aspect: "wide"
      },
      {
        src: "/projects/Projeto5-3.png",
        alt: "Feedback para usuário - Phishing Não Detectado",
        fit: "contain",
        aspect: "wide"
      }
    ]
  }
]
