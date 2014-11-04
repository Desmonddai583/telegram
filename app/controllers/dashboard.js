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
    },
    repost: function(post) {
      var repost = this.store.createRecord('post', {
        body: post.get('body'),
        author: this.get('session.user'), 
        originalAuthor: post.get('originalAuthor') ? post.get('originalAuthor') : post.get('author')
      });

      repost.save();
      this.get('ownPosts').pushObject(repost);
    }, 
    upgradeAccount: function() {
      var handler = StripeCheckout.configure({
        key: 'pk_test_4bDVNxl75mulGCkHDx9YxFml',
        image: 'images/telegram-logo-header.png',
        token: function(token) {
          debugger
          // Use the token to create the charge with a server-side script.
          // You can access the token ID with `token.id`
        }
      });
      
      handler.open({
        name: 'Telegram',
        description: 'Upgrade Account ($5.00)',
        amount: 500
      });
    }
  },
});