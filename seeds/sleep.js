exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sleep').del()
    .then(function () {
      // Inserts seed entries
      return knex('sleep').insert([
        {id: 1, sleep: '2007-01-01 10:00:00', wake: '2007-01-01 10:00:00'},
        {id: 2, sleep: '2007-01-01 10:00:00', wake: '2007-01-01 10:00:00'},
        {id: 3, sleep: '2007-01-01 10:00:00', wake: '2007-01-01 10:00:00'}
      ]);
    });
};
