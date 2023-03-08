import { Link } from 'gatsby';
import React from 'react';
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
		<Link
			to={
				'/' +
				props.Type.toLowerCase()
					.replaceAll('&', 'n')
					.replaceAll(/\s+/g, '-')
					.replace(/\//, '-')
			}>
			<div className=' md:mb-8 md:mt-0 my-6  hover:bg-[#00000005] hover:cursor-pointer transition-all ease-in-out border-l-4 border-[#D9D9D9]  py-2 pr-2 pl-4'>
				<div className='flex justify-between items-start md:my-1 md:pr-3 w-full '>
					<div>
						{props.subHead && (
							<p
								aria-label='subHeadline'
								className='text-[#9E9E9E]  text-[10px] md:text-[12px] w-fit align-middle'>
								{props.subHead}
							</p>
						)}
						<div
							aria-label='Headline'
							className='text-primary md:text-[20px] max-w-[200px]  md:max-w-none'>
							{props.Head}
						</div>
					</div>
					<div
						aria-label='type'
						className={` ${
							props.subHead == undefined ? `ml-auto ` : ``
						} bg-[#E6F1FF] text-secondary  border text-[10px] px-2 md:text-[12px] rounded-xl border-secondary`}>
						{props.Type}
					</div>
				</div>
				{props.subTitle1 && (
					<div
						className={`space-y-1 ${props.Head ? `mt-1` : `mt-2`}`}>
						{props.subTitle1 && (
							<p
								aria-label='subtitle1'
								className=' text-[12px]  md:text-[14px] text-[#434343]'>
								{' '}
								{props.subTitle1}
							</p>
						)}
					</div>
				)}

				{(props.subTitle2 || props.tag) && (
					<div className='flex justify-between items-center text-[11px] md:text-sm mt-2 md:my-1 md:mr-3'>
						<div
							aria-label='subtitle2'
							className=' text-[#6B6B6B]  md:max-w-2xl break-all'>
							{props.subTitle2}
						</div>
						{props.tag && (
							<div
								aria-label='tags'
								className=' border px-1 w-fit text-[#6B6B6B] border-[#CACACA] rounded-sm'>
								{props.tag}
							</div>
						)}
					</div>
				)}
			</div>
		</Link>
	);
}
