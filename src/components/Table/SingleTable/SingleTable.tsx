import React from 'react';
import TableHeader from '../TableHeader';
import TableRows from '../Row';
import { Table } from '@tanstack/react-table';
import { useRowSelect } from '@table-library/react-table-library/select';

const SingleTable = ({
	showCheckbox,
	table,
	reorderRow,
	options,
	columnSplitting,
}: {
	showCheckbox?: boolean;
	table: Table<any>;
	reorderRow: any;
	options: any;
	columnSplitting: any;
}) => {
	console.log('options', options);
	const { columnSortable, toggleColumns, rowDND, stickyHeaders } =
		options || {};
	const pinned = 0;
	return (
		<table
			className={`w-full border-separate border-[#CACACA]  border rounded-md  border-spacing-0 ${
				!toggleColumns ? 'mt-10' : 'mt-4'
			}`}>
			<TableHeader
				showCheckbox={showCheckbox}
				table={table}
				columnSortable={columnSortable}
				columnSplitting={columnSplitting}
				stickyHeaders={stickyHeaders}
				rowDND={rowDND}
				pinned={pinned}
			/>
			<tbody>
				<TableRows
					table={table}
					reorderRow={reorderRow}
					rowDND={rowDND}
					pinned={pinned}
					showCheckbox={showCheckbox}
				/>
			</tbody>
		</table>
	);
};

export default SingleTable;
