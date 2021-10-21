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

## Caveats

A boolean plus several optional properties often permits invalid combinations that a tagged union can exclude.

## Check

Try constructing a success result without a value and expect a type error.
