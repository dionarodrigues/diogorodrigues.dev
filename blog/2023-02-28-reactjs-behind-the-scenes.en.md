---
title: 'React.js, behind the scenes'
date: '2023-02-28 10:00:00'
description: "Did you watch the React.js documentary released on YouTube a few weeks ago? Some of Facebook's tech engineers spoke about how React started in the company as Bolt.js and how some decisions were made around it. They also talked about how the community rejected the framework when they first introduced it, and how it has changed significantly in the months since. We can also see some of the journey of Redux."
category: Development
background: '#353b48'
featuredImage: '/assets/img/blog/reactjs-behind-the-scenes.jpg'
---

**Even though [React.js](https://reactjs.org/) was created inside one of the biggest technology companies, it's interesting (and inspiring) to see how an idea can grow to become one of the most used libraries in the world of front-end development. From an initial idea to solve a specific problem to an open source modern project with the collaboration of many developers around the globe. An idea that spawned others, such as Redux.**

Watch the video and check out some key points below.

https://www.youtube.com/watch?v=8pDqJVdNa44&ab_channel=Honeypot

## React documentary summary (spoiler alert)

**The year was 2011 when React started on Facebook - in a scenario where jQuery, Backbone.js, MooTools and other similar tools dominated front-end development. They first called it Bolt.js**, then thought about FBolt.js until it became React.js. Sometimes referred to as a framework, sometimes as a library.

Based on the difficulties Facebook's front-end team was having in creating a complex UI at the time, two software engineers created **Bolt.js, a client-side MVC framework that tied together some existing JS tools to handle with the complex interactivity** of primitive Facebook timeline, chat, news feed and other advanced applications.

However as the use of Bolt.js and also the team grew, **[Jordan Walk](https://twitter.com/jordwalke), a product engineer working in ads at the time, had some interesting ideas for changing Bolt, making it much more functional, removing its MVC architecture and adding the concept of re-rendering when something in the UI has changed - that's when React came into being**, but with its initial name as FBolt (Functional Bolt). Later they also introduced JSX syntax and, through [Jin Chen](https://twitter.com/jingc) ideas, another great software engineer, they also introduced ways for handling states in React based on Flux architecture, which was a new chapter in the framework development process.

But it was around 2012, when Facebook acquired Instagram, that the framework was renamed React and **the web version of Instagram was the first full end-to-end application in production developed using this modern tool**.

The documentary also showed the risky decision they took after several business discussions to continue using React instead of its initial version called Bolt, as React had not yet been fully developed and its use would impact the company's business for a while.

**The next step was to make React an open source tool**. And they did it by making this announcement at the US JSConf in 2013, a famous javascript-focused event. In an age where best practice was splitting HTML, CSS, and JS into separate files, the React way of creating components using JSX and mixing them all together was not well accepted by the community, and this announcement was a disaster.

It was then that **[Sophie Alpert](https://twitter.com/sophiebits), a non-Facebook developer, saw React and decided to use it. She solved some technical details by rewriting about 2,000 lines of the library's code based on the project she was working** on - and then made a pull request to the React repository. And as you can imagine, she became a member of Facebook's engineering team.

And then, in the same year, 2013, **they decided to announce React again at the UE JSConf, which took place in Berlin. From that point on, the community slowly started talking about the library and trying it out, realizing the simplicity of how React creates rich UIs**. And companies have also started using React. In 2014, Netflix decided to use React to rewrite its platform, which contributed a lot to the library's popularity.

**2015 was the year of the first React.js Conf where they open sourced native React and started talking about GraphQL and Relay**. It was a huge hit with the community and Facebook decided to convert all of their apps to React and remove all other frameworks. **That's when a few other developers also showed up, including core team member [Dan Abramov](https://twitter.com/dan_abramov) - famous for creating Redux**.

End. :)

### Software engineers in the documentary

[Vladimir Koesnikov](https://twitter.com/voloko)
[Will Bailey](https://twitter.com/will_bailey)
[Jordan Walk](https://twitter.com/jordwalke)
[Jin Chen](https://twitter.com/jingc)
[Sophie Alpert](https://twitter.com/sophiebits)
[Dan Abramov](https://twitter.com/dan_abramov)

[Sebastian Markbåge](https://twitter.com/sebmarkbage)
[Shane O’Sullivan](https://twitter.com/chofter)
[Lee Byron](https://twitter.com/leeb)
[Pete Hunt](https://twitter.com/floydophone)
[Tom Occhino](https://twitter.com/tomocchino)
[Adam Wolff](https://twitter.com/dmwlff)
[Christopher Chedeau](https://twitter.com/Vjeux)
[David Nolan](https://twitter.com/swannodette)
[Andrew Clark](https://twitter.com/acdlite)

### Additional notes

An off topic that I think it’s awesome to notice is that the documentary highlighted some diversity on IT. I believe there are much more to do, however having LGBTs people as managers is inspirational. To be more complete, I would also like to see more black people in the film.
