import React from 'react';
import PageLayout from '../components/PageLayout';
import Table from '../components/Table/Table';

const example = () => {
	const col = [
		{
			key: 'alert_date',
			title: 'Alert Date',
		},
		{
			key: 'delivery_date',
			title: 'Delivery Date',
		},
		{
			key: 'delivery_status',
			title: 'Delivery Status',
		},
	];

	const data = [
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			delivery_status: 'Sent',
			childComponentName: ['ContentBuilder', 'ContentBuilder'],
			childData: [
				{
					Type: 'RERA Project 1',
					Head: 'Ninad Dere',
					subTitle2: 'Contractor',
				},
				{
					Type: 'RERA Project 2',
					Head: 'Ninad Dere',
					subTitle2: 'Contractor',
				},
			],
		},
		{
			alert_date: '21-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			delivery_status: 'Delivered',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			childComponentName: [
				'ContentBuilder',
				'ContentBuilder',
				'ContentBuilder',
			],
			childData: [
				{
					Type: 'RERA Project',
					Head: 'Ninad Dere',
					subTitle2: 'Contractor',
				},
				{
					Type: 'RERA Project',
					Head: 'Ninad Dere',
					subTitle2: 'Contractor',
				},
				{
					Type: 'RERA Project',
					Head: 'Ninad Dere',
					subTitle2: 'Contractor',
				},
			],
		},
	];

	return (
		<PageLayout>
			{/* <Table heading='My Table' column={col} data={data} /> */}
			<Table heading='MyTable' column={col} data={data} options={{
				columnSortable: true,
				rowDND: true,
				toggleColumns: true,
				columnSplitting: true,
			}} />
		</PageLayout>
	);
};

export default example;
