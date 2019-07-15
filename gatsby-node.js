const fs = require(`fs-extra`);
const path = require(`path`);
const _ = require(`lodash`);
const moment = require(`moment`);
const siteConfig = require(`./data/SiteConfig`);

const locales = require(`./src/locales/config`);

const {
  localizedSlug,
  findKey,
  removeTrailingSlash,
  slugify
} = require(`./src/util/gatsby-node-helpers`);

const postNodes = [];

// Copy locales from 'src' to 'public'
exports.onPreBootstrap = () => {
  console.log(`Copying locales`);
  fs.copySync(
    path.join(__dirname, `/src/locales`),
    path.join(__dirname, `/public/locales`)
  );
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  const { path } = page;

  if (path.includes('404')) {
    return
  }
  
  const localeKeys = Object.keys(locales);
  deletePage(page);
  // You can access the variable "house" in your page queries now
  
  localeKeys.forEach(lang => {
    const local = locales[lang].default ? `` : lang;
    const newPath = local === `` ? `${path}` : `/${local}${path}`;

    createPage({
      ...page,
      path: newPath,
      context: {
        locale: lang,
        dateFormat: locales[lang].dateFormat,
      },
    });
  });
};

// As you don't want to manually add the correct languge to the frontmatter of each file
// a new node is created automatically with the filename
// It's necessary to do that -- otherwise you couldn't filter by language
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Check for "Mdx" type so that other files (e.g. images) are exluded
  if (node.internal.type === `Mdx`) {
    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    const name = path.basename(node.fileAbsolutePath, `.mdx`);

    // Check if post.name is "index" -- because that's the file for default language
    // (In this case "en")
    const isDefault = name === `index`;

    // Find the key that has "default: true" set (in this case it returns "en")
    const defaultKey = findKey(locales, o => o.default === true);
    // Files are defined with "name-with-dashes.lang.mdx"
    // name returns "name-with-dashes.lang"
    // So grab the lang from that string
    // If it's the default language, pass the locale for that
    const lang = isDefault ? defaultKey : name.split(`.`)[1];

    createNodeField({ node, name: `locale`, value: lang });
    createNodeField({ node, name: `isDefault`, value: isDefault });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve(`./src/templates/post.tsx`);

  const result = await graphql(`
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

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  const trelloQuery = await graphql(`
    {
      allTrelloCard {
        edges {
          node {
            childMdx {
              id
              frontmatter {
                title
                locale
                date_posted
              }
              code {
                body
                scope
              }
            }
            id
          }
        }
      }
    }
  `)

  if (trelloQuery.errors) {
    console.error("trelloQuery Errors: ", trelloQuery.errors);
    return;
  }

  
  const trelloPostList = trelloQuery.data.allTrelloCard.edges

  const postList = result.data.blog.edges;

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

  // Generate pages based on content from Trello
  trelloPostList.forEach(({ node: post }) => {
    // Generate slug based on title
    const title = _.get(post, `childMdx.frontmatter.title`);
    const date = _.get(post, `childMdx.frontmatter.date`);
    const locale = _.get(post, `childMdx.frontmatter.locale`);
    const slug = slugify(title)

    const mdx = _.get(post, 'childMdx.code.body')

    // Use the frontmatter locale to determine the locale
    const isDefault = _.get(post, `childMdx.frontmatter.isDefault`);
    const path = localizedSlug({ isDefault, locale, slug });
    console.log("TCL: path", path)    

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
          date_posted,
          mdx
        },
      });
    }
  });
};
