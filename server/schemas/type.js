const { gql } = require('apollo-server');

const TypeModule = gql`
    type Type {
        name: String
    }
`;

module.exports = TypeModule;