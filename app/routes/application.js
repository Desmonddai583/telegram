import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var route = this;
    var promise = this.store.find('user', {operation: 'isAuthenticated'});
    return promise.then(function(users) {
      if (users && users.get('length') > 0) {
        var user = users.get('firstObject');
        route.set('session.user', user);
      }
      return users;
    });
  },
  actions: {
    logout: function() {
      var self = this;
      $.get('/api/auth/logout')
       .done(function(){
         self.get('session').set('user', null);
         self.store.unloadAll('post');
         self.store.unloadAll('user');
         self.transitionTo('auth.login');
        });
    }
  }
});