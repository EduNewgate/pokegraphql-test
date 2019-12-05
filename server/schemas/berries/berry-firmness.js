const { gql } = require('apollo-server');

const BerryFirmnessModule = gql`
    type BerryFirmness {
        id: Int
        name: String
        berries: [Berry]
        names: [Name]
    }
`;

module.exports = BerryFirmnessModule;