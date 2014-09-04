import Ember from 'ember';

export default Ember.ArrayController.extend({
  body: "", 

  remainingWords: function() {
    return 140 - this.get('body').length;
  }.property('body'),
});