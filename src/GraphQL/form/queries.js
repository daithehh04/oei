import { gql } from '@apollo/client';

const GET_FORM = gql`
    query ($id: ID!, $first: Int!) {
        gfForm(id: $id) {
            title
            description
            button {
                text
                type
            }
            formFields(first: $first) {
                nodes {
                    ... on PhoneField {
                        id
                        isRequired
                        label
                        type
                        placeholder
                    }
                    ... on SelectField {
                        id
                        isRequired
                        label
                        placeholder
                        type
                        choices {
                            text
                            value
                        }
                    }
                    ... on TextField {
                        id
                        isRequired
                        placeholder
                        label
                        type
                    }
                    ... on EmailField {
                        id
                        label
                        placeholder
                        type
                        isRequired
                    }
                    ... on FileUploadField {
                        id
                        maxFileSize
                        label
                        description
                        isRequired
                        type
                    }
                    ... on TextAreaField {
                        id
                        label
                        description
                        placeholder
                        type
                        isRequired
                    }
                }
            }
        }
    }
`;

const CREATE_FORM = gql`
    mutation ($input: SubmitGfFormInput!) {
        submitGfForm(input: $input) {
            entry {
                id
            }
            errors {
                message
            }
        }
    }
`;

export { GET_FORM, CREATE_FORM };

// [
//                     { id: 7, value: "content sfsfsasad" }
//                     { id: 16, value: "trinhvanduc" }
//                     { id: 13, value: "0338277705" }
//                     {
//                         id: 14
//                         emailValues: { value: "trinhvanduc21062001@gmail.com" }
//                     }
//                     { id: 9, value: "Full-Time" }
//                 ]
