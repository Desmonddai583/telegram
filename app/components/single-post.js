import Ember from "ember";

export default Ember.Component.extend({
  showConfirm: false,

  isAuthor: function() {
    return this.get('session.user') === this.get('post.author');
  }.property('session.user', 'author'),

  isLogin: function() {
    if (this.get('session.user')) {
      return true;     
    }
    else {
      return false;
    }
  }.property('session.user'),

  actions: {
    deletePost: function(post) {
      this.sendAction('deletePost',post);
    },
    showConfirm: function() {
      this.set('showConfirm', true);
    },
    repost: function(post) {
      this.set('showConfirm', false);
      this.sendAction('repost',post);
    },
    noRepost: function() {
      this.set('showConfirm', false);
    }
  }
});