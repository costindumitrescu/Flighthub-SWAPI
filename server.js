const express = require('express');

const app = express();

app.get('/api/people', (req,res) => {
  const people = [
    {id: 1, firstName: 'Luke', lastName: 'Skywalker'},
    {id: 2, firstName: 'Darth', lastName: 'Vader'}
  ];
  res.json(people);
});

const port = 8000;

app.listen(port, () => console.log(`Server started on port ${port}`));
