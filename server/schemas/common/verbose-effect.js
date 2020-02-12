const { gql } = require('apollo-server');

const VerboseEffectModule = gql`
    type VerboseEffect {
        effect: String
        short_effect: String
        language: Language
    }
`;

module.exports = VerboseEffectModule;