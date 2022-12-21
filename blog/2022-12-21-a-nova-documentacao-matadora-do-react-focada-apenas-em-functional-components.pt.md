---
title: 'A nova documentação matadora do React focada apenas em functional components'
date: '2022-12-21 01:21:23'
description: Não é nenhum segredo que a antiga documentação do React é inútil na maioria das vezes porque não reflete mais a maneira moderna de desenvolver usando esse framework. Neste artigo, exploraremos sua nova documentação e discutiremos por que ela é incrível.
category: 'Development'
background: '#353b48'
featuredImage: '/assets/img/blog/react-new-beta-documentation.jpg'
---

Lançado junto com [versão 16.8 no início de 2019, React Hooks](https://pt-br.reactjs.org/blog/2019/02/06/react-v16.8.0.html) rapidamente se tornou popular e teve ampla adoção na comunidade front-end, pois, por meio desta versão, a complexidade de escrever com componentes baseados em classe foi substituída por functional components incluindo states e alguns outros ótimos recursos. E embora possamos encontrar boas explicações sobre esses novos recursos na documentação, a maioria dos exemplos continua usando classes.

Agora, mais de 3 anos após as mudanças revolucionárias, **React lançou uma versão BETA de sua documentação removendo classes de sua explicação e focando em maneiras modernas de desenvolvimento usando hooks com exemplos interativos.**

> “We aim to switch this site to be the main one once we reach content parity with the existing React documentation. The old React website will be archived at a subdomain so you’ll still be able to access it. Old content links will redirect to the archived subdomain, which will have a notice about outdated content.” - [BETA React documentation](https://beta.reactjs.org/)

> _Tradução: Nosso objetivo é mudar este site para ser o principal assim que atingirmos a paridade de conteúdo com a documentação existente do React. O site antigo do React será arquivado em um subdomínio para que você ainda possa acessá-lo. Links de conteúdo antigo redirecionarão para o subdomínio arquivado, que terá um aviso sobre conteúdo desatualizado._

_Obs.: É importante observar que, enquanto escrevo este artigo, o novo conteúdo está quase 100% pronto._

## O que você pode encontrar na nova documentação do React

Embora esta documentação do React BETA não seja muito extensa, em vez de abordar tópico por tópico, destacarei algumas de suas principais vantagens abaixo.

### Quick Start é realmente um começo muito rápido

**Para mim, isso é uma virada de jogo porque, ao contrário da versão antiga, agora podemos testar o código React por meio de exemplos de código interativos diretamente em sua documentação.** Isso não é incrível?

Uma introdução completa, muito simples, bem explicada e sem a necessidade de iniciar nenhum projeto para quem está começando a estudar agora.

[[media]]
|![Demonstração da amostra interativa da documentação do React](/assets/img/blog/react-docs-interaction.gif)

### Ótima explicação sobre a melhor maneira de usar React Effects

Pessoalmente, acho brilhante o trabalho **que eles fizeram para explicar os Effects.** É realmente algo que tenho estudado muito e com certeza vai me ajudar a desenvolver um código melhor usando o React.

Existem algumas páginas extensas demonstrando [como parar de pensar em Effects como hooks lifecycles](https://beta.reactjs.org/learn/lifecycle-of-reactive-effects), mas como [Effects como sincronizadores com sistemas externos](https://beta.reactjs.org/learn/synchronizing-with-effects). Essa confusão acontece porque estávamos acostumados a comparar functional components usando o hook useEffect com ciclos de vida de componentes baseados em classes, mas isso não faz mais sentido.

https://twitter.com/dan_abramov/status/1157250198659354624

**Outro conteúdo incrível é o tópico [“You Might Not Need an Effect”](https://beta.reactjs.org/learn/you-might-not-need-an-effect) onde podemos entender como remover Effects desnecessários** por meio de muitos casos de uso e exemplos de código interativos. Você pode encontrar um bom resumo deste tópico no vídeo abaixo.

https://www.youtube.com/watch?v=bGzanfKVFeU&t=742s&ab_channel=BeJS

### Dominando o gerenciamento de states

Eu sei que este título parece muito ousado, mas esta documentação do React BETA tem muito conteúdo sobre [como estruturar melhor os states e maneiras de evitar bugs relacionados a states redundantes ou duplicados](https://beta.reactjs.org/learn/managing-state) e muito mais.

> “Structuring state well can make a difference between a component that is pleasant to modify and debug, and one that is a constant source of bugs.” - React docs

> _Tradução: “Estruturar bem o estado pode fazer a diferença entre um componente que é agradável de modificar e depurar e um que é uma fonte constante de bugs.”_

Dê uma olhada na [seção Managing State](https://beta.reactjs.org/learn/managing-state) e também na [Referencing Values with Refs](https://beta.reactjs.org/learn/referencing-values-with-refs) para entender melhor o uso de states no React.

### Mais conteúdo que você pode encontrar na nova documentação do React

Alguns outros conteúdos que gostaria de destacar são:

- [React API Reference](https://beta.reactjs.org/apis/react) seção contendo tudo para consulta mais rápida com trechos de código.
- “[How declarative UI compares to imperative](https://beta.reactjs.org/learn/reacting-to-input-with-state#how-declarative-ui-compares-to-imperative)” tópico mostrando como escrever melhor os componentes declarativos do React.
- “[Render and Commit](https://beta.reactjs.org/learn/render-and-commit)” para entender as etapas do processo de renderização de componentes React.
- “[Queueing a Series of State Updates](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates)” explicará por que às vezes não funciona e como resolvê-lo.
- “[Reusing Logic with Custom Hooks](https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks)” para aprender como compartilhar lógica entre componentes.

## Conclusão

**Dos tópicos básicos aos avançados, esses documentos cobrem tudo o que você precisa para aprender a usar o melhor do React moderno para criar interfaces de usuário.** Se você é novo no mundo do React, esta documentação com certeza o ajudará muito através dos exemplos interativos. Para desenvolvedores React experientes, esta documentação reúne vários conceitos avançados importantes que certamente o ajudarão a criar componentes de interface do usuário melhores.

Deixe-me saber o que você pensa sobre a documentação BETA do React e qual tópico você acha mais importante para você.

Até a próxima! 😁
