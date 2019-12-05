const { gql } = require('apollo-server');

const EncounterConditionValueModule = gql`
    type EncounterConditionValue {
        id: Int
        name: String
        condtions: EncounterCondition
        names: [Name]
    }
`;

module.exports = EncounterConditionValueModule;