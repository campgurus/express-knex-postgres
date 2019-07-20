
module.exports.up = async function(knex) {
  await knex.schema.createTable('posts', t => {
    t.increments('id').primary();
    t.text('content').notNullable();
    t.timestamp('created_at', true).notNullable().defaultTo(knex.fn.now());
    t.timestamp('updated_at', true).notNullable().defaultTo(knex.fn.now());
  });
};

module.exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('posts');
};
