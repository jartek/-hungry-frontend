import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  loginEndpoint: 'http://localhost:3000/auth/sign_in',
  logoutEndpoint: 'http://localhost:3000/auth/sign_out',

  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate: function(credentials) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url:         _this.loginEndpoint,
        type:        'POST',
        data:        JSON.stringify({ email: credentials.identification, password: credentials.password }),
        contentType: 'application/json'
      }).then(function(response, xhr, headers) {
        Ember.run(function() {
          resolve({ token: headers.getResponseHeader('access-token') });
        });
      }, function(xhr) {
        var response = JSON.parse(xhr.responseText);
        Ember.run(function() {
          reject(response.error);
        });
      });
    });
  },

  invalidate: function() {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.ajax({
        url: _this.logoutEndpoint,
        type: 'DELETE'
      }).always(function() {
        resolve();
      });
    });
  },
});
