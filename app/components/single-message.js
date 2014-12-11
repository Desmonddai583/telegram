import Ember from "ember";

export default Ember.Component.extend({
  isSelf: function() {
    return this.get('message.sender.id') === this.get('session.user.id');
  }.property('message', 'session.user')
});