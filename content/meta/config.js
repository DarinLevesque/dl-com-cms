const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Darin Levesque's Resume, Portfolio & Blog", // <title>
  shortSiteTitle: "DarinLevesque.com", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://darinlevesque.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Darin Levesque",
  authorTwitterAccount: "darinlevesque",
  // info
  infoTitle: "Darin Levesque",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Darin Levesque's Resume, Portfolio & Blog",
  manifestShortName: "Darin L", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "darin@darinlevesque.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/darinlevesque" },
    { name: "twitter", url: "https://twitter.com/darinlevesque" },
    { name: "facebook", url: "https://facebook.com/darinlevesque" }
  ]
};
