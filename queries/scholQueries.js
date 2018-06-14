const database = require("../database-connection");

module.exports = {
    list() {
        return database('scholarship').select()
    },
    read(id) {
        return database('scholarship').select().where('id', id).first()
    },
    create(scholarship) {
        return database('scholarship').insert(scholarship).returning('*').then(record => record[0])
    },
    update(id, scholarship) {
        return database('scholarship').where('id', id).update(scholarship, '*').then(record => record[0])
    },
    delete(id) {
        return database('scholarship').where('id', id).del()
    }
};
