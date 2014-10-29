import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,

  actions: {
    deletePost: function(post) {
      post.deleteRecord();
      post.save();
    },
    repost: function(post) {
      var repost = this.store.createRecord('post', {
        body: post.get('body'),
        author: this.get('session.user'), 
        originalAuthor: post.get('author')
      });
      repost.save();
    }
  },
});