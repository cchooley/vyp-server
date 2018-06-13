const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

const students = require("./routes/students");

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    message: "Yay bitch"
  })
})

app.post('/accept-payment', (req, res) => {
  res.json(req.body)
})

app.use("/students", students);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

module.exports = app;

