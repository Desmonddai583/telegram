import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  	return this.store.find('user', params.user_id);
  },

  renderTemplate: function() {
    this.render('user');
    this.render('header', {into: 'user', outlet: 'header'});
    this.render('title', {into: 'user', outlet: 'title'});
  }
});