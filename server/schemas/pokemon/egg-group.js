const { gql } = require('apollo-server');

const EggGroupModule = gql`
    type EggGroup {
        id: Int
        name: String
        names: [Name]
        pokemon_species: [PokemonSpecies]
    }
`;

module.exports = EggGroupModule;