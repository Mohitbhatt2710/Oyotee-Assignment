const express = require('express');

const app = express();

app.get('/:num', (req, res) => {
  const num = parseInt(req.params.num);
  let response;

  if (num % 5 === 0 && num % 7 === 0) {
    response = { result: 'LR' };
  } else if (num % 5 === 0) {
    response = { result: 'L' };
  } else if (num % 7 === 0) {
    response = { result: 'R' };
  } else {
    response = { result: num };
  }

  res.json(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on port ${port}!`));
