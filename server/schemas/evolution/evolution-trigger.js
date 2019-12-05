const { gql } = require('apollo-server');

const EvolutionTriggerModule = gql`
    type EvolutionTrigger {
        id: Int
        name: String
        names: [Name]
        pokemon_species: [PokemonSpecies]
    }
`;

module.exports = EvolutionTriggerModule;