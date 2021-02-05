# AP Website

## Install locally

Assuming NodeJS > 12

1. Install Yarn (v1 aka classic Yarn is currently used for project)

```
npm install yarn -g
```

2. Clone the repo to local folder

3. Run `yarn install` to install the project dependencies

**Note:** Gatsby CLI is needed to run the Gatsby development/build commands. It’s included in the `package.json` file.

4. Create `.env.development` and `.env.production` files in the root of the project. These will hold the environment variables for the Prismic CMS integration. Contact a AP Website team member to get the content of these files.

## Development

### Build and Server

1. Run `gatsby develop`

2. After building, a hot reload server is started automatically. Browse to `http://localhost:8000` to show the development site. Each subsequent save in the code editor will re-load the dev site.

### GraphQL editor

Running the development build will also start the visual GraphiQL tool which you can use to build GraphQL queries and then copy and paste into the code.

In a browser go to `http://localhost:8000/___graphql` to open the GraphiQL editor. 

### Caching and Prismic CMS data

If you made changes in Prismic you will likely need to clear the cache in Gatsby so that the new data is pulled in.

Run `gatsby clean && gatsby develop` to clear the cache (deletes the `.cache` folder) and restart the dev build/server.

**Note:** You will only need to run `gatsby clean` when new data has come in.

## Local Production Build

It’s useful to build an optimized production version of the site locally to ensure the site builds and works as expected before deploying it live.

1. Run `gatsby build && gatsby serve` to build an optimized production version locally. The `gatsby serve` command will start a local server. 

2. Open a browser and go to `http://localhost:9000` to view the production-optimized version of the site.

## Gatsby Files

(From Gatsby starter README)

**`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

**`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

**`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

**`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

## Resources:

* [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/)
* [Gatsby Docs](https://www.gatsbyjs.org/docs/)
* [How to use GraphiQL](https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/#how-to-use-graphiql)
* [Troubleshooting Common Errors (in Local Environments)](https://www.gatsbyjs.com/docs/how-to/local-development/troubleshooting-common-errors/)