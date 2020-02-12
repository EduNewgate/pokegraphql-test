const { gql } = require('apollo-server');

const FlavorTextModule = gql`
    type FlavorText {
        flavor_text: String
        language: Language
        version: Version
    }
`;

module.exports = FlavorTextModule;