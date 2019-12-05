const { gql } = require('apollo-server');

const LanguageModule = gql`
    type Language {
        id: Int
        name: String
        official: Boolean
        iso639: String
        iso3166: String
        names: [Name]
    }
`;

module.exports = LanguageModule;