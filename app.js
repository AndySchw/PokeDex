const express = require('express');
const app = express();
const path = require('path');
const pokemons = require('./pokemon.json')
const fs = require('fs')

const port = 3000;

app.use(express.static('public'));

// being rendered res.render()
app.set('views', path.join(__dirname, 'public/views'));

// Set view engine as Pug
app.set('view engine', 'pug');

//json in pug laden und root auf index verweisen
app.get('/', async (req, res, next) => {
  try {
    const data = await fs.promises.readFile(path.resolve(__dirname, 'pokemon.json'), 'utf8');
    const pokedata = JSON.parse(data);
    res.render('index', { pokemons: pokedata });
  } catch (err) {
    next(err);
  }
});




// Pfad für die jeweilige Karten URL die auf der Rootseite getippt wird
app.get('/pokemons/:name', (req, res) => {
  const name = req.params.name;
 
  // Hier finden Sie das entsprechende Pokémon anhand seines Namens
  const pokemon = pokemons.find(pokemon => pokemon.Name === name);
  // hier wird der derzeitige Index als varibale gespeichert
  const currentIndex = pokemons.findIndex(p => p.Name === name);
 
  const nextIndex = (currentIndex + 1) % pokemons.length;
  const nextPokemon = pokemons[nextIndex];
  const nextPokemonName = nextPokemon.Name;


  const previousIndex = (currentIndex - 1 + pokemons.length) % pokemons.length;
  const prevPokemon = pokemons[previousIndex];
  const previousPokemonName = prevPokemon.Name;
 
  // Dann geben Sie die Daten an Ihre Pug-Datei weiter
  res.render('pokemonDetail', { pokemon, nextPokemonName, previousPokemonName });
});




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});


