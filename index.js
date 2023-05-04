const express = require('express');
const app = express();
const cors=require('cors')
const port = 5000; 


const recipe=require('./data/recipe.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World bangladesh!')
  });

app.get('/recipe',(req,res)=>{
  res.send(recipe);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


