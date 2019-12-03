const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getPokemon(offset: Int, limit: Int): [PokemonList],
    getPokemonById(id: Int!): Pokemon
  }

  type PokemonList {
    name: String
    url: String
  }

  type Pokemon {
    id: Int
    name: String
    types: [PokemonType]
    weight: Int
  }

  type PokemonType {
    slot: Int
    type: Type
  }

  type Type {
    name: String
  }
`;

module.exports = typeDefs;