import Ember from 'ember';
import Notify from 'ember-notify';
Notify.useBootstrap();

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
    },
    upgradeAccount: function() {
      var self = this;
      var handler = StripeCheckout.configure({
        key: 'pk_test_4bDVNxl75mulGCkHDx9YxFml',
        image: 'images/telegram-logo-header.png',
        token: function(token) {
          $.ajax({
            url: '/api/users/upgrade_account/',
            type: 'POST',
            dataType: 'json',
            data: {token: token.id, email: token.email},
            success: function() { 
              $('#upgrade-message').text("You've successfully update to a Pro account! You will receive an email digest every morning with the most important posts from the last 24 hours.");
              $('#upgrade-result').modal('show');
              self.set('userIsPro', true);
            },
            error: function(err) {
              $('#upgrade-message').text("Sorry, your payment failed." + err.responseText);
              $('#upgrade-result').modal('show');
            }
          });        
        }
      });
      
      handler.open({
        name: 'Telegram',
        description: 'Upgrade Account ($5.00)',
        amount: 500
      });
    },
    downgradeAccount: function() {
      var self = this;

      $.ajax({
        url: '/api/users/downgrade_account/',
        type: 'POST',
        success: function() { 
          $('#upgrade-message').text("You've successfully downgrade your account!");
          $('#upgrade-result').modal('show');
          self.set('userIsPro', false);
        },
        error: function(err) {
          Notify.alert(err.responseText);
        }
      });     
    },
    updateCreditCard: function() {
      var handler = StripeCheckout.configure({
        key: 'pk_test_4bDVNxl75mulGCkHDx9YxFml',
        image: 'images/telegram-logo-header.png',
        token: function(token) {
          $.ajax({
            url: '/api/users/update_credit_card/',
            type: 'POST',
            dataType: 'json',
            data: {token: token.id},
            success: function() { 
              $('#upgrade-message').text("You've successfully update your credit card info!");
              $('#upgrade-result').modal('show');
            },
            error: function(err) {
              $('#upgrade-message').text("Sorry, your credit card update failed." + err.responseText);
              $('#upgrade-result').modal('show');
            }
          });        
        }
      });
      
      handler.open({
        name: 'Telegram',
        description: 'Update your credit card(No charge)',
        amount: 0,
        panelLabel: 'Update'
      }); 
    }
  }
});