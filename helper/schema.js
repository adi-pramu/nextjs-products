import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
    {
        categories(filters:{}) {
            items {
                id
                name
                image_path
            }
        }
    }
`;

export const GET_PRODUCT_BY_CATEGORY = gql`
    query getCategories($categoryId: Int) {
        category(id: $categoryId) {
            name
            id
            products {
                items {
                    uid
                    name
                    sku
                }
            }
        }
    }
`;

export const GET_PRODUCT_DETAIL_BY_SKU = gql`
    query getProduct($sku: String) {
        products(filter: { sku: { eq: $sku } }) 
        {
          items {
            name
            price_range {
              maximum_price {
                final_price {
                  currency
                  value
                }
              }
            }
            description {
              html
            }
            image {
              url
            }
          }
        }
    }
`;

export const SET_SUBSCRIPTION = gql`
    mutation addSubscription($email: String!) {
        subscribe(input: { email: $email }) {
            status {
                code
                message
                response
            }
        }
    } 
`