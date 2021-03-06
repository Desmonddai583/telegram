import Ember from 'ember';
import Notify from 'ember-notify';
Notify.useBootstrap();

export default Ember.ObjectController.extend({
  username: null,
  password: null,

  actions: {
    login: function() {
      var self = this;
      var login_info = this.getProperties('username', 'password');
      this.store.find('user', {
        id: login_info.username,
        password: window.md5(login_info.password),
        operation: 'login'
      }).then(function(users) {
        self.setProperties({
          'username': '',
          'password': ''
        });
        var user = users.get('firstObject');
        self.get('session').set('user', user);
        self.transitionToRoute('dashboard');
      }, function(err) {
        self.setProperties({
          'username': '',
          'password': ''
        });
        Notify.alert(err.responseText);
      });
    }
  }
});