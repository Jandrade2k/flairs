var knex = require('knex')({
    client: 'mysql',
    connection: {
      host:'mysql741.umbler.com',
      port:'41890',
      user: 'troxa',
      password: 'zz#-jU*67Io',
      database: 'flairsdb',
    }
  });
  
  module.exports = knex;