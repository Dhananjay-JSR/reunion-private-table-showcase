import React, { Fragment } from 'react'
import { getColumnElements } from './helpers';
import MultipleTableRows from './MultipleTableRows';
import MultipleTableHeader from './MultipleTableheader';

const MultipleTables = ({ columnSortable, table, reorderRow, rowDND }: { columnSortable: any, table: any, reorderRow: any, rowDND: any }) => {
    const [multipleTableTypes,] = React.useState(['left', 'center', 'right']);

    return (
        <div className='flex gap-4 mt-4'> {
            multipleTableTypes?.map((typeOfTable: string, index: number) => {
                {/* @ts-ignore */ }
                return <div className={`${getColumnElements(table, typeOfTable)[0]?.headers?.length ? 'w-[100%] visible' : 'hidden'}`} key={typeOfTable + index}>
                    {/* left table */}
                    <table className={`border border-[#CACACA] border-separate rounded-md w-full`}>
                        <MultipleTableHeader table={table} columnSortable={columnSortable} type={typeOfTable} />
                        {/* @ts-ignore */}
                        <MultipleTableRows table={table} type={typeOfTable} reorderRow={reorderRow} rowDND={rowDND} />
                    </table>
                </div>
            })}
        </div>
    )
}

export default MultipleTables