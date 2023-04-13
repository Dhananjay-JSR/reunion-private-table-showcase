import React from 'react';
import PageLayout from '../components/PageLayout';
import Table from '../components/Table/Table';

const example = () => {
	const col = [
		{
			key: 'alert_date',
			title: 'Alert Date',
			headerGroup: 'Hrp1',
			headerGrp: 'Grp2'
		},
		{
			key: 'alert',
			title: 'alert',
			headerGroup: 'Hrp2',
			headerGrp: 'Grp2'
		},
		{
			key: 'delivery_date',
			title: 'Delivery Date',
			headerGroup: 'Hrp1',
			headerGrp: 'Grp2'
	
		},
		{
			key: 'date',
			title: 'Date',
			headerGroup: 'Hrp2',
			headerGrp: 'Grp2'
		},
		{
			key: 'delivery_status',
			title: 'Delivery Status',
		},
		{
			key: 'delivery',
			title: 'Delivery',
		},
	];

	const data = [
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Sent',
			delivery: 'Sent',
			alert: 'Sent',
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
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Delivered',
			delivery: 'Delivered',
			alert: 'Delivered',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			delivery: 'Failed',
			alert: 'Failed',
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
			<Table
				heading='MyTable'
				column={col}
				data={data}
				options={{
					// groupHeader: true,
					
					// columnSortable: true,
					// showCheckbox: true,
					// rowDND: true,
					// toggleColumns: true,
					// columnSplitting: true,
					// stickyHeaders: true,

				}}
			/>
		</PageLayout>
	);
};

export default example;
