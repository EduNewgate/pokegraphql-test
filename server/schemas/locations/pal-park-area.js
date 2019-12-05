const { gql } = requrie('apollo-server');

const PalParkAreaModule = gql`
    type PalParkArea {
        id: Int
        name: String
        names: [Name]
        pokemon_encounters: [PalParkEncounterSpecies]
    }
`;

module.exports = PalParkAreaModule;