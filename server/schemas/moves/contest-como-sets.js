const { gql } = require('apollo-server');

const ContestComboSetsModule = gql`
    type ContestComboSets {
        normal: ContestComboDetail
        super: ContestComboDetail
    }
`;

module.exports = ContestComboSetsModule;