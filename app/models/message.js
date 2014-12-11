import DS from 'ember-data';

var Message = DS.Model.extend({
  body: DS.attr('string'),
  date: DS.attr('date'),
  receiver: DS.belongsTo('user'),
  sender: DS.belongsTo('user')
});

export default Message;