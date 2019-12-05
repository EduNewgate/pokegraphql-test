const { gql } = requrie('apollo-server');

const RegionModule = gql`
    type Region {
        id: Int
        locations: [Location]
        name: String
        names: [Name]
        main_generation: Generation
        pokedexes: [Pokedex]
        version_groups: [VersionGroup]
    }
`;

module.exports = RegionModule;