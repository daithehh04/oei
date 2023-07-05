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
                        altText
                        title
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

const GET_NEWS = `
    query {
        posts(first:100) {
            nodes {
                newsDetail {
                image {
                  sourceUrl
                    }
                    author
                }
                slug
                title
                date
                content
                excerpt
                featuredImage {
                    node {
                        sourceUrl
                        altText
                        title
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

const GET_HEADER_NEWS_EVENT = `
    {
        page(id: "cG9zdDo4NTk=") {
            newsEvent {
                header {
                  background {
                    sourceUrl
                  }
                  title
                }
              groupTitle {
                title
                subTitle
                subTitleMobile
              }
              outstandingNews {
                ... on Post {
                  title
                  slug
                  excerpt
                  date
                  featuredImage {
                    node {
                      sourceUrl
                        altText
                        title
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
        }
    }
`;

const GET_HEADER_COMPANY_NEWS = `
    {
        page(id: "cG9zdDoxMTEz") {
            companyNews {
                header {
                  background {
                    sourceUrl
                  }
                  title
                }
              groupTitle {
                title1
                subTitle1
                title2
                subTitle2
              }
              outstandingnews {
                ... on Post {
                  title
                  slug
                  date
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                        altText
                        title
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
        }
    }
`;

const GET_HEADER_INDUSTRY_NEWS = `
    {
        page(id: "cG9zdDoxMTE1") {
            industryNews {
                header {
                  background {
                    sourceUrl
                  }
                  title
                }
              groupTitle {
                title
                subTitle
              }
              outstandingnews {
                ... on Post {
                  title
                  slug
                  date
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                        altText
                        title
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
        }
    }
`;

const GET_HEADER_BLOGS_NEWS = `
    {
        page(id: "cG9zdDoxMTE3") {
            blogs {
              header {
                title
                background {
                  sourceUrl
                }
              }
              groupTitle {
                title
                subTitle
              }
              outstandingblog {
                ... on Post {
                  title
                  slug
                  date
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                        altText
                        title
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
        }
    }
`;

// ============================================

const GET_ALL_NEWS_BLOGS = gql`
    query GetNewsBlog($offset: Int!, $size: Int!) {
        posts(
            where: {
                offsetPagination: { offset: $offset, size: $size }
                categoryIn: ["dGVybTox"]
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
                        altText
                        title
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
//

const GET_ALL_NEWS_EVENTS = gql`
    query GetNewsEvent($offset: Int!, $size: Int!) {
        posts(
            where: {
                offsetPagination: { offset: $offset, size: $size }
                categoryIn: ["dGVybToz"]
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
                        altText
                        title
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
//

const GET_ALL_NEWS_EVENTS_PAGE = `
    query {
        posts(
            first: 100
            where: {
                categoryIn: ["dGVybToz"]
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
                        altText
                        title
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

const GET_ALL_NEWS_INDUSTRY = gql`
    query GetNewsIndustry($offset: Int!, $size: Int!) {
        posts(
            where: {
                offsetPagination: { offset: $offset, size: $size }
                categoryIn: ["dGVybTo0"]
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
                        altText
                        title
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
//

const GET_ALL_NEWS_COMPANY = gql`
    query GetNewsCompany($offset: Int!, $size: Int!) {
        posts(
            where: {
                offsetPagination: { offset: $offset, size: $size }
                categoryIn: ["dGVybTo1"]
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
                        altText
                        title
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

export {
    GET_ALL_NEWS,
    GET_NEWS,
    GET_HEADER_NEWS_EVENT,
    GET_HEADER_COMPANY_NEWS,
    GET_HEADER_INDUSTRY_NEWS,
    GET_HEADER_BLOGS_NEWS,
    GET_ALL_NEWS_COMPANY,
    GET_ALL_NEWS_EVENTS,
    GET_ALL_NEWS_BLOGS,
    GET_ALL_NEWS_INDUSTRY,
    GET_ALL_NEWS_EVENTS_PAGE,
};
