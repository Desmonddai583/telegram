import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TelegramENV.locationType
});

Router.map(function() {
  this.resource('auth', { path: '/' }, function() {
  	this.route('login', { path: '/' });
  	this.route('signup');
  	this.route('forgotpass');
  	this.route('forgotpass_confirm');
    this.route('reset_password', {path: '/reset_password/:token'});
  });

  this.resource('user', { path: '/users/:user_id' }, function() {
  	this.route('posts', { path: '/' });
  	this.route('following');
  	this.route('followers');
  });

  this.route('dashboard');
});

export default Router;
