const { gql } = require('apollo-server');

const AbilityModule = gql`
    type Ability {
        id: Int
        name: String
        is_main_series: Boolean
        generation: Generation
        names: [Name]
        effect_entries: [VerboseEffect]
        flavor_text_entries: [AbilityFlavorText]
        pokemon: [AbilityPokemon]
    }
`;

module.exports = AbilityModule;