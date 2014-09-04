import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
  	return this.store.find('post');
  },

  renderTemplate: function() {
    this.render('dashboard');
    this.render('header', {into: 'dashboard', outlet: 'header'});
    this.render('dashboard-body', {into: 'dashboard', outlet: 'dashboard-body'});
  }
});