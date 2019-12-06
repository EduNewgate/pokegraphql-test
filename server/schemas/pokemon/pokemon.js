const { gql } = require('apollo-server');

const PokemonModule = gql`
    type Pokemon {
        id: Int
        name: String
        base_experience: Int
        height: Int
        is_default: Boolean
        weight: Int
        abilities: [PokemonAbility]
        forms: [PokemonForm]
        game_indices: [VersionGameIndex]
        held_items: [PokemonHeldItem]
        location_area_encounters: String
        moves: [PokemonMove]
        sprites: PokemonSprites
        species: PokemonSpecies
        stats: [PokemonStat]
        types: [PokemonType]
    }
`;

module.exports = PokemonModule;