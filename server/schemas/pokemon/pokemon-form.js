const { gql } = require('apollo-server');

const PokemonFormModule = gql`
    type PokemonForm {
        id: Int
        name: String
        order: Int
        form_order: Int
        is_battle_only: Boolean
        is_mega: Boolean
        form_name: String
        pokemon: Pokemon
        sprites: PokemonFormSprites
        version_group: VersionGroup
        names: [Name]
        form_names: [Name]
    }
`;

module.exports = PokemonFormModule;