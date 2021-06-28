
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps_ingredients').insert([
        { ingredient_id: 3, quantity: 1},
        {ingredient_id: 1, quantity: 0.5},
        { ingredient_id: 2, quantity: 0.3}
      ]);
    });
};
