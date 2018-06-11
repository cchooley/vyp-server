exports.seed = function (knex, Promise) {
  return knex("student").del().then(() => {
    return knex("student").insert([{
      id: 1,
      name: "Tyler Rodgers",
      age: 12,
      enrolledOn: "2018-03-03",
      scholarship: false
    }, {
      id: 2,
      name: "Tashara Mitchell",
      age: 10,
      enrolledOn: "2018-04-24",
      scholarship: false
    }, {
      id: 3,
      name: "Raul Suarez",
      age: 10,
      enrolledOn: "2018-04-30",
      scholarship: true
    }]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE student_id_seq RESTART WITH 4;");
  });
};
