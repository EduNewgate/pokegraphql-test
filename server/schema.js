const { gql } = require('apollo-server');
const namedResourceModule = require('./schemas/named-resource');
const pokemonModule = require('./schemas/pokemon');
const pokemonTypeModule = require('./schemas/pokemon-type');
const typeModule = require('./schemas/type');

const typeDefs = gql`
  type Query {
    getPokemon(offset: Int, limit: Int): [NamedResource],
    getPokemonById(id: Int!): Pokemon
  }

  ${namedResourceModule}
  ${pokemonModule}
  ${pokemonTypeModule}
  ${typeModule}
  
`;

module.exports = typeDefs;