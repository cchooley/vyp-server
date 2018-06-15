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
            table.string('paymentStatus')
        }),

        knex.schema.createTable('scholarship', (table) => {
            table.increments('id')
            table.text('name').unique()
            table.integer('age')
            table.string('contactEmail')
            table.string('emergencyContact')
            table.string('contactRelation')
            table.string('contactPhone')
            table.date('enrolledOn')
            table.string('verifiedBy')
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('scholarship'),
        knex.schema.dropTable('student')
    ])
};
