import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('restaurant', { path: 'restaurants' }, function() {
    this.route('new', { path: '/new' });
  });
});

export default Router;
