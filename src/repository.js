module.exports = {
  get: function () {
    return fetch('users.json').then(function (response) {
      return response.json();
    });
  }
};