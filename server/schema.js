const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
      pokemon: [Pokemon]
  }

  type Pokemon {
      name: String
  }
`;

module.exports = typeDefs;