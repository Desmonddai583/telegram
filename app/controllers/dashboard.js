import Ember from 'ember';

export default Ember.ArrayController.extend({
  body: "", 

  dashboardPosts: function() {
    var posts = [];

    this.get('ownPosts').forEach(function(post) {
      posts.push(post);
    });

    return Ember.ArrayController.create({
      content: posts,
      sortProperties: ['date'],
      sortAscending: false
    });
  }.property('ownPosts.[]'),

  remainingWords: function() {
    return 140 - this.get('body').length;
  }.property('body'),

  actions: {
    publish: function() {
      var body = this.get('body');

      var post = this.store.createRecord('post', {
        body: body,
        author: this.get('session.user'),
      });

      this.set('body', '');
      post.save();
      this.get('ownPosts').pushObject(post);
    },
    deletePost: function(post) {
      post.deleteRecord();
      post.save();
      this.get('ownPosts').removeObject(post);
    }
  },
});