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

const RenderedNotesList = ({ data }: { data: NoteData }) => {
  let lastMonth: number | null = null;

  return data.allMdx.edges.map((edge, index) => {
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
          <TextListItem {...edge.node.frontmatter} />
        </Fragment>
      );
    }

    return <TextListItem {...edge.node.frontmatter} />;
  });
};

export default RenderedNotesList;
