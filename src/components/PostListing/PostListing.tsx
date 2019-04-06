import React from "react";
import TextListItem from "../TextListItem";
import { PostEdge, Post } from "../Post/Post";

interface PostListingProps {
  type: string;
  headlineFontSize?: number;
  postEdges: PostEdge[];
}

class PostListing extends React.Component<PostListingProps> {
  getPostList() {
    const postList: Post[] = [];
    this.props.postEdges.forEach((postEdge: PostEdge) => {
      debugger;
      postList.push({
        category: postEdge.node.frontmatter.category,
        type: postEdge.node.frontmatter.type,
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        link: postEdge.node.frontmatter.link,
        date: postEdge.node.fields.date.split(`T`)[0].split(`-`),
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();

    return (
      <div>
        {postList
          .filter(
            post => (this.props.type ? post.type === this.props.type : false)
          )
          .map(post => (
            <TextListItem
              key={post.title + post.date}
              post={post}
              category={post.category}
              tags={post.tags}
              headline={post.title}
              headlineFontSize={this.props.headlineFontSize || [4, 5, 6]}
              link={post.link}
            />
          ))}
      </div>
    );
  }
}

export default PostListing;
