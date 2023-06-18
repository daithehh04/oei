import { gql } from "@apollo/client";

const GET_DATA_CONTACT = gql`
    query {
        page(id: "cG9zdDo2MzY=") {
            contact {
                header {
                    background {
                        sourceUrl
                        altText
                        title
                    }
                    title
                    breadcrumb
                }
            }
        }
    }
`;

export { GET_DATA_CONTACT };
