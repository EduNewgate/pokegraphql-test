const { gql } = require('apollo-server');

const MoveAilmentModule = gql`
    type MoveAilment {
        id: Int
        name: String
        moves: [Move]
        names: [Name]
    }
`;

module.exports = MoveAilmentModule;