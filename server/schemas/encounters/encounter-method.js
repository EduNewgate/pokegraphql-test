const { gql } = require('apollo-server');

const EncounterMethodModule = gql`
    type EncounterMethod {
        id: Int
        name: String
        order: Int
        names: [Name]
    }
`;

module.exports = EncounterMethodModule;