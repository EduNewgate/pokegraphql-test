const { gql } = require('apollo-server');

const BerryModule = gql`
    type Berry {
        id: Int
        name: String
        growth_time: Int
        max_harvest: Int
        natural_gift_power: Int
        size: Int
        smoothness: Int
        soil_dryness: Int
        firmness: BerryFirmness
        flavors: [BerryFlavorMap]
        item: Item
        natural_gift_type: Type
    }
`;

module.exports = BerryModule;