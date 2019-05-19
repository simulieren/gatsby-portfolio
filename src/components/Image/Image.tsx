import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

interface ImageProps {
  filename: string;
  alt?: string;
  style?: React.CSSProperties;
}

export const Image = (props: ImageProps) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <Img alt={props.alt as string} sizes={imageSizes} style={props.style} />
      );
    }}
  />
);
