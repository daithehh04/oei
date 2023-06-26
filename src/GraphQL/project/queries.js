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
                    project {
                        name
                        desc
                        repeatInfo {
                            title
                            content
                        }
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

const GET_PROJECT_OUTSTANDING = `{
    allProject(
            first: 5
            where: {
                orderby: { field: DATE, order: DESC }
            }
            ) {
            nodes {
                slug
                title
                content
                featuredImage {
                    node {
                        sourceUrl
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
                    project {
                        name
                        desc
                        repeatInfo {
                            title
                            content
                        }
                    }
                }
            }
        }
    }`;

const GET_ALL_PROJECTS = `{
        allProject(
            first: 100
            where: {
                orderby: { field: DATE, order: DESC }
            }
            ) {
            nodes {
                slug
                title
                content
                featuredImage {
                    node {
                        sourceUrl
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
                    project {
                        name
                        desc
                        repeatInfo {
                            title
                            content
                        }
                    }
                }
            }
        }
    }
`;

const GET_PROJECT_PAGE = `
    {
  page(id: "cG9zdDo4NjM=") {
    project {
      header {
        background {
          sourceUrl
        }
        title
      }
      outstanding {
        title
        titleMobile
        desc
      }
      listProject {
        title
        desc
      }
      download {
        text
        url
      }
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
    GET_PROJECT_PAGE,
    QUERY_ALL_PROJECTS_PAGE,
    GET_PROJECT_OUTSTANDING,
};
