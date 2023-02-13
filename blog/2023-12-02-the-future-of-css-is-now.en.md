---
title: 'The future of CSS is now'
date: '2023-02-12 01:21:23'
description: Several web reports were published earlier this year and I'll give you a rundown of what's happening around CSS and what are the best features we can look forward to this year.
category: 'Development'
background: '#353b48'
featuredImage: '/assets/img/blog/the-future-of-css-is-now.jpg'
---

**If you, like me, started working with web development more than a decade ago, you probably remember the successful arrival of CSS version 3, right? Well, that release really improved the way we develop using CSS forever, but a lot has changed since then and now CSS is going to a new level again.**

In this article I'll show how projects like [Interop](https://wpt.fyi/interop-2023) and [The State of CSS survey](https://2022.stateofcss.com/en-US/) have contributed a lot to this new phase of CSS. Here you will also see that many features we dreamed of before are now coming true. So, grab your cup of tea/coffee and follow me.

## CSS is really being taken seriously

You may not have heard of it yet, but **big companies on the web have been working together for the past year to solve major browser compatibility issues**. The project, called [Interop - by companies like Google, Microsoft, Mozilla and others](https://wpt.fyi/interop-2023) -, was a success and we now have nearly 100% cross-browser compatibility for properties like: sticky positioning, cascade layers, aspect-ratio, flexbox, grid and transforms.

**Now, they are focused on achieving their goal by the end of 2023, with no less than 26 focus areas accomplished. Not all of these areas involve styles, but you can find CSS features like: border-image, container queries, color spaces and functions, pseudo-classes, custom properties, math functions and much more.**

> "Interop 2023 is a cross-browser effort to improve the interoperability of the web — to reach a state where each technology works exactly the same in every browser." - [Interop](https://wpt.fyi/interop-2023)

To help you understand some of these CSS areas, I found this great video from Google team on YouTube:

https://www.youtube.com/watch?v=Xy9ZXRRgpLk&ab_channel=GoogleChromeDevelopers

However, if you prefer textual content, I really recommend you take a look at the articles below:

- [Interop 2023: continuing to improve the web for developers](https://web.dev/interop-2023/) by web.dev.
- [Pushing Interop Forward in 2023](https://webkit.org/blog/13706/interop-2023/) by webkit.org.

## What the community have to say about CSS

**A report I like to see every beginning of the year is [The State of CSS survey](https://2022.stateofcss.com/en-US/), where we can not only check trends to anticipate what's to come in the coming years, but also get browser vendors to prioritise their work on certain CSS features.**

That said, this type of survey can be a valuable resource for browsers to understand what features developers are interested in but are not yet fully supported. For example: @container, subgrid, pseudo-classes and others.

[Lea Verou](https://lea.verou.me/), reference in the front-end community, is ahead of this edition of the survey and said:

> "I predict that the stars of 2023 will be native Nesting, and color manipulation. Nesting is currently the primary reason people still use preprocessors, so being able to rely on it natively will be incredibly freeing." - Lea Verou

## Some CSS features to prove why the future is now

I could say that grid and flexbox are the two main features I would add to the list, but they are common nowadays as everyone has heard so much about them. So **I decided to focus on other CSS features that I think are changing the way we develop using CSS now (or in the near future)**.

### [@layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

**Cascade Layers is an incredibly powerful CSS feature as it allows us to define explicit layers for [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity), changing the language's way of determining which declarations are most relevant to an element.** How fantastic, isn't it?

Check out the code below extracted from MDN:

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

First, two layers were defined and had their specificity determined by their order in the listing. The last layer listed wins. Then those named cascade layers were created with their CSS rules inside. There are many other ways to configure it, have a look at the [MDN documentation about CSS @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) to better understand how @layers works.

### [:has](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)

**Have you heard about a “[parent selector](https://css-tricks.com/parent-selectors-in-css/)” in CSS? This is an old idea that has now become a reality.**

From the beginning, CSS only provided one way to select an element: either a child or the rightmost element. Now, the `:has()` pseudo-class introduces a way to have a reverse selection (this means we can now select a parent based on a child or the leftmost element). It might be a bit confusing to explain, so let's look at an example:

```css
div:has(p) {
  background: red;
}
```

The CSS code above will select a div element that contains one or more paragraph elements. Do you see how this inverts the logic? And there are much more possibilities, take a look at its [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/:has).

### [@container](https://developer.mozilla.org/en-US/docs/Web/CSS/@container)

**This is another breakthrough CSS feature that works similarly to `@media` queries, but instead of relying on the viewport width to adjust styles, [@container](https://developer.mozilla.org/en-US/docs/Web/CSS/@container) relies on the parent element size to add the changes.** This will probably give us a bunch of possibilities to improve the way we create CSS rules for responsive effects.

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

First we need to choose an element to be the container by defining two properties for it: `container-name` and `container-type`. In this case, the div was chosen to be the container. Then we can simply use a conditional group rule to group the styles of this div's children in the same way we already do for `@media` queries. That way, the children will have rules responsive to the parent's width. That’s brilliant, don’t you agree?

### [subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid)

**[Subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid) is another big change that will make it possible not only direct children become grid items of an element defined as grid, but all its children at different levels.** Can you imagine how many possibilities this will bring us, since we will no longer need to create independent grids to deal with nested elements?

Take a look at the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid) to understand more about subgrid and its power.

### Nesting?

All the previous features are already a reality and, except for `@layers`, which is already supported by all major browsers, the others are planned to work and be implemented in several browsers later this year.

**But this is not yet a reality for Nesting, but like Lea Verou, I also believe it can be an innovative native feature that will bring much more freedom for us developers. Once we have it, some preprocessors will no longer have power over us. We'll see what comes out this year and keep your fingers crossed with me that we'll have a discussion about this feature natively.**

## Conclusion

**Having new [CSS specifications and drafts on W3C](https://www.w3.org/Style/CSS/current-work.en.html) is super important, but as a developer I believe that the dream comes true when we can use these features in the browser during our day to day development.**

Initiatives like [Interop](https://wpt.fyi/interop-2023) and [The State of CSS survey](https://2022.stateofcss.com/en-US/) are making a huge contribution to accelerating browser compatibility and, more importantly, adding support for new CSS features quickly.

It looks like preprocessors will soon need to find another way to be more attractive than native CSS. What do you think?

See you next time. 😁
