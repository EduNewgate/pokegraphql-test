const { gql } = require('apollo-server');

const PokemonSpeciesVarietyModule = gql`
    type PokemonSpeciesVariety {
        is_default: Boolean
        pokemon: Pokemon
    }
`;

module.exports = PokemonSpeciesVarietyModule;