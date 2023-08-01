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
                        altText
                        title
                    }
                }
                projectDetail {
                    location
                    titleLocation
                    repeatLocation {
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
                        altText
                        title
                    }
                }
                projectDetail {
                    location
                    imgs {
                        sourceUrl
                    }
                    titleLocation
                    repeatLocation {
                        title
                        content
                    }
                    imgProjects {
                        title
                        desc
                        imgs {
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
        desc
        listProject {
          ... on Project {
            slug
            title
            projectDetail {
              project {
                desc
                repeatInfo {
                  title
                  content
                }
              }
            }
            featuredImage {
                      node {
                          sourceUrl
                          altText
                          title
                      }
                  }
          }
        }
      }
      listProject {
        title
        titleMobile
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

const GET_FILTER_PROJECT = `{
  allProject(first: 100) {
    nodes {
      date
      location {
        nodes {
          name
          slug
        }
      }
      typeProject {
        nodes {
          name
          slug
        }
      }
    }
  }
}`;

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
                        altText
                        title
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
    GET_FILTER_PROJECT,
    QUERY_ALL_PROJECTS_PAGE,
};
