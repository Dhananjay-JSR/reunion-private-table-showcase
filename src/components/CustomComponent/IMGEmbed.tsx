import { useImageContent } from "./useImage";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
type PropsType = Omit<React.ComponentProps<typeof GatsbyImage>,'image'> & {
    src:string
}
export default function IMGEmbed(Props:PropsType){
    const data = useImageContent(Props.src);
    return <>
    <GatsbyImage image={data.localFile.childImageSharp.gatsbyImageData} {...Props} />
    </>
} 