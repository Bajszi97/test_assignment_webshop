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
    category: getCategories(filters: {slug: $category}) {
        slug
        name
    }
    products: getProducts(filters: {category: $category}) {
        sku
        inStock
        name
        price {
            amount
            currency {
                label
                symbol
            }
        }
        mainImage {
            url
        }
        # defaultVariant for quick shop      
    }
}
`;
