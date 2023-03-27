import React from 'react';
import AlertDetailList from '../components/AlertDetailList';
import { ContentBuilder } from '../components/ContentBuilder';
import AlertTable from '../components/AlertTable';
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
						colspan: '1',
						value: [
							'(asdd)Rustomjee',
							'Promoters',
							'RERA Promoters',
							'Investors',
						],
					},
					{
						colspan: '1',
						name: 'Date Created',
						value: ['26-12-2022'],
					},
				]}
				heading={'Alert Details'}
			/>
			<div className='p-5'>
				<AlertTable heading='Alert History' />
				{/* </PageLayout> */}
			</div>
		</div>
	);
};

export default alertDetails;
