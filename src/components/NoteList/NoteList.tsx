import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import RenderedNotesList from './RenderedNotesList';

interface NoteData {
  allMdx: AllMdx;
}

interface AllMdx {
  edges: Edge[];
}

interface Edge {
  node: Node;
}

interface Node {
  fields: { date: string };
  frontmatter: Frontmatter;
}

interface Frontmatter {
  title: string;
  type: string;
  link: string;
  date: string;
  tags: string[];
  category: string;
}

interface Props {
  filter: string;
}

const NoteList = ({ filter }: Props) => {
  const data: NoteData = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { type: { eq: "note" } } }
        sort: { fields: fields___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              date
              slug
            }
            frontmatter {
              title
              type
              link
              date
              tags
              category
            }
            body
          }
        }
      }
    }
  `);

  if (filter) {
    return (
      <RenderedNotesList
        edges={data.allMdx.edges.filter(
          edge => edge.node.fields.slug !== filter
        )}
      />
    );
  }

  return <RenderedNotesList edges={data.allMdx.edges} />;
};

export default NoteList;
