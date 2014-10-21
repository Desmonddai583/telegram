import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if(!this.get('session.isAuthenticated')) {
      this.transitionTo('auth');
    }
  },

  model: function() {
  	return this.store.find('post', {operation: "dashboardPosts"});
  },

  renderTemplate: function() {
    this.render('dashboard');
    this.render('header', {into: 'dashboard', outlet: 'header'});
    this.render('dashboard-body', {into: 'dashboard', outlet: 'dashboard-body'});
  }
});