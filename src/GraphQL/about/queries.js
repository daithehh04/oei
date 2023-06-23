import { gql } from "@apollo/client";

const GET_HEADER_ABOUT_INTRODUCE = `
    {
        page(id: "cG9zdDo5MDU=") {
            aboutIntroduce {
                header {
                    background {
                        sourceUrl
                    }
                    title
                }
            }
        }
    }
`;

const GET_HEADER_ABOUT_QHSE = `
    {
        page(id: "cG9zdDoxMDM3") {
            aboutQhse {
                header {
                    background {
                        sourceUrl
                    }
                    title
                    desc
                }
            }
        }
    }
`;

const GET_HEADER_ABOUT_ASSETS = `
    {
        page(id: "cG9zdDoxMDQ2") {
            aboutAssets {
                header {
                    background {
                        sourceUrl
                    }
                    title
                }
            }
        }
    }
`;

const GET_HEADER_ABOUT_PEOPLE = `
    {
        page(id: "cG9zdDo5MDc=") {
            aboutPeople {
                header {
                    background {
                        sourceUrl
                    }
                    title
                    desc
                }
            }
        }
    }
`;

export {
    GET_HEADER_ABOUT_INTRODUCE,
    GET_HEADER_ABOUT_ASSETS,
    GET_HEADER_ABOUT_PEOPLE,
    GET_HEADER_ABOUT_QHSE,
};
