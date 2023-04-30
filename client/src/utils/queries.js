import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      image
      designer {
        _id
        name
      }
      name
      price
      color {
        _id
        name
      }
      quantity
      category {
        _id
        name
      }
      onSale
      createdAt
      updatedAt
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      image
      designer {
        _id
        name
      }
      name
      price
      color {
        _id
        name
      }
      quantity
      category {
        _id
        name
      }
      onSale
      createdAt
      updatedAt
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_DESIGNERS = gql`
  {
    designers {
      _id
      name
    }
  }
`;

export const QUERY_COLORS = gql`
  {
    colors {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          image
          designer {
            _id
            name
          }
          category {
            _id
            name
          }
          name
          price
          color {
            _id
            name
          }
          quantity
        }
      }
    }
  }
`;