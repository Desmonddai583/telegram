import Ember from 'ember';

export default Ember.ObjectController.extend({
  isSelf: function() {
    return this.get('model') === this.get('session.user');
  }.property('model', 'session.user'),

  actions: {
    follow: function(user) {
      var follow = user.id;
      $.ajax({
        url: '/api/users/follow/',
        type: 'POST',
        dataType: 'json',
        data: {followingID: follow},
        success: function() { 
          user.set('isFollowedByCurrentUser', true);
         // user.isFollowedByCurrentUser = true;   
          user.save();
        },
      });
    },
    unfollow: function(user) {
      var follow = user.id;
      $.ajax({
        url: '/api/users/unfollow/',
        type: 'POST',
        dataType: 'json',
        data: {unfollowingID: follow},
        success: function() {   
          user.set('isFollowedByCurrentUser', false); 
         // user.isFollowedByCurrentUser = false;
          user.save();
        },
      });
    }
  }
});