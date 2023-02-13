---
title: 'O futuro do CSS é agora'
date: '2023-02-12 01:21:23'
description: Vários relatórios da web foram publicados no início deste ano e darei a você um resumo do que está acontecendo em torno do CSS e quais são os melhores recursos que podemos esperar para este ano.
category: 'Development'
background: '#353b48'
featuredImage: '/assets/img/blog/the-future-of-css-is-now.jpg'
---

**Se você, assim como eu, começou a trabalhar com desenvolvimento web há mais de uma década, provavelmente se lembra do sucesso da chegada da versão 3 do CSS, certo? Bem, esse lançamento realmente melhorou a forma como desenvolvemos usando CSS para sempre, mas muita coisa mudou desde então e agora o CSS está indo para um novo nível novamente.**

Neste artigo mostrarei como projetos como [Interop](https://wpt.fyi/interop-2023) e [The State of CSS survey](https://2022.stateofcss.com/en-US/) têm contribuído muito para esta nova fase do CSS. Aqui você também verá que muitos recursos com os quais sonhamos antes agora estão se tornando realidade. Então, pegue sua xícara de chá/café e me venha comigo.

## CSS está realmente sendo levado a sério

Você pode não ter ouvido falar disso ainda, mas **grandes empresas na web vêm trabalhado juntas desde o ano passado para resolver os principais problemas de compatibilidade de navegadores**. O projeto, chamado [Interop - por empresas como Google, Microsoft, Mozilla e outras](https://wpt.fyi/interop-2023) -, foi um sucesso e agora temos quase 100% de compatibilidade cross-browser para propriedades como: sticky positioning, cascade layers, aspect-ratio, flexbox, grid e transforms.

**Agora, elas estão focados em atingir sua meta até o final de 2023, com nada menos que 26 áreas de foco alcançadas. Nem todas essas áreas envolvem estilos, mas você pode encontrar recursos CSS como: border-image, container queries, color spaces and functions, pseudo-classes, custom properties, math functions e muito mais.**

> "Interop 2023 is a cross-browser effort to improve the interoperability of the web — to reach a state where each technology works exactly the same in every browser." - [Interop](https://wpt.fyi/interop-2023)

_Tradução livre: "O Interop 2023 é um esforço entre navegadores para melhorar a interoperabilidade da web — para alcançar um estado em que cada tecnologia funcione exatamente da mesma forma em todos os navegadores."_

Para ajudar você a entender algumas dessas áreas do CSS, encontrei este ótimo vídeo da equipe do Google no YouTube:

https://www.youtube.com/watch?v=Xy9ZXRRgpLk&ab_channel=GoogleChromeDevelopers

No entanto, se você preferir conteúdo textual, eu realmente recomendo que você dê uma olhada nos artigos abaixo:

- [Interop 2023: continuing to improve the web for developers](https://web.dev/interop-2023/) por web.dev.
- [Pushing Interop Forward in 2023](https://webkit.org/blog/13706/interop-2023/) por webkit.org.

## O que a comunidade tem a dizer sobre CSS

**Um relatório que gosto de ver todo começo de ano é [The State of CSS survey](https://2022.stateofcss.com/en-US/), onde podemos não só checar as tendências para antecipar o que está por vir nos próximos anos, mas também fazer com que os fornecedores de navegadores priorizem seus trabalhos em determinados recursos de CSS.**

Dito isso, esse tipo de pesquisa pode ser um recurso valioso para os navegadores entenderem em quais recursos os desenvolvedores estão interessados, mas ainda não são totalmente suportados. Por exemplo: @container, subgrid, pseudo-classes e outros.

[Lea Verou](https://lea.verou.me/), referência na comunidade front-end, está à frente desta edição da pesquisa e disse:

> "I predict that the stars of 2023 will be native Nesting, and color manipulation. Nesting is currently the primary reason people still use preprocessors, so being able to rely on it natively will be incredibly freeing." - Lea Verou

_Tradução livre: "Eu prevejo que as estrelas de 2023 serão o Nesting nativo e a manipulação de cores. O Nesting é atualmente a principal razão para as pessoas ainda usarem pré-processadores, portanto, poder confiar nele nativamente será incrivelmente libertador."_

## 5 recursos CSS para provar por que o futuro é agora

Eu poderia dizer que grid e flexbox são os dois principais recursos que eu acrescentaria à lista, mas eles são comuns hoje em dia, pois todo mundo já ouviu falar muito sobre eles. Então **decidi focar em outros recursos CSS que acho que estão mudando a forma como desenvolvemos usando CSS agora (ou no futuro próximo)**.

### [@layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

**Cascade Layers é um recurso CSS incrivelmente poderoso, pois nos permite definir camadas explícitas para [especificidade](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity), alterando a maneira da linguagem de determinar quais declarações são mais relevantes para um elemento.** Que fantástico, não é?

Confira o código abaixo extraído do MDN:

```css
@layer module, state;

@layer state {
  .warning {
    background-color: brown;
  }
  p {
    text-align: right;
  }
}

@layer module {
  .warning {
    text-align: left;
    background-color: yellow;
    color: white;
  }
}
```

Primeiramente, duas camadas foram definidas e tiveram sua especificidade determinada por sua ordem na listagem. A última camada listada vence. Em seguida, essas camadas de cascata nomeadas foram criadas com suas regras CSS dentro. Existem muitas outras maneiras de configurá-lo, dê uma olhada na [documentação do MDN sobre CSS @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) para entender melhor como @layers funciona.

### [:has](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)

**Você já ouviu falar sobre um “[seletor pai](https://css-tricks.com/parent-selectors-in-css/)” em CSS? Essa é uma ideia antiga que agora se tornou realidade.**

Desde o início, o CSS forneceu apenas uma maneira de selecionar um elemento: um filho ou o elemento mais à direita. Agora, a pseudoclasse `:has()` apresenta uma maneira de ter uma seleção reversa (isso significa que agora podemos selecionar um pai com base em um filho ou o elemento mais à esquerda). Pode ser um pouco confuso explicar, então vamos ver um exemplo:

```css
div:has(p) {
  background: red;
}
```

O código CSS acima selecionará um elemento div que contém um ou mais elementos de parágrafo. Você vê como isso inverte a lógica? E há muito mais possibilidades, dê uma olhada na [documentação do MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:has).

### [@container](https://developer.mozilla.org/en-US/docs/Web/CSS/@container)

**Este é outro recurso CSS inovador que funciona de maneira semelhante às consultas `@media`, mas em vez de depender da largura da viewport para ajustar estilos, [@container](https://developer.mozilla.org/en-US/docs /Web/CSS/@container) depende do tamanho do elemento pai para adicionar as alterações.** Isso provavelmente nos dará várias possibilidades para melhorar a maneira como criamos regras CSS para efeitos responsivos.

```css
.container {
  container-name: sidebar;
  container-type: inline-size;
}

container sidebar (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```

Primeiro precisamos escolher um elemento para ser o container definindo duas propriedades para ele: `container-name` e `container-type`. Neste caso, o div foi escolhido para ser o container. Em seguida, podemos simplesmente usar uma regra de grupo condicional para agrupar os estilos dos filhos desse div da mesma forma que já fazemos para consultas `@media`. Dessa forma, os filhos terão regras que respondem à largura do pai. Isso é brilhante, você não concorda?

### [subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid)

**[Subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid) é outra grande mudança que tornará possível não apenas filhos diretos se tornarem grid items de um elemento definido como grid, mas todos os seus filhos em diferentes níveis.** Você pode imaginar quantas possibilidades isso nos trará, já que não precisaremos mais criar grades independentes para lidar com elementos aninhados?

Dê uma olhada na [documentação](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid) para entender mais sobre subgrid e seu poder.

### [Nesting](https://developer.chrome.com/blog/help-css-nesting/)

Todas as funcionalidades anteriores já são uma realidade e, com exceção de `@layers`, que já é suportada por todos os principais navegadores, as outras estão planejadas para funcionarem e serem implementadas em vários navegadores ainda este ano.

**Mas isso ainda não é uma realidade para o Nesting, mas assim como Lea Verou, também acredito que pode ser um recurso nativo inovador que trará muito mais liberdade para nós desenvolvedores. Assim que o tivermos, alguns pré-processadores não terão mais poder sobre nós. Vamos ver o que acontecerá este ano e mantenham seus dedos cruzados comigo para que tenhamos uma discussão sobre esse recurso nativamente.**

## Conclusão

**Ter novas [especificações CSS e rascunhos no W3C](https://www.w3.org/Style/CSS/current-work.en.html) é super importante, mas como desenvolvedor acredito que o sonho se torna realidade quando podemos usar esses recursos no navegador durante nosso desenvolvimento diário.**

Iniciativas como [Interop](https://wpt.fyi/interop-2023) e [The State of CSS survey](https://2022.stateofcss.com/en-US/) estão fazendo uma grande contribuição para acelerar a compatibilidade dos navegador e, mais importante, adicionar suporte para novos recursos CSS rapidamente.

Parece que os pré-processadores logo precisarão encontrar outra maneira de serem mais atraentes do que o CSS nativo. O que você acha?

Até a próxima! 😁
