
const express = require('express');

const app = express();

const cors = require('cors');

const request = require('request');

const port = process.env.PORT || 8000;

// Enable cors
app.use(cors());
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

app.get('/people', function(req, res, next) {
  request({
    uri: 'https://swapi.py4e.com/api/people',

  }).pipe(res);
});

app.get('/planets', function(req, res, next) {
  request({
    uri: 'https://swapi.py4e.com/api/planets',

  }).pipe(res);
});

app.get('/starships', function(req, res, next) {
  request({
    uri: 'https://swapi.py4e.com/api/starships',

  }).pipe(res);
});

app.get('/people/:id', function(req, res, next) {
  const { id } = req.params;
  request({
    uri: `https://swapi.py4e.com/api/people/${id}`
  }).pipe(res);
});



app.listen(port, () => console.log(`Server started on port ${port}`));
module.exports = app
