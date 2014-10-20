import Ember from 'ember';

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
          self.transitionToRoute('auth.forgotpass_confirm');
        },
        error: function(xhr) {
          alert(xhr.responseText);
        }
      });      
    }
  }
});