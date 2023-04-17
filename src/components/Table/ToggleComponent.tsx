import React from 'react'

const ToggleComponent = ({ table }: any) => {
    return (
        <div className='toggle-view w-full flex justify-end'>
            <div className='inline-block border border-black shadow rounded right-4'>
                <div className='px-1 border-b border-black'>
                    <label>
                        <input
                            {...{
                                type: 'checkbox',
                                checked: table.getIsAllColumnsVisible(),
                                onChange: table.getToggleAllColumnsVisibilityHandler(),
                            }}
                        />{' '}
                        Toggle All
                    </label>
                </div>
                {table.getAllLeafColumns().map((column: any) => {
                    return (
                        <div key={column.id} className='px-1 select-none'>
                            <label>
                                <input
                                    {...{
                                        type: 'checkbox',
                                        checked: column.getIsVisible(),
                                        onChange:
                                            column.getToggleVisibilityHandler(),
                                    }}
                                />{' '}
                                {column.id}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ToggleComponent