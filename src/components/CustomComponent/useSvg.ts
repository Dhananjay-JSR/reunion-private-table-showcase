import { graphql, useStaticQuery } from "gatsby"

export  const useSVGContent = (url:string)=>{
    const data = useStaticQuery(
        graphql `
        query SVGIMAGE {
            allReunionSvg {
              nodes {
                media
                imgUrl
              }
            }
          }
        `
      )


      return data.allReunionSvg.nodes.find(({
        imgUrl,media
      }:{
        imgUrl:string,
        media:string
      })=>imgUrl==url)
}