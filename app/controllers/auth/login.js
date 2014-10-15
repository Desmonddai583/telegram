import Ember from 'ember';

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
        self.username = null;
        self.password = null;
        var user = users.get('firstObject');
        self.get('session').set('user', user);
        self.transitionToRoute('dashboard');
      }, function(err) {
        self.username = null;
        self.password = null;
        alert(err.responseText);
      });
    }
  }
});