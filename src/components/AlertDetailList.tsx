import React from 'react';

type DescriptionListProps = {
	heading: string;
	fields: {
		name: string;
		type?: string | undefined;
		value: string[];
		colspan?: string;
	}[];
};

const AlertDetailList = ({ fields, heading }: DescriptionListProps) => {
	const nonEmptyFields = fields.filter((field) => field.value);

	return (
		<>
			{heading && (
				<div className='pb-3'>
					<h3 className='text-xl md:text-xl leading-6  text-gray-900'>
						{heading}
					</h3>
				</div>
			)}
			<div className='bg-white mb-8 border border-gray-200  mx-auto shadow  rounded-lg'>
				<div className=' border-gray-200 px-4  sm:px-6'>
					<dl className='grid    grid-cols-1 xs:grid-cols-2 '>
						{nonEmptyFields.map((field, index) => {
							const regex = /\(([^)]+)\)/;
							const Firstvalue = field.value.map((item) =>
								item.replace(regex, '').trim()
							);
							// if (field.type) {
							// 	console.log('field-->', field, Firstvalue);
							// }
							return (
								<div
									key={index}
									className={`${
										index < fields.length - 2
											? `border-b `
											: ``
									} ${
										fields.length % 2 != 0 &&
										index == fields.length - 2
											? ' border-b '
											: ''
									}  py-6  sm:col-span-${
										field.colspan || '1'
									}`}>
									<dt className=' max-w-[100px] md:inline-block text-sm font-normal md:w-[40%] text-secondaryLight mr-2'>
										{field.name}
									</dt>
									<dd
										className={`${
											field.type
												? 'max-w-[250px] flex flex-row '
												: 'font-normal text-sm text-gray-900 '
										}  md:inline-block align-middle`}>
										<div className='flex flex-row flex-wrap x-1'>
											{Firstvalue.map((item) => (
												<div
													className={
														field.type
															? 'text-xs bg-[#EDEDED] m-1 text-center rounded-[5px] min-h-[25px] align-text justify-center items-center flex min-w-[75px] xs:p-1'
															: ''
													}>
													<span
														className={`${
															field.type
																? 'text-[#6B6B6B] px-2 font-normal'
																: ''
														} `}>{`${item}`}</span>
												</div>
											))}
										</div>
									</dd>
								</div>
							);
						})}
					</dl>
				</div>
			</div>
		</>
	);
};

export default AlertDetailList;
