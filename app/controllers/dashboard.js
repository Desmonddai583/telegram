import Ember from 'ember';
import Notify from 'ember-notify';
Notify.useBootstrap();

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

  userIsPro: function() {
    return this.get('session.user.isPro');
  }.property('session.user'),

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
      var self = this;
      var handler = StripeCheckout.configure({
        key: 'pk_test_4bDVNxl75mulGCkHDx9YxFml',
        image: 'images/telegram-logo-header.png',
        token: function(token) {
          $.ajax({
            url: '/api/users/upgrade_account/',
            type: 'POST',
            dataType: 'json',
            data: {token: token.id, email: token.email},
            success: function() { 
              $('#upgrade-message').text("You've successfully update to a Pro account! You will receive an email digest every morning with the most important posts from the last 24 hours.");
              $('#upgrade-result').modal('show');
              self.set('userIsPro', true);
            },
            error: function(err) {
              $('#upgrade-message').text("Sorry, your payment failed." + err.responseText);
              $('#upgrade-result').modal('show');
            }
          });        
        }
      });
      
      handler.open({
        name: 'Telegram',
        description: 'Upgrade Account ($5.00)',
        amount: 500
      });
    },
    downgradeAccount: function() {
      var self = this;

      $.ajax({
        url: '/api/users/downgrade_account/',
        type: 'POST',
        success: function() { 
          $('#upgrade-message').text("You've successfully downgrade your account!");
          $('#upgrade-result').modal('show');
          self.set('userIsPro', false);
        },
        error: function(err) {
          Notify.alert(err.responseText);
        }
      });     
    }
  },
});