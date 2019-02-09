const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog - a blog starter for GatsbyJS", // <title>
  shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://dl-com-cms.netlify.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Darin Levesque",
  authorTwitterAccount: "darinlevesque",
  // info
  infoTitle: "Darin Levesque",
  infoTitleNote: "Digital Space",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "Darin@darinlevesque.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/darinlevesque" },
    { name: "twitter", url: "https://twitter.com/darinlevesque" },
    { name: "facebook", url: "https://facebook.com/darinlevesque" }
  ]
};
