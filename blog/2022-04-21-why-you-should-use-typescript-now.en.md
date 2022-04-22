---
title: 'Why you should use Typescript now'
date: '2022-04-21 01:21:23'
description: I just finished a crash course to update my knowledge on the main features of Typescript and I really want to share with you why all JavaScript developers should use this language as soon as possible. And I hope to make you as fascinated by TS as I am.
category: 'Development'
background: '#353b48'
featuredImage: '/assets/img/blog/why-you-should-learn-typescript.jpg'
---

**My first contact with [Typescript](https://www.typescriptlang.org/) was in 2014 when developers from the open source project called [Definitely Typed](https://github.com/definitelytyped/definitelytyped/#definitelytyped) invited me to help with the visual design of DT. It was an amazing experience and I collaborated with the creation of the [logo](https://www.typescriptlang.org/community) and the website interface. Some time later Microsoft acquired the project and it is now a famous and official MS open source repository (and the logo I created is until now the official project brand 😁).**

But it wasn't until 2018 that I really started learning Typescript because of the React library. Like many developers, I first learned ProtoTypes (a way to add types in React code) and then switched to Typescript - and I fell madly in love with it.

_This article will not focus on the technical code, but on the benefits of why TS is awesome. Feel free to take a look at the [Typescript documentation](https://www.typescriptlang.org/docs/handbook/intro.html) at any time._

## What is Typescript?

Created and maintained by Microsoft, in a nutshell, **Typescript is a superset of JavaScript**, which means that TS is, in the end, a programming language built on JS that makes writing script code easier and more powerful.

> “TypeScript is JavaScript with syntax for types.” - [Typescript](https://www.typescriptlang.org/)

It’s important to notice that TS can’t run directly inside browsers, it needs to be transpile in regular and supported JavaScript. But don’t worry, I’ll talk about it in the next section.

## What’s the idea behind Typescript?

### Add types to JavaScript and catch errors before runtime

As its name implies, **the main funtion TS has is add types to the JavaScript code**.

Unlike many others, JavaScript is a dynamically typed programming language. This means that if we declare a variable, we don't need to specify its type because JS will infer the type based on the value assigned to it at runtime. So, if we declare `let name = "Alex"`, JS will infer the type of variable "name" as string. If we change its value to `name = 6`, the type will now be "number". That’s one of the reasons JS is very popular.

But when we have static types, catching errors becomes much easier and most of them will be caught directly in our IDE - before runtime. So **if we try to assign a number to a variable that was typed with string we will get an error**. And right after fixing the bugs the code will be transpiled. And that greatly improves our productivity and makes our code much safer.

[[media]]
| ![Typescript code example](/assets/img/blog/typescript-code.png)

### Allow use of modern JavaScript features and more

**Typescript is more than a language, it's also a tool. It is a powerful compiler that you can run on top of your code to compile your TS code to JavaScript.** And because of that you can use all the new features and all the advantages of modern JS in the development environment and then generate regular and supported JS code that browsers can understand.

And in addition, TS also comes with a bunch of other features that make our life a lot easier, such as [Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces), [Decorators](typescriptlang.org/docs/handbook/decorators.html), [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) and more.

[[media]]
| ![Typescript compiler infographic](/assets/img/blog/typescrit-compiler.jpg)

## Why should you start using Typescript now?

Well, in 2019 [AirBnb claimed 38% of bugs could have been prevented by TypeScript](https://twitter.com/swyx/status/1093670844495089664).

According to [2021 State of JS survey](https://2021.stateofjs.com/en-US/other-tools/#javascript_flavors) (and [2020](https://2020.stateofjs.com/en-US/technologies/javascript-flavors/#javascript_flavors_experience_ranking)), Typescript has been highly successful among JS developers.

The [StackOverflow survey of 2021](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages) shows Typescript is one of the most loved languages.

This another [report of 2021 from Github](https://octoverse.github.com/#top-languages-over-the-years) shows Typescript as one of the top languages over the years.

Last month, [Microsoft published a proposal to add type sintaxe directly to JavaScript](https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/). And here you can check its [proposal of types as comments on Github](https://github.com/tc39/proposal-type-annotations).

### Main advantages of Typescript:

- Add static types to JavaScript
- Prevent errors by validading your JavaScript ahead of time
- Use of the new features of JS
- Can be used in both front-end and back-end sides
- Generate cross-browser compatible JS code through its compiler
- Minimal learning curve if you already know JS
- IDE support with code navigation and autocompletion
- And more

I hope I have convinced you that TS is very powerful and useful. But if you haven't learned this language yet, I really recommend [learn more about Typescript by reading its documentation](https://www.typescriptlang.org/docs/handbook/intro.html) and taking this [crash TS course](https://www.udemy.com/course/understanding-typescript/) if you prefer learn on this way.

Taking the course above I developed this [small project to try out all the Typescript features I learned and also explored a lot of Classes and Decorators](https://github.com/diogorodrigues/labs/tree/master/typescript). Feel free to take a look at it on my Github.

## Conclusion

**The bigger the project, the greater the need to use Typescript.**

As a fan of Typescript, I think it's a language that's being mandatory for most big JavaScript projects these days because of the benefits explained in this article. If you know JavaScript, the learning curve will be minimal and I'm sure you'll see how amazing it is to use.

Using Typescript doesn't mean that the code will never have bugs, but most of them will be caught before runtime, which will greatly improve the productivity of the team.

Let me know if you already tried TS before and what’s your thoughts about it.

See you next time. 😁
