---
title: "React's new killer documentation focused only on functional components"
date: '2022-12-21 01:21:23'
description: It's no secret that the old React documentation is useless most of the time because it no longer reflects the modern way of developing using this framework. In this article, we'll explore its new documentation and discuss why it's awesome.
category: 'Development'
background: '#353b48'
featuredImage: '/assets/img/blog/react-new-beta-documentation.jpg'
---

Released alongside [version 16.8 in early 2019, React Hooks](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html) quickly became popular and saw wide adoption in the front-end community as, through this release, the complexity of writing with class-based components was replaced with stateful functional components and some other great features. And while we can find good explanations of these new features in the documentation, the marjority of the examples have continued to use classes.

Now, more than 3 years after the revolutionary changes, **React has released a BETA version of its documentation removing classes from its explanation and focusing on modern ways of development using hooks with interactive examples.**

> “We aim to switch this site to be the main one once we reach content parity with the existing React documentation. The old React website will be archived at a subdomain so you’ll still be able to access it. Old content links will redirect to the archived subdomain, which will have a notice about outdated content.” - [BETA React documentation](https://beta.reactjs.org/)

_P.S. It’s important to note that while I write this article the new content are almost 100% finished._

## What you can find in the new React documention

While this React BETA documentation isn't very extensive, rather than going topic by topic, I'll highlight some of its key advantages below.

### Quick Start is really a very quick start

**For me this is a game changer because unlike the old version, now we can play around with React code via interactive code samples right in its documentation.** Isn’t this amazing?

A complete introduction, very simple, well explained and without the need to setup any project for those who are starting to study now.

[[media]]
|![Demonstration of React documentation interactive sample](/assets/img/blog/react-docs-interaction.gif)

### Great explanation of the best way to use React Effects

Personally, I think the work **they've done to explain the Effects is brilliant.** It's really something I've been studying a lot and will definitely help me develop better code using React.

There are some extensive pages demonstrating [how to stop thinking of Effects as a lifecycle hook](https://beta.reactjs.org/learn/lifecycle-of-reactive-effects), but as [Effects as synchronisers with external systems](https://beta.reactjs.org/learn/synchronizing-with-effects). This confusion happens because we were used to comparing functional components using useEffect hook to class-based component lifecycles, but that doesn't make sense anymore.

https://twitter.com/dan_abramov/status/1157250198659354624

**Another amazing content is the [“You Might Not Need an Effect”](https://beta.reactjs.org/learn/you-might-not-need-an-effect) topic where we can understand how to remove unnecessary Effects** through many use cases and interactive code examples. You can find a good summary of this topic in the video below.

https://www.youtube.com/watch?v=bGzanfKVFeU&t=742s&ab_channel=BeJS

### State management mastering

I know this title sounds too risqué, but this React BETA documentation has a lot of content on [how to better structure states and ways to avoid bugs related to redundant or duplicate states](https://beta.reactjs.org/learn/managing-state), and much more.

> “Structuring state well can make a difference between a component that is pleasant to modify and debug, and one that is a constant source of bugs.” - React docs

Take a look at [Managing State section](https://beta.reactjs.org/learn/managing-state) and also in the [Referencing Values with Refs](https://beta.reactjs.org/learn/referencing-values-with-refs) topic to a better understanding of the use of states in React.

### More knowledge you can find in the new React documentation

Some other content I would like to highlight are:

- [React API Reference](https://beta.reactjs.org/apis/react) section containing everything for faster consultation with code snippets.
- “[How declarative UI compares to imperative](https://beta.reactjs.org/learn/reacting-to-input-with-state#how-declarative-ui-compares-to-imperative)” topic shows how to better write declaratives React components.
- “[Render and Commit](https://beta.reactjs.org/learn/render-and-commit)” to understand the steps in the process of rendering React components.
- “[Queueing a Series of State Updates](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates)” topic will explain why sometimes it doesn’t work and how solve it.
- “[Reusing Logic with Custom Hooks](https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks)” to learn how to share logic between components.

## Conclusion

**From basic to advanced topics, these docs cover everything you need to learn how to use the best of modern React to create user interfaces.** If you are new to the React world, this documentation will definitely help you a lot with the interactive examples. For experienced React developers, this documentation brings together several important advanced concepts that are sure to help you create better UI components.

Let me know what you think about the React BETA docs and which topic you think is most important to you.

See you next time. 😁
