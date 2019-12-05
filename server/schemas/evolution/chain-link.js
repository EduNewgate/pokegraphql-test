const { gql } = require('apollo-server');

const ChainLinkModule = gql`
    type ChainLink {
        is_baby: Boolean
        species: PokemonSpecies
        evolution_details: [EvolutionDetail]
        evolve_to: [ChainLink]
    }
`;

module.exports = ChainLinkModule;