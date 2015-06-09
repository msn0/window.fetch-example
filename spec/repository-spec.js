/* istanbulify ignore file */

require('whatwg-fetch');
require('es6-promise');

var repository = require('../src/repository');
var sinon = require('sinon');

describe("Repository", function () {

  beforeEach(function () {
    sinon.stub(window, 'fetch');
  });

  afterEach(function () {
    fetch.restore();
  });

  it("get should request expected url", function (done) {
    fetch.returns(Promise.resolve(new Response('{"foo":"bar"}', {
      status: 200,
      headers: {'Content-type': 'application/json'}
    })));

    repository.get().then(function (data) {
      expect(fetch.firstCall.args[0]).toEqual('users.json');
      expect(data).toEqual({"foo": "bar"});
      done();
    });
  });

  it("create should POST expected url with expected", function (done) {
    fetch.returns(Promise.resolve(new Response('{"foo":"bar"}', {
      status: 200,
      headers: {'Content-type': 'application/json'}
    })));

    repository.create({"test": 1}).then(function (data) {
      expect(fetch.firstCall.args[0]).toEqual('users.json');
      expect(fetch.firstCall.args[1].method).toEqual('post');
      expect(fetch.firstCall.args[1].body).toEqual('{"test":1}');
      expect(data).toEqual({"foo": "bar"});
      done();
    });
  });

});