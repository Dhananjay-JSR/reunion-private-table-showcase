import React from 'react'
import { GroupedTable } from './GroupTable'

function GroupTableWrapper({ heading, content }: { heading?: string, content: { table_titles: any, table_rows: any } }) {
  console.log(content.table_titles)
  return (
    <div className="mb-8">
      {heading && (
        <h1 className="text-xl py-5 text-gray-900">{heading}</h1>

      )}
      <GroupedTable column={content.table_titles} data={content.table_rows} reorderRow />
    </div>
  )
}

export default GroupTableWrapper