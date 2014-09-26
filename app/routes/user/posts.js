import Ember from 'ember';
 
export default Ember.Route.extend({
  model: function() {
    return this.store.find('post', {author: this.modelFor('user').id, operation: 'userPosts'});
  }
});