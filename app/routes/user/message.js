import Ember from 'ember';
 
export default Ember.Route.extend({
  model: function() {
    return this.store.find('message', {user: this.modelFor('user').get("id")});
  }
});