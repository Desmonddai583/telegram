import Ember from 'ember';

export default Ember.ObjectController.extend({
  isFollow: function() {
  }.property('session.user'),

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
    }
  }
});