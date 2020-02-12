const { gql } = require('apollo-server');

const EncounterVersionDetailsModule = gql`
    type EncounterVersionDetails {
        rate: Int
        version: Version
    }
`;

module.exports = EncounterVersionDetailsModule;