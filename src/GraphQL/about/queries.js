import { gql } from "@apollo/client";

const GET_HEADER_ABOUT_INTRODUCE = gql`
    {
        page(id: "cG9zdDo5MDU=") {
            aboutIntroduce {
                header {
                    background {
                        sourceUrl
                    }
                    breadcrumb
                }
            }
        }
    }
`;

export { GET_HEADER_ABOUT_INTRODUCE };
