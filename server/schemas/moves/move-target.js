const { gql } = require('apollo-server');

const MoveTargetModule = gql`
    type MoveTarget {
        id: Int
        name: String
        descriptions: [Description]
        moves: [Move]
        names: [Name]
    }
`;

module.exports = MoveTargetModule;