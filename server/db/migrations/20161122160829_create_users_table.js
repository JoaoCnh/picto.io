
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('users', function (table) {
        table.increments();

        table.string('name');
        table.string('password');
        table.string('icon');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
