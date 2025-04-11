import { gql } from "@apollo/client";

export const getCategories = gql`
  query getCategories {
    categories: getCategories {
      slug
      name
    }
  }
`;

export const getCategoryProducts = gql`
  query getCategoryProducts($category: String!) {
    category: getCategories(filters: { slug: $category }) {
      slug
      name
    }
    products: getProducts(filters: { category: $category }) {
      slug
      inStock
      name
      category {
        slug
      }
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      mainImage
    }
  }
`;

export const findProduct = gql`
  query findProduct($slug: String!) {
    product: findProduct(slug: $slug) {
      slug
      name
      inStock
      description
      brand
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      gallery
    }
  }
`;
