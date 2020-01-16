
exports.up = function(knex) {
    return knex.schema
    .createTable('users',tbl=>{
        tbl.increments('id')
        tbl.string('username',20).notNullable().unique();
        tbl.string('email',80).notNullable().unique()
        tbl.string('password', 20).notNullable()
    })
    .createTable('receipes',tbl=>{
         tbl.increments('id');
         tbl.enum('cuisineType')
         tbl.enum('mealtype')
         tbl.time('')

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
