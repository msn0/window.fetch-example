# window.fetch example

## GET

```js
function getUsers() {
  return fetch('/users').then(function (response) {
    return response.json();
  });
}

it("get should request for users with expected data", function (done) {
  fakeFetch.respondWith({"foo": "bar"});

  getUsers().then(function (data) {
    expect(fakeFetch.getUrl()).toEqual('/users');
    expect(fakeFetch.getMethod()).toEqual('get');
    expect(data).toEqual({"foo": "bar"});
    done();
  });
});
```

## POST

```js

function createUser() {
  var data = { foo: "bar" };
  return fetch('/users', {
    method: 'post',
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  });
}

it("create should send POST request with expected data", function (done) {
  fakeFetch.respondWith({"foo": "bar"});

  users.create({"test": 1}).then(function (data) {
    expect(fakeFetch.getUrl()).toEqual('/users');
    expect(fakeFetch.getMethod()).toEqual('post');
    expect(fakeFetch.getBody()).toEqual('{"test":1}');
    expect(data).toEqual({"foo": "bar"});
    done();
  });
});

```
