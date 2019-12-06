const { gql } = require('apollo-server');

const PokemonHabitatModule = gql`
    type PokemonHabitat {
        id: Int
        name: String
        names: [Name]
        pokemon_species: [PokemonSpecies]
    }
`;

module.exports = PokemonHabitatModule;