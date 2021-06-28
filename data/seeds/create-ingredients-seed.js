
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'butter'},
        {ingredient_id: 2, ingredient_name: 'cinnamon powder'},
        {ingredient_id: 3, ingredient_name: 'bread'},
        {ingredient_id: 4, ingredient_name: 'baking tray'}
      ]);
    });
};
