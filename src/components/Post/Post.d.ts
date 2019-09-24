export interface MdxEdges {
  node: MdxNode;
}

// Post

interface Post {
  category: string;
  type: string;
  tags: string[];
  title: string;
  link: string | null;
  path?: string;
  locale?: string;
}

// GraphQL

interface MdxNode {
  frontmatter: Frontmatter;
  fields: Fields;
  parent: Parent;
}
interface Frontmatter {
  category: string;
  type: string;
  title: string;
  tags: string[];
  link: null;
}
interface Fields {
  locale: string;
}
interface Parent {
  __typename: string;
  relativeDirectory: string;
}
