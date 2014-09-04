import DS from 'ember-data';

var User = DS.Model.extend({
  password: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  photo: DS.attr('string'),
  // posts: DS.hasMany('post'),
  // followers: DS.hasMany('user', { inverse: 'following' }),
  // following: DS.hasMany('user', { inverse: 'followers' }),
});
 
User.reopenClass({
  FIXTURES: [
    {
      id: 'desmond',
      password: '098567',
      name: 'Desmond Dai',
      email: 'desmonddai583@gmail.com',
      photo: 'images/avatar.png',
    }
  ]
});

export default User;