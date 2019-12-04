const { gql } = require('apollo-server');

const UnNamedResourceListModule = gql`
    type UnNamedResourceList {
        count: Int
        next: String
        previous: String
        results: [UnNamedResource]
    }
`;

module.exports = UnNamedResourceListModule;