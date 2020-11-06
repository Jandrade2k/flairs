
exports.up = function(knex) {
  return knex.schema.createTable('contacts', function(table) {
      table.string('id').primary();
      table.string('phone');
      table.string('whatsapp');
      table.string('email').notNullable();
      table.string('client_id').notNullable();
      table.foreign('client_id').references('id').inTable('clients');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('contacts');
  
};
