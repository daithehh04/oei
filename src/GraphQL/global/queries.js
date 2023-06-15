import { gql } from "@apollo/client";

const GET_GLOBAL_NAVBAR = gql`
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
                    navbar {
                        titleNav
                        href
                    }
                }
            }
        }
    }
`;

const GET_GLOBAL_FOOTER = gql`
    query {
        page(id: "cG9zdDoxOQ==") {
            homePage {
                footer {
                    background {
                        sourceUrl
                        altText
                        title
                    }
                    logo {
                        sourceUrl
                        altText
                        title
                    }
                    title
                    menu {
                        item {
                            title
                            link
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
                            link
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

const GET_GLOBAL_PARTNERS = gql`
    query {
        page(id: "cG9zdDoxOQ==") {
            homePage {
                partners {
                    title
                    desc
                    partnersRow {
                        img {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;
export { GET_GLOBAL_FOOTER, GET_GLOBAL_NAVBAR, GET_GLOBAL_PARTNERS };
