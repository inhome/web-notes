# Effect cleanup

Pair a subscription with cleanup using the same callback reference.

```jsx
React.useEffect(() => {
  function handleResize() { setWidth(window.innerWidth); }
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
```
