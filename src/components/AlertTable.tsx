import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ContentBuilder } from './ContentBuilder';
import { GroupedTable } from './GroupTable/GroupTable';

const plans = [
	{
		id: 1,
		name: '26-12-2022, 5:13 PM',
		dateDelivered: '26-12-2022, 5:13 PM',
		deliveryStatus: 'Sent',
	},
	{
		id: 2,
		name: '26-12-2022, 5:13 PM',
		dateDelivered: '26-12-2022, 5:13 PM',
		deliveryStatus: 'Delivered',
	},
	{
		id: 3,
		name: '26-12-2022, 5:13 PM',
		dateDelivered: '26-12-2022, 5:13 PM',
		deliveryStatus: 'Failed',
	},
	{
		id: 4,
		name: '26-12-2022, 5:13 PM',
		dateDelivered: '26-12-2022, 5:13 PM',
		deliveryStatus: 'Failed',
	},
	{
		id: 5,
		name: '26-12-2022, 5:13 PM',
		dateDelivered: '26-12-2022, 5:13 PM',
		deliveryStatus: 'Failed',
	},
	{
		id: 6,
		name: '26-12-2022, 5:13 PM',
		dateDelivered: '26-12-2022, 5:13 PM',
		deliveryStatus: 'Failed',
	},
];

const ChevRight = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='16'
		height='16'
		fill='#6B6B6B'
		className='bi bi-chevron-right'
		viewBox='0 0 16 16'>
		<path
			fillRule='evenodd'
			d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
		/>
	</svg>
);

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

const CollapsableComponent = ({
	plan,
	planIdx,
}: {
	plan: any;
	planIdx: number;
}) => {
	const [isVisible, setIsVisible] = React.useState(false);
	return (
		<>
			<div
				key={plan.id}
				className='cursor-pointer grid grid-cols-3 w-full pb-4'
				onClick={() => {
					setIsVisible(!isVisible);
				}}>
				<div
					className={classNames(
						planIdx === 0 ? '' : '',
						'relative sm:pl-5 pr-3 text-sm'
					)}>
					<div className='font-medium text-gray-900 flex items-center my-2'>
						<span
							className={`mr-2 ${isVisible
								? 'transform rotate-90 transition duration-300 ease-in'
								: 'transform rotate-0 transition duration-300 ease-in'
								}`}>
							<ChevRight />
						</span>
						<span>{plan.name}</span>
					</div>

					{/* {planIdx !== 0 ? (
						<div className='absolute right-0 left-6 -top-px h-px ' />
					) : null} */}
				</div>
				<div
					className={classNames(
						planIdx === 0 ? '' : '',
						' px-3 py-0 my-1 text-sm text-gray-500 '
					)}>
					{plan.dateDelivered}
				</div>
				<div
					className={classNames(
						planIdx === 0 ? '' : '',
						' px-3 py-0 my-2 text-sm text-gray-500'
					)}>
					{plan.deliveryStatus}
				</div>
			</div>
			<div
				className={`-my-5 pl-8 ${isVisible
					? 'grid grid-cols-2  transition duration-1000 ease-in'
					: 'hidden transition duration-1000 ease-in'
					} `}>
				<ContentBuilder
					Type='RERA Project'
					Head='Ninad Dere'
					key={1}
					subTitle2='Contractor'
				/>
			</div>
		</>
	);
};

export default function AlertTable({ heading }: { heading: string }) {
	// return (
	// 	<div className='max-w-[100%] border-[#CACACA] border-l-slate-900'>
	// 		<div className='sm:flex sm:items-center'>
	// 			<div className='sm:flex-auto'>
	// 				<h1 className='text-xl font-normal text-gray-900'>
	// 					Alert History
	// 				</h1>
	// 			</div>
	// 		</div>
	// 		<div className='mt-4 ring-1 ring-[#CACACA]  sm:-mx-6 md:mx-0 md:rounded-xl items-center '>
	// 			<div className='w-full border-[#a54c4c] '>
	// 				<div className='border-b'>
	// 					<div
	// 						className='w-auto border-[#CACACA] bg-[#F8FBFF] grid grid-cols-3'
	// 						style={{ borderRadius: '15px' }}>
	// 						<div
	// 							// scope='col'
	// 							style={{ display: 'flex' }}
	// 							className=' pl-4 pr-3 text-left text-sm font-normal text-[#6B6B6B] sm:pl-6 lg:table-cell rounded-t-xl items-center'>
	// 							Alert Date/Time
	// 						</div>
	// 						<div
	// 							// scope='col'
	// 							className='hidden px-3 py-3.5 text-left text-sm font-normal text-[#6B6B6B] lg:table-cell'>
	// 							Delivery Date/Time
	// 						</div>
	// 						<div
	// 							// scope='col'
	// 							className='hidden px-3 py-3.5 text-left text-sm font-normal text-[#6B6B6B] lg:table-cell rounded-t-xl'>
	// 							Delivery Status
	// 						</div>
	// 					</div>
	// 				</div>
	// 				<div className='pt-1'>
	// 					{plans.map((plan, planIdx) => (
	// 						<CollapsableComponent
	// 							plan={plan}
	// 							planIdx={planIdx}
	// 						/>
	// 					))}
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
	const rows = [
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
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			delivery_status: 'Delivered',
			childComponentName: ['ContentBuilder'],
			childData: [
				{
					Type: 'RERA Project',
					Head: 'Ninad Dere',
					subTitle2: 'Contractor',
				},
			],
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			childComponentName: ['ContentBuilder'],
			childData: [
				{
					Type: 'RERA Project',
					Head: 'Ninad Dere',
					subTitle2: 'Contractor',
				},
			],
		},
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			childComponentName: ['ContentBuilder'],
			childData: [
				{
					Type: 'RERA Project',
					Head: 'Ninad Dere',
					subTitle2: 'Contractor',
				},
			],
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
		{
			alert_date: '26-12-2022, 5:13 PM',
			delivery_date: '26-12-2022, 5:13 PM',
			delivery_status: 'Failed',
			// childComponentName: [
			// 	'ContentBuilder',
			// 	'ContentBuilder',
			// 	'ContentBuilder',
			// ],
			// childData: [
			// 	{
			// 		Type: 'RERA Project',
			// 		Head: 'Ninad Dere',
			// 		subTitle2: 'Contractor',
			// 	},
			// 	{
			// 		Type: 'RERA Project',
			// 		Head: 'Ninad Dere',
			// 		subTitle2: 'Contractor',
			// 	},
			// 	{
			// 		Type: 'RERA Project',
			// 		Head: 'Ninad Dere',
			// 		subTitle2: 'Contractor',
			// 	},
			// ],
		},
	];

	const col = [
		{
			key: 'alert_date',
			title: 'Alert Date/Time',
		},
		{
			key: 'delivery_date',
			title: 'Delivery Date/Time',
		},
		{
			key: 'delivery_status',
			title: 'Delivery Status',
		},
	];
	const [tableData, setTableData] = React.useState(rows);
	const reorderRow = (draggedRowIndex: number, targetRowIndex: number) => {
		tableData.splice(
			targetRowIndex,
			0,
			tableData.splice(draggedRowIndex, 1)[0] as any
		);
		setTableData([...tableData]);
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div className='sm:flex sm:items-center pb-8'>
				<div className='sm:flex-auto'>
					<h1 className='text-3xl font-semibold text-gray-900'>
						{heading}
					</h1>
				</div>
			</div>
			<GroupedTable
				column={col}
				data={tableData}
				reorderRow={reorderRow}
			/>
		</DndProvider>
	);
}
