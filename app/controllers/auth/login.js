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
        password: login_info.password,
        operation: 'login'
      }).then(function(users) {
        if (users.get('length') > 0)
        {
          var user = users.get('firstObject')
          self.get('session').set('user', user);
          self.transitionToRoute('dashboard');
        }
        else
        {
          alert('Invalid Credentials');
        }
      });
    }
  }
});