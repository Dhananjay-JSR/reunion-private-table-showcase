import { Row, Table, flexRender } from '@tanstack/react-table'
import React, { FC, Fragment } from 'react'
import { ContentBuilder } from '../../ContentBuilder';
import { ChevRight } from '../../icons/Icons';
import { useDrag, useDrop } from 'react-dnd';
import { getRowsElements } from './helpers';
import { ChildComponentHandler, ReactTableRow } from '../Row';

const MultipleTableRows = ({ type, table, reorderRow, rowDND,showCheckbox }: { showCheckbox?: boolean;type: string, table: Table<any>, reorderRow: any, rowDND?: any }) => {

    table.getRowModel().rows.map((row: any, idx: number) => {
        console.log(getRowsElements(row, type), type);
    })

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
                    className={`border-b ${isDragging ? 'bg-gray-100' : ''}`}
                    ref={(e) => {
                        if (rowDND) {
                            dragRef(e);
                            dropRef(e);
                            previewRef(e)
                        }
                    }}
                    {...{ onClick: row.getToggleExpandedHandler() }}

                >
                    {getRowsElements(row, type)
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
                                    <td colSpan={2}>
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
}

export default MultipleTableRows