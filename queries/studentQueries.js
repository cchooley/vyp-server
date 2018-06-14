const database = require("../database-connection");

module.exports = {
    list() {
        return database('student').select()
    },
    read(id) {
        return database('student').select().where('id', id).first()
    },
    create(student) {
        return database('student').insert(student).returning('*').then(record => record[0])
    },
    update(id, student) {
        return database('student').where('id', id).update(student, '*').then(record => record[0])
    },
    delete(id) {
        return database('student').where('id', id).del()
    }
};
