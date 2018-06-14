exports.seed = function (knex, Promise) {
  return knex("scholarship").del()
    .then(() => knex("student").del())
    .then(() => {
      return Promise.all([
        knex("student").insert({
          id: 1,
          name: "Raul Suarez",
          age: 10,
          contactEmail: "theatre_kid@q.com",
          emergencyContact: "Maria Suarez",
          contactRelation: "Mother",
          contactPhone: "7208839004",
          enrolledOn: "2018-04-30",
          scholarship: true
        })
        .returning('*')
        .then(([student]) => {
          console.log(student)
          return knex("scholarship").insert({ 
            id: 1,
            receivedBy: student.name,
            verifiedBy: "Please verify"
        })
      })
      .then(() => {
      return knex.raw("ALTER SEQUENCE student_id_seq RESTART WITH 2;");
      })
    ])
  })
}