const { gql } = require('apollo-server');

const PokemonSpeciesModule = gql`
    type PokemonSpecies {
        count: Int
        next: String
        previous: String
        results: [PokemonSpecie]
    }
`;

module.exports = PokemonSpeciesModule;