import React from 'react'
import TableRows from '../Row'
import TableHeader from '../TableHeader'

type CompositeTableProps = {
    options?: {
        columnSortable?: boolean;
        toggleColumns?: boolean;
        rowDND?: boolean;
    },
    table: any,
    reorderRow?: any,
}
const CompositeTable = ({ options, table, reorderRow }: CompositeTableProps) => {

    const { columnSortable, toggleColumns, rowDND } = options || {};
    return (
        <table className={`w-full border-separate border-[#CACACA]  border rounded-md  border-spacing-0 select-none ${!toggleColumns ? 'mt-10' : 'mt-4'}`}>

            <TableHeader table={table} columnSortable={columnSortable} />
            <tbody>

                <TableRows table={table} reorderRow={reorderRow} rowDND={rowDND} />
            </tbody>
        </table>
    )
}

export default CompositeTable