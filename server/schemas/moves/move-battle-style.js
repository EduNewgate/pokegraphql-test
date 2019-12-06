const { gql } = require('apollo-server');

const MoveBattleStyleModule = gql`
    type MoveBattleStyle {
        id: Int
        name: String
        names: [Name]
    }
`;

module.exports = MoveBattleStyleModule;