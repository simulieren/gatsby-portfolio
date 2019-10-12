const _ = require(`lodash`);
const slugify = require(`@sindresorhus/slugify`);

module.exports = async (graphql, createPage) => {
  const noteTemplate = require.resolve(`../../src/templates/note.tsx`);

  const noteResults = await graphql(`
    {
      blog: allFile(filter: { sourceInstanceName: { eq: "notes" } }) {
        edges {
          node {
            relativeDirectory
            childMdx {
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `);

  if (noteResults.errors) {
    console.error(noteResults.errors);
    return;
  }

  const noteList = noteResults.data.blog.edges;

  noteList.forEach(({ node: note }) => {
    // Return if note is empty
    if (note.childMdx === null) return;
    const title = _.get(note, `childMdx.frontmatter.title`);

    // Create the slug based on the title
    const slug = slugify(title);
    // Use the fields created in exports.onCreateNode
    const path = `/notes/${slug}`;

    if (title && slug) {
      createPage({
        path: path,
        component: noteTemplate,
        context: {
          title,
        },
      });
    }
  });
};
