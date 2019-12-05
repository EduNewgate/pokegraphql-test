const { gql } = require('apollo-server');

const BerryFlavorModule = gql`
    type BerryFlavor {
        id: Int
        name: String
        berries: [FlavorBerryMap]
        contest_type: ContestType
        names: [Name]
    }
`;

module.exports = BerryFlavorModule;