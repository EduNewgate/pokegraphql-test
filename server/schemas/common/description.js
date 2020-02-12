const { gql } = require('apollo-server');

const DescriptionModule = gql`
    type Description {
        description: String
        language: Language
    }
`;

module.exports = DescriptionModule;