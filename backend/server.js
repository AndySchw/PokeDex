const express = require('express');
const mongoose = require('mongoose');
const pokemons = require('./pokeModul');
// const path = require('path'); // brauch ich nur wenn ich pug direckt von hier aus rendern möchte

const app = express();
const port = 3001;
  
mongoose.connect('mongodb://mongodb:27017/TestDB', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Verbindungsfehler:'));
db.once('open', function() {
  console.log('Wir sind mit der MongoDB verbunden');
});

// Middleware hinzufügen, um JSON zu analysieren
app.use(express.json());


let sortedPokemons;

// Funktion zum Abrufen und Sortieren der Pokémon
async function fetchAndSortPokemons() {
  const allPokemons = await pokemons.find().sort({ Number: 1 }); // sortiert nach der 'Number' Eigenschaft
  sortedPokemons = allPokemons;
}

// Rufen Sie die Funktion beim Start der Anwendung auf
fetchAndSortPokemons();

app.get('/', async (req, res) => {
  try {
    res.send(sortedPokemons);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/pokemons/:name', (req, res) => {
  const name = req.params.name;
 
  const pokemon = sortedPokemons.find(pokemon => pokemon.Name === name);

  const currentIndex = sortedPokemons.findIndex(p => p.Name === name);
 
  const nextIndex = (currentIndex + 1) % sortedPokemons.length;
  const nextPokemon = sortedPokemons[nextIndex];
  const nextPokemonName = nextPokemon.Name;

  const previousIndex = (currentIndex - 1 + sortedPokemons.length) % sortedPokemons.length;
  const prevPokemon = sortedPokemons[previousIndex];
  const previousPokemonName = prevPokemon.Name;
 
  res.send({ pokemon, nextPokemonName, previousPokemonName });
});


app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`)
});
