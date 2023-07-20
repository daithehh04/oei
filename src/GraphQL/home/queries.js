import { gql } from "@apollo/client";
const GET_DATA_HOME = gql`
    query {
        page(id: "cG9zdDoxOQ==") {
            homePage {
                header {
                    logoImage {
                        sourceUrl
                        altText
                        title
                    }
                    phoneNumber
                    slideHeader {
                        itemImage {
                            sourceUrl
                            altText
                            title
                        }
                        itemTitle
                        itemDescription
                    }
                    navbar {
                        titleNav
                    }
                    contentActive {
                        item1 {
                            number
                            description
                        }
                        item2 {
                            number
                            description
                        }
                        item3 {
                            icon {
                                sourceUrl
                                altText
                                title
                            }
                            description
                            link {
                                url
                            }
                        }
                    }
                }
                about {
                    title
                    desc
                    btnSee
                    repeatImg {
                        img {
                            sourceUrl
                        }
                    }
                    textBottom
                }

                service {
                    title
                    subTitle
                    titleMobile
                    subtitleMobile
                    outstandingService {
                        ... on Service {
                            title
                            slug
                            excerpt
                            featuredImage {
                                node {
                                    sourceUrl
                                }
                            }
                        }
                    }
                    item2 {
                        number
                        text
                    }
                    textBottom
                }
                partners {
                    title
                    desc
                    partnersRow {
                        img {
                            sourceUrl
                        }
                    }
                }
                news {
                    subTitle
                    title
                    filterOnly {
                        ... on Post {
                            id
                            title
                            date
                            excerpt
                            slug
                            categories {
                                edges {
                                    node {
                                        name
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
                    filterCategory {
                        id
                    }
                }
            }
        }
    }
`;
const GET_DATA_HOME_PAGE = `
    {
        page(id: "cG9zdDoxOQ==") {
            homePage {
                header {
                    logoImage {
                        sourceUrl
                        altText
                        title
                    }
                    slideHeader {
                        itemImage {
                            sourceUrl
                            altText
                            title
                        }
                        itemTitle
                        itemDescription
                    }
                    navbar {
                        titleNav
                    }
                    contentActive {
                        item1 {
                            number
                            description
                        }
                        item2 {
                            number
                            description
                        }
                        item3 {
                            icon {
                                sourceUrl
                                altText
                                title
                            }
                            description
                            link {
                                url
                            }
                        }
                    }
                }
                about {
                    title
                    desc
                    btnSee
                    repeatImg {
                        img {
                            sourceUrl
                        }
                    }
                    textBottom
                }

                service {
                    title
                    subTitle
                    outstandingService {
                    ... on Service {
                        title
                        slug
                        excerpt
                        featuredImage {
                        node {
                            sourceUrl
                            altText
                            title
                        }
                        }
                    }
                    }
                    item2 {
                        number
                        text
                    }
                    textBottom
                }
                partners {
                    title
                    desc
                    partnersRow {
                        img {
                            sourceUrl
                        }
                    }
                }
                news {
                    subTitle
                    title
                    filterOnly {
                        ... on Post {
                            id
                            title
                            date
                            excerpt
                            slug
                            categories {
                                edges {
                                    node {
                                        name
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
                    filterCategory {
                        id
                    }
                }
            }
        }
    }
`;

export { GET_DATA_HOME, GET_DATA_HOME_PAGE };
