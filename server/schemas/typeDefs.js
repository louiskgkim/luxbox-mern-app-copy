const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the Product model
  type Product {
    _id: ID!
    image: String!
    designer: String!
    category: String!
    subCategory: String!
    name: String!
    price: Int!
    color: String!
    onSale: Boolean!
    createdAt: String!
  }

  type User {
    _id: ID!
    email: String!
    password: String
    firstName: String!
    lastName: String!
  }

  # Set up an Auth type to handle returning data from a user creating or user login
  type Auth {
    token: ID!
    user: User
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    products: [Product]
    users: [User]!
    user(userId: ID!): User
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new user
    createUser(email: String!, password: String!, firstName: String!, lastName: String!): Auth
    login(email: String!, password: String!): Auth
  }
  `;

module.exports = typeDefs;