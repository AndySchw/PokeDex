const express = require('express');
const app = express();
const path = require('path');
const pokemon = require('./pokemon.json')
const fs = require('fs')

const port = 3000;

app.use(express.static('public'));

// being rendered res.render()
app.set('views', path.join(__dirname, 'public/views'));

// Set view engine as Pug
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});


app.get('/', async (req, res, next) => {
  try {
    const data = await fs.promises.readFile('pokemon.json', 'utf8');
    // console.log(data)
    const pokedata = JSON.parse(data);
    // res.render('bodyDaten', { pokemon: pokedata });
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});