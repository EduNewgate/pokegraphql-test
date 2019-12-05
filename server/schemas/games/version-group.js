const { gql } = require('apollo-server');

const VersionGroupModule = gql`
    type VersionGroup {
        id: Int
        name: String
        order: Int
        generation: Generation
        move_learn_methods: [MoveLearnMethod]
        pokedexes: [Pokedex]
        regions: [Region]
        versions: [Version]
    }
`;

module.exports = VersionGroupModule;