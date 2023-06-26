import { gql } from "@apollo/client";

const QUERY_ALL_PROJECTS = gql`
    query GetAllProjects(
        $categorySlug: [String!]
        $typeProjectSlug: [String!]
        $year: Int!
        $offset: Int!
        $size: Int!
    ) {
        allProject(
            first: 100
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
                        {
                            taxonomy: TYPEPROJECT
                            operator: IN
                            terms: $typeProjectSlug
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
                    desc
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

const GET_ALL_PROJECTS = `
    query GetProjects {
        allProject(first: 100) {
            nodes {
                slug
                title
                content
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
                projectDetail {
                    location
                    titleLocation
                    repeatLocation {
                        title
                        content
                    }
                    tech
                    repeatTech {
                        title
                        content
                    }
                    imgs {
                        sourceUrl
                    }
                }
            }
        }
    }
`;

const GET_HEADER_PROJECT = `
    {
        page(id: "cG9zdDo4NjM=") {
            headerProject {
                background {
                    sourceUrl
                }
                title
            }
        }
    }
`;

const QUERY_ALL_PROJECTS_PAGE = (categorySlug, year, offset, size) => `{
        allProject(
            where: {
                dateQuery: { year: ${year} }
                offsetPagination: { offset: ${offset}, size: ${size} }
                taxQuery: {
                    taxArray: [
                        {
                            taxonomy: LOCATION
                            operator: IN
                            terms: "${categorySlug}"
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
export {
    QUERY_ALL_PROJECTS,
    GET_ALL_PROJECTS,
    GET_HEADER_PROJECT,
    QUERY_ALL_PROJECTS_PAGE,
};
