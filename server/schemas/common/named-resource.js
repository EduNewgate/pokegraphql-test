const { gql } = require('apollo-server');

const NamedResourceModule = gql`
    type NamedResource {
        name: String
        url: String
    }
`;

module.exports = NamedResourceModule;