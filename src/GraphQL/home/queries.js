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

const GET_DATA_HOME_2 = `
{
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

export { GET_DATA_HOME_2, GET_DATA_HOME_PAGE };
