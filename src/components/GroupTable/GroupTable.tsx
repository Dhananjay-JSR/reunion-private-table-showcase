import React from 'react';
import {
	useReactTable,
	createColumnHelper,
	getCoreRowModel,
	flexRender,
	SortingState,
	getSortedRowModel,
	Row,
} from '@tanstack/react-table';
// import SVGEmbed from '../CustomComponent/SVGEmbed';
import TableRows from './Row';
// import { ChevRight } from '../PageLayout';
import { useDrag } from 'react-dnd';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export function MobileViewer({
	row,
	column,
}: {
	row: {
		[key: string]: string;
	};
	column: {
		key: string;
		title: string;
		headerGroup?: string | undefined;
	}[];
}) {
	const [open, setOpen] = React.useState(false);
	return (
		<li>
			<div className={`${open ? 'bg-[#F8F8F8]' : ''}`}>
				<button
					onClick={() => {
						setOpen(!open);
					}}
					className={` px-3 pb-2.5 pt-1 w-full text-left`}>
					{/* Parent Header  */}
					<div
						className={`text-xs text-[#6B6B6B] ${open ? 'visible ' : 'invisible'
							}`}>
						{column[0].title} {/* shows first column title  */}
					</div>
					<div className='flex justify-between items-center'>
						<span className='font-medium'>
							{row[column[0].key]}{' '}
							{/* shows first column value  */}
						</span>
						{/* <SVGEmbed
							src='/uploads/chevron_right_4f2156d4d3.svg'
							className={`${open ? 'rotate-90' : ''}`}
						/> */}
					</div>
					<div className='text-[#6B6B6B]'>
						{' '}
						{/* shows second column value + header  */}
						<span>
							{' '}
							{column[1].headerGroup}{' '}
							{column[1].title.includes('sqft.') ? (
								<React.Fragment>
									{column[1].title.split('sqft.')[0]}{' '}
									<span className='italic'>sqft.</span>
								</React.Fragment>
							) : (
								<React.Fragment>
									{column[1].title}
								</React.Fragment>
							)}{' '}
							{/* shows second column title  */}
						</span>
						<span>{row[column[1].key]}</span>{' '}
						{/* shows second column value  */}
					</div>
				</button>
			</div>
			{open && (
				<div className=' grid gap-x-1 gap-y-3 py-6 grid-cols-2 px-3'>
					{column.slice(2).map((item, index) => {
						return (
							<React.Fragment key={index}>
								<div>
									<div className='text-[#6B6B6B]'>
										{item.headerGroup} {item.title}
									</div>
									<span>{row[item.key]}</span>
								</div>
							</React.Fragment>
						);
					})}
				</div>
			)}
		</li>
	);
}

/**
 *
 * @param data  data to be displayed in the table
 * @param column    column data for the table {key: string, title: string, headerGroup?: string}
 */
export function GroupedTable({
	data,
	column,
	reorderRow,
}: {
	data: any;
	// data: Array<{
	// 	[key: string]: string;
	// }>;
	column: {
		key: string;
		title: string;
		headerGroup?: string;
	}[];
	reorderRow: any;
}) {
	const ColumnHelper = createColumnHelper<typeof data[0]>();
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const [{ isDragging }, dragRef, previewRef] = useDrag({
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
		item: () => '',
		type: 'row',
	});

	const columnData = column.reduce((acc, curr) => {
		// this is the column data
		if (curr.headerGroup) {
			// checks if the column has a header group
			// @ts-ignore
			const group = acc.find((el) => el.id === curr.headerGroup); // checks if the header group already exists
			if (group) {
				// if the header group already exists
				// @ts-ignore
				group.columns.push(
					ColumnHelper.accessor(curr.key, {
						// adds the column to the header group
						id: curr.key,
						header: curr.title,
					})
				);
			} else {
				// if the header group does not exist
				acc.push(
					// @ts-ignore
					ColumnHelper.group({
						id: curr.headerGroup,
						header: curr.headerGroup,
						columns: [
							ColumnHelper.accessor(curr.key, {
								id: curr.key,
								header: curr.title,
							}),
						],
					})
				);
			}
		} else {
			// if the column does not have a header group
			acc.push(
				// @ts-ignore
				ColumnHelper.accessor(curr.key, {
					id: curr.key,
					header: curr.title,
				})
			);
		}
		return acc;
	}, []);

	const table = useReactTable({
		data,
		columns: columnData,
		getCoreRowModel: getCoreRowModel(),
		debugTable: true,
		getExpandedRowModel: getSortedRowModel(),
		getRowCanExpand: (row) => true,
		onSortingChange: setSorting,
	});
	// 	// state: {
	// 	//   columnOrder: column.map((col) => col.key),
	// 	// },
	// 	columns: columnData,
	// 	data,
	// 	getCoreRowModel: getCoreRowModel(),
	// 	// 	renderSubComponent,
	// 	//   getRowCanExpand,
	// 	// Uncomment below code to add sorting by column feature
	// 	// state: {
	// 	// 	sorting,
	// 	// },
	// 	// onSortingChange: setSorting,
	// 	// getSortedRowModel: getSortedRowModel(),
	// 	debugTable: true,
	// 	getRowCanExpand: (row: Row<any>) => boolean,
	// });

	return (
		<>
			{/* Table for MD and Bigger Screen */}
			<div className='hidden md:block pb-4 mt-5'>
				<table className='w-full border-separate border-[#CACACA]  border rounded-md  border-spacing-0'>
					<TableHeader table={table} />
					<tbody>
						{<TableRows reorderRow={reorderRow} table={table} />}
					</tbody>
				</table>
			</div>

			{/* CLick View for SMaller Screen */}
			<div className='md:hidden'>
				<div className='bg-white border rounded-md  shadow overflow-hidden md:rounded-md '>
					<ul role='list' className='divide-y divide-gray-200'>
						{data.map((row: any, index: number) => {
							// data of the table (array of objects)
							return (
								<MobileViewer
									row={row}
									column={column}
									key={index}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}

function TableHeader({ table }: { table: any }) {
	// @ts-ignore
	return table.getHeaderGroups().map((headerGroup, index) => {
		return (
			<thead className='bg-[#F8FBFF]  '>
				<tr key={headerGroup.id} className=''>
					{/* @ts-ignore */}
					{headerGroup.headers.map((header) => {
						// console.log(index == 0 && header.colSpan != 1 && headerGroup.headers[header.index + 1])
						return (
							<th
								key={header.id}
								colSpan={header.colSpan}
								className={` align-top py-3
                          ${index == 0 && header.colSpan != 1
										? 'border-l border-b' // checks if it is the first row and it is not a group
										: ''
									}
                          ${index == 0 &&
										header.colSpan != 1 &&
										headerGroup.headers[header.index + 1] && //Edge Case: When Group is Last Column
										headerGroup.headers[header.index + 1].colSpan ==
										1
										? 'border-r' // checks if it is the first row and it is not a group and the next column is not a group
										: ''
									}
                          ${index != 0 // checks if it is not the first row
										? header.column.parent?.columns
											// @ts-ignore
											.map((item) => item.id)
											.indexOf(header.column.id) == 0 //checks if it is the first column of the group
											? ' border-l '
											: header.column.parent &&
												header.column.parent?.columns
													// @ts-ignore
													.map((item) => item.id)
													.indexOf(header.column.id) ==
												header.column.parent?.columns
													.length -
												1 && // checks if it is the last column of the group
												headerGroup.headers[
												header.index + 1
												] && //Edge Case: When Group is Last Column
												headerGroup.headers[header.index + 1]
													.column.parent == undefined // checks if the next column is not a group
												? 'border-r'
												: ''
										: ''
									} ${header.colSpan == 1
										? 'text-left'
										: 'text-center'
									} first:rounded-tl-md last:rounded-tr-md   border-[#CACACA] font-normal text-[#6B6B6B] pl-3 pr-3 w-fit border-b`}>
								{header.isPlaceholder ? null : flexRender(
									header.column.columnDef
										.header,
									header.getContext()
								)
									?.toString()
									.includes('sqft.') ? (
									<div
										{...{
											className:
												header.column.getCanSort()
													? ' select-none'
													: '',
											// onClick:
											// 	header.column.getToggleSortingHandler(),
										}}>
										{flexRender(
											header.column
												.columnDef
												.header,
											header.getContext()
										)}
									</div>
								) : (
									<div
									// Uncomment this to Add sort by column feature
									// {...{
									// 	className:
									// 		header.column.getCanSort()
									// 			? 'cursor-pointer select-none'
									// 			: '',
									// 	onClick:
									// 		header.column.getToggleSortingHandler(),
									// 	}}
									>
										{flexRender(
											header.column
												.columnDef
												.header,
											header.getContext()
										)
											?.toString()
											.includes('%') ? (
											<div>
												{flexRender(
													header
														.column
														.columnDef
														.header,
													header.getContext()
												)
													?.toString()
													.split('%')}
												<br />%
											</div>
										) : (
											<div className='pl-7'>

												{flexRender(
													header
														.column
														.columnDef
														.header,
													header.getContext()
												)}
											</div>
										)}
									</div>
								)}
							</th>
						);
					})}
				</tr>
			</thead>
		);
	})

}