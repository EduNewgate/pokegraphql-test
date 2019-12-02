const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const Pokemon = require('./pokemon');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    getPokemon: new Pokemon(),
    getPokemonPaginated: new Pokemon()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});