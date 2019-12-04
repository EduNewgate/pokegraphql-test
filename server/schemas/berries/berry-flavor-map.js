const { gql } = require('apollo-server');

const BerryFlavorMapModule = gql`
    type BerryFlavorMap {
        potency: Int
        flavor: BerryFlavor
    }
`;

module.exports = BerryFlavorMapModule;