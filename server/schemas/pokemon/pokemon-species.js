const { gql } = require('apollo-server');

const PokemonSpeciesModule = gql`
    type PokemonSpecies {
        id: Int
        name: String
        order: Int
        gender_rate: Int
        capture_rate: Int
        base_happiness: Int
        is_baby: Boolean
        hatch_counter: Int
        has_gender_differences: Int
        forms_switchable: Boolean
        growth_rate: GrowthRate
        pokedex_numbers: [PokemonSpeciesDexEntry]
        egg_groups: [EggGroup]
        color: PokemonColor
        shape: PokemonShape
        evolves_from_species: PokemonSpecies
        evolution_chain: EvolutionChain
        habitat: PokemonHabitat
        generation: Generation
        names: [Name]
        pal_park_encounters: [PalParkEncounterArea]
        flavor_text_entries: [FlavorText]
        form_descriptions: [Description]
        genera: [Genus]
        varieties: [PokemonSpeciesVariety]
    }
`;

module.exports = PokemonSpeciesModule;