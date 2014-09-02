import Ember from 'ember';

export default Ember.ObjectController.extend({
  username: null,
  password: null,

  actions: {
    login: function() {
      var login_info = this.getProperties('username', 'password');
      this.store.find('user', {
        username: login_info.username,
        password: login_info.password
      }).then(function(user) {
        if (user.get('firstObject.username'))
          alert('success');
        else
          alert('fail');
      });
    }
  }
});