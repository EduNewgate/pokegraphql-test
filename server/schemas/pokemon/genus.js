const { gql } = require('apollo-server');

const GenusModule = gql`
    type Genus {
        genus: String
        language: Language
    }
`;

module.exports = GenusModule;