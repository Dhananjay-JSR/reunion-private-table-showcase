import { flexRender } from '@tanstack/react-table';
import React from 'react';

const TableHeader = ({
	table,
	columnSortable,
	columnSplitting,
	stickyHeaders,
	rowDND,
	pinned,
}: {
	table: any;
	columnSortable: boolean | undefined;
	columnSplitting?: boolean;
	rowDND?: boolean;
	stickyHeaders?: boolean;
	pinned?: number;
}) => {
	return (
		<thead
			className={`bg-[#F8FBFF] ${
				stickyHeaders ? 'sticky top-[0px]' : ''
			}`}>
			{/* @ts-ignore */}
			{table.getHeaderGroups().map((headerGroup, index: number) => {
				return (
					<tr key={headerGroup.id} className="">
					{headerGroup.headers.map((header:any) => {
					  // console.log(index == 0 && header.colSpan != 1 && headerGroup.headers[header.index + 1])
					  return (
						<th
						  key={header.id}
						  colSpan={header.colSpan}
						  className={` align-top py-2 
							${
							  index == 0 && header.colSpan != 1
								? "border-l border-b" // checks if it is the first row and it is not a group
								: ""
							}
							${
							  index == 0 &&
							  header.colSpan != 1 &&
							  headerGroup.headers[header.index + 1] && //Edge Case: When Group is Last Column
							  headerGroup.headers[header.index + 1].colSpan == 1
								? "border-r" // checks if it is the first row and it is not a group and the next column is not a group
								: ""
							}
							${
							  index != 0 // checks if it is not the first row
								? header.column.parent?.columns
									.map((item:any) => item.id)
									.indexOf(header.column.id) == 0 //checks if it is the first column of the group
								  ? " border-l "
								  : header.column.parent &&
									header.column.parent?.columns
									  .map((item:any) => item.id)
									  .indexOf(header.column.id) ==
									  header.column.parent?.columns.length - 1 && // checks if it is the last column of the group
									headerGroup.headers[header.index + 1] && //Edge Case: When Group is Last Column
									headerGroup.headers[header.index + 1].column
									  .parent == undefined // checks if the next column is not a group
								  ? "border-r"
								  : ""
								: ""
							} ${
							header.colSpan == 1 ? "text-left" : "text-center"
						  } first:rounded-tl-md last:rounded-tr-md   border-[#7A9CB9] font-normal text-[#6B6B6B] pl-3 pr-3 w-fit`}
						>
						  {header.isPlaceholder ? null : flexRender(
							  header.column.columnDef.header,
							  header.getContext()
							)
							  ?.toString()
							  .includes("sqft.") ? (
							<>
							  {flexRender(
								header.column.columnDef.header,
								header.getContext()
							  )
								?.toString()
								.split("sqft.")}
							  <br />
							  <span className="italic">sqft.</span>
							</>
						  ) : (
							<>
							  {flexRender(
								header.column.columnDef.header,
								header.getContext()
							  )
								?.toString()
								.includes("%") ? (
								<>
								  {flexRender(
									header.column.columnDef.header,
									header.getContext()
								  )
									?.toString()
									.split("%")}
								  <br />%
								</>
							  ) : (
								<>
								  {flexRender(
									header.column.columnDef.header,
									header.getContext()
								  )}
								</>
							  )}
							</>
						  )}
						</th>
					  );
					})}
				  </tr>
				);
			})}
		</thead>
	);
};

export default TableHeader;
