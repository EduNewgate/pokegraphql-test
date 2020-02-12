const { gql } = require('apollo-server');

const TypePokemonModule = gql`
    type TypePokemon {
        slot: Int
        pokemon: Pokemon
    }
`;

module.exports = TypePokemonModule;