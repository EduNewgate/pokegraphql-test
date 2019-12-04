const { gql } = require('apollo-server');

const typeModule = gql`
    type Type {
        name: String
    }
`;

module.exports = typeModule;