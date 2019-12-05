const { gql } = requrie('apollo-server');

const PalParkEncounterSpeciesModule = gql`
    type PalParkEncounterSpecies {
        base_score: Int
        rate: Int
        pokemon_species: PokemonSpecies
    }
`;

module.exports = PalParkEncounterSpeciesModule;