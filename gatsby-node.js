const fs = require(`fs-extra`);
const path = require(`path`);
const _ = require(`lodash`);
const slugify = require(`@sindresorhus/slugify`);

const siteConfig = require(`./data/SiteConfig`);
const locales = require(`./src/locales/config`);

const { findKey } = require(`./src/util/gatsby-node-helpers`);

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

  if (path.includes(`404`)) {
    return;
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

    // Get the title from the frontmatter so we can use it
    // to create a slug for the createNodeField function
    const title = _.get(node, `frontmatter.title`);
    if (title) {
      const slug = slugify(title);
      createNodeField({ node, name: `slug`, value: slug });
    }

    // Create a node field for the date based on the
    // date from the frontmatter
    const date = _.get(node, `frontmatter.date`);
    if (date) {
      const dateString = new Date(date);
      createNodeField({ node, name: `date`, value: dateString });
    }

    createNodeField({ node, name: `locale`, value: lang });
    createNodeField({ node, name: `isDefault`, value: isDefault });
  }
};

const createPages = require(`./gatsby/createPages/createPages`);
exports.createPages = createPages;
