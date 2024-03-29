import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [  'gatsby-plugin-postcss',"gatsby-plugin-image",
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-plugin-sharp",
    options: {
      defaults: {
        quality: 70,
        formats: ["auto", "webp", "avif"],
        placeholder: "blurred",
      },
    },
  },{
    resolve:"gatsby-source-graphql",
    options:{
      typeName:"REUNION",
      fieldName:"reunion",
       url: "https://strapi.web3p.in/graphql",
    }
  },'reunion-image-fetch'],
}

export default config
