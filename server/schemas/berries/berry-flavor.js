const { gql } = require('apollo-server');

const BerryFlavorModule = gql`
    type BerryFlavor {
        id: Int
        name: String
        berries: [FlavorBerryMap]
        contest_type: ContestType
    }
`;

module.exports = BerryFlavorModule;