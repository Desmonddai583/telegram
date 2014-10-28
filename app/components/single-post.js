import Ember from "ember";

export default Ember.Component.extend({
  isAuthor: function() {
    return this.get('session.user') === this.get('post.author');
  }.property('session.user', 'author'),

  actions: {
    deletePost: function(post) {
      this.sendAction('deletePost',post);
    }
  }
});