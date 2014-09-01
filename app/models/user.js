import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr('string'),
  password: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  photo: DS.attr('string'),
  posts: DS.hasMany('post'),
  followers: DS.hasMany('user'),
  following: DS.hasMany('user'),
});
 
export default User;