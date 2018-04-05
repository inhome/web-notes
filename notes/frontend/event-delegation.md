# Event delegation

One ancestor listener can handle controls inserted later.

```js
document.querySelector("#items").addEventListener("click", function (event) {
  var button = event.target.closest("button[data-item-id]");
  if (!button || !this.contains(button)) return;
  console.log(button.dataset.itemId);
});
```
