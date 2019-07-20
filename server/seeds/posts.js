
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, content: 'My very first post'},
        {id: 2, content: 'another one'},
        {id: 3, content: 'the last seed post'}
      ]);
    });
};
