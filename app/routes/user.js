import Ember from 'ember';
import Notify from 'ember-notify';
Notify.useBootstrap();

export default Ember.Route.extend({
  model: function(params) {
    var self = this;
    var promise = this.store.find('user', params.user_id);
    return promise.then(function(user) {
      return user;
    }, function(err) {
      Notify.alert(err.responseText)
      self.transitionTo('auth.login');
    });
  },

  renderTemplate: function() {
    this.render('user');
    this.render('header', {into: 'user', outlet: 'header'});
    this.render('title', {into: 'user', outlet: 'title'});
  }
});