import Ember from 'ember';
import Notify from 'ember-notify';
Notify.useBootstrap();
 
export default Ember.Route.extend({
  beforeModel: function() {
    if(this.modelFor('user').get("id") === this.get("session.user.id")) {
      Notify.alert("User do not have own chat tab!");
      this.transitionTo('auth');
    }
  },

  model: function() {
    return this.store.find('message', {user: this.modelFor('user').get("id")});
  }
});