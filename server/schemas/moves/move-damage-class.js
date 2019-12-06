const { gql } = require('apollo-server');

const MoveDamageClassModule = gql`
    type MoveDamageClass {
        id: Int
        name: String
        descriptions: [Description]
        moves: [Move]
        names: [Name]
    }
`;

module.exports = MoveDamageClassModule;