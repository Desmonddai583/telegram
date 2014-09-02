import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr('string'),
  password: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  photo: DS.attr('string'),
  posts: DS.hasMany('post'),
  followers: DS.hasMany('user', { inverse: 'following' }),
  following: DS.hasMany('user', { inverse: 'followers' }),
});
 
User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      username: 'desmond',
      password: '098567'
    }
  ]
});

export default User;