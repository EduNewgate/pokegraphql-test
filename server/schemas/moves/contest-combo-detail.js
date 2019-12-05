const { gql } = require('apollo-server');

const ContestComboDetailModule = gql`
    type ContestComboDetail {
        use_before: [Move]
        use_after: [Move]
    }
`;

module.exports = ContestComboDetailModule;