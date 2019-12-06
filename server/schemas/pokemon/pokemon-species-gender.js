const { gql } = require('apollo-server');

const PokemonSpeciesGenderModule = gql`
    type PokemonSpeciesGender {
        rate: Int
        pokemon_species: PokemonSpecies
    }
`;

module.exports = PokemonSpeciesGenderModule;