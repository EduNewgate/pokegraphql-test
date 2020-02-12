const { gql } = require('apollo-server');

const EncounterMethodRateModule = gql`
    type EncounterMethodRate {
        encounter_method: EncounterMethod
        version_details: [EncounterVersionDetails]
    }
`;

module.exports = EncounterMethodRateModule;