---
title: 'Key React 18 release features in 2022'
date: '2022-12-27 01:21:23'
description: The long-awaited version 18 of React was finally released this year and it was just as famous as its previous version 16 (when Hooks were released). In this article, to close out the year on a high note, we'll dive into the top features of this 2022 release to understand why it's making waves in the frontend community.
category: 'Development'
background: '#353b48'
featuredImage: '/assets/img/blog/key-react-18-release-features-in-2022.jpg'
---

While this [new version of React](https://reactjs.org/blog/2022/03/29/react-v18.html) brings many major changes to using this JS library, **it doesn't break your existing code** - which also means that what you've already learned about React is still valid and useful. However, knowing its new features will improve your code and help you develop better user interfaces.

To summarise this article, check below which features this post will talk about:

- React.DOM API
- Concurrent Rendering
- State Update Batching
- `<Suspense>` component
- What’s next

I wrote another article recently covering [new React documentation](https://www.diogorodrigues.dev/blog/reacts-new-killer-documentation-focused-only-on-functional-components), in case you're interested in reading more about what's new in this library.

## React.DOM API, migrating to React version 18

To take advantage of everything this version 18 has to offer, after updating your React project version, just apply a small change to the root file. **Now, instead of using `ReactDOM.render()`, we need to use the new root API method ‘createRoot()’.** See how to do it below:

```javascript
// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
```

Isn't that easy? 🙌

> “ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it’s running React 17.” - [React docs](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis)

## Features built on top of Concurrent Rendering

In their words, **Concurrency is the result of years of research to improve how the library works. So it's not necessarily a feature, but a change at the core of the React’s rendering model that allows for powerful implementations from this new version**. Through this innovation, React can provide ways to stop, pause, and later start a rendering again to prioritise urgent UI changes without blocking the interface.

> "Concurrency is not a feature, per se. It’s a new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same time." - [React docs](https://reactjs.org/blog/2022/03/29/react-v18.html#what-is-concurrent-react)

So, unlike versions prior to 18 - which render component updates synchronously - right now React has **some new features to work around this**:

- [**useTransitiion()**](https://beta.reactjs.org/reference/react/useTransition#examples): it tells React that an update process is about to start, however React doesn't have to wait for that process to finish before processing other React updates. To better understand, take a look at the examples using a Tabs UI component in the React documentation to see how a state update wrapped by `useTransition()` does not block the UI, even when it takes a long time to process.
- [**startTransition()**](https://beta.reactjs.org/reference/react/startTransition#starttransitionscope): following React words, it’s very similar to `useTransition`, the difference is that it doesn’t provide a `isPending` flag to track whether a transition is ongoing and it can be used outside components, for example for an external library. Read more about startTransition here.
- [**useDeferredValue()**](https://beta.reactjs.org/reference/react/useDeferredValue#examples): this is useful when React needs to keep the old state value in the UI by applying the necessary UI changes while the new state value is being processed and then ready to be added to the UI. Without it, the UI would be stuck waiting for the new state value before being changed. See examples in the documentation.

I know that these explanations may sound complicated to understand, so I recommend that you take a look at the documentation (links above) and, if you prefer, watch this awesome video below:

https://www.youtube.com/watch?v=lDukIAymutM&ab_channel=Academind

As Maximilian mentioned in the video above, **React Concurrency is still in its early days, so we'll likely see some patterns and best practices around using these features later on, but I hope you can get off to a good start with this**.

## State Update Batching

For better performance, React groups multiple state update calls within a running process into a single render. For example, you have an event handler that, when executed, will call 3 separate `setState()`. Instead of 3 re-renders, React will perform the update of all states and then re-render the component. That's batching!

**State Update Batching is not a new feature in the library, however it only worked for React event handlers prior to this release. This [version 18 now automates batches for promises, setTimeout, native event handlers, or any other event not batched in React by default](https://reactjs.org/blog/2022/03/29/react-v18.html#new-feature-automatic-batching).**

Let’s see a snippet code below for a better understanding:

```javascript
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // Instead of render twice (once for each state update - no batching), now React will only re-render once at the end (that's batching!)
}, 1000);
```

As you can see, there is a list of `setState()` in the `setTimeout()` method, which React will only execute once before re-rendering the component. This is an amazing technique as it avoids unnecessary renderings, contributing to better performance.

## Suspense in Data Frameworks, `<Suspense>` component

This is another existing feature that has been improved in this new version of React. **Suspend is a way to display a fallback for a component until its children have data being loaded (for example a loading feedback message or an animated spinning icon)**.

Take a look at the [code below from the React docs](https://beta.reactjs.org/reference/react/Suspense) to see how it can be implemented:

```JSX
<Suspense fallback={<Loading />}>
  <ChildrenComponent />
  <AnotherChildrenComponent />
</Suspense>
```

So, assuming each children component is processing some data fetching, `<Suspense>` will display the `<Loading />` component in the meantime. It helps us handle this multiple loading by having this logic in the parent component in a very easy way.

**While React 17 only allows it to be used together with [React.lazy](https://beta.reactjs.org/reference/react/lazy), it can now also be used to fetch data from opinionated frameworks like Relay, Next.js, Hydrogen or Remix. But the idea for the future is to extend this functionality to other data resources, such as images for example.**

[Learn more about `<Suspense>` in the React documentation](https://beta.reactjs.org/reference/react/Suspense) or watch the video below.

https://www.youtube.com/watch?v=pkFA_5-qyHk&ab_channel=TheAdimar

## What’s next

React team is working on several new features and we’ll probably see much more releases using Concurrency in the future. For now, here are the possible next improvements they announced in June of this year:

- Server Components
- Asset Loading
- Static Server Rendering Optimizations
- React Optimizing Compiler
- Offscreen
- Transition Tracing
- New React Docs

Disclaimer:

> “To set expectations, this is not a roadmap with clear timelines. Many of these projects are under active research and are difficult to put concrete ship dates on. They may possibly never even ship in their current iteration depending on what we learn. Instead, we want to share with you the problem spaces we’re actively thinking about, and what we’ve learned so far.” - React team

For a complete explanation of these next features ideas, take a look at [“React Labs: What We've Been Working On”](https://reactjs.org/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022.html).

## Conclusion

**As you can see, Concurrent Rendering is the most important feature unlocked by React 18 as it is a breakthrough in this version that promises to bring much more sophisticated features in the future based on it.** React is changing a lot to help us build better UIs in terms of performance and I'm really excited to see what happens in 2023. For now I think the whole frontend community is celebrating this gift that React has given us this year.

Tell me which change you like the most in this React 18 release and what you expect for next year.

See you in 2023! ♥ ツ
