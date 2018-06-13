exports.seed = function (knex, Promise) {
  return knex("student").del().then(() => {
    return knex("student").insert([{
      id: 1,
      name: "Tyler Rodgers",
      age: 12,
      contactEmail: "tdogg@gmail.com",
      emergencyContact: "Michael Rodgers",
      contactRelation: "Father",
      contactPhone: "3035543821",
      enrolledOn: "2018-03-03",
      scholarship: false
    }, {
      id: 2,
      name: "Tashara Mitchell",
      age: 10,
      contactEmail: "theatre_brat@me.com",
      emergencyContact: "James Davis",
      contactRelation: "Father",
      contactPhone: "3038431123",
      enrolledOn: "2018-04-24",
      scholarship: false
    }, {
      id: 3,
      name: "Raul Suarez",
      age: 10,
      contactEmail: "DrizzyFan4Life@q.com",
      emergencyContact: "Maria Suarez",
      contactRelation: "Mother",
      contactPhone: "7208839004",
      enrolledOn: "2018-04-30",
      scholarship: true
    }]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE student_id_seq RESTART WITH 4;");
  });
};
