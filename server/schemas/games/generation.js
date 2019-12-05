const { gql } = require('apollo-server');

const GenerationModule = gql`
    type Generation {
        id: Int
        name: String
        abilities: [Ability]
        names: [Name]
        main_region: Region
        moves: [Move]
        pokemon_species: [PokemonSpecies]
        types: [Type]
        version_groups: [VersionGroup]
    }
`;

module.exports = GenerationModule;