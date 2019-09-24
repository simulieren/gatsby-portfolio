// The createPosts function queries the graphql for data and automatically creates new pages.
const createPosts = require(`./createPosts`);
// The createNotes function queries the graphql for data and automatically creates new pages.
const createNotes = require(`./createNotes`);

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await createPosts(graphql, createPage);
  await createNotes(graphql, createPage);
};
