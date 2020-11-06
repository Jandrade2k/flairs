
exports.up = function(knex) {
  return knex.schema.createTable('users_flairs', function(table) {
      table.string('id').primary();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.datetime('createdcreated_at').notNullable();
      table.datetime('updated_at').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users_flairs');
};
