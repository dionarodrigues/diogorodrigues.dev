---
title: 'Porque você deveria use Typescript agora'
date: '2022-04-21 01:21:23'
description: Acabei de terminar um curso rápido para atualizar meus conhecimentos sobre os principais recursos do Typescript e quero compartilhar com vocês porque todos os desenvolvedores de javascript devem usar essa linguagem o mais rápido possível. E espero deixá-los tão fascinados por TS quanto eu sou.**
category: 'Development'
background: '#353b48'
featuredImage: '/assets/img/blog/why-you-should-learn-typescript.jpg'
---

**Meu primeiro contato com [Typescript](https://www.typescriptlang.org/) foi em 2014 quando os desenvolvedores do projeto de código aberto chamado [Definitely Typed](https://github.com/definitelytyped/definitelytyped/#definitelytyped) me convidaram para ajudá-los no design do DT. Foi uma experiência incrível e colaborei com a criação do [logo](https://www.typescriptlang.org/community) e da interface do site. Algum tempo depois a Microsoft adquiriu o projeto e agora é um famoso e oficial repositório de código aberto MS (e o logotipo que criei é até agora a marca oficial do projeto 😁).**

Mas somente a partir de 2018 que eu realmente comecei a aprender Typescript por causa da biblioteca React. Como muitos desenvolvedores, primeiro aprendi ProtoTypes (uma maneira de adicionar tipos no código React) e depois mudei para Typescript. E eu me apaixonei loucamente por ele.

Mas somente a partir de 2018 que eu realmente comecei a aprender Typescript por causa da biblioteca React. Como muitos desenvolvedores, primeiro aprendi ProtoTypes (uma maneira de adicionar tipos no código React) e depois mudei para Typescript - e me apaixonei loucamente por ele.

_Este artigo não se concentrará no código técnico, mas nos benefícios do motivo pelo qual o TS é incrível. Sinta-se à vontade para dar uma olhada na [documentação do Typescript](https://www.typescriptlang.org/docs/handbook/intro.html) a qualquer momento._

## O que é Typescript?

Criado e mantido pela Microsoft, em poucas palavras, **Typescript é um superset de JavaScript**, o que significa que TS é, no final das contas, uma linguagem de programação construída em cima do JS que torna a escrita de código de script mais fácil e poderosa.

> “TypeScript is JavaScript with syntax for types.” - [Typescript](https://www.typescriptlang.org/)

> _Tradução: “TypeScript é JavaScript com sintaxe para tipos.”_

É importante notar que o TS não pode ser executado diretamente nos navegadores, ele precisa ser transpilado em JavaScript regular. Mas não se preocupe, vou falar sobre isso na próxima seção.

## Qual é a ideia por trás do Typescript?

### Adicionar tipos no JavaScript and capturar erros antes do tempo de execução

Como o próprio nome indica, **a principal função que o TS tem é adicionar tipos ao código JavaScript**.

Ao contrário de muitas outras, JavaScript é uma linguagem de programação de tipagem dinâmica. Isso significa que, se declararmos uma variável, não precisamos especificar seu tipo, pois JS inferirá o tipo com base no valor atribuído a ela em tempo de execução. Então, se declararmos `let name = "Alex"`, JS irá inferir o tipo da variável "name" como sendo string. Se alterarmos seu valor para `name = 6`, o tipo agora será "number". Essa é uma das razões pelas quais JS é muito popular.

Mas quando temos tipos estáticos, a captura de erros se torna muito mais fácil e a maioria deles será capturada diretamente em nossa IDE - antes do tempo de execução. Portanto, **se tentarmos atribuir um número a uma variável que foi digitada com string, obteremos um erro**. E assim que corrigirmos os bugs o código será transpilado. E isso melhora muito nossa produtividade e torna nosso código muito mais seguro.

[[media]]
| ![Typescript code example](/assets/img/blog/typescript-code.png)

### Permitir o uso de recursos JavaScript modernos e muito mais

**Typescript é mais do que uma linguagem, é também uma ferramenta. É um compilador poderoso que você pode executar em cima de seu código para compilar seu código TS para JavaScript.** E por causa disso você pode usar todos os novos recursos e todas as vantagens do JS moderno no ambiente de desenvolvimento e, em seguida, gerar o código JS que os navegadores entendem.

Além disso, o TS também vem com vários outros recursos que facilitam muito nossa vida, como [Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces), [Decorators](typescriptlang.org/docs/handbook/decorators.html), [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) e muito mais.

[[media]]
| ![Typescript compiler infographic](/assets/img/blog/typescrit-compiler.jpg)

## Por que você deveria aprender Typescript?

Bem, em 2019 [AirBnb afirmou que 38% dos bugs poderiam ter sido evitados pelo TypeScript](https://twitter.com/swyx/status/1093670844495089664).

De acordo com a [pesquisa State of JS de 2021](https://2021.stateofjs.com/en-US/other-tools/#javascript_flavors) (e também de [2020](https://2020.stateofjs.com/en-US/technologies/javascript-flavors/#javascript_flavors_experience_ranking)), Typescript tem sido um grande sucesso entre os desenvolvedores JS.

A [pesquisa do StackOverflow de 2021](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages) mostra que Typescript é uma das linguagens mais amadas.

Esse outro [relatório de 2021 feito pelo Github](https://octoverse.github.com/#top-languages-over-the-years) mostra Typescript como uma das principais linguagens ao longo dos anos.

Mês passado, a [Microsoft publicou uma proposta para adicionar sintaxe de tipo diretamente ao JavaScript](https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/). E aqui você pode conferir sua [proposta de tipos em formato de comentários no Github](https://github.com/tc39/proposal-type-annotations).

### Principais vantagens do Typescript:

- Adiciona tipos estáticos ao JavaScript
- Evita erros validando seu JavaScript antecipadamente
- Utilização das novas funcionalidades do JS
- Pode ser usado em ambos os lados front-end e back-end
- Gera código JS compatível com vários navegadores através de seu compilador
- Curva de aprendizado mínima se você já conhece JS
- Suporte ao IDE com code navigation e autocompletion
- E mais

Eu fortemente recomendo [aprender mais sobre o Typescript lendo sua documentação](https://www.typescriptlang.org/docs/handbook/intro.html) e fazendo esse [curso rárpido de TS](https://www.udemy.com/course/understanding-typescript/) se você preferir aprender desta forma.

Fazendo o curso acima, desenvolvi este [pequeno projeto para experimentar todos os recursos do Typescript que aprendi e também explorei muito Class e Decorators](https://github.com/diogorodrigues/labs/tree/master/typescript). Fique a vontade para dar uma olhada no meu Github.

## Conclusão

**Quanto maior o projeto, maior a necessidade de usar Typescript.**

Como fã do Typescript, acho que ele é uma linguagem que está sendo obrigatória para a maioria dos projetos JavaScript grandes hoje em dia por causa dos benefícios que expliquei neste artigo. Se você conhece JavaScript, a curva de aprendizado será mínima e tenho certeza que verá como sua utilizaçao é incrível.

Usar o Typescript não significa que o código nunca terá bugs, mas que a maioria deles serão detectados antes do tempo de execução, o que melhorará muito a produtividade da equipe.

Deixe-me saber se você já experimentou o TS antes e qual é a sua opinião sobre isso.

Até a próxima. 😁
