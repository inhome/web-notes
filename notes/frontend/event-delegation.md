# Event delegation

One ancestor listener can handle controls inserted later.

```js
document.querySelector("#items").addEventListener("click", function (event) {
  var button = event.target.closest("button[data-item-id]");
  if (!button || !this.contains(button)) return;
  console.log(button.dataset.itemId);
});
```

## Caveats

The event target can be an icon inside the button. Use closest and keep matching inside the intended container.

## Check

Click the button text, an inner icon, and the container background.
