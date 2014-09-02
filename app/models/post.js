import DS from 'ember-data';

var Post = DS.Model.extend({
  body: DS.attr('string'),
  date: DS.attr('date'),
  author: DS.belongsTo('user'),
});
 
Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      body: 'desmond',
      date: new Date(),
      author: 'desmond',
    }
  ]
});

export default Post;