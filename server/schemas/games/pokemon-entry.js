const { gql } = require('apollo-server');

const PokemonEntryModule = gql`
    type PokemonEntry {
        entry_number: Int
        pokemon_species: PokemonSpecies
    }
`;

module.exports = PokemonEntryModule;