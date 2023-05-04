const express = require('express');
const app = express();
const port = 5000; 

const chef=require('./data/recipe.json')

app.get('/news', (req, res) => {
    res.send('Hello World bangladesh!')
  });



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


