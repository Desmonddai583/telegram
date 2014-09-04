import Ember from 'ember';

export default Ember.ArrayController.extend({
  body: "", 

  remainingWords: function() {
    return 140 - this.get('body').length;
  }.property('body'),

  actions: {
    publish: function() {
      var self = this;
      var body = this.get('body');

      var post = this.store.createRecord('post', {
        body: body,
        date: new Date(),
        author: this.get('model').get('firstObject.author'),
      });

      post.save();

      this.set('body', '');
    },
  },
});