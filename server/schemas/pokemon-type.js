const { gql } = require('apollo-server');

const pokemonTypeModule = gql`
    type PokemonType {
        slot: Int
        type: Type
    }
`;

module.exports = pokemonTypeModule;