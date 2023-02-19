---
title: 'Você pode estar usando demais os React states'
date: '2023-02-19 10:00:00'
description: 'Criar estados para armazenar dados no React é tentador e às vezes usamos demais esse recurso porque não entendemos bem como ele funciona.'
category: Development
background: '#353b48'
featuredImage: '/assets/img/blog/you-might-be-overusing-react-states.jpg'
---

**React é uma poderosa biblioteca de interface do usuário e fornece muitos recursos brilhantes para lidar com o código JS. No entanto, o equívoco sobre como o React funciona nos bastidores faz com que nós, desenvolvedores, usemos alguns desses recursos de maneira errada, aumentando a quantidade de código e impactando o desempenho desnecessariamente. Por exemplo, criando muitos states quando uma única variável é tudo o que precisamos.**

Neste artigo, você verá alguns dos principais **conceitos do React para escrever melhor os estados**:

- Como funciona a renderização do React
- O que é um estado em React
- Quando o estado deve ser usado
- Refs pode ser a solução que você precisa

## Como funciona a renderização do React

**Você provavelmente sabe que o React começa chamando seus componentes com base em um componente raiz (geralmente chamado de App) e movendo-se por toda a sua árvore. Este processo é chamado de renderização e ocorre em dois momentos diferentes: durante a renderização inicial e quando algum estado do componente é atualizado** (atualizando não apenas o componente que pertence a esse estado atualizado, mas todos os seus componentes aninhados). Cada renderização pode fazer alterações no DOM se o resultado da renderização NÃO for o mesmo da última vez.

Então, a renderização do React acontece em três etapas:

1. acionar uma renderização (na renderização inicial ou quando um estado é atualizado)
2. renderizar o componente (chamando cada componente cujo estado foi atualizado - e seus componentes aninhados)
3. realizar alterações no DOM se houver diferenças entre as renderizações

Para um melhor entendimento, leia [Render and Commit na documentação do React](https://beta.reactjs.org/learn/render-and-commit#step-1-trigger-a-render).

## O que é um estado no React

**Você pode pensar em um estado como a memória de um componente, como diz a documentação do React. É uma maneira de armazenar dados no componente e garantir que os dados sejam lembrados ao renderizar novamente o componente**. Por exemplo, ao clicar em um botão adicionar/remover itens, a quantidade de produtos no carrinho do e-commerce deve mudar. Portanto, toda vez que você clicar nesse botão, a interface do usuário será atualizada para exibir a quantidade atual de produtos. Esse número é armazenado em um estado e será persistido entre as novas renderizações, o que significa que esse estado não será redefinido a cada nova renderização.

**Outra funcionalidade que os estados executam no React é acionar re-rederizações**, o que significa que:

1. toda vez que um estado for atualizado, o componente responsável por esse estado será re-renderizado
2. se houver alterações no resultado da renderização, o React realiza as alterações no DOM atualizando a UI
3. renderizar novamente um componente enfileira automaticamente uma renderização recursiva para seus componentes aninhados

### Como criar um estado

Os estados podem ser configurados no React usando o hook `useState()`, que pode receber um estado inicial como argumento e retornar dois valores: a variável de estado para acessar esse valor de estado e uma função para atualizá-lo. Veja exemplo abaixo:

```javascript
const [itemsQty, setItemsQty] = useState(0);
```

Este código basicamente cria uma variável chamada `itemsQty` tendo sua quantidade inicial como `0` e também fornece a função `setItemsQty()` para atualizar este estado. Ao usar esta variável para exibir seu valor na UI, toda vez que seu valor for alterado, o componente será renderizado novamente e a interface do usuário será atualizada. É fácil, não é?

Mais sobre [estado na documentação do React](https://beta.reactjs.org/learn/state-a-components-memory).

## Quando o estado deve ser usado

Como vimos antes, um estado tem duas características no React:

- Persistir dados em atualizações de componentes
- Acionar re-renderizações

**Se o estado não cobrir os dois pontos acima juntos, você provavelmente precisará de uma variável normal. Repito: tudo que você precisa é apenas uma variável comum. Período.**

Depois de entender isso, você pode se surpreender com o uso excessivo de estados.

Mas o que acontece quando você não precisa acionar uma nova renderização, mas precisa manter os dados entre as atualizações do componente? Refs é a resposta.

O React tem [documentação completa explicando os Estados](https://beta.reactjs.org/learn/managing-state) e eu realmente recomendo que você dê uma olhada nisso.

## Refs pode ser a solução que você precisa

Resumindo, ref é uma maneira de referenciar um valor ou manipular o DOM. Focando no primeiro ponto, **pode ser usado quando precisamos persistir dados sem acionar re-renderizadores**.

> “When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.” - React docs

_Tradução livre: “Quando você deseja que um componente “lembre” algumas informações, mas não deseja que essas informações acionem novas renderizações, você pode usar uma ref.”_

Como sabemos que refs e estados persistem dados na re-renderização do React, vamos ver **algumas diferenças entre eles**:

- Estados acionam re-renderizações, refs não.
- Os estados são imutáveis, os refs não. Embora precisemos de uma função setter para atualizar os estados, podemos alterar o valor de uma ref acessando sua prop diretamente.
- Os estados podem ser usados a qualquer momento, no entanto, não devemos usar valores de Refs durante a renderização (já que não acionará novas renderizações e, consequentemente, não será capaz de atualizar a interface do usuário).

### Como criar uma ref

Assim como os estados, as refs têm uma forma específica de serem criadas usando o hook `useRef()`, que pode receber um valor inicial. Ref retorna um objeto contendo uma prop chamada `current` (que é onde o valor é armazenado). Veja exemplo abaixo:

```javascript
const ref = useRef(0);
```

O código acima cria uma referência com um valor inicial de `0`. Podemos acessar este valor através de `ref.current` e, como este objeto é mutável, podemos atualizar este valor simplesmente fazendo `ref.current = 1`.

Eu realmente recomendo que você dê uma olhada na [documentação do React sobre referenciar valores com referências](https://beta.reactjs.org/learn/referencing-values-with-refs) para entender melhor as diferenças entre referências e estados e aprender quando usar cada um.

## Conclusão

Tenho que assumir que já criei estados desnecessários, quem nunca criou? :) No entanto, quanto mais eu aprendo sobre o React, melhor eu entendo seus conceitos e como escrever um código melhor. Espero que você tenha aprendido algo novo com este post e convido você a também dedicar algum tempo a esta nova [documentação do React](https://beta.reactjs.org/) porque ela está repleta de ótimas explicações e exemplos interativos.

**Para recapitular, os estados devem ser usados quando precisamos acionar re-renderizações e também manter os dados entre as renderizações de componentes. Se você só precisa persistir informações, ref pode ser a solução que você precisa. Caso contrário, apenas variáveis regulares são suficientes para este caso.**

Deixe-me saber se você usa muitos estados e tem alguma explicação para adicionar aqui.

Até a próxima! 😁
