// Query partial: retrieve categories post fields.
const categoriesPostFields = `
  categories {
      nodes {
        uri
        slug
        name
      }
  }
`
export default categoriesPostFields
