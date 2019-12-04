const { gql } = require('apollo-server');

const namedResourceModule = gql`
    type NamedResource {
        name: String
        url: String
    }
`;

module.exports = namedResourceModule;