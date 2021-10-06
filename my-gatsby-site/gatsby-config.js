module.exports = {
  pathPrefix: "/DemoGatsby",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  flags: {
    LMDB_STORE: true,
  },
  plugins: [
    "gatsby-plugin-mdx",
    /* {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    }, */
  ],
};
