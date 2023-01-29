
import { gql } from "@apollo/client"
import defaultPageData from "../_query-partials/defaultPageData"

const queryPeopleById = gql`
  query People_BY_ID(
    $id: ID!
    $idType: PeopleIdType = SLUG
  ) {
    ${defaultPageData}
  
    people(id: $id, idType: $idType) {
      title
    }
  }
  
`

export default queryPeopleById