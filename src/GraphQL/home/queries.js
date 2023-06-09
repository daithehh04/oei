import { gql } from '@apollo/client';

const GET_SECTION_SITEMAP = gql`
    query {
        pages(where: { title: "Home Page" }) {
            edges {
                node {
                    homePage {
                        sectionSitemap {
                            year
                            country
                            description
                            impressiveNumbers
                            backgroundImage {
                                sourceUrl
                            }
                            mapImage {
                                sourceUrl
                            }
                            mapImage {
                                sourceUrl
                            }
                            circleLarge {
                                sourceUrl
                            }
                            circleSmall {
                                sourceUrl
                            }
                            contentCircleLarge {
                                title
                                description {
                                    content
                                }
                                image {
                                    sourceUrl
                                }
                            }
                            contentCircleSmall {
                                title
                                description {
                                    content
                                }
                                image {
                                    sourceUrl
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const GET_DATA_HOME = gql`
    query {
        page(id: "cG9zdDoxOQ==") {
            homePage {
                header {
                    logoImage {
                        sourceUrl
                        altText
                    }
                    phoneNumber
                    slideHeader {
                        itemImage {
                            sourceUrl
                            altText
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
                    imgLeft {
                        sourceUrl
                    }
                    repeatImg {
                        img {
                            sourceUrl
                        }
                    }
                    textBottom
                }
                partners {
                    title
                    desc
                    partnersRow1 {
                        img {
                            sourceUrl
                        }
                    }
                    partnersRow2 {
                        img {
                            sourceUrl
                        }
                    }
                    partnersRow3 {
                        img {
                            sourceUrl
                        }
                    }
                    background {
                        sourceUrl
                    }
                }
                service {
                    title
                    subTitle
                    listService {
                        img {
                            sourceUrl
                        }
                        altImg
                        desc
                        btnSee
                        text
                    }
                    background {
                        sourceUrl
                    }
                    item1 {
                        img {
                            sourceUrl
                        }
                        altImg
                        text
                    }
                    item2 {
                        number
                        text
                    }
                    item3 {
                        text
                    }
                    textBottom
                }
                news {
                    subTitle
                    title
                }
                footer {
                    background {
                        sourceUrl
                        altText
                        title
                    }
                    title
                    menu {
                        item {
                            title
                            link {
                                url
                            }
                        }
                    }
                    copyRight
                    form {
                        title
                        description
                        placeholder
                    }
                    socialMedia {
                        item {
                            icon {
                                sourceUrl
                                altText
                                title
                            }
                            link {
                                url
                            }
                        }
                    }
                    address {
                        title
                        addressCurrent
                    }
                    contact {
                        title
                        phoneNumber
                        email
                    }
                }
            }
        }
    }
`;

export { GET_DATA_HOME, GET_SECTION_SITEMAP };
