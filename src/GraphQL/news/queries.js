import { gql } from "@apollo/client";

const GET_ALL_NEWS = gql`
    query GetAllNews($categorySlug: [String!], $offset: Int!, $size: Int!) {
        allNews(
            where: {
                offsetPagination: { offset: $offset, size: $size }
                taxQuery: {
                    taxArray: [
                        {
                            taxonomy: NEWSCATEGORY
                            operator: IN
                            terms: $categorySlug
                            field: SLUG
                        }
                    ]
                }
                orderby: { field: DATE, order: DESC }
            }
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
    query GetNews {
        allNews {
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
