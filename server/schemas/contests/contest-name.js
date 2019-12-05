const { gql } = require('apollo-server');

const ContestNameModule = gql`
    type ContestName {
        name: String
        color: String
        language: Language
    }
`;

module.exports = ContestNameModule;