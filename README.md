# Landing Page Template com Next.js e Tailwind CSS

Este projeto é um template de estrutura para a criação de landing pages utilizando [Next.js](https://nextjs.org/) e [Tailwind CSS](https://tailwindcss.com/). Ele oferece uma configuração inicial e uma estrutura de pastas para acelerar o desenvolvimento de landing pages modernas e responsivas.

- ** Repositório:** [https://github.com/joaovlara/landing-page-template-tailwindcss](https://github.com/joaovlara/landing-page-template-tailwindcss)

## Tecnologias Utilizadas

- **Next.js** 15.5.2 - Framework React para produção.
- **React** 19.1.0 - Biblioteca para construção da interface.
- **TypeScript** 5 - Superset do JavaScript com tipagem estática.
- **Tailwind CSS** 4 - Framework CSS para estilização rápida.

## Estrutura do Projeto 


```
template/
├── public/                 # Arquivos públicos estáticos
│   └── images/             # Imagens da aplicação
├── src/                    # Código fonte da aplicação
│   ├── app/                # Páginas da aplicação (App Router)
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Sections/       # Seções da landing page
│   │       ├── CTA.tsx
│   │       └── Hero.tsx
│   ├── data/               # Dados estáticos da aplicação
│   │   └── texts.ts        # Textos e configurações
│   └── types/              # Tipos e interfaces TypeScript
│       └── type.ts
├── next.config.ts          # Configuração do Next.js
├── tailwind.config.js      # Configuração do Tailwind CSS
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração do TypeScript
└── README.md               # Este arquivo
```

## Como Alterar os Textos da Landing Page

Para alterar os textos exibidos na landing page, edite o arquivo `src/data/texts.ts`. Este arquivo centraliza todo o conteúdo textual para facilitar a manutenção.

## Como Alterar as Imagens

As imagens estão localizadas em `public/images/`. Para substituir ou adicionar uma imagem:

1. Adicione o novo arquivo de imagem na pasta `public/images/`.
2. Utilize o caminho relativo a partir da pasta `public` para referenciar a imagem nos seus componentes. Por exemplo, uma imagem `logo.png` seria referenciada como `/images/logo.png`.

## Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 20 ou superior)
- npm, yarn ou pnpm

### Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento.
- `npm run build` - Gera a versão de produção da aplicação.
- `npm run start` - Inicia um servidor de produção.
- `npm run lint` - Executa o linter para verificar a qualidade do código.

## Desenvolvimento

- Desenvolvido por João Lara [Linkedin](https://www.linkedin.com/in/joaovitorlara/)
