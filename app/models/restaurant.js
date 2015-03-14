import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  user_id: DS.belongsTo('user'),
  menu_id: DS.belongsTo('menu'),
});
