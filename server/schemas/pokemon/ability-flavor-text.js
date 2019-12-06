const { gql } = require('apollo-server');

const AbilityFlavorTextModule = gql`
    type AbilityFlavorText {
        flavor_text: String
        language: Language
        version_group: VersionoGroup
    }
`;

module.exports = AbilityFlavorTextModule;