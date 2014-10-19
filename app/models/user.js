import DS from 'ember-data';

var User = DS.Model.extend({
  password: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  photo: DS.attr('string'),
  isFollowedByCurrentUser: DS.attr('boolean')
});

export default User;