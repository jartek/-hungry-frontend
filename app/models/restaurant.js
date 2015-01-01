import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  client: DS.belongsTo('user')
});
