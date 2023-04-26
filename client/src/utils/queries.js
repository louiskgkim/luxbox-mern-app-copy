import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getAllProducts {
    products {
      _id
      image
      brand
      category
      subCategory
      name
      price
      color
      description
      createdAt
    }
  }
`;