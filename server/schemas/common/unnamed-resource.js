const { gql } = require('apollo-server');

const UnNamedResourceModule = gql`
    type UnNamedResource {
        url: String
    }
`;

module.exports = UnNamedResourceModule;