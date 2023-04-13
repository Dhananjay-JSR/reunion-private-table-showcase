import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useSVGContent } from './useSvg'

export default function SVGEmbed({src,className}:{
    src:string,
    className?:React.HTMLAttributes<SVGSVGElement>['className']
}) {
    const data:{
      media:string,
      imgUrl:string
    } = useSVGContent(src);
    const svgContainer = useRef() as MutableRefObject<SVGSVGElement>;
    // console.log(data.media)
    // const regExp = RegExp('(?<=\/uploads/)[^\.]+');
    let Height = "10";
    let Width = "10";
    let Content = "";
    let ViewBox = "";
    let exp1 =  /<svg.*?width="(\d+)" height="(\d+)".*?viewBox="([\s\S]*?)".*?>([\s\S]*?)<\/svg>/
    //regex to extract svg content width and height from the svg string but not ViewBox
    let exp2 = /<svg.*?width="(\d+)" height="(\d+)".*?>([\s\S]*?)<\/svg>/
    // console.log(exp2.exec(data.media))
    Width=exp2.exec(data.media)![1]
    Height = exp2.exec(data.media)![2]
    Content = exp2.exec(data.media)![3].replace(/fill="(.*?)"/g, '').replace(/stroke="(.*?)"/g, '')
    Content = Content.replace("fill-rule","fillRule")
    // Content = exp1.exec(data.media)![4].replace(/fill="(.*?)"/g, '').replace(/stroke="(.*?)"/g, '')
    // ViewBox = exp1.exec(data.media)![3]
    
  
    return (
    <svg width={Width} height={Height} viewBox={`0 0 ${Width} ${Height}`}  xmlnsXlink={"http://www.w3.org/2000/svg"} className={className} dangerouslySetInnerHTML={{
      __html:Content 
    }}>
    </svg>
  )
}