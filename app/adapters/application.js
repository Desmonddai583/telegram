import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost.com:9000',
  namespace: 'api',
});
