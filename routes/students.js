const express = require('express');
const router = express.Router();

const queries = require('../queries/studentQueries');

router.get("/", (request, response, next) => {
  queries.list().then(students => {
    response.json({ students });
  }).catch(next);
});

router.get("/:id", (request, response, next) => {
  queries.read(request.params.id).then(student => {
    student
      ? response.json({ student })
      : response.status(404).json({ message: 'Not found' })
  }).catch(next);
});

router.post("/", (request, response, next) => {
  queries.create(request.body).then(student => {
    response.status(201).json({ student: student });
  }).catch(next);
});

router.delete("/:id", (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.status(204).json({ deleted: true });
  }).catch(next);
});

router.put("/:id", (request, response, next) => {
  queries.update(request.params.id, request.body).then(student => {
    response.json({ student: student[0] });
  }).catch(next);
});

module.exports = router;
