const _ = require(`lodash`);
const { localizedSlug } = require(`../../src/util/gatsby-node-helpers`);

module.exports = async (graphql, createPage) => {
  const postTemplate = require.resolve(`../../src/templates/post.tsx`);

  const postResults = await graphql(`
    {
      blog: allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        edges {
          node {
            relativeDirectory
            childMdx {
              fields {
                locale
                isDefault
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `);

  if (postResults.errors) {
    console.error(postResults.errors);
    return;
  }

  const postList = postResults.data.blog.edges;

  postList.forEach(({ node: post }) => {
    // All files for a blogpost are stored in a folder
    // relativeDirectory is the name of the folder
    const slug = post.relativeDirectory;

    const title = _.get(post, `childMdx.frontmatter.title`);
    // Use the fields created in exports.onCreateNode
    const locale = _.get(post, `childMdx.fields.locale`);
    const isDefault = _.get(post, `childMdx.fields.isDefault`);
    const path = localizedSlug({ isDefault, locale, slug });

    if (title && locale && slug) {
      createPage({
        path: path,
        component: postTemplate,
        context: {
          // Pass both the "title" and "locale" to find a unique file
          // Only the title would not have been sufficient as articles could have the same title
          // in different languages, e.g. because an english phrase is also common in german
          locale,
          title,
        },
      });
    }
  });
};
