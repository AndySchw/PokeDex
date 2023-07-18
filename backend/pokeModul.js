const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  Name: String,
  Typ: String,
  Beschreibung: String,
  Größe: String,
  Nummer: Number,
  Schwächen: String,
});

module.exports = mongoose.model('Pokemon', pokemonSchema, 'countries');