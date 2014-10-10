import Ember from 'ember';
 
export default Ember.Route.extend({
  model: function() {
    return this.store.find('user', {user: this.modelFor('user').get("id"), operation: 'followers'});
  }
});