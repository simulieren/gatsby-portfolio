// Post

interface Post {
  category: string;
  type: string;
  path: string;
  tags: string[];
  cover: string;
  title: string;
  link: string | null;
  date: string[];
  excerpt: string;
  timeToRead: number;
}

// GraphQL

export interface PostEdge {
  node: PostEdgeNode;
}

export interface PostEdgeNode {
  fields: Fields;
  excerpt: string;
  timeToRead: number;
  frontmatter: Frontmatter;
}

export interface Fields {
  slug: string;
  date: string;
}

export interface Frontmatter {
  category: string;
  type: string;
  title: string;
  tags: string[];
  cover: string;
  date: string;
  link: null;
}

//

interface MdxNode {
  frontmatter: Frontmatter;
  fields: Fields;
  parent: Parent;
}
interface Frontmatter {
  title: string;
}
interface Fields {
  locale: string;
}
interface Parent {
  __typename: string;
  relativeDirectory: string;
}
