
exports.up = function(knex) {
return knex.schema.createTable('address', function(table) {
    table.string('id').primary();
    table.string('client_id').notNullable();
    table.string('cep').notNullable();
    table.string('uf', 2).notNullable();
    table.string('city').notNullable();
    table.string('address').notNullable();
    table.string('number').notNullable();
    table.string('comp');
    table.foreign('client_id').references('id').inTable('clients');
})
};

exports.down = function(knex) {
  return knex.schema.dropTable('address');
};
