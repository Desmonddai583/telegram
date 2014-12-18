import Ember from "ember";

export default Ember.Component.extend({
  layoutName: "upload-block",

  actions: {
    updatePhoto: function(photoPath) {
      this.sendAction('updatePhoto', photoPath);
    }
  }
});