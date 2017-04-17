# Predictable box sizing

Include padding and borders in declared dimensions.

```css
*, *::before, *::after {
  box-sizing: border-box;
}
.panel { width: 100%; padding: 1rem; }
```

## Caveats

Margins remain outside the declared width. Min-width and intrinsic content can still cause overflow.

## Check

Put a long unbroken string in a narrow panel and inspect horizontal overflow.
