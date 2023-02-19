---
title: 'You might be overusing React states'
date: '2023-02-19 10:00:00'
description: "Creating states to store data in React is tempting and sometimes we overuse this feature because we don't quite understand how it works."
category: Development
background: '#353b48'
featuredImage: '/assets/img/blog/you-might-be-overusing-react-states.jpg'
---

**React is a powerful UI library and it provides a lot of brilliant features for dealing with JS code. However, the misconception about how React works behind the scenes causes us developers to use some of these features in the wrong way, increasing the amount of code and impacting performance unnecessarily. For example, by creating too many states when a single variable is all we need.**

In this article, you’ll see some of the key **React concepts to better write states**:

- How React rendering works
- What’s a state in React
- When state should be used
- Refs may be the solution you need

## How React rendering works

**You probably know that React starts by calling your components based on a root component (often called App) and moving through its entire tree. This process is called rendering and occurs at two different times: during initial rendering and when some state of the component is updated** (updating not just the component that belongs to that updated state, but all its nested components). Each render can make changes to the DOM if the rendering result is NOT the same as last time.

So, React rendering happens in three steps:

1. triggering a render (on initial render or when a state is updated)
2. rendering the component (calling each component whose state has been updated - and its nested components)
3. committing changes to the DOM if there are differences between renderings

For a better understanding read [Render and Commit in the React docs](https://beta.reactjs.org/learn/render-and-commit#step-1-trigger-a-render).

## What’s a state in React

**You can think of a state as a component’s memory, as the React docs says. It's a way to store data in the component and ensure the data is remembered when re-rendering the component**. For example, when clicking on an add/remove items button, the quantity of products in the e-commerce cart must change. So every time you click that button the UI will update to display the current quantity of products. This number is stored in a state and will be persisted between re-renders, which means that this state will not be reset with each re-render.

**Another functionality that states perform in React is triggering re-renders**, which means that:

1. every time a state is updated, the component whose is responsible for this state will be re-rendered
2. if there are changes in the rendering result, React commits the changes to the DOM by updating the UI
3. re-rendering a component automatically enqueues a recursive rendering for its nested components

### How to create a state

States can be setup in React using the `useState()` hook, which can take an initial state as an argument and returns two values: the state variable to access this state value and a function to update it. See example below:

```javascript
const [itemsQty, setItemsQty] = useState(0);
```

This code basically creates a variable called `itemsQty` having its initial quantity as `0` and also provides the `setItemsQty()` function to update this state. When using this variable to display its value in the UI, every time its value is changed the component will be re-rendered and the UI will be updated. It’s easy, isn’t it?

More about [states in the React docs](https://beta.reactjs.org/learn/state-a-components-memory).

## When state should be used

As we saw before, a state has two characteristics in React:

- Persist data on component updates
- Trigger re-renders

**If the state doesn't cover the above two points together, you probably need a normal variable. I repeat: all you need is just a regular variable. Period.**

Once you understand this, you might be surprised by the overuse of states.

But what happens when you don't need to trigger a re-render, but need to persist the data between component updates? Refs is the answer.

React has [full documentation explaining States](https://beta.reactjs.org/learn/managing-state) and I really recommend you take a look at that.

## Refs may be the solution you need

In a nutshell, ref is a way to reference a value or manipulate the DOM. Focusing on the first point, **it can be used when we need to persist data without triggering re-renders**.

> “When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.” - React docs

As we know that refs and states persist data in React re-rendering, let's look at **some differences between them**:

- States trigger re-renders, refs don’t.
- States are immutable, refs are not. Although we need a setter function to update the states, we can change the value of a ref by accessing its prop directly.
- States can be used at any time, however, we shouldn't use Refs values during rendering (as it won't trigger re-renders and consequently won't be able to update the UI).

### How to create a ref

Like states, refs have a specific way of being created using the `useRef()` hook, which can receive an initial value. Ref return an object containing a prop called `current` (which is where the value is stored). See example below:

```javascript
const ref = useRef(0);
```

The code above creates a ref with an initial value of `0`. We can access this value through `ref.current` and, as this object is mutable, we can update this value simply by doing `ref.current = 1`.

I really recommend you take a look at the [React documentation about Referencing Values with Refs](https://beta.reactjs.org/learn/referencing-values-with-refs) to better understand the differences between Refs and States and learn when to use each one.

## Conclusion

I have to assume I've already created unnecessary states, who hasn't? However, the more I learn about React, the better I understand its concepts and how to write better code. I hope you learned something new from this post and I invite you to also spend some time on this new [React documentation ](https://beta.reactjs.org/)because it is full of great explanations and interactive examples.

**To recap, states should be used when we need to trigger re-renders and also maintain data between component renders. If you just need to persist information, ref might be the solution you need. Otherwise, just regular variables are enough for this case.**

Let me know if you use too many states and have any explanation to add here.

See you next time. 😁
