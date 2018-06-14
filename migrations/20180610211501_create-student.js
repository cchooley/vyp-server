exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('student', (table) => {
            table.increments('id')
            table.text('name').unique()
            table.integer('age')
            table.string('contactEmail')
            table.string('emergencyContact')
            table.string('contactRelation')
            table.string('contactPhone')
            table.date('enrolledOn')
            table.boolean('scholarship')
        }),

        knex.schema.createTable('scholarship', (table) => {
            table.increments('id')
            table.text('receivedBy')
                table.foreign('receivedBy').references('name').inTable('student')
            table.text('verifiedBy')
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('scholarship'),
        knex.schema.dropTable('student')
    ])
};
