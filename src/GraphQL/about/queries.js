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

//
const GET_DATA_ABOUT_PAGE = `
    {
        page(id: "cG9zdDo5MDU=") {
            aboutIntroduce {
              introduce {
                title
                left {
                  img {
                    sourceUrl
                  }
                  text1
                  text2
                  text3
                }
                right {
                  img {
                    sourceUrl
                  }
                  text
                }
              }
              vision {
                title
                desc
                years {
                  year
                  text
                }
              }
              value {
                title
                text
                profile {
                  url
                }
                img {
                  sourceUrl
                }
              }
              dynamic {
                title
                desc
                listItem {
                  text
                }
              }
              message {
                img {
                    sourceUrl
                }
                role
                title
                text
                role
                name
                signature
                }
            manager {
                title
                listManager {
                    img {
                    sourceUrl
                }
                role
                name
                }
                }
            }
            
        }
    }
`;
//
const GET_DATA_ASSETS_PAGE = `
    {
        page(id: "cG9zdDoxMDQ2") {
            aboutAssets {
            assets {
                title
                desc
                album {
                sourceUrl
                }
            }
            facilities {
                title
                listAssets {
                    img {
                    sourceUrl
                    }
                    heading
                    listItem {
                    title
                    content
                    }
                }
            }
            album {
                title 
                desc
                album {
                sourceUrl
                }
            }
            equipment {
                title
                listEquip {
                title
                text
                imgs {
                    sourceUrl
                }
                }
            }
            profile {
                left {
                title
                img {
                    sourceUrl
                }
                label
                labelMobile
                url
                }
                right {
                title
                listItem {
                    text
                    date
                    url
                }
                }
            }
        }
    }
}
`;
//
const GET_DATA_PEOPLE_PAGE = `
    {
        page(id: "cG9zdDo5MDc=") {
            aboutPeople {
            member {
                title
                titleMobile
                subTitle
                desc
                img {
                sourceUrl
                }
            }
            proactive {
                title
                left {
                text1
                text2
                img {
                    sourceUrl
                }
                }
                right {
                img {
                    sourceUrl
                }
                listItem {
                    text
                }
                }
            }
            message {
                heading
                title
                text
                role
                signature
                name
                img {
                sourceUrl
                }
            }
            people {
                listPeople {
                img {
                    sourceUrl
                }
                role
                name
                }
            }
            }
        }
}
`;
//
const GET_DATA_QHSE_PAGE = `
    {
        page(id: "cG9zdDoxMDM3") {
        aboutQhse {
            achivement {
            title
            listProject {
                year
                title
                desc
                heading
                content 
            }
            }
              info {
        title
        listItem {
          img {
            sourceUrl
          }
          desc
        }
      }
      quality {
        title 
        listItem {
          title 
          text
        }
      }
      certificed {
        title
        album {
          sourceUrl
        }
      }
      iso {
        title
        text
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
    GET_DATA_ABOUT_PAGE,
    GET_DATA_ASSETS_PAGE,
    GET_DATA_PEOPLE_PAGE,
    GET_DATA_QHSE_PAGE,
};
