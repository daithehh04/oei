import { gql } from '@apollo/client';

const GET_CATEGORIES = gql`
    query {
        categories {
            edges {
                node {
                    id
                    name
                    slug
                }
            }
        }
    }
`;
const GET_POST_FOLLOW_CATEGORIES = gql`
    query ($categoryIn: [ID], $offset: Int!, $size: Int!) {
        posts(
            where: {
                categoryIn: $categoryIn
                offsetPagination: { offset: $offset, size: $size }
            }
        ) {
            edges {
                node {
                    id
                    title
                    slug
                }
            }
            pageInfo {
                offsetPagination {
                    total
                }
            }
        }
    }
`;

const GET_POST_RELATE = gql`
    query ($postId: ID!, $categoryIn: [ID], $limit: Int!) {
        post(id: $postId) {
            id
            title
            content
            date
        }
        relatedPosts: posts(
            where: {
                categoryIn: $categoryIn
                notIn: [$postId]
                orderby: { field: DATE, order: DESC }
            }
            first: $limit
        ) {
            edges {
                node {
                    id
                    title
                    date
                    slug
                }
            }
        }
    }
`;
export { GET_POST_FOLLOW_CATEGORIES, GET_CATEGORIES, GET_POST_RELATE };
