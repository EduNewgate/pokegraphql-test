const { gql } = require('apollo-server');

const FlavorTextModule = gql`
    type ContestEffect {
        flavor_text: String
        language: Language
        version: Version
    }
`;

module.exports = FlavorTextModule;