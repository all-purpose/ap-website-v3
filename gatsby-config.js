require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `http://allpurpose.io`,
    title: `All Purpose`,
    description: `Our mission is to help organizations positively impact people and the planet through the design and creation of human-centered experiences and products, and inspire others to do the same.`,
    author: `All Purpose`,
    image: `/img/all-purpose_image.png`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-140430866-1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "http://allpurpose.io",
        sitemap: "http://allpurpose.io/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/all-purpose_icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "@prismicio/gatsby-source-prismic-graphql",
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        pages: [
          {
            type: "Page", // need capitalize
            match: "/:uid",
            previewPath: "/",
            component: require.resolve("./src/templates/page.js"),
          },
          {
            type: "Team Page",
            match: "/team",
            previewPath: "/",
            component: require.resolve("./src/templates/teamPage.js"),
          },
          {
            type: "Work Page",
            match: "/work",
            previewPath: "/",
            component: require.resolve("./src/templates/workPage.js"),
          },
          {
            type: "News Page",
            match: "/news",
            previewPath: "/",
            component: require.resolve("./src/templates/newsPage.js"),
          },
          {
            type: "Contact Page",
            match: "/contact",
            previewPath: "/",
            component: require.resolve("./src/templates/contactPage.js"),
          },
          {
            type: "Case Study",
            match: "/case-study/:uid",
            previewPath: "/case-study",
            sortBy: "order_ASC",
            component: require.resolve("./src/templates/caseStudy.js"),
          },
          {
            type: "News Article",
            match: "/news/:uid",
            previewPath: "/news",
            sortBy: "meta_firstPublicationDate_DESC",
            component: require.resolve("./src/templates/newsArticle.js"),
          },
          {
            type: "Careers",
            match: "/careers",
            previewPath: "/",
            component: require.resolve("./src/templates/careersPage.js"),
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
