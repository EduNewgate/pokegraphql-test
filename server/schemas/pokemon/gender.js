const { gql } = require('apollo-server');

const GenderModule = gql`
    type Gender {
        id: Int
        name: String
        pokemon_species_details: [PokemonSpeciesGender]
        required_for_evolution: [PokemonSpecies]
    }
`;

module.exports = GenderModule;