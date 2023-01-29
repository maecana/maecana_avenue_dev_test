/**
 * @param  doc
 */
export function getGqlString(doc) {
  return doc.loc && doc.loc.source.body;
}

export function logPageQuery(query, variables) {
  if (process.env.NEXT_LOG_PAGE_QUERY === "true") {
    console.log(getGqlString(query));
    console.log(variables);
  } else return null;
}
