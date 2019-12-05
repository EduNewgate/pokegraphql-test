const { gql } = require('apollo-server');

const NameModule = gql`
    type Name {
        name: String
        language: Language
    }
`;

module.exports = NameModule;