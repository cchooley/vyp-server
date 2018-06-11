
exports.up = function(knex, Promise) {
    return knex.schema.createTable('student', (table) => {
        table.increments()
        table.text('name')
        table.integer('age')
        table.date('enrolledOn')
        table.boolean('scholarship')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('student')
};
