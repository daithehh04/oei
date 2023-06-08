"use client";

import { gql } from "@apollo/client";

const GET_POSTS = gql`
    query {
        page(id: "cG9zdDoxOQ==") {
            homePage {
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
            }
        }
    }
`;

export default GET_POSTS;
