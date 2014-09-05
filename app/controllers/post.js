import Ember from 'ember';

export default Ember.ObjectController.extend({
  isAuthor: function(){
    return this.get('session.user') === this.get('author');
  }.property('session.user', 'author'),
});