import { graphql, useStaticQuery } from "gatsby"

export const useImageContent = (url:string)=>{
    const data = useStaticQuery(
        graphql `
        query IMGFetch {
            allReunionimage {
                nodes {
                  imgUrl
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
          }
        `
      )


      return data.allReunionimage.nodes.find(({imgUrl,localFile}:{
        imgUrl:string,
        localFile:Object
      })=>imgUrl===url)
}