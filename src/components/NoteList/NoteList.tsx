import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import RenderedNotesList from './RenderedNotesList';
import TextListItem from '../TextListItem';

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

const NoteList = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(
          filter: { frontmatter: { type: { eq: "note" } } }
          sort: { fields: fields___date, order: DESC }
        ) {
          edges {
            node {
              fields {
                date
              }
              frontmatter {
                title
                type
                link
                date
                tags
                category
              }
            }
          }
        }
      }
    `}
    render={(data: NoteData) => <RenderedNotesList data={data} />}
  />
);

export default NoteList;
