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
        username: user_info.username,
        password: user_info.password,
      });

      user.save().then(function(new_user) {
        self.transitionToRoute('dashboard');
      })
    }
  }
});