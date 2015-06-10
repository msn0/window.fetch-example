# window.fetch example

## GET

```js
fetch('/users').then(function (response) {
  return response.json();
});
```

## POST

```js

var data = { foo: "bar" };

fetch('users.json', {
  method: 'post',
  body: JSON.stringify(data)
}).then(function (response) {
  return response.json();
});
```
