const { gql } = require('apollo-server');

const FlavorBerryMapModule = gql`
    type FlavorBerryMap {
        potency: Int
        berry: Berry
    }
`;

module.exports = FlavorBerryMapModule;