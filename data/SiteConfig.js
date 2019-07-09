module.exports = {
  siteTitle: `Simon Halimonov | Digital Product Designer and Developer`, // Site title.
  siteTitleShort: `Simon Halimonov`, // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: `Simon Halimonov | Designer and Developer`, // Alternative site title for SEO.
  siteLogo: `/logos/logo-1024.png`, // Logo used for SEO and manifest.
  siteUrl: `https://www.simonhalimonov.de`, // Domain of your website without pathPrefix.
  pathPrefix: `/gatsby-advanced-starter`, // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: `Simon Halimonov is a digital product designer and fullstack developer.`, // Website description used for RSS feeds/meta description tag.
  siteRss: `/rss.xml`, // Path to the RSS file.
  siteFBAppID: ``, // FB Application ID for using app insights
  googleAnalyticsID: ``, // GA tracking ID.
  disqusShortname: ``, // Disqus shortname.
  postDefaultCategoryID: `Tech`, // Default category for posts.
  dateFromFormat: `YYYY-MM-DD`, // Date format used in the frontmatter.
  dateFormat: `DD/MM/YYYY`, // Date format for display.
  userName: `Simon Halimonov`, // Username to display in the author segment.
  userTwitter: ``, // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: `Earth`, // User location to display in the author segment.
  userAvatar: ``, // User avatar to display in the author segment.
  userDescription: ``, // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: `GitHub`,
      url: `https://github.com/Vagr9K/gatsby-advanced-starter`,
      iconClassName: `fa fa-github`,
    },
    {
      label: `Twitter`,
      url: `https://twitter.com/Vagr9K`,
      iconClassName: `fa fa-twitter`,
    },
    {
      label: `Email`,
      url: `mailto:vagr9k@gmail.com`,
      iconClassName: `fa fa-envelope`,
    },
  ],
  copyright: `Copyright © 2019. Simon Halimonov`, // Copyright string for the footer of the website and RSS feed.
  themeColor: `#fff`, // Used for setting manifest and progress theme colors.
  backgroundColor: `#000`, // Used for setting manifest background color.
};
