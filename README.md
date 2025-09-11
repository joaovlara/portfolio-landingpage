# Landing Page Template com Next.js e Tailwind CSS

Este projeto é um template de estrutura para a criação de landing pages utilizando [Next.js](https://nextjs.org/) e [Tailwind CSS](https://tailwindcss.com/). Ele oferece uma configuração inicial e uma estrutura de pastas para acelerar o desenvolvimento de landing pages modernas e responsivas.

## Estrutura do Projeto

A estrutura de pastas está organizada da seguinte forma:

src/
├── app/ # Contém as páginas da aplicação
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/ # Componentes reutilizáveis
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Sections/ # Seções da landing page
│       ├── CTA.tsx
│       └── Hero.tsx
├── data/ # Dados estáticos, como textos
│   └── texts.ts
└── types/ # Tipos e interfaces TypeScript
    └── type.ts


## Começando

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página principal modificando o arquivo `src/app/page.tsx`. A página será atualizada automaticamente conforme você edita o arquivo.

## Como Utilizar

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-repositorio>
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
4.  **Comece a desenvolver:**
    - Modifique o conteúdo em `src/data/texts.ts`.
    - Altere os componentes em `src/components/`.
    - Adicione novas seções em `src/components/Sections/`.
    - Estilize com Tailwind CSS diretamente nos seus arquivos `.tsx`.
