const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000

const chefs = require('./data/chefs.json')
const recipe = require('./data/recipies.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chefs.find(c => parseInt(c.id) === id)
    // console.log(selectedChef);
    res.send(selectedChef)
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const allRecipe = recipe.filter(r => parseInt(r.recipe_id) === id);
    res.send(allRecipe);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})