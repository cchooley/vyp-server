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
          paymentStatus: false
        }),
        knex("scholarship").insert({ 
          id: 1,
          name: "Brittany O'Meara",
          age: 9,
          contactEmail: "britt09@gmail.com",
          emergencyContact: "David Lewis",
          contactRelation: "Father",
          contactPhone: "7204219093",
          enrolledOn: "2018-05-12",
          verifiedBy: "Please Verify"
        })
      .then(() => {
      return knex.raw("ALTER SEQUENCE student_id_seq RESTART WITH 2;");
      })
      .then(() => {
        return knex.raw("ALTER SEQUENCE scholarship_id_seq RESTART WITH 2;");        
      })
    ])
  })
}