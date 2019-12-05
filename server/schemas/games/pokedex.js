const { gql } = require('apollo-server');

const PokedexModule = gql`
    type Pokedex {
        id: Int
        name: String
        is_main_series: Boolean
        descriptions: [Description]
        names: [Name]
        pokemon_entries: [PokemonEntry]
        region: Region
        version_groups: [VersionGroup]
    }
`;

module.exports = PokedexModule;