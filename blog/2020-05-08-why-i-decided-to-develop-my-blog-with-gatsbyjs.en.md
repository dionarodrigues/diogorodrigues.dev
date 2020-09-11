---
title: 'Why I decided to develop my site in Gatsby'
date: '2020-05-08 01:21:23'
description: I recently deployed this new multilingue site using Gatsby with Netlify CMS and I will let you know in this article why I decided to use this stack.
category: General
background: '#353b48'
featuredImage: '/assets/img/blog/why-i-decided-to-develop-my-blog-with-gatsbyjs.jpg'
---

Nowadays there are several options to build a website, like Wordpress, for example - yes, WP continue being a famous choice yet (around [35% of all the websites today powered by WordPress](https://w3techs.com/technologies/details/cm-wordpress))

But I would like to create something easier to maintain, safe against hackers and modern in terms of technology because I'd also like to learn something new. So **I met Gatsby and fell in love with it from the first time**. 💖

![Funny glasses - simpsons](https://media.giphy.com/media/YABz3fRfUFuec/giphy.gif)

## The amazing world of static site generators

I remember when I built a static version of my personal site years ago, and the fanciest frameworks, libraries or tools that I used were Gulp as task runner, Atomic Design with CSS preprocessors (I like Stylus very much) and JS modules with IIFEs and a lot of jQuery.

These days there are a lot of modern tools to help us generating static sites such as Gatsby and NextJS for example, both based on React. There are other popular generators like Jekyll and Hugo as well.

Static site generators focus on generating a complete static HTML-based site that don't rely on database and, because of this, this kind of solution can be served very quickly and come up with several security benefits.

## Why did I choose Gatsby to build my site

In [their own words](https://www.gatsbyjs.org/), _“Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps”_.

Once I'm very involved with React and its environment, and since Gatsby is on top of React, getting all the benefits of this library - such as performance, components and JSX - I felt very excited to give it a try.

I also loved the fact that Gatsby uses GraphQL and the possibility to take a closer look at this new way of working with data.

More benefits when using Gatsby:

- **Performance**: Following Google's PRPL architectural pattern, Gatsby sites are incredible fast. https://www.gatsbyjs.org/docs/prpl-pattern/
- **Markdown**: the tool allows us to write in Markdown, a lightweight language for adding formatting to plain text, then taking the markdown files and generating the HTML pages by using GraphQL.
- **Progressive Web App (PWA)**: Because Gatsby generates static websites, it's easy to provide an offline solution with service workers.
- **A lot of Plugins and Netlify CMS**: Gatsby comes also with a plugin system which makes it easy to add functionalities into the project, like [Netlify CMS](https://www.netlifycms.org/) for example, that manages all markdown files and images saved in the git repository of the project (Github, Bitbucket...).

I created a [Gatsby Starter called Iceberg](https://www.gatsbyjs.org/starters/diogorodrigues/iceberg-gatsby-multilang/) based on the features of this my site. Feel free to kick off your project with this starter. 👌

![Iceberg Gatsby Starter](https://dev-to-uploads.s3.amazonaws.com/i/yaue80223l6mllliy0nm.png)


## CSS-in-JS with styled components

Another great benefit to using Gatsby in comparison with other tools that are not based on React, is the awesome power of CSS-in-JS by using [Styled Components](https://www.styled-components.com/).

CSS is global in nature, but this new way of styling React components also gives us control over styles, helping us to limit the impact of CSS on our project through scoped styles.

In addition, Styled Components allows us to create components extremely easy to reuse and have access to component properties to dynamically set style values. Isn't this amazing?

## Conclusion

I've been increasingly using React in my projects and have found Gatsby was amazing.

There is a massive growing community around React, Gatsby, GraphQL and Styled Components, so using these technologies to create this new blog was a great idea and I'm learning a lot from this development.

I hope this article will push some of you to start using that as well. You can use [my multilang starter](https://www.gatsbyjs.org/starters/diogorodrigues/iceberg-gatsby-multilang/) or [any other amazing solution](https://www.gatsbyjs.org/starters?v=2) to start building your next project in Gatsby. 😎
