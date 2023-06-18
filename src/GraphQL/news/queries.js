import { gql } from "@apollo/client";

const GET_ALL_NEWS = gql`
    query GetAllNews($categorySlug: [ID], $offset: Int!, $size: Int!) {
        posts(
            where: {
                offsetPagination: { offset: $offset, size: $size }
                categoryIn: $categorySlug
                orderby: { field: DATE, order: DESC }
            }
        ) {
            nodes {
                slug
                title
                date
                content
                excerpt
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                categories {
                    nodes {
                        name
                        id
                    }
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

const GET_RELATED_NEWS = gql`
    query GetPostsRelated($postId: ID!, $categoryIn: [String], $limit: Int!) {
        allNews(
            where: {
                taxQuery: {
                    taxArray: [
                        {
                            taxonomy: NEWSCATEGORY
                            operator: IN
                            terms: $categoryIn
                            field: SLUG
                        }
                    ]
                }
                notIn: [$postId]
                orderby: { field: DATE, order: DESC }
            }
            first: $limit
        ) {
            nodes {
                slug
                title
                date
                content
                newsCategory {
                    nodes {
                        name
                    }
                }
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                newsCategory {
                    nodes {
                        name
                        id
                    }
                }
            }
        }
    }
`;

const GET_NEWS = gql`
    query {
        posts {
            nodes {
                slug
                title
                date
                content
                categories {
                    nodes {
                        name
                    }
                }
                excerpt
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                categories {
                    nodes {
                        name
                        id
                    }
                }
            }
        }
    }
`;

const GET_HEADER_NEWS = gql`
    query {
        page(id: "cG9zdDo4NTk=") {
            news {
                background {
                    sourceUrl
                }
                title
            }
        }
    }
`;
export { GET_ALL_NEWS, GET_RELATED_NEWS, GET_NEWS, GET_HEADER_NEWS };
