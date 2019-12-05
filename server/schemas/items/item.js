const { gql } = require('apollo-server');

const ItemModule = gql`
    type Item {
        id: Int
        name: String
        cost: Int
        fling_power: Int
        fling_effect: ItemFlingEffect
        attributes: [ItemAttribute]
        category: ItemCategory
        effect_entries: [VerboseEffect]
        flavor_text_entries: [VersionGroupFlavorText]
        game_indices: [GenerationGameIndex]
        names: [Name]
        sprites: ItemSprite
        held_by_pokemon: [ItemHolderPokemon]
        baby_trigger_for: EvolutionChain
        machines: [MachineVersionDetail]
    }
`;

module.exports = ItemModule;