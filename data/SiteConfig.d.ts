export interface SiteConfig {
  siteTitle: string;
  siteTitleShort: string;
  siteTitleAlt: string;
  siteLogo: string;
  siteUrl: string;
  pathPrefix: string;
  siteDescription: string;
  siteRss: string;
  siteFBAppID: string;
  googleAnalyticsID: string;
  disqusShortname: string;
  postDefaultCategoryID: string;
  dateFromFormat: string;
  dateFormat: string;
  userName: string;
  userTwitter: string;
  userLocation: string;
  userAvatar: string;
  userDescription: string;
  userLinks: UserLinksItem[];
  copyright: string;
  themeColor: string;
  backgroundColor: string;
}
interface UserLinksItem {
  label: string;
  url: string;
  iconClassName: string;
}
