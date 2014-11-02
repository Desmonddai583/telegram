import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if(!this.get('session.isAuthenticated')) {
      this.transitionTo('auth');
    }
  },

  renderTemplate: function() {
    this.render('profile');
    this.render('header', {into: 'profile', outlet: 'header'});
  }
});