import DS from 'ember-data';

export default DS.Model.extend({
  menu_id: DS.belongsTo('menu')
});
