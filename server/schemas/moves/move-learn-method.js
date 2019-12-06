const { gql } = require('apollo-server');

const MoveLearnMethodModule = gql`
    type MoveLearnMethod {
        id: Int
        name: String
        descriptions: [Description]
        names: [Name]
        version_groups: [VersionGroup]
    }
`;

module.exports = MoveLearnMethodModule;