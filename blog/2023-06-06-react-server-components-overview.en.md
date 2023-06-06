---
title: 'React Server Components overview'
date: '2023-06-06 10:00:00'
description: 'React Server components are making waves in the front-end community as they introduce a new mindset on how to develop our applications using React. In this article you will learn what Server Components are, how they work, the problems they solve and what are the main differences between them and the regular components - now called Client Components.'
category: Development
background: '#353b48'
featuredImage: '/assets/img/blog/react-server-components-overview.jpg'
---

**[It's been a while since React announced server components](https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components) and it's still work-in-progress, however the recently released Next.js 13 has adopted it as a default option and has been demonstrating just how powerful this breaking change is, specially for the user experience. And this is the main reason I decided to create this article. I hope you enjoy it.**

Before move on, let’s understand these two new React components concepts:

- **Client Components**: are the regular components as we already know
- **Server Components**: are the new kind of components which will be the focus of this article

## What are React server components?

React server components might be confusing at first as this name might refer to some code that needs a server to run, but that's not entirely true. As [Dan Abramov mentioned here](https://www.youtube.com/watch?v=Fctw7WjmxpU&ab_channel=BenHolmes), it's important to point out that the server components can run during build time and the client components can run on the server through SSR technique (Server Side Rendering). So what do server components really mean?

**React server components in simple words is just a code concept that works ahead of time. So what it really does is create a separation between what are interactive and non-interactive components (or dynamic and static components), where the former continues to render on the client while the latter renders at build time (which usually happens in a server environment).**

Let’s take a look at the illustration bellow, from Next.js documentation, to better understand it.

![Illustration showing that most of the components in a page are server components](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fthinking-in-server-components.png&w=3840&q=75)
_Image Credit: Next.js documentation_

**As shown above, most of the components on an application page are static and non-interactive (it means they might be server components), while only a few of them are interactive and need more code to be executed (client components).** And because of that, almost all components can be rendered at build time, reducing the amount of code to be sent to the client, among other benefits that we'll talk about shortly.

## What problems do server components solve?

From the developer point of view we know that one of our toughest battles is improving performance and that's exactly what server components give us.

> “Server and Client Components allow developers to build applications that span the server and client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering.” - Next.js documentation

Below you can see a **list of some of the powerful advantages when using React Server Components**:

- **Minimise the bundle size**: since the server components are rendered at build time, less code is sent to the client, which can reduce the bundle size a lot - by eliminating code from library dependencies, for instance.
- **Reduce [latency](https://developer.mozilla.org/en-US/docs/Web/Performance/Understanding_latency) and requests waterfall**: as the data fetching is happening in the server components, this reduces the client's data requests and consequently the time/delay that the client gets for the response from the source, which is a great optimisation.
- **Complete access to the backend**: the server components have direct access to the backend resources (like database, internal micro-services, API keys and access tokens for example) without exposing them to the client, keeping sensitive information pretty safe and confidential.

### Can server components replace SSR (Server Side Rendering)?

**The quick answer is No, it won’t. There is a lot of confusion between React Server Components and SSR (Server Side Rendering), however, as Dan Abramov said in this [video](https://youtu.be/4Magg0DyKXA?t=1885), they are two completely different technologies.** SSR is beneficial for the first load while the server components can work together at this initial process but also by identifying when some data has changed from the database, for instance, and then refreshing the React tree in unidirectional data flow (similar to what happens in client when states change), for example.

[Read more about how server components update the React tree here](https://www.plasmic.app/blog/how-react-server-components-work#updating-what-your-server-components-are-rendering).

## How to use React server components?

As it’s not possible to use it in plain React yet, and following [Dan Abramov words](https://www.youtube.com/live/h7tur48JSaw?feature=share&t=5845), **[Next.js 13](https://nextjs.org/) with their `/app` router is “the most comprehensive implementation of server components” at this moment** and he strongly recommends use this framework to play with this new feature.

By the way, the boom around these server components is mainly because the recently released Next.js 13 now uses server components as a default option. And since I'm porting code from this personal Gatsby site into Next.js, I've been using this great new feature and decided to give you this overview.

### How to implement server components in Next.js 13?

**Since Next.js 13 uses server components by default, all you need to do is specify which components to render on the client side by adding the `”use client”` directive at the beginning of the file.** That’s all. Super easier, isn't it?

￼![Illustration showing how to convert old components to the new serve and client ones format](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fuse-client-directive.png&w=3840&q=75)
_Image Credit: Next.js documentation_

In this other great illustration from the Next.js documentation, you can see two examples of code with and without server components:

### What should you know about using server components in Next.js 13?

- **Importing server components inside client components is not allowed.** However, after importing a client component inside a server component, you can pass server components as props to the client one.
- **The `”use client”` directive should always be at the beginning of the component file** and you don’t need to define it for each client component, just for your entry point.
- **If you try to get backend resources in client components you will get an error.**
- **Only use client components when they need some interactive behaviour**: `useState()` and Lifecycle Effects (like `useEffect()`), event listeners (`onClick()`, `on Change()` , etc), browser-only APIs...
- **Break down the whole component into two parts (non-interactive and interactive)**: server components to handle logic and client components to handle interactivity.

Read more about some [development patterns around the server components in the Next.js documentation](https://nextjs.org/docs/getting-started/react-essentials#patterns).

## Good References about React Server Components

- **Youtube**: [Dan Abramov explores React Server Components with Ben Holmes](https://youtu.be/Fctw7WjmxpU)
- **Youtube**: [Dan Abramov and Joe Savona talking about server components on the Top End Devs channel](https://youtu.be/4Magg0DyKXA)
- **Article and video**: [React Server Components with Dan Abramov, Joe Savona, and Kent C. Dodds](https://kentcdodds.com/blog/rsc-with-dan-abramov-and-joe-savona-live-stream)
- **Documentation**: [Server Components by Next.js](https://nextjs.org/docs/getting-started/react-essentials#server-components)
- **Article**: [How React server components work: an in-depth guide plasmic](https://www.plasmic.app/blog/how-react-server-components-work)

Note: You might be wondering why there is no React documentation for the server components yet ([despite this tiny presentation](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)) and the reason is because it is still a work in progress even though we can already use it - specially throughout [Next.js framework](https://nextjs.org/).

## Wrapping Up

**Server components doesn't literally mean server, it's more about the data running upfront**. The server component gets the data at build time and the client component progressively improves it through states, effects, forms, animations...

**One of the biggest benefits is that the page doesn't need to download unnecessary code**, sending the fully rendered static component when possible, making the user experience much better. **Server components also have access to all server-only services**, like databases and private keys, for example.

**Right now, Next.js 13 with its `/app` route is the preferred way to use this new feature** and it's generating excitement in the frontend community.

See you next time! 😁
