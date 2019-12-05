const { gql } = requrie('apollo-server');

const LocationModule = gql`
    type Location {
        id: Int
        name: String
        region: Region
        names: [Name]
        game_indices: [GenerationGameIndex]
        areas: [LocationArea]
    }
`;

module.exports = LocationModule;