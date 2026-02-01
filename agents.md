# Diretrizes do Repositório

## Idioma
- O conteúdo do blog deve ser escrito em Português do Brasil (pt-BR).

## Estrutura do Projeto e Organização dos Módulos
- `app/` contém os manipuladores de rotas do Next.js, layouts e componentes de servidor que estruturam cada página; atualize as rotas aqui ao adicionar novas seções (ex.: `app/resume/page.tsx`).
- `components/`, `hooks/` e `lib/` armazenam componentes de UI compartilhados, hooks reutilizáveis (helpers de tema/animação) e utilitários de dados; mantenha os arquivos nomeados de acordo com sua responsabilidade (ex.: `components/ui/button.tsx`).
- `content/` contém conteúdos em markdown/MDX consumidos pelo `next-mdx-remote` para as seções de blog e currículo; mantenha os nomes dos arquivos alinhados aos slugs (ex.: `content/blog/async-systems.mdx`).
- `public/` armazena ativos estáticos referenciados por caminhos absolutos (como `/me.jpeg` em `app/page.tsx`).
- `scripts/` guarda scripts auxiliares de build, como `generate-sitemap.js`; eles são executados por hooks do npm.

## Comandos de Build, Teste e Desenvolvimento
- `npm run dev` – inicia o servidor de desenvolvimento do Next.js em `localhost:3000` com hot reload.
- `npm run build` – compila a aplicação para produção e gera a saída em `.next`. Executa também o `prebuild`, regenerando o `public/sitemap.xml` via `scripts/generate-sitemap.js`.
- `npm start` – serve o build compilado (use após `npm run build`).
- `npm run lint` – executa o ESLint configurado em `eslint.config.mjs` para aplicar as regras atuais de lint.

## Estilo de Código e Convenções de Nomenclatura
- Siga a convenção do Next.js/TypeScript com indentação de 2 espaços e exports nomeados para componentes reutilizáveis.
- Prefira PascalCase descritivo para componentes React (`TextGenerateEffect`) e camelCase para funções/hooks (`useScrollReveal`).
- Mantenha tokens de UI compartilhados em `components/ui/` e utilize imports absolutos com o alias `@/` definido em `tsconfig.json`.
- Deixe que o ESLint (config do Next.js + TypeScript) e as classes utilitárias do Tailwind ditem a formatação; execute `npm run lint` antes de commits.

## Diretrizes de Testes
- O repositório atualmente não possui testes automatizados; as verificações de regressão são feitas manualmente no navegador.
- Ao adicionar testes, centralize-os próximos aos módulos que cobrem e adote Jest/React Testing Library com arquivos nomeados `*.test.tsx` ou `*.spec.tsx`.

## Diretrizes de Commit e Pull Request
- Siga o estilo de commits convencionais existente (ex.: `feat:`, `chore:`) observado no histórico recente para manter compatibilidade com ferramentas de changelog.
- PRs devem incluir uma descrição clara, mencionar as áreas afetadas (rotas, conteúdo ou estilos) e anexar screenshots apenas quando houver mudanças visuais.
- Vincule issues relacionadas na descrição e destaque quaisquer passos de teste manual na seção `Testing` para facilitar a verificação.

## Dicas de Segurança e Configuração
- Nenhum segredo deve estar nos arquivos do repositório; armazene configurações sensíveis via variáveis de ambiente documentadas em `next.config.ts` ou `scripts/generate-sitemap.js`, se necessário.
- Mantenha as dependências atualizadas com verificações via `npm audit` e atualize o `package-lock.json` ao realizar upgrades.
