module.exports = {
  get: function () {
    return fetch('users.json').then(function (response) {
      return response.json();
    });
  },
  create: function (data) {
    return fetch('users.json', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      return response.json();
    });
  }
};