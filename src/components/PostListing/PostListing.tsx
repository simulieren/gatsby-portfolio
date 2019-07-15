import React from "react";
import TextListItem from "../TextListItem";
import { MdxEdges, Post } from "../Post/Post";
import get from "lodash/get";

interface PostListingProps {
  type: string;
  headlineFontSize?: number;
  mdxEdges: MdxEdges[];
}

const PostListing = (props: PostListingProps) => {
  const { mdxEdges, type, headlineFontSize } = props;
  const posts: Post[] = mdxEdges.map(edge => ({
    title: get(edge, "node.frontmatter.title"),
    category: get(edge, "node.frontmatter.category"),
    path: get(edge, "node.parent.relativeDirectory"),
    tags: get(edge, "node.frontmatter.tags"),
    link: get(edge, "node.frontmatter.link"),
    locale: get(edge, "node.fields.link"),
    type: get(edge, "node.frontmatter.type")
  }));

  return (
    <div>
      {posts
        .filter(p => p.type === type)
        .map(post => (
          <TextListItem
            post={post}
            {...post}
            key={`${post.title}-${post.locale}`}
            path={`/${post.path}`}
            headlineFontSize={headlineFontSize || [4, 5, 6]}
          />
        ))}
    </div>
  );
};

export default PostListing;
