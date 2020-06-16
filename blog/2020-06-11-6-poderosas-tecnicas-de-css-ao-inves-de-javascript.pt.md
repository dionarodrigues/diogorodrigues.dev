---
title: '6 poderosas técnicas de CSS que você pode usar ao invés de JS'
date: '2020-06-11 01:21:23'
description: De variáveis ​​personalizadas a filtros, animações ou operações matemáticas, o CSS vem substituindo muitas funcionalides que costumávamos fazer com javascript e está se tornando uma linguagem incrivelmente poderosa. Vamos dar uma olhada em alguns exemplos que podemos fazer usando apenas CSS.
category: CSS
background: '#353b48'
featuredImage: '/assets/img/blog/6-powerful-css-techniques-you-can-use-instead-javascript.jpg'
---

Existem muitas [discussões sobre CSS vs. JavaScript](https://dev.to/evilmartians/css-and-js-are-at-war-heres-how-to-stop-it-158a) e a batalha entre esses gigantes do desenvolvimento front-end está ficando cada vez mais séria com o CSS adicionando vários recursos incríveis e tornando cada vez mais fácil fazer muitas coisas sem o uso de JS.

CSS e JavaScript trabalhando juntos são imensamente poderosos e têm seus méritos, mas acredito que quanto mais o CSS assumir o controle da interface, mais resiliência e confiabilidade os aplicativos web terão. Veja alguns motivos:

- **CSS é nativamente tolerante à falhas**. Isso significa que quando o CSS encontra uma propriedade que ele não entende, ele simplesmente a ignora e segue em frente. Em outras palavras, você aplica os seus estilos e espera que eles funcionem.

- **JavaScript não é tolerante à falhas**. Apenas um erro de sintaxe do javascript e toda a aplicação pode travar. Ou seja, você aplica o estilo e deve verificar se tudo continua funcionando.

Existem muitos [outros pontos que você pode considerar ao usar CSS em vez do JS](https://hackernoon.com/in-simple-terms-css-vs-javascript-abc9d709399d).

De efeitos como transições e propriedades personalizadas (variáveis) a animações, filtros ou operações matemáticas, o CSS está nos trazendo uma nova maneira de desenvolver coisas fantásticas que são muito mais fáceis e simples de se implementar.

**Nesse artigo vou destacar alguns recursos incríveis do CSS (alguns deles realmente novos) que você talvez não conheça, como smooth scrolling, sticky navigation e outras funcionalidades que anteriormente exigiam várias linhas de JS para funcionar.** Vamos lá!

## 1- Smooth Scrolling

Se antes eram necessárias algumas linhas de código JS para adicionar smooth scrolling (rolagem suave) à página, agora precisamos apenas de uma linha de código CSS. Isso mesmo, apenas uma linha. Incrível, concorda? E isso é possível através da propriedade de CSS `scroll-behavior`.

Vamos ver como isso funciona!

```
html {
  scroll-behavior: smooth;
}
```

https://codepen.io/diogorodrigues/pen/PoZYYZy

Enquanto escrevo esse post, a propriedade scroll-behavior funciona no Chrome e Firefox, mas ainda não no Edge, IE ou Safari (desktop ou celular). Leia mais sobre isso em [Can I Use](https://caniuse.com/#feat=mdn-css_properties_scroll-behavior).

## 2- Sticky navigation

Um dos meus recursos favoritos, sticky navigation (navegação fixa) é basicamente um elemento fixo na página que não desaparece durante o scroll. Então, ao invés de `offsetTo` e `window.scrollY` no JS, **agora podemos utilizar apenas `position: sticky` no CSS**! 👌

```
header {
  position: sticky;
  top: 0;
}
```

https://codepen.io/diogorodrigues/pen/vYLBBdV

Mas você deve entender a lógica por trás do `position: sticky` para usá-lo de modo correto uma vez que a estrutura do HTML faz bastante diferença. (Inclusive, essa é a razão porque às vezes essa propriedade não funciona).

Vamos dar uma olhada na seguinte estrutura HTML:

```
<main class="container">
  <nav class="nav">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
  <div class="main-content">Main Content</div>
  <footer class="footer">Footer</footer>
</main>
```

O menu ficará fixo durante o scroll apenas na área do seu elemento pai (`main.container`). Então, `position: sticky` possui duas partes principais:

- **sticky item**: é o elemento que definimos com `position: sticky` (nav).
- **sticky container**: é o elemento HTML que envolve o item que servirá como container, ou seja, o elemento pai. Essa é a área máxima na qual o menu poderá ficar fixo duranto o scroll. Esse elemento pai determina o escopo no qual o menu poderá atuar.

Esse recurso pode melhorar drasticamente a experiência do usuário, especialmente para sites que possuem muita rolagem.

Quase [100% dos navegadores suportam essa propriedade](https://caniuse.com/#feat=css-sticky). 🎉

## 3- Truncate text

O CSS nos presenteou com duas propriedades fantásticas, `text-overflow` e `line-clamp`, que podem criar reticências e cortar palavras sem o uso de javascript ou outro método complexo para isso. Ambas as propriedades não são novas, mas são muito úteis.

https://codepen.io/diogorodrigues/pen/NWxKKEq

Vamos dar uma olhada mais de perto.

### text-overflow

Essa propriedade controla como o código lida com situações em que o texto deve ser cortado para não exceder uma única linha. Ele também nos fornecerá o caractere unicode de reticências "…".

Ambas as propriedades `white-space: nowrap` e `overflow: hidden` são obrigatórias para que `text-overflow: ellipsis` funcione.

```
.card-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

[100% dos navegadores modernos suportam essa propriedade](https://caniuse.com/#search=text-overflow)

### line-clamp

Recurso utilizado quando você precisa adicionar uma limitação de texto com várias linhas em vez de apenas uma. Embora faça parte do [CSS Overflow Module Level 3](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Specifications), que está atualmente em rascunho, ao usar o prefixo `-webkit-` você garante que 93% dos navegadores adicionem esse efeito. É importante destacar que você não pode controlar o número de caracteres a serem exibidos, mas ainda assim é fantástico.

Nós precisamos utilizar a implementação antiga do flexbox com `display: -webkit-box` e `-webkit-box-orient: vertical`.

```
.card-description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```

Veja mais em [Can I Use](https://caniuse.com/#feat=css-line-clamp).

## 4- Custom properties: CSS variables

Apesar dos [CSS preprocessors](https://guide.freecodecamp.org/css/css-preprocessors/) (como Sass, Less e Stylus) serem muito úteis e populares no mundo do javascript - porque estendem o CSS, adicionando recursos como variáveis e funções, por exemplo - **agora temos um recurso poderoso chamado CSS Custom Properties, também conhecido como variáveis CSS**.

As variáveis CSS nos ajudam a manter nossos aplicativos web consistentes - DRY - e fáceis de serem desenvolvidos e mantidos. Esse recurso é um dos principais motivos pelos quais os pré-processadores foram bem-sucedidos. [Veja mais sobre isso aqui](https://meiert.com/en/blog/css-dry-and-optimization/).

Criar uma variável CSS é muito simples, basta definir a variável usando `--` e depois chamar uma função usando `var ()` e passando a variável que criamos como argumento. É muito fácil, não é mesmo?

```
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

img {
  padding: var(--spacing);
  background: var(--base);
  -webkit-filter: blur(var(--blur));
  filter: blur(var(--blur));
}

.hl {
  color: var(--base);
}
```

Vamos brincar: 😁

https://codepen.io/wesbos/pen/adQjoY

[CSS variables são suportadas nos principais browsers](https://caniuse.com/#feat=css-variables) com excessão do IE 11.

## 5- Dark Mode

Desde que a Apple introduziu o Dark Mode no macOS no ano passado e o CSS nos deu uma maneira de detectar isso usando a propriedade @media para consultas, muitos aplicativos grandes (como o Twitter e o Google Maps, por exemplo) já o possuem. ([Lista de Apps usando Dark mode](https://darkmodelist.com/))

**O Dark Mode não consiste apenas em ter uma página ou aplicativo da web bonito. Também veio para ajudar as pessoas:**

> "There are also people who actually need dark mode and use it as another accessibility tool, for example, users with low vision." - Thomas Steiner, Customer Solutions Engineer at Google Germany

Tradução: *"Também existem pessoas que realmente precisam do dark mode e o usam como ferramenta de acessibilidade, por exemplo, usuários com baixa visão".*

> "Molly has Usher Syndrome; a condition that has left her deaf with 5–degree vision in one eye. (...) Reading the content in dark mode would be bearable for Molly, and might benefit others too — enhancing the experience for a user with a headache, or someone browsing in a poorly lit room. Designing for the few, makes things better for the many." - Charles Reynolds-Talbot, designer at the UK government

Tradução: *"Molly tem Síndrome de Usher; uma condição que a deixou surda e com visão de 5 graus em um olho. (...) A leitura do conteúdo em dark mode seria suportável para Molly e também beneficiaria outras pessoas - aprimorando a experiência de um usuário com dor de cabeça ou de alguém navegando em uma sala mal iluminada. Planejar para alguns pode melhorar as coisas para muitos.”*

[Leia mais sobre isso aqui](https://charlesrt.uk/blog/apple-need-a-dark-mode-for-people-like-molly-watt/).

E veja como o Dark Mode como fazer com que haja bastante economia de bateria [neste artigo](https://web.dev/prefers-color-scheme/):

> "(...) dark mode is known to save a lot of energy on AMOLED screens. Android case studies that focused on popular Google apps like YouTube have shown that the power savings can be up to 60%."

Tradução: *"(...) o dark mode é conhecido por economizar muita energia em telas AMOLED. Estudos de caso do Android focados em aplicativos populares do Google, como o YouTube, mostraram que a economia de energia pode ser de até 60%."*

Um novo recurso que permite detectar se o usuário está com o dark mode ativado é chamado `prefers-color-scheme` e já é [compatível com Chrome, Firefox, Safari e Opera](https://caniuse.com/#feat=prefers-color-scheme).

Quando combinado com variáveis, torna mais fácil do que nunca os modos dinâmicos de light e dark para seus visitantes.

```
:root {
  --color: #222;
  --background: #eee;
  --text: 'default';
}

body {
  color: var(--color);
  background: var(--background);
}

body:after {
  content: var(--text);
  display: block;
  text-align: center;
  font-size: 3rem;
}

@media (prefers-color-scheme: light) {
  :root {
    --color: #222;
    --background: #eee;
    --text: 'light';
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --color: #eee;
    --background: #222;
    --text: 'dark';
  }
}
```

No exemplo abaixo, dependendo das configurações do seu dispositivo, você verá os estilos para dark ou light mode.

https://codepen.io/diogorodrigues/pen/VweZwjN

## 6- @supports

Por muito tempo, os desenvolvedores usam polyfills de terceiros, como [Modernizr](https://modernizr.com/) (uma solução JS), para detectar quais recursos de CSS são suportados pelo navegador atual. Por exemplo, ao definir o `-webkit-line-clamp` para um elemento, é possível verificar se essa propriedade funciona no navegador e, caso contrário, você pode fornecer algum outro callback.

No entanto, o CSS criou a regra `@support` que nos permite executar a detecção de recursos do navegador diretamente na nossa folha de estilos. Incrível, não é mesmo!

`@support` é muito semelhantes às consultas utilizando `@media` e você também pode fazer várias combinações usando as condições AND, OR e NOT:

```
@supports (-webkit-line-clamp: 2) {
    .el {
        ...
    }
}
```

O exemplo acima verifica se o navegador suporta a propriedade `-webkit-line-clamp`. Se suportar, ou seja, se a condição retornar verdadeira, as regras de estilo declaradas dentro do bloco `@supports` serão aplicadas.

[Todos os navegadores modernos já suportam esse recurso](https://caniuse.com/#search=css.supports).


[[media]]
| ![Animated Gif](https://miro.medium.com/max/650/1*YJgEh7gAzQHsBR2Y3rFJEA.gif)
Esse sou eu depois que fiquei sabendo desse recurso do CSS. 🤣🤣 E quanto a você?


## Conclusão

**Esses são alguns dos recursos modernos do CSS. Sempre que você puder fazer coisas brilhantes sem JS, usando apenas stylesheets, vá em frente e utilize apenas CSS.**

O mundo do front-end atual está mudando e novos recursos estão sendo criados para tornar nosso trabalho mais rápido e elegante. Brincar com CSS e aprender novos truques pode ser muito divertido e interessante. Experimente. ❤

Espero que você tenha gostado desse post e me diga se eu deixei de fora algum outro recurso fantástico do CSS que você usa com frequência!

