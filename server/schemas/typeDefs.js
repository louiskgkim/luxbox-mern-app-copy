const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the Product model
  type Product {
    _id: ID!
    image: String!
    brand: String!
    category: String!
    subCategory: String!
    name: String!
    price: Int!
    color: String!
    description: String!
    onSale: Boolean!
    createdAt: String!
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    products: [Product]
  }
  `;

// # Define which mutations the client is allowed to make
// type Mutation {
//   # Set the required fields for new schools
//   addSchool(name: String!, location: String!, studentCount: Int!): School
// }
module.exports = typeDefs;