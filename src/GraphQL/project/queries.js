import { gql } from "@apollo/client";

const GET_ALL_PROJECTS = gql`
    query GetAllProjects(
        $categorySlug: [String!]
        $year: Int!
        $offset: Int!
        $size: Int!
    ) {
        allProject(
            where: {
                dateQuery: { year: $year }
                offsetPagination: { offset: $offset, size: $size }
                taxQuery: {
                    taxArray: [
                        {
                            taxonomy: LOCATION
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
                location {
                    nodes {
                        name
                    }
                }
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                project {
                    name
                    repeatInfo {
                        title
                        content
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

export { GET_ALL_PROJECTS };
