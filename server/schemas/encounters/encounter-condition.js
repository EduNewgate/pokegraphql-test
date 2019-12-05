const { gql } = require('apollo-server');

const EncounterConditionModule = gql`
    type EncounterCondition {
        id: Int
        name: String
        names: [Name]
        values: [EncounterConditionValue]
    }
`;

module.exports = EncounterConditionModule;