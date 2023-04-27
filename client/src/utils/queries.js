import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getAllProducts {
    products {
      _id
      image
      designer
      category
      subCategory
      name
      price
      color
      createdAt
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      email
      password
      firstName
      lastName
    }
  }
`;