import { gql, TypedDocumentNode } from "@apollo/client";
import { Category, Product, ProductForCard } from "./types";

export const getCategories: TypedDocumentNode<{
  category: Category[];
}> = gql`
  query getCategories {
    categories: getCategories {
      slug
      name
    }
  }
`;

export const getCategoryProducts: TypedDocumentNode<{
  category: Category;
  products: ProductForCard[];
}> = gql`
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

export const findProduct: TypedDocumentNode<{
  product: Product;
}> = gql`
  query findProduct($slug: String!) {
    product: findProduct(slug: $slug) {
      slug
      name
      inStock
      description
      brand
      gallery
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      attributes {
        slug
        name
        type
        items {
          slug
          value
          displayValue
        }
      }
    }
  }
`;
