require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const linkResolver = require('./src/utils/linkResolver')

module.exports = {
  flags: {
    DEV_SSR: false
  },
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
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
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
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: () => (doc) => linkResolver(doc),
        schemas: {
          call_to_action: require('./custom_types/call_to_action.json'),
          careers: require('./custom_types/careers.json'),
          case_study: require('./custom_types/case_study.json'),
          contact_page: require('./custom_types/contact_page.json'),
          footer: require('./custom_types/footer.json'),
          home_page: require('./custom_types/home_page.json'),
          job_listing: require('./custom_types/job_listing.json'),
          navigation: require('./custom_types/navigation.json'),
          news_article: require('./custom_types/news_article.json'),
          news_page: require('./custom_types/news_page.json'),
          service: require('./custom_types/service.json'),
          specialty: require('./custom_types/specialty.json'),
          team_member: require('./custom_types/team_member.json'),
          team_page: require('./custom_types/team_page.json'),
          work_page: require('./custom_types/work_page.json'),
        }
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        // your segment write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        prodKey: `sYNpWoN4TTcS60tKWxC2mpDXGWXY4STh`,

        // if you have a development env for your segment account, paste that key here
        // when process.env.NODE_ENV === 'development'
        // optional; non-empty string
        // devKey: `SEGMENT_DEV_WRITE_KEY`,

        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        // if false, see below on how to track pageviews manually
        trackPage: true,

        // number (defaults to 50); time to wait after a route update before it should
        // track the page change, to implement this, make sure your `trackPage` property is set to `true`
        trackPageDelay: 50,

        // If you need to proxy events through a custom endpoint,
        // add a `host` property (defaults to https://cdn.segment.io)
        // Segment docs:
        //   - https://segment.com/docs/connections/sources/custom-domains
        //   - https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#proxy
        // host: `https://override-segment-endpoint`,

        // boolean (defaults to false); whether to delay load Segment
        // ADVANCED FEATURE: only use if you leverage client-side routing (ie, Gatsby <Link>)
        // This feature will force Segment to load _after_ either a page routing change
        // or user scroll, whichever comes first. This delay time is controlled by
        // `delayLoadTime` setting. This feature is used to help improve your website's
        // TTI (for SEO, UX, etc).  See links below for more info.
        // NOTE: But if you are using server-side routing and enable this feature,
        // Segment will never load (because although client-side routing does not do
        // a full page refresh, server-side routing does, thereby preventing Segment
        // from ever loading).
        // See here for more context:
        // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment-js/pull/19#issuecomment-559569483
        // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
        // Problem/solution: https://marketingexamples.com/seo/performance
        delayLoad: true,

        // number (default to 1000); time to wait after scroll or route change
        // To be used when `delayLoad` is set to `true`
        delayLoadTime: 1000,

        // Whether to completely skip calling `analytics.load()`.
        // ADVANCED FEATURE: only use if you are calling `analytics.load()` manually
        // elsewhere in your code or are using a library
        // like: https://github.com/segmentio/consent-manager that will call it for you.
        // Useful for only loading the tracking script once a user has opted in to being tracked, for example.
        manualLoad: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
