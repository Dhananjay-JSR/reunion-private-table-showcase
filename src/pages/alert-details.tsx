import React from 'react';
import AlertDetailList from '../components/AlertDetailList';
import { ContentBuilder } from '../components/ContentBuilder';
import Temp from '../components/Temp';
// import PageLayout from '../components/PageLayout';

const alertDetails = () => {
	return (
		<div className='max-w-[1000px] mx-auto mt-5'>
			{/* <PageLayout query={undefined}> */}
			<AlertDetailList
				fields={[
					{
						name: 'Name',
						value: ['Current Project by Promoter'],
						colspan: '2',
					},
					{
						name: 'Filters',
						type: 'tags',
						value: [
							'(asdd)Rustomjee',
							'Promoters',
							'RERA Promoters',
							'Investors',
						],
					},
					{
						name: 'Date Created',
						value: ['26-12-2022'],
					},
				]}
				heading={'Alert Details'}
			/>
			<Temp />
			{/* </PageLayout> */}
		</div>
	);
};

export default alertDetails;
