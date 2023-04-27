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