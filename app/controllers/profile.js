import Ember from 'ember';
import Notify from 'ember-notify';
Notify.useBootstrap();

export default Ember.ObjectController.extend({
  fullName: function() {
    return this.get('session.user.name');
  }.property('session.user'),
  email: function() {
    return this.get('session.user.email');
  }.property('session.user'),
  photo: function() {
    return this.get('session.user.photo') || "images/avatar.png";
  }.property('session.user'),

  actions: {
    updateProfile: function() {
      var self = this;
      var user_info = this.getProperties('email', 'fullName', 'photo');
      $.ajax({
        url: '/api/users/' + self.get('session.user.id'),
        type: 'PUT',
        dataType: 'json',
        data: {email: user_info.email, fullName: user_info.fullName, photo: user_info.photo},
        success: function() { 
          Notify.info("Successfully update your profile!");
          self.transitionToRoute('dashboard');
        },
        error: function(err) {
          Notify.alert(err.responseText);
        }
      });
    },
    updatePhoto: function(filePath) {
      this.setProperties({ 'photo': filePath });
    }
  }
});