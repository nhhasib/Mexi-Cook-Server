const express = require('express');
const app = express();
const cors=require('cors')
const port = 5000; 


const recipe=require('./data/recipe.json');
const reviews=require('./data/reviews.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.get('/recipe',(req,res)=>{
  res.send(recipe);
})
app.get(`/recipe/:id`,(req,res)=>{
  const id = req.params.id 

  const chef = recipe.find(rec => rec.id ===  parseInt(id))
  res.send(chef);
})


app.get('/reviews',(req,res)=>{
  res.send(reviews);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


