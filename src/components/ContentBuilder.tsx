import { Link } from "gatsby";
import React from "react";
export function ContentBuilder(props: {
    Type: string;
    subHead?: string;
    Head?: string;
    subTitle1?: string;
    tag?: string;
    subTitle2?: string;
    table?: {
      highlighted?: boolean;
      head?: string[];
      data?: string[][];
    };
  }) {
    return (
      <Link to={"/"+props.Type.toLowerCase().replaceAll("&", "n").replaceAll(/\s+/g, "-").replace(/\//,"-")}>
      <div
        className=" md:mb-8 md:mt-0 my-6  hover:bg-[#00000005] hover:cursor-pointer transition-all ease-in-out border-l-4 border-[#D9D9D9]  py-2 pr-2 pl-4"
      >
        <div className="flex justify-between items-start md:my-1 md:pr-3 w-full ">
          <div>
          {props.subHead && (
            <p aria-label="subHeadline" className="text-[#9E9E9E]  text-[10px] md:text-[12px] w-fit align-middle">
              {props.subHead}
            </p>
          )}
            <div aria-label="Headline" className="text-primary md:text-[20px] max-w-[200px]  md:max-w-none">{props.Head}</div>
          </div>
          <div
          aria-label="type"
            className={` ${
              props.subHead == undefined ? `ml-auto ` : ``
            } bg-[#E6F1FF] text-secondary  border text-[10px] px-2 md:text-[12px] rounded-xl border-secondary`}
          >
            {props.Type}
          </div>
        </div>
        {props.subTitle1&&<div  className={`space-y-1 ${props.Head ? `mt-1` : `mt-2`}`}>
          {props.subTitle1&&<p aria-label="subtitle1" className=" text-[12px]  md:text-[14px] text-[#434343]"> {props.subTitle1}</p>}
        </div>}
        {/* {props.table && (
          <div className={`space-y-1 ${props.table ? `mt-1` : `mt-2`}`}>
            {props.table.head
              ? props.table.data?.map((itemRow: string[], index: number) => (
                  <dl
                    key={index}
                    className="mt-5 grid gap-1 grid-cols-3 md:max-w-xl"
                  >
                    {itemRow.map((item, index) => (
                      <div
                        key={index}
                        className="h-full flex flex-col justify-between"
                      >
                        <dt className="md:text-base text-[11px] text-[#434343] ">
                          {props.table?.head && props.table.head[index]}
                        </dt>
                        <dd className="mt-3 md:text-2xl text-sm   text-gray-900">
                          {item.split(/(.*)\s(\w+\.)/)[1]}
                          <span className="italic ml-1">
                            {item.split(/(.*)\s(\w+\.)/)[2]}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                ))
              : props.table.data?.map((itemRow, index) => (
                  <div
                    className="md:max-w-xl text-xs md:text-base "
                    key={index}
                  >
                    <div className={`mt-4 md:mt-1 grid gap-1 grid-cols-4 `}>
                      {itemRow.map((item, index) => (
                        <div
                          key={index}
                          className={`${
                            index == 0
                              ? props.table?.highlighted
                                ? ` text-primary`
                                : `col-span-2`
                              : ``
                          } ${
                            itemRow.length <= 3 && index == itemRow.length - 1
                              ? itemRow.length == 2 && !props.table?.highlighted
                                ? ` border text-center rounded-sm w-fit px-2`
                                : ` col-span-2 `
                              : ``
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
          </div>
        )} */}
        {(props.subTitle2 || props.tag) && (
          <div className="flex justify-between items-center text-[11px] md:text-sm mt-2 md:my-1 md:mr-3">
            <div aria-label="subtitle2" className=" text-[#6B6B6B]  md:max-w-2xl break-all">{props.subTitle2}</div>
            {props.tag&&<div aria-label="tags" className=" border px-1 w-fit text-[#6B6B6B] border-[#CACACA] rounded-sm">
              {props.tag}
            </div>}
          </div>
        )}
      </div>
      </Link>
    );
  }