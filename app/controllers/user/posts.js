import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,

  actions: {
    deletePost: function(post) {
      post.deleteRecord();
      post.save();
    }
  },
});