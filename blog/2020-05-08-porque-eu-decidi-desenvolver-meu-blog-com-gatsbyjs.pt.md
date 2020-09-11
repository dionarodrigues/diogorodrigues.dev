---
title: 'Porque eu decidi desenvolver o meu site com Gatsby'
date: '2020-05-08 01:21:23'
description: Recentemente eu desenvolvi esse site multilíngue utilizando Gatsby com Netlify CMS e neste artigo vou te contar o porquê eu decidi usar essa tecnologia.
category: Development
background: '#353b48'
featuredImage: '/assets/img/blog/why-i-decided-to-develop-my-blog-with-gatsbyjs.jpg'
---

Atualmente existem muitas opções para criar um blog ou qualquer site utilizando CMS, como o Wordpress, por exemplo - sim, o WP continua sendo uma famosa ferramenta (aproximadamente [35% de todos os sites atualmente na web foram criados com WordPress](https://w3techs.com/technologies/details/cm-wordpress))

Mas eu estava pensando em criar algo mais fácil de manter, seguro contra hackers e moderno em termos de tecnologia, além de também querer aprender algo novo. Então **eu conheci Gatsby e me apaixonei por esse framework desde a primeira vez**. 💖

![Funny glasses - simpsons](https://media.giphy.com/media/YABz3fRfUFuec/giphy.gif)

## O incrível mundo dos geradores de sites estáticos

Me lembro de quando criei uma versão estática do meu site pessoal anos atrás, e as estruturas, bibliotecas e ferramentas mais extravagantes que usei foram Gulp como task runner, Atomic Design com CSS preprocessors (gosto bastante do Stylus) e módulos Javascript com IIFEs e muito jQuery.

Atualmente, existem muitas ferramentas modernas para nos ajudar a desenvoler sites estáticos, como GatsbyJS e NextJS, por exemplo, ambos feitos com React. Existem outros geradores populares como Jekyll e Hugo também.

Os geradores de sites estáticos nos entregam um conjunto de arquivos que não dependem de banco de dados. E, por causa disso, esse tipo de solução pode ser indexada muito mais rápida que as versões dinâmicas, além de ser mais segura.

## Por que escolhi o Gatsby para criar meu site

Nas [palavras deles](https://www.gatsbyjs.org/), _“Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps”_.

Uma vez que estou muito envolvido com o React e seu ecossistema, e como o Gatsby está no topo do React, obtendo todos os benefícios dessa biblioteca - como desempenho, componentes e JSX -, fiquei muito animado em experimentar essa nova ferramenta.

Também adorei o fato do Gatsby usar GraphQL e a possibilidade de olhar mais de perto essa nova maneira de trabalhar com dados.

Mais benefícios ao usar o Gatsby:

- **Performance**: seguindo o [padrão de arquitetura PRPL do Google](https://www.gatsbyjs.org/docs/prpl-pattern/), os sites do Gatsby são incrivelmente rápidos.
- **Markdown**: a ferramenta nos permite escrever em Markdown (uma abstração da linguagem HTML) e usar esses arquivos para gerar as páginas HTML através do GraphQL.
- **Progressive Web App (PWA)**: como o Gatsby gera sites estáticos, é fácil fornecer uma solução offline que pode ser instalada como se fosse um app nativo.
- **Vários Plugins e Netlify CMS**: o Gatsby também vem com um sistema de plugins que facilita a adição de funcionalidades no projeto, como o [Netlify CMS](https://www.netlifycms.org/) por exemplo, que gerencia todos os arquivos e imagens através do repositório git do projeto (Github, Bitbucket...).

Eu criei um [Starter para o Gatsby chamado Iceberg](https://www.gatsbyjs.org/starters/diogorodrigues/iceberg-gatsby-multilang/) com base nos recursos desse meu site. Sinta-se livre para iniciar seu projeto com este starter. 👌

![Iceberg Gatsby Starter](https://dev-to-uploads.s3.amazonaws.com/i/yaue80223l6mllliy0nm.png)

## CSS-in-JS with styled components

Outro grande benefício do uso do Gatsby em comparação com outras ferramentas que não são feitas com React é o incrível poder do CSS-in-JS usando [Styled Components](https://www.styled-components.com/).

O CSS é global por natureza, mas essa nova maneira de estilizar os componentes do React nos fornece um grande poder sobre os estilos, ajudando-nos a limitar o impacto do CSS em nosso projeto através dos estilos com escopo definido.

Além disso, o Styled Components nos permite criar componentes extremamente fáceis de se reutilizar, além de ser extremamente dinâmico podendo ser utilizado em conjunto com as propriedades dos componentes React. Isso não é incrível?

## Conclusão

Cada vez mais eu venho usando React em meus projetos e achei o Gatsby incrível.

Há uma comunidade crescente em torno dos componentes React, Gatsby, GraphQL e Styled Components. Portanto, usar essas tecnologias para criar este novo site foi uma ótima ideia e estou aprendendo muito com esse desenvolvimento.

Espero que este artigo leve alguns de vocês a começarem a brincar com o Gatsby também. Você pode usar [meu starter](https://www.gatsbyjs.org/starters/diogorodrigues/iceberg-gatsby-multilang/) ou [qualquer outra fantástica solução](https://www.gatsbyjs.org/starters?v=2) para começar o seu próximo projeto utilizando Gatsby. #ficaAdica 😎



