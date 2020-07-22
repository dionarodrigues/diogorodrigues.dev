---
title: '6 Powerful CSS Techniques You Can Use Instead of Javascript'
date: '2020-06-11 01:21:23'
description: From custom variables to filters, animations or math operations, CSS has taken a lot of what we used to do in JavaScript and is becoming an incredibly powerful language. Let's take a look at some examples that we can do using only CSS.
category: CSS
background: '#353b48'
featuredImage: '/assets/img/blog/6-powerful-css-techniques-you-can-use-instead-javascript.jpg'
---

There are a lot of [discussions about CSS vs. JavaScript](https://dev.to/evilmartians/css-and-js-are-at-war-heres-how-to-stop-it-158a) and the battle is getting seriously once CSS is adding a bunch of amazing features and it's letting easier to do many things without JS.

CSS and JavaScript working together are powerful and have their merits, but I believe the more CSS takes control of the interface, the more resiliency and reliability the web-app will have just because:

- **CSS is natively fault tolerant**. This means that when CSS parse encounters a property that it doesn’t understand, it skips that and moves on. In other words, you apply your styles and expect them to work.

- **JavaScript is not fault tolerant**. Only one javascript syntax error can crash the whole app. That is, you control the styling and must check that it worked.

There are many [other points you can consider to use CSS instead JS](https://hackernoon.com/in-simple-terms-css-vs-javascript-abc9d709399d).

From things like transitions and custom properties to animations, filters or math operations, CSS is bringing us a new way to develop fantastic things that is much easier and simpler.

**In this article, I'll highlight some CSS amazing features (some of them really new) you may not know about, such as smooth scrolling, sticky navigation and other approaches that previously required multiple lines of JS tricks to work.** Let’s get started!

## 1- Smooth Scrolling

If previously a few lines of JS code were needed to add smooth scrolling on the page, we currently only need one line of CSS code. That’s awesome, isn’t it? We can now handle smooth scrolling on our website with `scroll-behavior` CSS property.

Let's see how it works!

```
html {
  scroll-behavior: smooth;
}
```

https://codepen.io/diogorodrigues/pen/PoZYYZy

As I write this, the scroll-behavior property works on Chrome and Firefox, but not yet on Edge, IE, or Safari (desktop or mobile). Read more about it in [Can I Use](https://caniuse.com/#feat=mdn-css_properties_scroll-behavior).

## 2- Sticky navigation

One of my favorite features, sticky navigation is basically a fixed element on the page that doesn't disappear when the user scrolls. So, instead of `offsetTo` and `window.scrollY` in JS, **now we can just use `position: sticky` in CSS**! 👌

```
header {
  position: sticky;
  top: 0;
}
```

https://codepen.io/diogorodrigues/pen/vYLBBdV

But you must understand the logic behind `position: sticky` to use it correctly once the structure of your HTML matters! (By the way, this is the reason because sometimes this property doesn't work).

Let's take a look at the following HTML structure:

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

The menu will only be able to stick on the area that its parent covers (main). So `position: sticky` has two main parts:

- **sticky item**: is the element that we defined with the `position: sticky` (nav). The element will float when the viewport position matches the position definition, for example: top: 0px .
- **sticky container**: is the HTML element which wraps the sticky item. This is the maximum area that the sticky item can float in. This “sticky parent” determines the scope on which the “sticky item” can act.
´´´

This feature can drastically enhance the user-experience, especially for websites that have a lot of scrolling.

Almost [100% of browsers support](https://caniuse.com/#feat=css-sticky). 🎉

## 3- Truncate text

CSS gave us two fantastic properties, `text-overflow` and `line-clamp`, which can do things like create ellipsis and gracefully cut off words without javascript or some other complex method to achieve this. Both properties are not new, but are very useful.

https://codepen.io/diogorodrigues/pen/NWxKKEq

Let's take a closer look.

### text-overflow

It controls how code handles situations where the text must be cut so as not to exceed a single line (for example, the title of the cards above). You can set its value to be ellipsis and that’ll give you the Unicode … character.

Both `white-space: nowrap` and `overflow: hidden` properties are required for the work of `text-overflow: ellipsis`.

```
.card-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

[100% support in modern browsers](https://caniuse.com/#search=text-overflow)

### line-clamp

It comes to play when you need to add a multi-line text limitation instead of just one (description of the cards above). Although it's part of the [CSS Overflow Module Level 3](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Specifications) which is currently "Working Draft", around 95% of browsers already support this property by using the prefix `-webkit-`. It's also important to consider that you can’t control the number of characters to show, but it's still fantastic.

We need to add the old flexbox implementation with `display: -webkit-box` and `-webkit-box-orient: vertical`.

```
.card-description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```

See [Can I Use](https://caniuse.com/#feat=css-line-clamp).

## 4- Custom properties: CSS variables

Although [CSS preprocessors](https://guide.freecodecamp.org/css/css-preprocessors/) (such as Sass, Less and Stylus) are a very useful and popular technology in the Javascript world because they extend CSS adding features like variables and functions for example, **we now have a powerful feature called CSS Custom properties, also known as CSS Variables**.

CSS variables help us keep our web applications consistent - DRY - and easy to develop themes and maintain. This feature is one of the main reasons preprocessors have been successful. [See more about it here](https://meiert.com/en/blog/css-dry-and-optimization/).

**When using native CSS syntax:** You no longer have to use any preprocessors to create variables. They cascade (like many things we are getting used to in our lovely traditional CSS 😍).

Creating a CSS variable is very simple, just set the variable using `--` and then we call a function called `var()` passing the variable we created as its argument. It’s A Piece Of Cake, isn't it?

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

Let’s roll :)

https://codepen.io/wesbos/pen/adQjoY

[CSS variables are supported in all major browser](https://caniuse.com/#feat=css-variables) except for IE 11.

## 5- Dark Mode

Since Apple introduced Dark Mode to macOS last year and CSS gave us a way to detect this using @media query, many large applications (such as Twitter and Google Maps, for example) already have it. ([Dark mode App list](https://darkmodelist.com/))

**Dark mode is not just about having a beautiful webpage or web application. It also came to help people:**

> "There are also people who actually need dark mode and use it as another accessibility tool, for example, users with low vision." - Thomas Steiner, Customer Solutions Engineer at Google Germany

> "Molly has Usher Syndrome; a condition that has left her deaf with 5–degree vision in one eye. (...) Reading the content in dark mode would be bearable for Molly, and might benefit others too — enhancing the experience for a user with a headache, or someone browsing in a poorly lit room. Designing for the few, makes things better for the many." - Charles Reynolds-Talbot, designer at the UK government

[Read more about it here](https://charlesrt.uk/blog/apple-need-a-dark-mode-for-people-like-molly-watt/).

And it can save a lot of energy as Thomas Steiner in [this article](https://web.dev/prefers-color-scheme/):

> "(...) dark mode is known to save a lot of energy on AMOLED screens. Android case studies that focused on popular Google apps like YouTube have shown that the power savings can be up to 60%."

A new CSS feature that allows us to detect if the user has dark mode enabled is called `prefers-color-scheme` and it's already [compatible with Chrome, Firefox, Safari and Opera](https://caniuse.com/#feat=prefers-color-scheme).

When combined with variables, it makes dynamic light and dark modes easier than ever for your visitors.

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

Depending on your device's settings, you'll see the styles for dark or light.

https://codepen.io/diogorodrigues/pen/VweZwjN

## 6- @supports

For a long time, developers have been using third-party polyfills, such as [Modernizr](https://modernizr.com/) (a JS solution), to detect which CSS features are supported by the current browser. For example, when setting the `-webkit-line-clamp` for an element, you can check if this property works in the browser and you might want to provide some fallback, otherwise.

However, CSS created the `@supports` rule that allows us to perform browser feature detection directly from our style sheet. It's so awesome!

The `@supports` directives are very similar to @media queries and you can also do various combinations using AND, OR, and NOT conditionals:

```
@supports (-webkit-line-clamp: 2) {
    .el {
        ...
    }
}
```

The above example checks whether the browser supports the `-webkit-line-clamp` property. If it does, that is, if the condition returns true, the style rules declared inside the @supports block will be applied.

[All modern browsers already support this feature](https://caniuse.com/#search=css.supports).


[[media]]
| ![Animated Gif](https://miro.medium.com/max/650/1*YJgEh7gAzQHsBR2Y3rFJEA.gif)
It's me after getting this new CSS feature. 🤣🤣 How about you?


## Conclusion

**So these are some of the modern CSS features in a nutshell. Whenever you can do brilliant things without JS using just CSS, go for it.**

The front end world we understand today is changing and every time new features are created to make our work faster and more sofisticated. Playing CSS and learning new tricks can be a lot of fun and interesting. Try it out. ❤

I hope you enjoyed this post and let me know if I've missed an awesome CSS new feature that you use frequently!
