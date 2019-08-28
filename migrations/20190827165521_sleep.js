exports.up = function(knex) {
  return knex.schema.createTable('sleep', table => {
      table.increments('id').primary()
      table.datetime('sleep')
      table.datetime('wake')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('sleep')
};
