const { gql } = require('apollo-server');

const GrowthRateModule = gql`
    type GrowthRate {
        id: Int
        name: String
        formula: String
        descriptions: [Description]
        levels: [GrowthRateExperienceLevel]
        pokemon_species: [PokemonSpecies]
    }
`;

module.exports = GrowthRateModule;