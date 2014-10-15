import Ember from 'ember';

export default Ember.ObjectController.extend({
  name:     null,
  username: null,
  email:    null,
  password: null,

  actions: {
    signup: function() {
      var self = this;
      var user_info = this.getProperties('email', 'name', 'username', 'password');
      var user = this.store.createRecord('user', {
        email: user_info.email,
        name: user_info.name,
        id: user_info.username,
        password: window.md5(user_info.password),
      });

      user.save().then(function() {
        self.setProperties({
          'username': '',
          'password': '',
          'email': '',
          'name': ''
        });
        self.get('session').set('user', user);
        self.transitionToRoute('dashboard');
      });
    }
  }
});