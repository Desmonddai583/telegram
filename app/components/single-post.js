import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    deletePost: function(post) {
      this.sendAction('deletePost',post);
    }
  }
});