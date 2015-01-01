import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if(this.controllerFor('login').get('session.isAuthenticated')) {
      this.transitionTo('/');
    }
  }
});
