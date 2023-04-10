import React from 'react';
import TableHeader from '../TableHeader';
import TableRows from '../Row';
import { Table } from '@tanstack/react-table';

const SingleTable = ({
	table,
	reorderRow,
	options,
	columnSplitting,
}: {
	table: Table<any>;
	reorderRow: any;
	options: any;
	columnSplitting: any;
}) => {
	const { columnSortable, toggleColumns, rowDND, stickyHeaders } =
		options || {};
	return (
		<table
			className={`w-full border-separate border-[#CACACA]  border rounded-md  border-spacing-0 ${
				!toggleColumns ? 'mt-10' : 'mt-4'
			}`}>
			<TableHeader
				table={table}
				columnSortable={columnSortable}
				columnSplitting={columnSplitting}
				stickyHeaders={stickyHeaders}
				rowDND={rowDND}
			/>
			<tbody>
				<TableRows
					table={table}
					reorderRow={reorderRow}
					rowDND={rowDND}
				/>
			</tbody>
		</table>
	);
};

export default SingleTable;
