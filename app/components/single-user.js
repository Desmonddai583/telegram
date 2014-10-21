import Ember from "ember";

export default Ember.Component.extend({
  isSelf: function() {
    return this.get('user') === this.get('session.user');
  }.property('user', 'session.user')
});