import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'user',
  sortProperties: ['name'],
  sortAscending: true,
});