import featuredImagePostFields from "../featuredImagePostFields";

export const imageFields = `
    sourceUrl
    altText
    title
`;

export const wpPageObjectFields = `
  title
  excerpt
  uri
  ${featuredImagePostFields}
`;



export const internalLink = `
  internalLink {
    ... on Page {
      title
      uri
    }
  }
`;

export const linkFields = `
    type
    ${internalLink}
    customLink
    text
`;



export const ctaFields = `
  subheading
  heading
  description
  image {
    sourceUrl
    altText
  }
  link {
    ${linkFields}
  }
`;
