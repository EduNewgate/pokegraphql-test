const { gql } = require('apollo-server');

const AwesomeNameModule = gql`
    type AwesomeName {
        awesome_name: String
        language: Language
    }
`;

module.exports = AwesomeNameModule;