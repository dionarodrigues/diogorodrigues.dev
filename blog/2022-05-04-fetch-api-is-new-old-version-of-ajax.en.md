---
title: 'Fetch API is new old version of AJAX'
date: '2022-05-04 01:21:23'
description: If you started your developer career about a decade ago, you probably know how complicated it was to use AJAX in our web applications. However, by now we all know that modern vanilla JavaScript introduces us to several powerful functionalities, including the Fetch API - an easier way to get data from the server without reloading the page.
category: 'Development'
background: '#353b48'
featuredImage: '/assets/img/blog/fetch-api-is-new-old-version-of-ajax.jpg'
---

**The term [AJAX (Asynchronous JavaScript and XML)](<https://en.wikipedia.org/wiki/Ajax_(programming)>) emerged in the late 1990s as a programming concept that allowed parts of the HTML DOM to be updated without completely refreshing the page, making our projects more dynamic and interactive. And it was made possible by the [XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHTTPRequest) (introduced by Internet Explorer 5 in 1998)**. As its name says, this API was designed to get XML via HTTP - and some time later it added support for other formats like JSON, HTML and plain text. But working with XMLHttpRequest was a pain back then, and because of that some libraries like jQuery (created in 2006) abstracted it to make it easier to use.

**Following the evolution of JS, the Fetch API was introduced in 2015 and has become the standard for handling data requests today.** Until February of this year, the Fetch API only worked on the browser side, but now [it's also working on the Node.js side](https://blog.logrocket.com/fetch-api-node-js/) - but it’s just an experiment, for now we need to use libraries such as [Axios API](https://axios-http.com/docs/intro) to work better with data requests in Node.js.

## Important JS concepts: async, callback functions, promise

Before we jump into the Fetch API, let’s understand some JavaScript concepts (for a complete explanation, see the references in the end of this article):

### What is async in JavaScript?

By default, **JavaScript works synchronously as a single-threaded programming language**, which means that one process must complete before another starts. **However, there are a few ways to ensure processes work together at the same time in JS by making our code asynchronous.**

### Callback functions

One of the oldest and most common ways of dealing with asynchronous code in JS is to use callback functions. **It's a JS concept to say a function: "wait to run in the future, not now".** And there are many ways to implement it, for example when we need to get some external data and wait for the server to respond then do another thing. This is where AJAX comes into play, and jQuery makes it easy by using its library's `$.ajax()` method.

But the problem with callbacks starts when we need to nest them to execute different processes - which is called [callback hell](http://callbackhell.com/) - making our code very difficult to read and maintain.

### Promise in JS

ES2015 introduced Promise, a modern alternative to avoid callback hells.

> "The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value." -[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

**In a nutshell, a promise acts as a proxy for an unknown value that will eventually become available at some point, ending up as a resolved state if everything goes well, or a rejected state if something goes wrong.**

Using a Promise we call `.then()` to be executed if the result is resolved, or `.catch()` if it is rejected. In addition we can also chain Promises, making one Promise return another Promise. Have a look at the example below:

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

_The example above is from W3School._

## What’s Fetch API in JavaScript and how to use it?

Before any explanation about Fetch API, I want to show you its syntax:

```js
fetch('/https://api.github.com/users/diogorodrigues');
```

The code above will simply make an HTTP request to the GitHub API domain to get some `.json` data. What a wonderful and concise code, isn't it!

**Also introduced in ES2015, the Fetch API emerged as a modern successor to `XMLHttpRequest` and the `fetch()` method takes a path to a resource as input and returns a Promise, making it possible to execute a function if resolved or rejected.**

```js
fetch('https://api.github.com/users/diogorodrigues')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

In the example above you can see the `fetch()` method working together with `.then()` and `.catch()` as the Fetch API uses Promise behind the scenes:

1. Make an HTTP request to the GitHub API domain
2. If resolved, convert it into JSON data by using `.json()` method
3. As `.json()` method returns another Promise, if resolved, display the result in the console.
4. In case any of the steps above fail, display the error in the console

## Async/Await and Fetch API

**Async/Await was introduced in ES2017 and works as a syntactic sugar for promises, making it possible to work with asynchronous functions.**

See the code and its description below to better understand how to implement Async/Await with Fetch API:

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

The code above works on the same way that the previous one. The difference here is that we no longer need to use promise syntax, instead of it we use a wrapper to restyle the promise, making it easier to read and use. We use the keyword `async` to make this function asynchronous and `await` to block the execution of code inside the asynchronous function until the process terminates. Then we use `try/catch` to handle the resolved and rejected status.

Another way to use try/catch with async functions is to handle the `catch` outside the function - when it runs:

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

## References

- [AJAX on wikipedia](<https://en.wikipedia.org/wiki/Ajax_(programming)>)
- [XMLHttpRequest API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHTTPRequest)
- [JavaScript Asynchronous Programming and Callbacks on Node.js](https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks)
- [Callbacks on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [Promises on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Understanding JavaScript Promises on Node.js](https://nodejs.dev/learn/understanding-javascript-promises)
- [Fetch on JavaScript.Info](https://javascript.info/fetch)
- [Async/await on JavaScript.Info](https://javascript.info/async-await)

## Conclusion

**In the early days of the web, AJAX concept was strongly used along with XMLHttpRequest API. Nowadays we have a better and modern way to handle data asynchronously by using Fetch API.** I hope you understood some important JavaScript concepts and how to implement `fetch()` in this article. Feel free to make any questions and don’t stop here, take a look at the references above to a better understanding.

See you next time. 😁
