const express = require('express');

const app = express();

app.get('/', (req,res) => {
  return res.json({
    MarkSays: 'Delete this!',
  });
});

app.listen(3333);