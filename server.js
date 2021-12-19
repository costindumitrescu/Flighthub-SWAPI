
const express = require('express');

const app = express();

const request = require('request');

const port = process.env.PORT || 8000;



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



app.listen(port, () => console.log(`Server started on port ${port}`));
module.exports = app
