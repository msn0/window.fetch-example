# window.fetch example

> this examples shows basic usage of window.fetch API and [https://github.com/msn0/fake-fetch](https://github.com/msn0/window.fetch) as its mock.

## GET

```js
function getUsers() {
  return fetch('/users').then(response => {
    return response.json();
  });
}

it("get should request for users with expected data", done => {
  fakeFetch.respondWith({"foo": "bar"});

  getUsers().then(data => {
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
  }).then(response => {
    return response.json();
  });
}

it("create should send POST request with expected data", done => {
  fakeFetch.respondWith({"foo": "bar"});

  createUser({"test": 1}).then(data => {
    expect(fakeFetch.getUrl()).toEqual('/users');
    expect(fakeFetch.getMethod()).toEqual('post');
    expect(fakeFetch.getBody()).toEqual('{"test":1}');
    expect(data).toEqual({"foo": "bar"});
    done();
  });
});

```
