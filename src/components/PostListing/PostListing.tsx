import React from "react";
import TextListItem from "../TextListItem";
import { PostEdge, Post } from "../Post/Post";
import LocalizedLink from "../LocalizedLink";

interface PostListingProps {
  type: string;
  headlineFontSize?: number;
  postEdges: PostEdge[];
}

const PostListing = (props: any) => {
  const { mdxEdges, type } = props;

  return (
    <div>
      {mdxEdges.map(({ node: post }) => (
        <li key={`${post.frontmatter.title}-${post.fields.locale}`}>
          <LocalizedLink to={`/${post.parent.relativeDirectory}`}>
            {post.frontmatter.title}
          </LocalizedLink>
          <div>{post.frontmatter.date}</div>
        </li>
      ))}
    </div>
  );
};

export default PostListing;
