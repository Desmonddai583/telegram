import Ember from 'ember';
import Notify from 'ember-notify';
Notify.useBootstrap();

export default Ember.ObjectController.extend({
  email: null,

  actions: {
    reset: function() {
      var self = this;
      var email = self.get('email');
      $.ajax({
        url: '/api/resetPassword/',
        type: 'POST',
        dataType: 'json',
        data: {'email': email},
        success: function() {
          self.set('email', '');
          self.transitionToRoute('auth.forgotpass_confirm');
        },
        error: function(err) {
          Notify.alert(err.responseText);
        }
      });      
    }
  }
});