import Ember from 'ember';
import Notify from 'ember-notify';
Notify.useBootstrap();

export default Ember.ObjectController.extend({
  password: null,
  params: null,

  actions: {
    reset: function() {
      var self = this;
      var password = window.md5(self.get('password'));
      $.ajax({
        url: '/api/resetPassword/',
        type: 'POST',
        dataType: 'json',
        data: {'password': password, 'token': self.get('params').token},
        success: function() {
          self.set('password', '');
          Notify.info("Successfully reset your password!");
          self.transitionToRoute('auth.login');
        },
        error: function(err) {
          Notify.alert(err.responseText);
        }
      });      
    }
  }
});