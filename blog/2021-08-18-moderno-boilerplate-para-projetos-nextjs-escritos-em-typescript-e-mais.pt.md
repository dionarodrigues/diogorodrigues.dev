---
title: 'Moderno boilerplate para projetos Next.js escritos em TypeScript e mais'
date: '2021-08-18 01:21:23'
description: Next.js é um framework desenvolvido com React que tem mudado a forma como construímos aplicativos hoje em dia. Neste artigo, vou mostrar um boilerplate Next.js que criei contendo as principais funcionalidades de todos os projetos em que trabalho.
category: 'Development'
background: '#353b48'
featuredImage: '/assets/img/blog/modern-starter-for-nextjs-applications-written-in-typescript-and-more.jpg'
---

**Comecei a trabalhar com o React há alguns anos e ele ainda é minha tecnologia favorita para quase todos os sites que desenvolvo. [Meu blog é desenvolvido com Gatsby](https://www.diogorodrigues.dev/pt/blog/porque-eu-decidi-desenvolver-meu-blog-com-gatsbyjs) (outro framework fantástico baseado em React), mas desde que tive minha primeira experiência com [Next.js](https://nextjs.org/) percebi que esta ferramenta faria parte de meus projetos futuros. E por causa disso eu criei este [moderno boilerplate para projetos Next.js](https://github.com/diogorodrigues/nextjs-typescript-starter)**

## Por que Next.js?

- [Next.js](https://nextjs.org/) oferece flexibilidade para renderizar páginas no client ou no server, ou uma combinação de ambos.
- Podemos usar esse framework para criar aplicações SPA ou sites tradicionais que precisam ser indexados em mecanismos de pesquisa. Então, é perfeito para SEO.
- Next.js também gera arquivos estáticos, o que é perfeito para criar páginas (ou sites inteiros) que não precisam ser dinâmicos.
- Ao usá-lo, não precisamos nos preocupar com o desempenho porque este framework lida com a maior parte da complexidade para nós: minimização de javascript, code splitting, pre-fetching, caching e muito mais.


## Por que precisamos usar um boilerplate?

Apesar de todas as vantagens do Next.js, os boilerplates (ou starters) nos ajudam a economizar tempo definindo as configurações básicas para nossos projetos: suporte para PWA, typescript, storybook, testes, lint, código consistente...

**Então, com base nas necessidades dos projetos em que trabalhei, [eu criei um boilerplate que uso sempre que inicio novas aplicações web](https://github.com/diogorodrigues/nextjs-typescript-starter). E talvez também possa ser útil para você. 😁✨**

## Principais configurações do [meu Next.js boilerplate](https://github.com/diogorodrigues/nextjs-typescript-starter)

### Javascript com Typescript

[Typescript](https://www.typescriptlang.org/) foi criado pela Microsoft e tem crescido em popularidade, como você pode ver nesta [pesquisa de 2020](https://2020.stateofjs.com/en-US/technologies/javascript-flavors/).

> “The bigger the app you’re writing, the more useful typescript is.” - Anders Hejlsberg

_Tradução: "Quanto maior a aplicação que você está escrevendo, mais útil é o typescript."_

**É um superconjunto de javascript que fornece tipagen estática para nos ajudar a salvar nosso projeto de falhas ao detectar bugs, tornando nosso código mais autodocumentado e mais legível.** Como o typescript é compatível com navegadores diferentes, também oferece a capacidade de usar recursos JS modernos para qualquer navegador (uma vez que o código final será transpilado para vanilla javascript).

Você pode verificar mais benefícios do TS assistindo este [vídeo](https://www.youtube.com/watch?v=wYgSiFaYSSo&ab_channel=MicrosoftDeveloper).


### Código consistente usando EditorConfig, Prettier, ESLint e typescript-eslint

Especialmente quando estamos trabalhando em equipe, nosso código precisa ser consistente. **Portanto, todas essas ferramentas nos ajudam a evitar armadilhas comuns e melhorar a sintaxe dos nossos códigos**.

- **[EditorConfig](https://editorconfig.org/)**: isso nos ajuda a configurar e formatar o código por meio de estilo de indentação, tamanho de indentação, comprimento da linha e muito mais.
- **[Prettier](https://prettier.io/)**: como podemos ler em seu site, é um formatador de código opinativo. Ele cuida da formatação do nosso código no momento em que salvamos o arquivo: aplicar ponto-e-vírgulas, usar apenas aspas simples e outras coisas.
- **[ESLint](https://eslint.org/)**: totalmente customizável, e mais do que um formatador de código, ajuda os desenvolvedores a encontrar rapidamente erros de codificação que podem ser corrigidos automaticamente ou não. Por exemplo, a [ regra no-unused-vars](https://eslint.org/docs/rules/no-unused-vars) garante que não teremos muitas variáveis desnecessárias em nosso código.
- **[Typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)**: esta dependência permite que o ESLint suporte TypeScript.

### Estilos via Styled Components

**[Styled Components](https://styled-components.com/) é uma [biblioteca CSS-in-JS](https://www.diogorodrigues.dev/pt/blog/css-in-js-e-a-morte-do-css-tradicional#o-que-e-css-in-js) que permite aos desenvolvedores escrever CSS para cada componente React diretamente (o que significa que não precisamos nos preocupar com questões relacionadas às classes e especificidade do CSS).**

Eu sou um grande fã desta biblioteca e abaixo estão alguns benefícios ao usar Styled Components em nossos projetos React:

- **Escopo definido**: estilos são criados para componentes individuais em vez de em um nível global, evitando vários problemas que precisamos para lidar com a maneira tradicional de escrever CSS.
- **Vendor prefixing automático**: Styled Components adiciona prefixos corretos quando necessário para garantir que os estilos sejam compatíveis com navegadores diferentes.
- **Eliminação do CSS não utilizado**: CSS não utilizado são removidos do código automaticamente durante o build.
- **Temas**: Styled Components fornece uma maneira de passar um theme object para todos os componentes contendo configurações gerais - como cores, fontes, espaçamentos...
- **Estilos dinâmicos**: podemos alterar os estilos de acordo com as propriedades do componente, o que fornece oportunidades poderosas para criar componentes personalizáveis e reutilizáveis.

### Documentação de componentes de IU com Storybook

**Em poucas palavras, [Storybook](https://storybook.js.org/) é uma ferramenta de código aberto usada para mostrar e interagir com componentes de forma independente em um ambiente de desenvolvimento isolado. Portanto, usando essa ferramenta poderosa, podemos nos concentrar em um componente por vez, desenvolvendo toda a IU antes de pensar em toda lógica de negócios e em interfaces complexas.**

Funcionando como uma espécie de playground e documentação, através do [Storybook](https://storybook.js.org/) podemos ver uma lista de todos os componentes e também testar todos os seus estados. Essa ferramenta também melhora a capacidade de reutilização e teste do código.

![Storybook interface](/assets/img/blog/storybook.png)

**Principais vantagens do Storybook:**

- **Exibe todos os componentes existentes**: evita que os desenvolvedores criem acidentalmente componentes redundantes - um problema comum em grandes projetos não documentados.
- **Funciona como documentação**: podemos usar o Storybook para garantir que o guia de estilo (cor, fontes, espaçamentos...) esteja sendo seguido e também mostrar todos os estados dos componentes - o que melhora a comunicação entre desenvolvedores e designers.
- **Oferece uma maneira fácil de realizar testes**: às vezes, um componente pode ser renderizado de maneira diferente, dependendo de suas propriedades. Por exemplo, um botão pode ser renderizado como largura 100% ou não; como pequeno, médio ou grande; como laranja ou azul... Assim, podemos ver e testar facilmente todas essas variações no Storybook.
- **Ajuda a melhorar a qualidade do código**: como vamos criar componentes de forma isolada, tendemos a nos concentrar em sua qualidade e reutilização, o que é ótimo para o projeto e a equipe.

Eu sugiro fortemente que você dê uma olhada mais de perto na [Documentação do Storybook](https://storybook.js.org/docs/react/get-started/introduction) para ler mais sobre esta ferramenta incrível.

### Testes via Jest e React Testing Library (RTL)

Códigos complexos não são fáceis de debugar e às vezes levamos muito tempo para localizar problemas. Portanto, **o teste pode garantir que a aplicação funcionará conforme o esperado.**

Existem diferentes tipos de testes e maneiras de implementá-los. Vou me concentrar nos testes unitários aqui e também recomendo que você crie testes seguindo o [test-driven development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development) - isso significa que o teste é criado antes do próprio código.

**Entre as várias ferramentas para implementar os testes, gosto de usar as duas que aparecem no topo desta [pesquisa denominada State of JS 2020](https://2020.stateofjs.com/en-US/technologies/testing/):**

- **[Jest](https://jestjs.io/)**: é uma das ferramentas mais populares e satisfatórias, pois possui diversas funcionalidades já integradas, tais como: mock, snapshot, informação de cobertura de código, entre outros. Possui ótima integração com o ecossistema React, pois também é mantido pela equipe do Facebook.
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**: é um grupo de funções utilitárias poderosas para Jest que tornam nossa vida como desenvolvedores mais fácil. Usando RTL, podemos selecionar os componentes pelo atributo aria-label, por exemplo - o que pode nos encorajar a escrever melhores componentes por meio de abordagens de acessibilidade.

Para saber mais sobre as ferramentas Jest e React Testing Library, recomendo este artigo: [Automatizando testes de UI com Jest e React Testing Library](https://www.diogorodrigues.dev/pt/blog/automatizando-testes-de-ui-com-jest-e-react-testing-library).

### Suporte para PWA usando [next-pwa](https://www.npmjs.com/package/next-pwa)

**[Progressive Web App (PWA)](https://web.dev/progressive-web-apps/) é uma coleção de APIs modernas que permitem o desenvolvimento de aplicativos web usando aprimoramento progressivo em navegadores modernos. Usando essa abordagem, o site pode ser instalado e funcionar como um aplicativo móvel nativo também**.

Alguns benefícios do PWA:

- **Funcionamento semelhante a um aplicativo:** adicionar à tela inicial, modo offline, notificações push...
- **Não requer loja:** ao contrário de apps nativos, os PWAs não exigem que você vá a um lugar como o Google Play ou App Store para encontrar e instalar o aplicativo.
- **Muito mais barato de desenvolver do que aplicativos nativos:** as empresas gastam muito menos para desenvolver, manter, implantar e promover PWAs.

Nem todos os sites precisam ser PWA, então você pode facilmente desabilitar essa funcionalidade no boilerplate.

### Evitando git commit bugado com Husky and Lint-staged

**Para manter a boa qualidade do nosso código, podemos usar essas duas dependências para executar alguns comandos toda vez que fizermos um commit. Ao fazer isso, ele irá lintar os arquivos que serão submetidos ao commit (através do Prettier e ESLint) e, se houver erros, precisaremos corrigir o código e tentar fazer um novo commit.**

Você pode verificar as configurações necessárias em `./package.json`.

- **[Husk](https://github.com/typicode/husky):** com base no [githooks](https://git-scm.com/docs/githooks), esta dependência nos permite rodar alguns eventos antes de um commit (pre-commit) e depois de um commit (post-commit). Este projeto está usando-o para executar o Lint-staged antes de qualquer commit.
- **[Lint-staged](https://github.com/okonet/lint-staged):** esta famosa ferramenta executará linters em arquivos em stage com base na configuração do Prettier e ESLint.

### Gerador de código consistente com Plop

> “[Plop](https://plopjs.com/) is a little tool that saves you time and helps your team build new files with consistency.” - [Plop tool](https://plopjs.com/)

_Tradução: "[Plop](https://plopjs.com/) é uma pequena ferramenta que economiza tempo e ajuda sua equipe a criar novos arquivos com consistência."_

Assim, ao utilizar esta ferramenta, através de alguns templates, pode-se executar um comando para criar todos os arquivos necessários para novos componentes seguindo um padrão, o que torna nosso código consistente e nos economiza algum tempo.

Se você executar `yarn generate button` na linha de comando, um novo diretório chamado ‘Button’ será criado em ‘src/componentes’ contendo os arquivos necessários e seus códigos básicos:
- index.tsx
- stories.tsx
- styles.ts
- test.tsx

Verifique toda a configuração do Plop em `./generators`.

## Conclusão

**Criar este [boilerplate moderno para Next.js](https://github.com/diogorodrigues/nextjs-typescript-starter) me fez aprender muito e tentei garantir que todas as configurações e ferramentas importantes que gosto de usar em meus projetos estão aqui. Espero que este starter seja útil para você também. Depois me diga se gostou, se pretende usar e se tem alguma sugestão.**

Até a próxima. 😁
