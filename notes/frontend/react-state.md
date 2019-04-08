# Functional state updates

Use the previous-state form when the next state depends on the current state.

```jsx
class Counter extends React.Component {
  state = { count: 0 };
  increment = () => this.setState(previous => ({ count: previous.count + 1 }));
  render() { return <button onClick={this.increment}>{this.state.count}</button>; }
}
```
