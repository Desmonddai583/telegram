import DS from 'ember-data';

var Post = DS.Model.extend({
  body: DS.attr('string'),
  date: DS.attr('date'),
  author: DS.belongsTo('user'),
});
 
export default Post;