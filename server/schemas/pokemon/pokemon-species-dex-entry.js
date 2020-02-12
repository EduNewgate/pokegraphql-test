const { gql } = require('apollo-server');

const PokemonSpeciesDexEntryModule = gql`
    type PokemonSpeciesDexEntry {
        entry_number: Int
        pokedex: Pokedex
    }
`;

module.exports = PokemonSpeciesDexEntryModule;