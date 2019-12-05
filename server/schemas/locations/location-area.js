const { gql } = requrie('apollo-server');

const LocationAreaModule = gql`
    type LocationArea {
        id: Int
        name: String
        game_index: Int
        encounter_method_rates: [EncounterMethodRate]
        location: Location
        names: [Name]
        pokemon_encounters: [PokemonEncounter]
    }
`;

module.exports = LocationAreaModule;