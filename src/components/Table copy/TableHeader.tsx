import { flexRender } from '@tanstack/react-table';
import React from 'react';

const TableHeader = ({
	table,
	columnSortable,
	columnSplitting,
	stickyHeaders,
	rowDND,
}: {
	table: any;
	columnSortable: boolean | undefined;
	columnSplitting?: boolean;
	rowDND?: boolean;
	stickyHeaders?: boolean;
}) => {
	return (
		<thead
			className={`bg-[#F8FBFF] ${
				stickyHeaders ? 'sticky top-[0px]' : ''
			}`}>
			{/* @ts-ignore */}
			{table.getHeaderGroups().map((headerGroup, index: number) => {
				return (
					<tr key={headerGroup.id} className=''>
						<>
							<td className='border-b rounded-tl-md border-slate-300'></td>
							{/* @ts-ignore */}
							{headerGroup.headers.map((header, index2) => {
								// console.log(header.column.getCanSort());
								return (
									<th
										key={`${header.id}-${index2}`}
										colSpan={header.colSpan}
										className={` align-top py-3 pl-11
                          ${
								index == 0 && header.colSpan != 1
									? 'border-l border-b' // checks if it is the first row and it is not a group
									: ''
							}
                          ${
								index == 0 &&
								header.colSpan != 1 &&
								headerGroup.headers[header.index + 1] && //Edge Case: When Group is Last Column
								headerGroup.headers[header.index + 1].colSpan ==
									1
									? 'border-r' // checks if it is the first row and it is not a group and the next column is not a group
									: ''
							}
                          ${
								index != 0 // checks if it is not the first row
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
							} ${
											header.colSpan == 1
												? 'text-left'
												: 'text-center'
										} first:rounded-tl-md last:rounded-tr-md   border-[#CACACA] font-normal text-[#6B6B6B] w-fit border-b`}>
										{
											<div
												// Uncomment this to Add sort by column feature
												{...{
													className: columnSortable
														? 'cursor-pointer select-none'
														: '',
													onClick:
														header.column.getToggleSortingHandler(),
												}}>
												{flexRender(
													header.column.columnDef
														.header,
													header.getContext()
												)}
												{{
													asc: ' 🔼',
													desc: ' 🔽',
												}[
													header.column.getIsSorted() as string
												] ?? null}
											</div>
										}
										{!header.isPlaceholder &&
											header.column.getCanPin() &&
											columnSplitting && (
												<div className='flex gap-1 justify-left'>
													{header.column.getIsPinned() !==
													'left' ? (
														<button
															className='border rounded px-2'
															onClick={() => {
																header.column.pin(
																	'left'
																);
															}}>
															{'<='}
														</button>
													) : null}
													{header.column.getIsPinned() ? (
														<button
															className='border rounded px-2'
															onClick={() => {
																header.column.pin(
																	false
																);
															}}>
															X
														</button>
													) : null}
													{header.column.getIsPinned() !==
													'right' ? (
														<button
															className='border rounded px-2'
															onClick={() => {
																header.column.pin(
																	'right'
																);
															}}>
															{'=>'}
														</button>
													) : null}
												</div>
											)}
									</th>
								);
							})}
						</>
					</tr>
				);
			})}
		</thead>
	);
};

export default TableHeader;
