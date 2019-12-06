const { gql } = require('apollo-server');

const AbilityEffectChangeModule = gql`
    type AbilityEffectChange {
        effect_entries: [Effect]
        version_group: VersionGroup
    }
`;

module.exports = AbilityEffectChangeModule;