import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'post',
  sortProperties: ['date'],
  sortAscending: false,
});