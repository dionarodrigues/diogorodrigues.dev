---
title: 'Automating UI tests with Jest and React Testing Library'
date: '2020-10-14 01:21:23'
description: "What complex code is not easy to debug every developer knows. But not all developers know how to use the power of automated testing to verify the application behavior. Therefore, in this article, I will show you how to avoid wasting a lot of time trying to find UI bugs and also making sure that the program works as expected."
category: 'Web design'
background: '#353b48'
featuredImage: '/assets/img/blog/automating-ui-tests-with-jest-and-react-testing-library.jpg'
---

> “The more your tests resemble the way your software is used, the more confidence they can give you.” - [Kent C. Dodds](https://twitter.com/kentcdodds/status/977018512689455106), creator of React Testing Library

**Testing has become a major requirement for React projects today. And this is because this technique gives the team more confidence and helps to release the project quickly, since the code is more reliable.**

[Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/) are two tools that help us a lot to create tests for our React components. If you don’t know what I am talking about or if you want to learn more about it, stay with me. 😁✨

## Overview about testing

Although front-end testing is growing with React's popularity, I don't see it as a trend, but as a part that should be mandatory in any type of project that involves end user interaction coding.

### Advantages of writing tests

- Helps us to detect bugs earlier
- Provides us with our own documentation on the code
- Forces us to write better code when building small components with single responsibility
- Ensures the code will be more consistent across the team
- Gives us more confidence because it makes the application easy to maintain, allowing developers to safely refactor the code

### Types of tests

- **Unit testing:** is used to validate the operation of the smallest code units in the system. The idea is that this type of test needs to be simple and without any dependence on external functionality - of course, there are some exceptions where the component needs to work with data from the database or some other source, in which case we use mock (let's see more about that later).
- **Functional testing:** checks if multiple units work together.

### How to identify unit and functional testing

Let's imagine a search field that, when clicked, expands. When typing something, a suggestion box is shown with data from an API; and  if there are no suggestions, a feedback message is displayed.

Unit tests can be: check if the search field will expand when receiving focus; check if, when typing something, the API fetch method is called; check if there are no suggestions, a feedback message displayed…

Function tests can be: user simulation by clicking, typing, deleting...

### How to think testing

There is a good practice called test-driven development (TDD) that is used to ensure that our tests will cover all the functionality that the component must have before creating the component itself. In this way, we guarantee that the code will be agnostic, that is, everything has to work regardless of how the code was implemented.

**Basically the process is:**

- First, we need to create all the tests and they will all fail
- We then provide a simple solution for all tests to pass
- And finally, we refactor the solution in the best possible way

**Why is it important to create the tests before the component code?**

If the tests are created last, we tend to write the tests according to the code that was implemented, instead of the problem that must be solved. That is, the test can be oriented towards implementation instead of functionality, which can be a problem if the solution/implementation changes in the future.

## How to test react components

There are several tools to implement the tests as you can see in this [survey of JavaScript](https://2019.stateofjs.com/testing/) that place them in a ranking of interest and satisfaction of the developers.

In this article, we will focus on two of these testing tools that are very successful in the React community and which I am a huge fan of: jest and react testing library.

### Jest testing framework

> “Jest is a delightful JavaScript Testing Framework with a focus on simplicity.” - [Jest](https://jestjs.io/)

**[Jest](https://jestjs.io/) is a test runner that executes many tasks by using a few functionalities**. If you already worked with Gulp you can imagine something similar when we refer to jest but much easier to configure and focused on testing.

This library is open source, maintained by Facebook (the same creator of React) and can be used to test not only React components but any kind of JavaScript code: Typescript, Node, Vue...

#### Advantages of using Jest on React projects:

- Easy to understand and use
- Zero configuration (or just a minimum necessary)
- Well documented
- [Snapshot testing](https://jestjs.io/docs/en/snapshot-testing ) to prevent accidental UI changes
- Mocking function to work with fake data that must be provided by a database or other source
- Extensible framework - we can integrate other tools to work with it
- Fast and performance-focused - tests run in parallel
- Code coverage information to ensure that all code is being tested.

#### Watch the video below to better understand Jest through practical examples

https://www.youtube.com/watch?v=NHMIn723hQY&ab_channel=LogRocket

### React Testing Library (RTL)

> “React Testing Library is a set of helpers that let you test React components without relying on their implementation details.” - [React team](https://reactjs.org/docs/testing.html )

You can test the UI of React components just using the Jest testing framework, of course, but **[React Test Library (RTL)](https://testing-library.com/) provides extra lightweight utility functions for Jest to work with React components, saving your time and encouraging best testing practices** - it forces your application to be more accessible.

If you've worked with Enzyme (another test library created by AirBnb), you can probably imagine the benefits of RTL. The difference is that RTL is more modern and powerful to handle the graphical user interface: render the component, select it using the aria-label attribute and check its color, for example.

#### Benefits of React Testing Library:

- RTL encourages us to write better components through accessibility approaches
- Focus on how components look and behave in the DOM instead of props and states
- Great integration with Jest (by the way, Jest is the React team’s recommendation to use, as this library needs to work with a test runner)

RTL is awesome, we can create tests based on DOM elements using several different [queries](https://testing-library.com/docs/dom-testing-library/api-queries), then create a snapshot of the component to prevent any unexpected UI changes. Therefore, whenever the running test identifies any changes, the tests will fail. Thus, you can make the decision to update the snapshot or correct your code so that no differences are found. We can also use events to simulate user interactions: such as clicks and form fills, for example. Isn’t it awesome?

#### Watch the tutorial video below to better understand the React Testing Library through practical examples

https://www.youtube.com/watch?v=NE_aorvSeSQ&ab_channel=MaksimIvanov

RTL is built on top of [DOM Testing Library](https://github.com/kentcdodds/dom-testing-library-with-anything) that has specific libraries to work with many kinds of framework.

### Bonus - Jest Styled Components

[Jest Styled Components](https://github.com/styled-components/jest-styled-components ) is a dependency of Jest with a set of utilities for testing Styled Components: media-queries, theme…

## Conclusion

**As you can see, when using tests in React, we can be sure that the UI code does what we expect and they will be designed to focus first on needs (TDD) and user behavior (accessibility).**

I realize that many developers and companies see testing as just a lovely idea. But I think we need to **stop wasting time on debugging and take advantage of testing to gain more confidence, keep the code consistent across the team, and improve our code by following best practices and conventions**. ✌😁✨

Have you already tried these tools or not yet? Are you using a different approach to apply testing to React projects?
