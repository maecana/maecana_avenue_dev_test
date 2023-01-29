export const handleWpLink = (link: any) => {
  if (!link) return null;

  const { type } = link;

  let uri = null;

  // text
  if (typeof link === "string") {
    uri = link;
  }

  // page link shape
  if (link?.uri) {
    uri = link?.uri;
  }

  // link component shape

  if (link.internalLink) {
    uri = link.internalLink.uri;
  }
  if (link.internal_link) {
    uri = link.internal_link;
  }

  if (link.customLink) {
    uri = link.customLink;
  }
  if (link.custom_link) {
    uri = link.custom_link;
  }

  if (type === "internal" && link.internalLink) {
    uri = link.internalLink.uri;
  }

  if (type === "custom" && link.customLink) {
    uri = link.customLink;
  }

  return uri;
};
