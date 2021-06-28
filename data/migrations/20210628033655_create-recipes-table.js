
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', table => {
    table.increments('recipe_id')
    table.string('recipe_name', 128).notNullable().unique()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
  .createTable('steps', table => {
      table.increments('step_id')
      table.integer('step_number')
      table.text('step_instructions')
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('CASCADE')
  })
  .createTable('ingredients', table => {
    table.increments('ingredient_id')
    table.text('ingredient_name')
  })
  .createTable('steps_ingredients', table => {
    table.integer('step_id')
        .unsigned()
        .references('step_id')
        .inTable('steps')
        .onDelete('CASCADE')
    table.integer('ingredient_id')
        .unsigned()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('CASCADE')
    table.decimal('quantity')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('steps_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('recipes')
};
