
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_id: 1, step_number: 1, step_instructions: "preheat oven to 350", recipe_id: 1},
        {step_id: 2, step_number: 2, step_instructions: "melt a tablespoon of butter in microwave for 30 seconds", recipe_id: 1},
        {step_id: 3, step_number: 3, step_instructions: "slather your bread with butter, sprinkle with cinnamon", recipe_id: 1},
        {step_id: 4, step_number: 4, step_instructions: "place your bread on baking tray, bake for 5 minutes or until desired preference", recipe_id: 1},
      ]);
    });
};
