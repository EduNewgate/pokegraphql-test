const { gql } = require('apollo-server');

const MoveCategoryModule = gql`
    type MoveCategory {
        id: Int
        name: String
        moves: [Move]
        descriptions: [Description]
    }
`;

module.exports = MoveCategoryModule;