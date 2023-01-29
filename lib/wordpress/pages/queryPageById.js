
import defaultPageData from "@/lib/wordpress/_query-partials/defaultPageData"
import {
  avHomeCustomFields,

} from "@/lib/wordpress/_query-partials/screens"
import { gql } from "@apollo/client"

// Fragment: retrieve single page fields.
export const singlePageFragment = gql`
  fragment SinglePageFields on Page {
    templateSlug
  }
`


export const queryPageById = gql`
  query GET_PAGE_BY_ID(
    $id: ID!
    $idType: PageIdType = URI
  ) {
    ${defaultPageData}
    page(id: $id, idType: $idType) {
      ...SinglePageFields
      title
      content
    }
  }
  ${singlePageFragment}
`

export const queryPageHomeById = gql`
  query GET_PAGE_BY_ID(
    $id: ID!
    $idType: PageIdType = URI
  ) {
    ${defaultPageData}
    page(id: $id, idType: $idType) {
      ...SinglePageFields
      ${avHomeCustomFields}
    }
  }
  ${singlePageFragment}
`

