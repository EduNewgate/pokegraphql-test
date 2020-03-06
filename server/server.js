const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const Pokemon = require("./pokemon");
const { bootstrap: bootstrapGlobalAgent } = require('global-agent');

bootstrapGlobalAgent();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    pokemon: new Pokemon()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
