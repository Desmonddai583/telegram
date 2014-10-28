import Ember from "ember";

export default Ember.Component.extend({
  isSelf: function() {
    return this.get('user.id') === this.get('session.user.id');
  }.property('user', 'session.user'),
  
  actions: {
    unfollow: function(user) {
      this.sendAction('unfollow', user);
    },
    follow: function(user) {
      this.sendAction('follow', user);
    }
  }
});