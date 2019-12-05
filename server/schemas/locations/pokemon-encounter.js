const { gql } = requrie('apollo-server');

const PokemonEncounterModule = gql`
    type PokemonEncounter {
        pokemon: Pokemon
        version_details: [VersionEncounterDetail]
    }
`;

module.exports = PokemonEncounterModule;