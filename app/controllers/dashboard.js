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
        author: this.get('session.user'),
      });

      this.set('body', '');
      post.save();
    }
  },
});