/* istanbulify ignore file */

require('whatwg-fetch');
require('es6-promise');

var users = require('../src/repository');
var fakeFetch = require('fake-fetch');

describe("User repository", function () {

  beforeEach(function () {
    fakeFetch.install();
  });

  afterEach(function () {
    fakeFetch.restore();
  });

  it("get should request for users with expected data", function (done) {
    fakeFetch.respondWith({"foo": "bar"});

    users.get().then(function (data) {
      expect(fakeFetch.getUrl()).toEqual('users.json');
      expect(fakeFetch.getMethod()).toEqual('get');
      expect(data).toEqual({"foo": "bar"});
      done();
    });
  });

  it("create should send POST request with expected data", function (done) {
    fakeFetch.respondWith({"foo": "bar"});

    users.create({"test": 1}).then(function (data) {
      expect(fakeFetch.getUrl()).toEqual('users.json');
      expect(fakeFetch.getMethod()).toEqual('post');
      expect(fakeFetch.getBody()).toEqual('{"test":1}');
      expect(data).toEqual({"foo": "bar"});
      done();
    });
  });

});