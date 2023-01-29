// Define valid WP post types (singular and plural GraphQL names).
export const postTypes = {
  page: {
    pluralName: 'pages',
    route: ''
  },
  post: {
    pluralName: 'posts',
    route: 'news'
  },
  team: {
    pluralName: 'teams',
    route: 'team'
  },
  product: {
    pluralName: 'products',
    route: 'product'
  },
  project: {
    pluralName: 'projects',
    route: 'project'
  },
  people: {
    pluralName: 'peoples',
    route: "people"
  }
}

// Define hierarchical post types.
export const hierarchicalPostTypes = ['page']
