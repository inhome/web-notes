# Discriminated unions

Represent distinct states with a tag and state-specific data.

```ts
type Result<T> =
  | { kind: "success"; value: T }
  | { kind: "failure"; message: string };
function message(result: Result<string>) {
  return result.kind === "success" ? result.value : result.message;
}
```
