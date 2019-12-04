const { gql } = require('apollo-server');

const NamedResourceListModule = gql`
    type NamedResourceList {
        count: Int
        next: String
        previous: String
        results: [NamedResource]
    }
`;

module.exports = NamedResourceListModule;