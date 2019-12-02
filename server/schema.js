const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getPokemon: [Pokemon],
    getPokemonPaginated(offset: Int, limit: Int): [Pokemon]
  }

  type Pokemon {
    name: String
  }
`;

module.exports = typeDefs;