---
title: 'A Fetch API é a nova versão antiga do AJAX'
date: '2022-05-04 01:21:23'
description: Se você iniciou sua carreira de developer há cerca de uma década, provavelmente sabe como era complicado usar AJAX em nossas aplicações da web. No entanto, agora todos nós sabemos que o JavaScript vanilla moderno nos apresenta várias funcionalidades poderosas, incluindo a Fetch API - uma maneira mais fácil de obter dados do servidor sem recarregar a página.
category: 'Development'
background: '#353b48'
featuredImage: '/assets/img/blog/fetch-api-is-new-old-version-of-ajax.jpg'
---

**O termo [AJAX (Asynchronous JavaScript and XML)](<https://en.wikipedia.org/wiki/Ajax_(programming)>) surgiu no final da década de 1990 como um conceito de programação que permitia que partes do HTML DOM fossem atualizadas sem atualizar completamente a página, tornando nossos projetos mais dinâmicos e interativos. E isso foi possível pela [XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHTTPRequest) (introduzida pelo Internet Explorer 5 em 1998)**. Como o próprio nome diz, esta API foi projetada para obter XML via HTTP - e algum tempo depois adicionou suporte para outros formatos como JSON, HTML e texto simples. Mas trabalhar com XMLHttpRequest era uma dor de cabeça naquela época, e por causa disso algumas bibliotecas como jQuery (criada em 2006) o abstraíram para torná-lo mais fácil de usar.

**Após a evolução do JS, a Fetch API foi introduzida em 2015 e se tornou o padrão para lidar com solicitações de dados hoje em dia.** Até fevereiro deste ano, a Fetch API funcionava apenas no lado do navegador, mas agora [também está funcionando no lado do Node.js](https://blog.logrocket.com/fetch-api-node-js/) - mas é apenas um experimento, por enquanto precisamos usar bibliotecas como [API Axios](https://axios-http.com/docs/intro) para trabalhar melhor com solicitações de dados em Node.js.

## Importantes conceitos de JS: async, callback functions, promise

Antes de entrarmos na Fetch API, vamos entender alguns conceitos de JavaScript (para uma explicação completa, veja as referências no final deste artigo):

### O que é async em JavaScript?

Por padrão, **JavaScript funciona de forma síncrona como uma linguagem de programação de thread único**, o que significa que um processo deve ser concluído antes que outro seja iniciado. **No entanto, existem algumas maneiras de garantir que os processos funcionem juntos ao mesmo tempo em JS, tornando nosso código assíncrono.**

### Funções de Callback

Uma das maneiras mais antigas e comuns de lidar com código assíncrono em JS é usar funções de callback. **É um conceito de JS para dizer a uma função: "espere para executar no futuro, não agora".** E há muitas maneiras de implementá-lo, por exemplo, quando precisamos obter alguns dados externos e esperar que o servidor responda para então fazer outra coisa. É aqui que o AJAX entra em ação e o jQuery facilitou isso com o uso do método `$.ajax()` de sua biblioteca.

Mas o problema com os callbacks começa quando precisamos aninhá-los para executar diferentes processos - o que é chamado de [callback hell](http://callbackhell.com/) - tornando nosso código muito difícil de ler e manter.

### Promise em JS

O ES2015 introduziu Promise, uma moderna alternativa de evitar callback hells.

> "The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value." -[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

_Tradução: O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante."_

**Em poucas palavras, uma Promise atua como um proxy para um valor desconhecido que eventualmente se tornará disponível em algum momento, terminando como um estado resolvido se tudo correr bem, ou um estado rejeitado se algo der errado.**

Usando uma Promise chamamos `.then()` para ser executado caso o resultado for resolvido, ou `.catch()` se for rejeitado. Além disso, também podemos encadear Promises, fazendo com que uma Promise retorne outra Promise. Dê uma olhada no exemplo abaixo:

```js
let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) {
    /* code if successful */
  },
  function(error) {
    /* code if some error */
  }
);
```

_O exemplo acima é da W3School._

## O que é Fetch API em JavaScript e como usá-lo?

Antes de qualquer explicação sobre a Fetch API, quero mostrar sua sintaxe:

```js
fetch('/https://api.github.com/users/diogorodrigues');
```

O código acima simplesmente fará uma solicitação HTTP ao domínio da API do GitHub para obter alguns dados `.json`. Que código maravilhoso e conciso, não é?!

**Também introduzida no ES2015, a Fetch API surgiu como uma sucessora moderna de `XMLHttpRequest` e o método `fetch()` espera um caminho para um recurso como entrada e retorna uma Promise, possibilitando a execução de uma função se resolvida ou rejeitada.**

```js
fetch('https://api.github.com/users/diogorodrigues')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

No exemplo acima você pode ver o método `fetch()` trabalhando junto com `.then()` e `.catch()` já que a API Fetch usa Promise nos bastidores:

1. Faça uma solicitação HTTP para o domínio da API do GitHub
2. Se resolvido, converta os dados em JSON usando o método `.json()`
3. Como o método `.json()` retorna outra Promise, se resolvido, exiba o resultado no console.
4. Caso algum dos passos acima falhe, exiba o erro no console

## Async/Await e Fetch API

**Async/Await foi introduzido no ES2017 e funciona como um sintaxe estilosa para Promises, possibilitando trabalhar com funções assíncronas.**

Veja o código e sua descrição abaixo para entender melhor como implementar Async/Await com a Fetch API:

```js
async function getUserData() {
  try {
    const response = await fetch('https://api.github.com/users/diogorodrigues');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

O código acima funciona da mesma forma que o anterior. A diferença aqui é que não precisamos mais usar a sintaxe de Promise, em vez disso usamos um wrapper para reestilizar a promessa, tornando-a mais fácil de ler e usar. Usamos a palavra-chave `async` para tornar esta função assíncrona e `await` para bloquear a execução do código dentro da função assíncrona até que o processo termine. Em seguida, usamos `try/catch` para lidar com o status resolvido e rejeitado.

Outra maneira de usar try/catch com funções assíncronas é manipular o `catch` fora da função - quando ela é executada:

```js
async function getUserData() {
    const response = await fetch('https://api.github.com/users/diogorodrigues')
    const data = await response.json()
    console.log(data)
}

getUserData.catch(err) {
    console.log(err)
  }
```

## Referências

- [AJAX no wikipedia](<https://en.wikipedia.org/wiki/Ajax_(programming)>)
- [XMLHttpRequest API no MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHTTPRequest)
- [Programação Assíncrona JavaScript e Callbacks no Node.js](https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks)
- [Callbacks no MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [Promises no MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Entendendo Promises JavaScript no Node.js](https://nodejs.dev/learn/understanding-javascript-promises)
- [Fetch no JavaScript.Info](https://javascript.info/fetch)
- [Async/await no JavaScript.Info](https://javascript.info/async-await)

## Conclusão

**Nos primórdios da web, o conceito AJAX foi fortemente usado junto com a API XMLHttpRequest. Hoje em dia temos uma maneira melhor e moderna de lidar com dados de forma assíncrona usando Fetch API.** Espero que você tenha entendido alguns conceitos importantes de JavaScript e como implementar `fetch()` neste artigo. Fique a vontade para tirar qualquer dúvida e não pare por aqui, dê uma olhada nas referências acima para entender melhor.

Até a próxima! 😁
