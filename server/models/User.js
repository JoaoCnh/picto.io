var bookshelf = require('../db/bookshelf');

var User = bookshelf.Model.extend({
    tableName: 'users',
});

module.exports = User;