---
title: 'CSS-in-JS and the death of traditional CSS'
date: '2020-07-22 01:21:23'
description: "Despite the evolution of CSS over the last few years (like CSS vars, for example), it still has several problems, especially when used in larger projects. And because of this CSS-in-JS emerged as a set of ideas to solve these complex CSS problems: modularity, specificity, class name conflicts, scope and more."
category: CSS
background: '#353b48'
featuredImage: '/assets/img/blog/css-in-js.jpg'
---

Since when I started my career as a web designer until now, as a front-end developer, CSS is part of my professional identity. And I can’t imagine my day to day development without thinking about styling with CSS. But the question is: how do I usually create my CSS these days?

**The way we think about styling and using CSS is changing and some discussions about the death of traditional CSS have appeared. So, in this article, I'll show the evolution of CSS since its creation and give you some personal reflections on the current state of that language.**

## A brief history of CSS

Well, to understand the current state of CSS, let's quickly go back to the old days of web development and understand why CSS, as a native language, was created and analize its evolution to this day.

### CSS Timeline

- **1994**: Among some style language proposals, the first draft of the CSS (Cascading Style Sheets) was released by [Håkon Wium Lie](https://www.wiumlie.no/en) as a solution to style web documents - the same year that [Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/) founded the [World Wide Web Consortium (W3C)](https://www.w3.org) and HTML has established itself as a universal document format.

- **1996**: CSS level 1 finally emerged as a W3C Recommendation in the end of 1996 and Microsoft Internet Explorer 3 became the first commercial browser to support it. At that time, CSS1 allowed web designers to set just basic properties, such as fonts, colors and other minimal features.

- **1998**:  W3C published CSS level 2 which added support for positioning properties and table content. It also included support for media types, web fonts (the [polemic ability to embed fonts in a web document](https://www.w3.org/Fonts/Misc/eot-report-2008)) and some other properties related to user interface.

- **1999**: W3C started working on CSS Level 3 - the version we are now familiar with. The point here is also the introduction of modules to release independent features instead of new versions of the language.

- **2011**: CSS 2.1 was released to correct a few errors in the CSS2 specification: some parts have been altered, and some parts removed.

- **2011+**: CSS level 3 modules were released and added many new features that allowed developers to style HTML elements with less CSS code, such as: box shadow, text shadow, new ways to describe colors (RGBA, for example), gradients, opacity, animations, transforms, media queries and more. CSS3, the latest version of CSS, is totally compatible with former CSS versions and continues focusing on developing new independent features through its modules.

Read more about the CSS timeline [here](https://www.w3.org/Style/CSS20/history.html). Or see some specific articles: [CSS 1](https://www.w3.org/Press/CSS1-fact.html), [CSS 2](https://www.w3.org/TR/CSS2/), [CSS 2.1](https://www.w3.org/TR/2011/REC-CSS2-20110607/), [CSS 3](https://developer.mozilla.org/en-US/docs/Archive/CSS3).

> “There has never been a CSS4. There will never be a CSS4. CSS4 is not a thing that exists.” - [Tab Atkins, 2012](https://www.xanthir.com/b4Ko0) - member of the CSS working group at W3C. He also works for Google on the Google Chrome Team.

While for a long time people referred to CSS new features as CSS 3, now we no longer need to do it. It’s just CSS as Rachel Andrew explained in [her article](https://rachelandrew.co.uk/archives/2016/09/13/why-there-is-no-css4-explaining-css-levels/).

But, if a new version of CSS existed, should we put the following features under the CSS4 flag? Grid, Variables, Flexbox…

### CSS solutions for specific problems

**As part of CSS evolution, many tools have been created to solve some specific CSS problems:**

- **CSS Resets**: [Eric Meyer's solution](https://meyerweb.com/eric/tools/css/reset/) was one of the most famous CSS Resets - a group of CSS declarations used to reduce the differences between the browser’s default styles: heights, margins and font sizes of heading for example.

- **Pre-processors**: [CSS preprocessors](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor#:~:text=A%20CSS%20preprocessor%20is%20a,inheritance%20selector%2C%20and%20so%20on.) are amazing tools that work with a pre-processing engine that implements nesting selectors, variables, mixins, extends and logic in stylesheets. However, as the CSS has been improved a lot, some of these features are no longer needed at the moment. And here are some of the most popular CSS preprocessors: [Sass](https://sass-lang.com/), [LESS](http://lesscss.org/), [Stylus](https://stylus-lang.com/) and [PostCSS](https://postcss.org/).

- **Component based thinking**: a lot of concepts have emerged to help us to organize our styles in order to avoid CSS conflicts and improve the scalability and maintenance of them. [Atomic Design System](https://bradfrost.com/blog/post/atomic-web-design/), [BEM](http://getbem.com/), [SMACSS](http://smacss.com/) and [OOCSS](http://oocss.org/) were some of those tools.

- **Modular CSS and scope**: By nature, CSS doesn't work with local scope and it’s one of the biggest problems of this language. Because of this, [CSS Modules](https://github.com/css-modules/css-modules) was created to make sure that the class names will be unique to avoid style conflicts.

## What’s CSS-in-JS?

In a nutshell, CSS-in-JS is not a specific library, but a set of ideas for solving old complex CSS problems with new solutions in javascript. And it has been gaining audience since component-based JS frameworks appeared in front-end development: React, Angular, Vue…

> “For three years, I have styled my web apps without any `.css` files. Instead, I have written all the CSS in JavaScript. (...) I can add, change and delete CSS without any unexpected consequences. My changes to the styling of a component will not affect anything else. If I delete a component, I delete its CSS too.” - Max Stoiber, co-creator of styled-components, the most popular CSS-in-JS library said it in [his article](https://twitter.com/mxstbr)

JavaScript has become a growing part of our work and new approaches are emerging all the time. So now we can also use the power of JS to change the way we create our styles and improve the performance of our applications.

> “CSS-in-JS has been one of the biggest developments of the past few years in the CSS world. Just like preprocessors bypassed CSS to introduce their own set of new features over a decade ago, CSS-in-JS libraries piggyback on JavaScript's power to make their own path without waiting for CSS to catch up.” - [The State of CSS in 2019 Survey](https://2019.stateofcss.com/technologies/css-in-js/)

### Advantages of CSS-in-JS

There are many benefits to using CSS-in-JS and I really think it can help us a lot in our projects, because we won't have to deal with the painful application style maintenance in the same way that we used to do with preprocessors and with the manual definition of classes using BEM.

I think there are three key points to keep in mind when using this new approach to working with styles:

- **Dead code elimination**: CSS-in-JS safely removes redundant and unused CSS from our code, reducing the file size without side effects.

- **CSS isolation**: CSS-in-JS automates the local scope, generating unique class names by default when compiling CSS to avoid style conflicts - similar to what we used to do manually using BEM. It also abstracts the CSS model to the component level.

- **State-based styling**: due to modularity and isolation, properties can be easily shared between CSS and logic sides in order to add dynamic functionalities to your style rules. Let’s imagine we are building a component that needs to present a score. So, depending on the result, we can define different colors for positive and negative numbers just by observing the HTML content directly in the CSS declaration. For this, we used to create different classes to handle those different colors. But now it's much easier.

### The most famous CSS-in-JS Libraries

To deal with CSS-in-JS there are several similar libraries, such as:

- **[Aphrodite](https://github.com/Khan/aphrodite)**
- **[Emotion](https://emotion.sh/docs/introduction)**
- **[Glamor](https://github.com/threepointone/glamor)**
- **[Styled Components](https://styled-components.com/)**
- **[Styled JSX](https://github.com/vercel/styled-jsx)**

Among all these libraries one that has gained a lot of popularity is [Styled Components](https://styled-components.com/) due to some advantages:

- **Automatic [CSS Critical](https://web.dev/extract-critical-css/)**: the CSS for above-the-fold (the content before scrolling) is loaded first, in order to render the content to the user as fast as possible.

- **Removing unused CSS**: great to performance because it reduces the size file.

- **Defined scope**: it handles conflicts by not allowing different component classes to have the same name.

- **Dynamic styles**: we are able to change the styles according to the component's props and themes.

- **Automatic vendor prefixing**: it handles differences between browsers by adding the correct prefixes - which can be pre-configured according to your needs, BTW.

- **Simplified and safe maintenance**: since the scope is reduced, we get more confidence to maintain the code.

- And much [more features](https://styled-components.com/docs/basics#motivation).

## Is the tradicional CSS dying?

As you could see, the traditional CSS architecture isn’t designed to be used with larger projects. And in a world of React, Vue, Angular and similar frameworks, that have been widely used, we need better solutions to solve some painful CSS problems.

CSS preprocessors have added a lot of power to stylesheets and things like CSS modular, nesting and variables have helped me in many different projects - BTW, I created this [boilerplate using Gulp and Stylus](https://github.com/diogorodrigues/iceberg-boilerplate) in the past to develop my web applications. But now the world of front-end development is different and solutions based in React (like GatsbyJS, NextJS and React Native) are part of my current daily development routine and I need something more powerful.

And because of these changes in the way we think about styling and create CSS, several discussions have been emerging about the death of traditional CSS as you can see in this [Samson Zhang article](https://www.samsonzhang.com/2020/05/13/the-artistry-of-css-and-its-death-a-reflection-about-css-and-js-frameworks-and-the-evolution-of-css.html) and in this other [Chris Coyer article](https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/) as well.

The point is: **I think the question is not about getting rid of Vanilla CSS, but adding JavaScript to enhance our styles. The traditional CSS way is totally good for small sites and applications, but large projects require a better CSS architecture. And that's why CSS-in-JS is the most popular solution today.**

It's important to note that CSS-in-JS also has disadvantages as you can see [in this article](https://www.freecodecamp.org/news/the-tradeoffs-of-css-in-js-bee5cf926fdb/). The benefits provided by this new way of writing CSS can also be achieved using a set of other tools, such as: preprocessors, CSS Modules... So it's always important to evaluate the project and technologies in order to find the best solution. And keep in mind that the problem can often be the lack of understanding of the purpose of a tool and its misuse. And that in some cases, CSS Vanilla may be the best alternative. ✌

## Conclusion

I showed a perspective on the current state of CSS, its default problems and some solutions that have been created over time. It's not my intention to convince you that CSS-in-JS is the best solution ever and that you should use it on all projects. But, in my perspective, if you're working with some component-based JS structures (like React, for example), I think this new way of writing CSS might be a good idea to deal with old and complex style problems.

**I love CSS and, for me, writing CSS is an art. I fully agree that traditional CSS will still be used extensively depending on the project, after all, many sensational CSS features have emerged (as you can see [in this article](https://www.diogorodrigues.dev/blog/6-powerful-css-techniques-you-can-use-instead-javascript)). But the maintenance of CSS today, which is a critical point and needs to be improved.**.

What about you? What do you think is happening with CSS? Have you ever tried CSS-in-JS?
