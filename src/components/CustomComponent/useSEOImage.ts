import { graphql, useStaticQuery } from "gatsby";

export const useSEOImage = (url: string) => {
  const data = useStaticQuery(
    graphql`
      query SEOFetch {
        allReunionimage {
          edges {
            node {
              localFile {
                childImageSharp {
                  original {
                    src
                  }
                }
                url
              }
            }
          }
        }
      }
    `    
  );


  return data.allReunionimage.edges.find((e:any)=>e.node.localFile.url.replace(/https:\/\/strapi\.web3p\.in\/uploads\//g,'/uploads/') ===url ).node.localFile.childImageSharp.original.src  ;
};
