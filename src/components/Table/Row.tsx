import { Row, flexRender } from '@tanstack/react-table';
import React, { FC, Fragment } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ContentBuilder } from '../ContentBuilder';
import { ChevRight } from '../icons/Icons';
import {
	useRowSelect,
	HeaderCellSelect,
	CellSelect,
} from '@table-library/react-table-library/select';
import SVGEmbed from '../CustomComponent/SVGEmbed';

// // type RowProps = {
// //     id: number,
// // }

const TableRows: FC<{
	table: any;
	reorderRow?: any;
	rowDND?: boolean;
	pinned?: number;
	showCheckbox?: boolean;
}> = ({ table, reorderRow, rowDND, pinned, showCheckbox }) => {
	return table.getRowModel().rows.map((row: any, idx: number) => {
		const [, dropRef] = useDrop({
			accept: 'row',
			drop: (draggedRow: Row<any>) =>
				reorderRow(draggedRow.index, row.index),
		});

		const [{ isDragging }, dragRef, previewRef] = useDrag({
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
			item: () => row,
			type: 'row',
		});

		return (
			<Fragment key={row.id}>
				<tr
					ref={previewRef} //previewRef could go here
					style={{ opacity: isDragging ? 0.5 : 1 }}
					className={`border-b ${isDragging ? 'bg-gray-100' : ''}`}>
					{(rowDND || showCheckbox) && (
						<td
							className='flex pt-3 pl-5'
							ref={dropRef}
							style={{
								width: '70px',
								textAlign: 'center',
							}}>
							{rowDND && (
								<button className='mr-2' ref={dragRef}>
									<SVGEmbed
										className='fill-primary'
										src='/uploads/hand_index_thumb_f48c1db9ab.svg'
									/>
								</button>
							)}
							{showCheckbox && (
								<div
									className=''
									onClick={() => {
										// console.log(row.getIsSelected());
									}}>
									<input
										type='checkbox'
										{...{
											checked: row.getIsSelected(),
											disabled: !row.getCanSelect(),
											indeterminate:
												row.getIsSomeSelected(),
											onChange:
												row.getToggleSelectedHandler(),
										}}
									/>
								</div>
							)}
						</td>
					)}
					{row
						.getVisibleCells()
						// @ts-ignore
						.map((cell, index) => {
							return (
								<>
									<ReactTableRow
										cell={cell}
										row={row}
										index={index}
										key={cell.id}
										getCanExpand={() => false}
										reorderRow={reorderRow}
										pinned={pinned}
									/>
								</>
							);
						})}
				</tr>
				{row.getCanExpand() && row.getIsExpanded()
					? row.original.childComponentName?.map(
							(child: any, index: number) => {
								// console.log(row);
								return (
									<tr
										className={`cursor-pointer `}
										key={`index ${index}`}>
										<td colSpan={4}>
											{/* // @ts-ignore */}
											<div className='w-[85%]'>
												<ChildComponentHandler
													name={
														row.original
															.childComponentName[
															index
														]
													}
													data={
														row.original.childData[
															index
														]
													}
												/>
											</div>
										</td>
									</tr>
								);
							}
					  )
					: null}
			</Fragment>
		);
	});
};

export const ReactTableRow: FC<{
	cell: any;
	row: any;
	index: number;
	getCanExpand: any;
	reorderRow: any;
	pinned?: number;
}> = ({ cell, row, index, reorderRow, pinned }) => {
	// console.log(cell.row.original);
	return (
		<td
			{...{ onClick: row.getToggleExpandedHandler() }}
			className={`
			${pinned === index ? 'sticky left-0 z-1' : ''}
			${row.original.childData ? 'cursor-pointer' : ''} ${
				cell.column.parent?.columns
					.map((item: any) => item.id)
					.indexOf(cell.column.id) == 0
					? 'border-l ' // checks if it is the first column of the group
					: ''
			}${
				cell.column.parent?.columns &&
				cell.column.parent?.columns
					.map((item: any) => item.id)
					.indexOf(cell.column.id) ==
					cell.column.parent?.columns.length - 1 && // checks if it is the last column of the group
				row.getVisibleCells()[index + 1] && //Edge Case: When Group is Last Column
				row.getVisibleCells()[index + 1].column.parent?.columns ==
					undefined
					? 'border-r ' // checks if it is the last column of the group and the next column is not a group
					: ' '
			} ml-4 pl-4 border-gray-200 py-3`}
			key={cell.id}>
			<div className='flex h-[100%]'>
				<div className='flex items-center'>
					{index === 0 && cell.row.original.childData ? (
						<span
							className={`pr-2 ${
								row.getIsExpanded()
									? 'rotate-90 transition-all duration-500 ease-out items-baseline'
									: 'transition-all duration-500 ease-out'
							}`}>
							<ChevRight />
						</span>
					) : (
						<span className='pr-6' />
					)}
					<span>
						{flexRender(
							cell.column.columnDef.cell,
							cell.getContext()
						)}
					</span>
				</div>
			</div>
		</td>
	);
};

export function ChildComponentHandler({
	name,
	data,
}: {
	name: string;
	data: any;
}) {
	// console.log('name', name);
	switch (name) {
		case 'ContentBuilder':
			return (
				<div className='-my-6 pl-8 mt-1'>
					<ContentBuilder
						Type={data.Type}
						Head={data.Head}
						subTitle2={data.subTitle2}
					/>
				</div>
				// <></>
			);
		default:
			return <></>;
	}
}

// const TableRows: FC<{ table: any; reorderRow?: any }> = ({
//     table,
//     reorderRow,
// }) => {
//     return (
//         <>
//             {table
//                 .getRowModel()
//                 .rows.slice(0, 10)
//                 .map((row: any) => {
//                     return (
//                         <tr key={row.id}>
//                             {row.getVisibleCells().map((cell: any) => {
//                                 return (
//                                     <td key={cell.id}>
//                                         {flexRender(
//                                             cell.column.columnDef.cell,
//                                             cell.getContext()
//                                         )}
//                                     </td>
//                                 )
//                             })}
//                         </tr>
//                     )
//                 })}
//         </>)
// }

export default TableRows;
