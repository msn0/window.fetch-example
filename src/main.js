var users = require('./repository');

module.exports = {
  init: function () {
    users.get().then(function(data) {
      document.querySelector('.users').innerText = JSON.stringify(data);
    });
  }
};