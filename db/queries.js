const knex = require('./knex'); // the connection!

module.exports = {
  getAll() {
    return knex('posts');
  },
  getOne(id) {
    return knex('posts').where('id', id).first();
  },
  create(post) {
    return knex('posts').insert(post, '*');
  },
  update(id, post) {
    return knex('posts').where('id', id).update(post, '*');
  },
  delete(id) {
    return knex('posts').where('id', id).del();
  }
}