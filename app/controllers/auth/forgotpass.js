import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    reset: function() {
      this.transitionToRoute('auth.forgotpass_confirm');
    }
  }
});