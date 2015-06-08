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

});