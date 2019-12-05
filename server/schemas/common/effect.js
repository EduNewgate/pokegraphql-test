const { gql } = require('apollo-server');

const EffectModule = gql`
    type Effect {
        effect: String
        language: Language
    }
`;

module.exports = EffectModule;