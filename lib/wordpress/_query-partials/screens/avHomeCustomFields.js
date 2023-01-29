
const itemFields = `
  type: __typename
  title
  excerpt
  featuredImage {
    node {
      sourceUrl
      altText
    }
  }
  uri
`

const avSearchItems = `
avSearchItems {
  avSearchItemsData {
      ... on Page {
        ${itemFields}
      }
      ... on Post {
        ${itemFields}
      }
      ... on People {
        ${itemFields}
      }
    }
  }
`

export const avHomeCustomFields = `
  ${avSearchItems}
`


