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
      body: 'This is a post test1! This is a post test1! This is a post test1!',
      date: new Date(2014, 9, 3),
      author: 'desmond',
    },
    {
      id: 2,
      body: 'This is a post test2! This is a post test2! This is a post test2!',
      date: new Date(2014, 8, 31),
      author: 'desmond',
    },
    {
      id: 3,
      body: 'This is a post test3! This is a post test3! This is a post test3!',
      date: new Date(2014, 8, 25),
      author: 'desmond',
    },
    {
      id: 4,
      body: 'This is a post test4! This is a post test4! This is a post test4!',
      date: new Date(2013, 7, 25),
      author: 'desmond',
    },
  ]
});

export default Post;