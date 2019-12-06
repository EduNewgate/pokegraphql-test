const { gql } = require('apollo-server');

const PokemonAbilityModule = gql`
    type PokemonAbility {
        is_hidden: Boolean
        slot: Int
        ability: Ability
    }
`;

module.exports = PokemonAbilityModule;