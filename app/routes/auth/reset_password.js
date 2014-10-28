import Ember from 'ember';
import Notify from 'ember-notify';
Notify.useBootstrap();

export default Ember.Route.extend({
  model: function(params) {
    var self = this;
    self.set('params', params);
    $.ajax({
      url: '/api/auth/checkToken',
      type: 'GET',
      dataType: 'json',
      data: {'token': params.token},
      error: function(err) {
        Notify.alert(err.responseText);
        self.transitionTo('auth.login');
      }
    }); 
  },

  setupController: function(controller, model) {
    controller.set('params', this.get('params'));
    this._super(controller, model);
  }
});