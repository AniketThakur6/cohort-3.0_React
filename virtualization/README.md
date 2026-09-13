# Virtualization in React

This project is a simple example of implementing a virtualized list in React without using a third-party library.

## What this code does

The component receives:

- `viewportHeight`: the visible height of the scroll container
- `itemHeight`: the height of each item
- `arr`: the full list of items

It renders only the subset of items that are visible in the viewport, instead of rendering the entire list at once.

## Why virtualization matters

When a list contains thousands or millions of items, rendering every item in the DOM can become slow and heavy. Virtualization keeps the DOM small by rendering only the items currently visible to the user.

## Full component code

```jsx
import React, { useState } from "react";

const Virtualization = ({ viewportHeight, itemHeight, arr }) => {
  const noOfVisibleItems =
    Math.floor(Math.ceil(viewportHeight / itemHeight)) + 3;

  const [indices, setIndices] = useState([0, noOfVisibleItems]);

  const visibleArr = arr.slice(indices[0], indices[1]);

  console.log(visibleArr);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;

    const newStartingIndex = Math.floor(scrollTop / itemHeight);
    console.log("newStartingIndex", newStartingIndex);
    const endIndex = newStartingIndex + noOfVisibleItems;
    setIndices([newStartingIndex, endIndex]);
  };

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: `${viewportHeight}px`,
        backgroundColor: "gray",
        width: "600px",
        overflow: "auto",
      }}
    >
      <div
        style={{
          height: `${arr.length * itemHeight}px`,
        }}
      >
        <div
          style={{
            height: `${indices * itemHeight}px`,
            transform: `translateY(${indices[0] * itemHeight}px)`,
          }}
        >
          {visibleArr.map((item) => (
            <div
              key={item}
              style={{
                height: `${itemHeight}px`,
                padding: "5px",
                borderBottom: "2px solid black",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Virtualization;
```

## What each part is doing

### 1. Component setup

```jsx
const Virtualization = ({ viewportHeight, itemHeight, arr }) => {
```

This component receives three props:

- `viewportHeight`: the visible height of the scroll area
- `itemHeight`: the height of each row item
- `arr`: the complete list of items

### 2. Number of items visible at once

```jsx
const noOfVisibleItems = Math.floor(Math.ceil(viewportHeight / itemHeight)) + 3;
```

This tells us how many rows can fit in the view at once. The `+ 3` adds a small buffer so the UI renders a few extra entries above and below the visible content.

### 3. Start and end indexes for the visible slice

```jsx
const [indices, setIndices] = useState([0, noOfVisibleItems]);
```

`indices` stores the start and end positions of the items currently displayed in the list.

Example:

```js
[0, 15];
```

means render items from index `0` to `14`.

### 4. Get only the visible items

```jsx
const visibleArr = arr.slice(indices[0], indices[1]);
```

This slices the full array so that only a small portion is rendered in the DOM.

### 5. Scroll handler

```jsx
const handleScroll = (e) => {
  const { scrollTop } = e.target;

  const newStartingIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = newStartingIndex + noOfVisibleItems;
  setIndices([newStartingIndex, endIndex]);
};
```

This is the heart of virtualization:

- read current scroll position from `scrollTop`
- calculate which item index is at the top of the viewport
- update the slice range accordingly

So as the user scrolls, the visible section changes without rendering all items.

### 6. Scroll container

```jsx
<div
  onScroll={handleScroll}
  style={{
    height: `${viewportHeight}px`,
    backgroundColor: "gray",
    width: "600px",
    overflow: "auto",
  }}
>
```

This is the visible scrollable window.

- `onScroll={handleScroll}` listens for scroll events
- `overflow: "auto"` makes the container scrollable
- `height: viewportHeight` sets the visible area size

### 7. Full-height spacer

```jsx
<div
  style={{
    height: `${arr.length * itemHeight}px`,
  }}
>
```

This creates a tall invisible element equal to the total height of all items. That is how the browser knows there is a very long list and lets the scrollbar work correctly.

### 8. Offset the visible items

```jsx
<div
  style={{
    height: `${indices * itemHeight}px`,
    transform: `translateY(${indices[0]* itemHeight}px)`
  }}
>
```

This makes the rendered items appear at the correct vertical offset inside the scroll area.

It is important because we are not rendering every item in order; we are rendering only a window of them and shifting them upward/downward to match the scroll position.

### 9. Rendering visible items

```jsx
{visibleArr.map((item) => (
  <div key={item} style={{ height: `${itemHeight}px`, ... }}>
    {item}
  </div>
))}
```

This renders only the items in the current slice, not the entire list. Each item is given a fixed height so the calculations stay consistent.

## Example flow

Suppose:

- `viewportHeight = 600`
- `itemHeight = 40`
- total items = 1,000,000

Then:

```js
Math.ceil(600 / 40) = 15
15 + 3 = 18
```

So only around 18 items are rendered at a time, even though the list contains one million items.

## How this differs from normal rendering

Without virtualization, React would create DOM nodes for the entire list.

With virtualization, React creates DOM nodes only for the currently visible portion, which greatly improves performance.

## Reference

This example is based on the concept explained in:

- [Build your Own Virtual Scroll - Part I - DEV Community](https://dev.to/adamklein/build-your-own-virtual-scroll-part-i-11ib)

## Notes

This is a simple educational version. Real libraries like `react-window` or `@tanstack/virtual` handle more realistic cases such as dynamic item sizes, overscan, and edge cases.

## React Virtuoso

React Virtuoso is a production-ready virtualized list component library for React.

It helps you render large lists efficiently without writing the scrolling logic manually. Instead of calculating `slice()` ranges yourself, the library handles:

- viewport tracking
- scroll position updates
- item measurement
- dynamic rendering of visible rows
- smooth scrolling behavior
- better support for large, real-world lists

### Example usage

```jsx
import { Virtuoso } from "react-virtuoso";

const items = Array.from({ length: 100000 }, (_, i) => `Item ${i + 1}`);

export default function App() {
  return (
    <Virtuoso
      style={{ height: 600, width: 600 }}
      totalCount={items.length}
      itemContent={(index) => <div>{items[index]}</div>}
    />
  );
}
```

### Why it is useful

React Virtuoso is useful when:

- you need a scalable list for thousands or millions of items
- you want a cleaner API than custom manual virtualization
- you want built-in support for more complex cases like dynamic heights and smooth scrolling

### Difference from this custom example

This project uses a custom hand-written virtualizer to teach the core idea.

React Virtuoso is the same idea, but packaged as a reusable component with more robust behavior.

| Approach              | Purpose                                            |
| --------------------- | -------------------------------------------------- |
| Custom virtualization | Learn how virtual scrolling works internally       |
| React Virtuoso        | Use a ready-made production solution for real apps |

### Official docs

- [React Virtuoso Documentation](https://virtuoso.dev/)

## Reference

This example is based on the concept explained in:

- [Build your Own Virtual Scroll - Part I - DEV Community](https://dev.to/adamklein/build-your-own-virtual-scroll-part-i-11ib)
