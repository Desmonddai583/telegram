import Ember from 'ember';

export default Ember.ObjectController.extend({
  isSelf: function() {
    return this.get('model') === this.get('session.user');
  }.property('model', 'session.user'),

  actions: {
    follow: function(id) {
      var follow = id;
      $.ajax({
        url: '/api/follow/',
        type: 'POST',
        dataType: 'json',
        data: {followingID: follow},
        success: function() {    
        },
      });
    },
    unfollow: function(id) {
      var follow = id;
      $.ajax({
        url: '/api/unfollow/',
        type: 'POST',
        dataType: 'json',
        data: {unfollowingID: follow},
        success: function() {    
        },
      });
    }
  }
});