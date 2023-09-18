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
                    language
                    slideHeader {
                        itemImage {
                            sourceUrl
                            altText
                            title
                        }
                        circleImage{
                            sourceUrl
                            altText
                            title
                        }
                        itemTitle
                        itemDescription
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
                            linkDownload
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
                member{
                    subTitle
                    title
                    listMember{
                    descriptionMember
                    logoMember{
                        sourceUrl
                        title
                        altText
                    }
                    }
                    listExperience{
                    title
                    number
                    }
                    description
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
                map{
                    countProject
                    description
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
                    category
                    filterCategory {
                        id
                    }
                }
                partners {
                    title
                    desc
                    partnersRow {
                        img {
                            sourceUrl
                        }
                    }
                    background{
                        sourceUrl
                        altText
                        title
                    }
                }
            }
        }
    }
`;

export { GET_DATA_HOME_PAGE };
