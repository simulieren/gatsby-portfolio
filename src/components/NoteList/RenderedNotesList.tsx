import React, { Fragment } from 'react';
import { Text } from 'rebass';
import TextListItem from '../TextListItem';

// Utils
import getMonthString from '../../util/getMonthString';

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
  fields: { date: string; slug: string };
  frontmatter: Frontmatter;
  body?: any;
}

interface Frontmatter {
  title: string;
  type: string;
  link: string;
  date: string;
  tags: string[];
  category: string;
}

const RenderedNotesList = ({ edges }: { edges: Edge[] }) => {
  let lastMonth: number | null = null;

  return edges.map((edge, index) => {
    let date = edge.node.fields.date;

    let month = new Date(date).getMonth();
    let year = new Date(date).getFullYear();

    if (month !== lastMonth) {
      lastMonth = new Date(date).getMonth();

      return (
        <Fragment key={index}>
          <Text
            fontSize={1}
            fontFamily="Apercu"
            fontWeight="300"
            color="#666"
            mb={[3, 4]}
          >
            {getMonthString(date)} {year}
          </Text>
          <TextListItem
            {...edge.node.frontmatter}
            slug={edge.node.fields.slug}
            body={edge.node.body}
          />
        </Fragment>
      );
    }

    return (
      <TextListItem
        {...edge.node.frontmatter}
        slug={edge.node.fields.slug}
        body={edge.node.body}
      />
    );
  });
};

export default RenderedNotesList;
