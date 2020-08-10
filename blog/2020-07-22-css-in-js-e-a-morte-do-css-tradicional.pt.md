---
title: 'CSS-in-JS e a morte do CSS tradicional'
date: '2020-07-22 01:21:23'
description: "Apesar da evolução do CSS nos últimos anos (como variáveis CSS, por exemplo), ele ainda apresenta vários problemas, principalmente quando usado em projetos maiores. E por causa disso, o CSS-in-JS surgiu como um conjunto de idéias para resolver problemas complexos de CSS: modularidade, especificidade, conflitos de nome de classes, escopo e muito mais."
category: CSS
background: '#353b48'
featuredImage: '/assets/img/blog/css-in-js.jpg'
---

Desde quando comecei minha carreira como web designer até agora, como desenvolvedor front-end, o CSS faz parte da minha identidade profissional. E é quase impossível para mim imaginar a minha rotina de desenvolvimento sem criar estilizações com CSS. Mas a pergunta é: como eu costumo criar o meu CSS nos dias atuais?

**A maneira como pensamos as estilizações e usamos CSS está mudando e algumas discussões sobre a morte do CSS tradicional vem surgindo. Portanto, neste artigo, mostrarei a evolução do CSS desde a sua criação e apresentarei algumas reflexões pessoais sobre o estado atual dessa linguagem.**

## Uma  breve história do CSS

Para entendermos o estado atual do CSS, vamos voltar rapidamente aos velhos tempos do desenvolvimento web e entender porque o CSS, como linguagem nativa, foi criado e analisar sua evolução até hoje.

### Linha do tempo do CSS

- **1994**: dentre algumas propostas de linguagem de estilo, o primeiro rascunho do CSS (Cascading Style Sheets) foi criado por [Håkon Wium Lie](https://www.wiumlie.no/en) como uma solução para estilizar documentos da web - no mesmo ano em que [Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/) fundou a [World Wide Web Consortium (W3C)](https://www.w3.org) e o HTML se estabeleceu como um formato de documento universal.

- **1996**: o nível 1 do CSS finalmente surgiu como uma recomendação da W3C no final de 1996 e o Microsoft Internet Explorer 3 se tornou o primeiro navegador comercial a suportá-lo. Naquela época, o CSS1 permitia aos web designers definir apenas propriedades básicas, como fontes, cores e outros recursos mínimos.

- **1998**: a W3C publicou o CSS nível 2, que adicionou suporte para propriedades de posicionamento e formatação de tabelas. Também incluiu suporte para media types, web fonts (a capacidade [polêmica de incorporar fontes em um documento da web](https://www.w3.org/Fonts/Misc/eot-report-2008)) e algumas outras propriedades relacionadas à interface do usuário.

- **1999**: a W3C começou a trabalhar no CSS Nível 3 - a versão com a qual agora estamos familiarizados. O ponto chave aqui também é a introdução de módulos para lançar recursos independentes em vez de novas versões da linguagem.

- **2011**: o CSS 2.1 foi lançado para corrigir alguns erros na especificação do CSS2: algumas partes foram alteradas e outras removidas.

- **2011+**: os módulos do CSS nível 3 foram lançados e adicionaram muitos novos recursos que permitiram aos desenvolvedores estilizar elementos HTML com menos código CSS, tais como: box shadow, text shadow, novas maneiras de declarar cores (RGBA, por exemplo), gradients, opacity, animations, transforms, media queries e muito mais. Além disso, CSS3 - a versão mais recente do CSS - é totalmente compatível com suas versões anteriores e continua focando no desenvolvimento de novos recursos independentes por meio de seus módulos.

Leia mais sobre a linha do tempo do CSS [aqui](https://www.w3.org/Style/CSS20/history.html). E a seguir há alguns conteúdos específicos: [CSS 1](https://www.w3.org/Press/CSS1-fact.html), [CSS 2](https://www.w3.org/TR/CSS2/), [CSS 2.1](https://www.w3.org/TR/2011/REC-CSS2-20110607/), [CSS 3](https://developer.mozilla.org/en-US/docs/Archive/CSS3).

> “There has never been a CSS4. There will never be a CSS4. CSS4 is not a thing that exists.” - [Tab Atkins, 2012](https://www.xanthir.com/b4Ko0) - membro do grupo de trabalho CSS na W3C. Ele também trabalha para o Google na equipe do Google Chrome.

***Tradução: “Nunca houve um CSS4. Nunca haverá um CSS4. CSS4 não é algo que existe.”***

Embora por muito tempo as pessoas se referiram aos novos recursos do CSS como CSS 3, agora não precisamos mais utilizar essa referência. É apenas CSS, como Rachel Andrew explicou em [seu artigo](https://rachelandrew.co.uk/archives/2016/09/13/why-there-is-no-css4-explaining-css-levels/). Mas eu confesso a você que sou dessa época em que o boom do CSS3 fez com que destacássemos qual versão do CSS nós sabíamos.

Mas, se uma nova versão do CSS existisse, deveríamos nos referir aos seguintes recursos como sendo parte do CSS4? Grid, Variables, Flexbox…

### Soluções CSS para problemas específicos

**Como parte da evolução do CSS, muitas ferramentas foram criadas para resolver alguns problemas específicos da linguagem**

- **CSS Resets**: A [solução do Eric Meyer](https://meyerweb.com/eric/tools/css/reset/) foi um dos CSS Resets mais famosos - um grupo de declarações CSS usadas para reduzir as diferenças entre os estilos padrões dos navegadors: heights, margins e tamanhos de fonte dos headings, por exemplo.

- **Pré-processadores**: [pré-processadores CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor#:~:text=A%20CSS%20preprocessor%20is%20a,inheritance%20selector%2C%20and%20so%20on.) são ferramentas incríveis que funcionam com um mecanismo de pré-processamento que implementa nesting selectors (seletores aninhados), variáveis, mixins, extends e lógica nas folhas de estilo. No entanto, como o CSS evoluiu bastante, alguns desses recursos não são mais necessários nesse momento. E aqui estão alguns dos pré-processadores CSS mais populares: [Sass](https://sass-lang.com/), [LESS](http://lesscss.org/), [Stylus](https://stylus-lang.com/) e [PostCSS](https://postcss.org/).

- **Pensamento baseado em componentes**: muitos conceitos surgiram para nos ajudar a organizar nossos estilos a fim de evitar conflitos de CSS e melhorar a escalabilidade e manutenção deles. [Atomic Design System](https://bradfrost.com/blog/post/atomic-web-design/), [BEM](http://getbem.com/), [SMACSS](http://smacss.com/) e [OOCSS](http://oocss.org/) foram alguns desses recursos.

- **CSS modularizado e escopo**: por natureza, o CSS não funciona com escopo local e esse é um dos maiores problemas dessa linguagem. Por causa disso, [CSS Modules](https://github.com/css-modules/css-modules) foi criado para garantir que os nomes das classes sejam exclusivos a fim de evitar conflitos de estilos.

## O que é CSS-in-JS?

Em poucas palavras, o CSS-in-JS não é uma biblioteca específica, mas um conjunto de idéias para resolver antigos problemas complexos de CSS com novas soluções baseadas em javascript. E ele vem ganhando audiência desde que frameworks JS baseados em componentes surgiram no desenvolvimento front-end: React, Angular, Vue…

> “For three years, I have styled my web apps without any `.css` files. Instead, I have written all the CSS in JavaScript. (...) I can add, change and delete CSS without any unexpected consequences. My changes to the styling of a component will not affect anything else. If I delete a component, I delete its CSS too.” - Max Stoiber, co-criador de Styled Components, a biblioteca CSS-in-JS mais popular, escreveu essas palavras nesse [seu artigo](https://twitter.com/mxstbr)

***Tradução: Durante três anos, venho estilizando minhas aplicações web sem nenhum arquivo `.css`. Em vez disso, escrevo todo o CSS em JavaScript. (...) Posso adicionar, alterar e excluir CSS sem efeitos colaterais inesperados. Minhas alterações nos estilos de um componente não afetarão nenhum outro. Se eu excluir um componente, também excluo o seu respectivo CSS.”***

O JavaScript se tornou uma parte crescente do nosso trabalho e novas técnicas estão surgindo o tempo todo. Portanto, agora também podemos usar o poder do JS para mudar a maneira como criamos nossos estilos e melhorar o desempenho de nossos aplicativos.

> “CSS-in-JS has been one of the biggest developments of the past few years in the CSS world. Just like preprocessors bypassed CSS to introduce their own set of new features over a decade ago, CSS-in-JS libraries piggyback on JavaScript's power to make their own path without waiting for CSS to catch up.” - [Pesquisa The State of CSS in 2019](https://2019.stateofcss.com/technologies/css-in-js/)

***Tradução: “CSS-in-JS tem sido um dos maiores desenvolvimentos dos últimos anos no mundo do CSS. Assim como os pré-processadores ignoraram o CSS para apresentar seu próprio conjunto de novos recursos há mais de uma década, as bibliotecas CSS-in-JS utilizam o poder do JavaScript de criar seu próprio caminho sem esperar que o CSS o faça.”***

### Vantagens do CSS-in-JS

Existem muitos benefícios em se usar CSS-in-JS e eu realmente acho que ele pode nos ajudar muito em nossos projetos, pois não precisaremos lidar com a dolorosa manutenção dos estilos da mesma forma que costumávamos fazer com pré-processadores e com a definição manual das classes utilizando BEM.

Eu acho que há três pontos principais a serem lembrados ao usar essa nova abordagem para se trabalhar com estilos:

- **Eliminação de código morto (Dead code elimination)**: CSS-in-JS remove com segurança CSS redundante e não utilizado do nosso código, reduzindo o tamanho do arquivo sem efeitos colaterais.

- **Isolamento do CSS**: CSS-in-JS automatiza o escopo local, gerando nomes de classe exclusivos por padrão ao compilar CSS, evitando conflitos de estilos - semelhante ao que costumávamos fazer manualmente usando o BEM. Também abstrai o modelo CSS para o nível do componente ao invés do documento.

- **State-based styling**: devido à modularidade e isolamento, as propriedades podem ser facilmente compartilhadas entre o CSS e lógica do componente a fim de adicionar funcionalidades dinâmicas às suas regras de estilo. Vamos imaginar que estamos construindo um componente que precisa apresentar uma pontuação. Portanto, dependendo do resultado, podemos definir cores diferentes para números positivos e negativos apenas observando o conteúdo HTML diretamente na declaração CSS. Para isso, costumávamos criar classes diferentes para lidar com essas cores diferentes. Mas agora é muito mais fácil.

### As bibliotecas CSS-in-JS mais famosas

Para lidar com CSS-in-JS, existem várias bibliotecas semelhantes, tais como:

- **[Aphrodite](https://github.com/Khan/aphrodite)**
- **[Emotion](https://emotion.sh/docs/introduction)**
- **[Glamor](https://github.com/threepointone/glamor)**
- **[Styled Components](https://styled-components.com/)**
- **[Styled JSX](https://github.com/vercel/styled-jsx)**

Entre todas essas bibliotecas, uma que ganhou muita popularidade é a [Styled Components](https://styled-components.com/) devido a algumas vantagens:

- **Automatiza o [CSS Critical](https://web.dev/extract-critical-css/)**: o CSS da parte superior da dobra (above-the-fold - conteúdo antes da rolagem) é carregado primeiro, fazendo com que o restante do conteúdo seja renderizado para o usuário o mais rápido possível.

- **Remoção do CSS não utilizado**: ótimo para a performance porque reduz o tamanho do arquivo.

- **Escopo definido**: ele lida com conflitos, não permitindo que classes de diferentes componentes tenham o mesmo nome.

- **Estilos dinâmicos**: conseguimos alterar os estilos de acordo com as propriedades e os themes do componente.

- **Vendor prefixing automático**: lida com as diferenças entre browsers adicionando os prefixos corretos - o que pode ser pré-configurado de acordo com as necessidades do projeto, inclusive

- **Manutenção simplificada e segura**: como o escopo é reduzido, possuímos mais confiança para dar manutenção no código.


- E muito [mais recursos](https://styled-components.com/docs/basics#motivation).

## O tradicional CSS está morrendo?

Como você pode ver, a arquitetura CSS tradicional não foi projetada para ser usada em projetos grandes. E em um mundo de frameworks como React, Vue, Angular e similares, que vêm sendo amplamente utilizados, precisamos de soluções melhores para resolver alguns problemas dolorosos de CSS.

Os pré-processadores CSS adicionaram muito poder às folhas de estilos e coisas como CSS modularizado, nesting (aninhamento) e variáveis me ajudaram em muitos projetos diferentes - inclusive, eu criei esse [boilerplate usando Gulp e Stylus](https://github.com/diogorodrigues/iceberg-boilerplate) no passado para desenvolver minhas aplicações web. Mas agora o mundo do desenvolvimento front-end é diferente e as soluções baseadas no React (como GatsbyJS, NextJS e React Native) fazem parte da minha rotina diária atual de desenvolvimento e eu preciso de algo mais poderoso.

E com essas mudanças na maneira como pensamos as estilizações e criamos o CSS, várias discussões vêm surgindo sobre a morte do CSS tradicional como você pode ver nesse [post do Samson Zhang](https://www.samsonzhang.com/2020/05/13/the-artistry-of-css-and-its-death-a-reflection-about-css-and-js-frameworks-and-the-evolution-of-css.html) e nesse outro [post do Chris Coyer](https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/) também.

**O ponto é: eu acho que a questão não é sobre nos livrarmos do CSS Vanilla, mas adicionarmos JavaScript para aprimorar nossos estilos. A maneira tradicional de criar CSS é perfeita para sites e aplicativos pequenos, mas projetos grandes exigem uma arquitetura CSS melhor. E é por isso que CSS-in-JS é a solução mais popular atualmente.**

É importante destacar que CSS-in-JS também possuem desvantagens como você pode ver [neste artigo](https://www.freecodecamp.org/news/the-tradeoffs-of-css-in-js-bee5cf926fdb/). Os benefícios proporcionados por essa nova maneira de se escrever CSS também podem ser alcançados utilizando um conjunto de outras ferramentas, tais como: pré-processadores, CSS Modules... Por isso, é sempre importante avaliar o projeto e as tecnologias a fim de encontrar a melhor solução. E mantenha em mente que em muitas vezes o problema pode estar na falta de entendimento do propósito de uma ferramenta e na sua má utilização. E que em alguns casos, o CSS Vanilla poderá ser a melhor alternativa. ✌

## Conclusão

Mostrei uma perspectiva sobre o estado atual do CSS, seus problemas nativos e algumas soluções que foram criadas ao longo do tempo. Não é minha intenção convencê-lo de que o CSS-in-JS é a melhor solução de todos os tempos e que você deve usá-lo em todos os seus projetos. Mas, na minha perspectiva, se você estiver trabalhando com alguns frameworks JS baseados em componentes (como React, por exemplo), acho que essa nova maneira de escrever CSS pode ser uma boa ideia para lidar com problemas de estilo antigos e complexos.

O grande ponto positivo que eu vejo nessas novas ideias, como o CSS-in-JS, é a questão de se ter tudo em um mesmo lugar, sem muita complexidade de configuração, o que com certeza influenciará no desenvolvimento de novas features do CSS, assim como ocorreu (e vem ocorrendo) com o pré-processadores CSS.

**Eu sou apaixonado por CSS e, para mim, escrever CSS é uma arte. Concordo plenamente que o CSS tradicional ainda será extensivamente usado dependendo do projeto, afinal vêm surgindo muitas features CSS sensacionais (como você pode ver [nesse artigo](https://www.diogorodrigues.dev/pt/blog/6-poderosas-tecnicas-de-css-ao-inves-de-javascript)). Mas a manutenção do CSS hoje que é um ponto crítico e que precisa ser melhorado.**.

E você? O que você acha que está acontecendo com o CSS? Você já experimentou CSS-in-JS?
