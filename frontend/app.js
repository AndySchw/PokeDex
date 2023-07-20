const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

app.use('./public', express.static(path.join(__dirname, './public')));

console.log(__dirname)
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://backend:3001');
    res.render('index', { pokemons: response.data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/pokemons/:name', async (req, res) => {
  try {
    const response = await axios.get(`http://backend:3001/pokemons/${req.params.name}`);
    const { pokemon, nextPokemonName, previousPokemonName } = response.data;
    res.render('pokemonDetail', { pokemon, nextPokemonName, previousPokemonName });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Frontend läuft auf Port 3000');
});
