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

## Caveats

A callback that reads changing props may need dependencies or a different design. Empty dependencies are not a universal optimization.

## Check

Mount, unmount, and remount the component and check for duplicate callbacks.
