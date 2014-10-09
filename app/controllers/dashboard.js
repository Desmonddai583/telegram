import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'post',
  body: "", 
  sortProperties: ['date'],
  sortAscending: false,

  remainingWords: function() {
    return 140 - this.get('body').length;
  }.property('body'),

  actions: {
    publish: function() {
      var body = this.get('body');

      var post = this.store.createRecord('post', {
        body: body,
        date: new Date(),
        author: this.get('session.user'),
      });

      post.save();

      this.set('body', '');
    },
    logout: function() {
      var self = this;
      $.get('/api/logout')
       .done(function(){
         self.get('session').set('user', null);
         self.store.unloadAll('post');
         self.store.unloadAll('user');
         self.transitionToRoute('auth.login');
        });
    }
  },
});