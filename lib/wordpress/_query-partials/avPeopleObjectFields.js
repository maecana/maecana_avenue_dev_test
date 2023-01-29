import { avSidebarCard } from "./screens"

const avPeopleObjectFields = `
  ... on People {
  slug
  content
  title
  name: title
  uri: link
  featuredImage {
    node {
      sourceUrl
      altText
    }
  } 
  avPeopleDetails {
    avPeopleDetailsData {
      role
      avatar {
        title
        sourceUrl
        altText
      }
      socialLinks {
        linkedin
        twitter
        facebook
      }
        role
        email
        phone
        mobile
    }
  }
  peopleExpertises {
    nodes {
      name
      slug
    }
  }
  ${avSidebarCard}
 }
`

export default avPeopleObjectFields
