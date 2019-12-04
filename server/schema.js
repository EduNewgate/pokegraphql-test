const { gql } = require('apollo-server');
const UnNamedResourceListModule = require('./schemas/resources/unnamed-resource-list');
const UnNamedResourceModule = require('./schemas/common/unnamed-resource');
const NamedResourceListModule = require('./schemas/resources/named-resource-list');
const NamedResourceModule = require('./schemas/common/named-resource');
const BerryModule = require('./schemas/berries/berry');
const BerryFlavorMapModule = require('./schemas/berries/berry-flavor-map');
const BerryFirmnessModule = require('./schemas/berries/berry-firmness');
const BerryFlavorModule = require('./schemas/berries/berry-flavor');
const FlavorBerryMapModule = require('./schemas/berries/flavor-berry-map');

//-------------
const PokemonModule = require('./schemas/pokemon');
const PokemonTypeModule = require('./schemas/pokemon-type');
const TypeModule = require('./schemas/type');

const typeDefs = gql`
  type Query {
    getPokemon(offset: Int, limit: Int): NamedResourceList,
    getPokemonById(id: Int!): Pokemon
  }
  ${UnNamedResourceListModule}
  ${UnNamedResourceModule}
  ${NamedResourceListModule}
  ${NamedResourceModule}
  ${BerryModule}
  ${BerryFlavorMapModule}
  ${BerryFirmnessModule}
  ${BerryFlavorModule}
  ${FlavorBerryMapModule}
  
  ${PokemonModule}
  ${PokemonTypeModule}
  ${TypeModule}
  
`;

module.exports = typeDefs;