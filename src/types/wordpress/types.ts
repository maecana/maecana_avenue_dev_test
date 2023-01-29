export type WpImageProps = {
  sourceUrl: string;
  altText?: string;
  title?: string;
  url?: string;
  node?: { sourceUrl: string; altText?: string; title?: string };
};

export type WpCategoryProps = {
  uri?: string;
  name?: string;
  slug?: string;
};

export type WpItemProps = {
  databaseId?: number;
  title?: string;
  excerpt?: string;
  content?: string;
  featuredImage?: WpImageProps;
  categories?: {
    nodes: WpCategoryProps[];
  };
  uri?: string;
  date?: string;
  slug?: string;
};

export type WpPageLinkShape = {
  uri: string;
};

export type WpLinkProps = {
  uri?: string;
  //
  type?: string;
  customLink?: string;
  internalLink?: {
    title: string;
    uri: string;
  };
  text?: string;
};
