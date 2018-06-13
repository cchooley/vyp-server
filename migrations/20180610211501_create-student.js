exports.up = function(knex, Promise) {
    return knex.schema.createTable('student', (table) => {
        table.increments()
        table.text('name')
        table.integer('age')
        table.string('contactEmail')
        table.string('emergencyContact')
        table.string('contactRelation')
        table.string('contactPhone')
        table.date('enrolledOn')
        table.boolean('scholarship')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('student')
};
