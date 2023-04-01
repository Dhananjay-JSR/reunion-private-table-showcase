import {
	createColumnHelper,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MobileViewer } from '../GroupTable/GroupTable';
import ToggleComponent from './ToggleComponent';
import SingleTable from './SingleTable/SingleTable';
import MultipleTables from './MultipleTables/MultipleTables';

const TableWrapper = ({
	heading,
	children,
}: {
	heading?: string | undefined;
	children: any;
}) => {
	return (
		<div className='select-none'>
			{heading && (
				<h1 className='text-xl font-semibold text-gray-900 px-5 pt-5 md:px-0 md:pt-0'>
					{heading}
				</h1>
			)}
			<DndProvider backend={HTML5Backend}>{children}</DndProvider>
		</div>
	);
};

type TableProps = {
	heading?: string | undefined;
	column: any;
	data: any;
	options?: {
		columnSortable?: boolean;
		toggleColumns?: boolean;
		rowDND?: boolean;
		columnSplitting?: boolean;
	};
};

/**
 * Props for options:
 *  @param columnSortable - to sort by clicking on column
 *  @param rowDnD - to enable row drag and drop
 *  @param colDnD - to enable Column drag and drop
 *  @param columnVisibility - to enable column visibility feature i.e. show/hide columns
 * 	@example <Table heading='MyTable' column={col} data={data} options={{
		columnSortable: true,
		rowDND: true,
		toggleColumns: true,
		columnSplitting: true,
		}} />
 */

const Table = ({ heading, column, data, options }: TableProps) => {
	const ColumnHelper = createColumnHelper<typeof data[0]>();
	// console.log(da);
	// @ts-ignore
	// Grouping column headers if their keys match
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

	const [rows, setRows] = React.useState([...data]);
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnVisibility, setColumnVisibility] = React.useState({});
	const [columnPinning, setColumnPinning] = React.useState({});
	const [isSplit, setIsSplit] = React.useState(false);
	const { columnSortable, toggleColumns, rowDND, columnSplitting } = options || {};

	const table = useReactTable({
		data: rows,
		columns: columnData,
		state: {
			sorting,
			columnVisibility,
			columnPinning,
		},
		getCoreRowModel: getCoreRowModel(),

		onSortingChange: columnSortable ? setSorting : undefined,
		getSortedRowModel: columnSortable ? getSortedRowModel() : undefined,
		onColumnVisibilityChange: toggleColumns
			? setColumnVisibility
			: undefined,

		// Subcomponent
		getExpandedRowModel: getSortedRowModel(),
		getRowCanExpand: (row) => true,
		onColumnPinningChange: setColumnPinning,

		// Debugging
		debugTable: true,
		// debugHeaders: true,
		// debugColumns: true,
	});

	const reorderRow = (draggedRowIndex: number, targetRowIndex: number) => {
		data.splice(
			targetRowIndex,
			0,
			data.splice(draggedRowIndex, 1)[0] as any
		);
		setRows([...data]);
	};

	return (
		<TableWrapper heading={heading}>
			<div className='hidden md:block select-none h-full'>
				{/* Toggle columns */}
				{toggleColumns ? <ToggleComponent table={table} /> : null}
				{columnSplitting ? (
					<div className='su pt-5'>
						<label>
							<input
								type='checkbox'
								checked={isSplit}
								onChange={(e) => {
									if (table.getIsSomeColumnsPinned())
										setIsSplit(e.target.checked)
									else {
										setIsSplit(false)
										alert("pin some columns first")
									}
								}}
							/>{' '}
							Split Mode
						</label>
					</div>
				) : null}

				{columnSplitting && isSplit ? (
					<MultipleTables
						table={table}
						columnSortable={columnSortable}
						reorderRow={reorderRow}
						rowDND={rowDND}
					/>
				) : (
					<SingleTable
						table={table}
						reorderRow={reorderRow}
						options={options}
						columnSplitting={columnSplitting}
					/>
				)}
			</div>

			{/* Mobile devices */}
			<div className='md:hidden py-10 px-5'>
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
		</TableWrapper>
	);
};

export default Table;
