import DS from 'ember-data';

export default DS.Model.extend({
  restaurant_id: DS.belongsTo('restaurant'),
  menuItems: DS.hasMany('menu-item'),
});
