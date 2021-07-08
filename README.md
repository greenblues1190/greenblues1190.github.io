# greenblues1190.github.io

A Github Page for my blog. This is a fork of [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) by Gatsby.js.

## To run locally

1. Clone or download the repository.
2. Make sure you have node.js, gatsby-cli installed.<br>`brew install nvm`<br>`nvm install --lts`<br>`npm install -g gatsby-cli`
3. Run `gatsby develop` to build public files and start local development server.
4. Connect `localhost:8000` on browsers. The local development server will automatically rebuild and refresh the pages on change.

## To deploy on Github Pages

Run `npm run deploy`. `gatsby-plugin-cname` plugin will create cname file in `public` folder with the site url in `gatsby-config.js`.