import React, {
    useRef,
    useState,
    MutableRefObject,
    useEffect,
} from 'react';
import ReactDOM from "react-dom";

const people = [
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member',
    },
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member',
    },
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member',
    },
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member',
    },
    // More people...
];

const AryaBotAlerts: {
    name: string;
    filter: string[];
    date: string;
}[] = [
        {
            name: 'Current Projects by Promoter',
            filter: [
                'Rustomjee',
                'Promoters',
                'RERA Promoters',
                'part3',
                'part4',
                'part5',
            ],
            date: '2021-09-01',
        },
        {
            name: 'RERA Promoters',
            filter: [
                'Rustomjee',
                'Promoters',
                'RERA Promoters',
                'Something ',
                'Mpre Stuffs',
            ],
            date: '2021-09-01',
        },
        {
            name: 'Current Projects by Promoter',
            filter: [
                'Rustomjee',
                'Promoters',
                'RERA Promoters',
                'part3',
                'part4',
                'part5',
            ],
            date: '2021-09-01',
        },
        {
            name: 'RERA Promoters',
            filter: [
                'Promoters',
            ],
            date: '2021-09-01',
        },
    ];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const TableBadge = ({ name }: { name: string }) => {
    return (
        <div className='p-1 px-2 bg-[#EDEDED] text-[#6B6B6B] w-fit rounded-md'>
            {name}
        </div>
    );
};

const Table = () => {
    const checkbox = useRef() as MutableRefObject<HTMLInputElement>;
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    const [selectedAlerts, setSelectedAlerts] = useState<typeof AryaBotAlerts>(
        []
    );

    useEffect(() => {
        const isIndeterminate =
            selectedAlerts.length > 0 &&
            selectedAlerts.length < AryaBotAlerts.length;
        setChecked(selectedAlerts.length === AryaBotAlerts.length);
        setIndeterminate(isIndeterminate);
        checkbox.current.indeterminate = isIndeterminate;
    }, [selectedAlerts]);

    function toggleAll() {
        setSelectedAlerts(checked || indeterminate ? [] : AryaBotAlerts);
        setChecked(!checked && !indeterminate);
        setIndeterminate(false);
    }


    function BottomPanel({ data }: { data: string[] }) {
        // console.log(data)
        const [BackDropvisible, setBackDropVisible] = useState(false);
        const [closing, setClosing] = useState(false);
        const ModalRef = useRef() as MutableRefObject<HTMLDivElement>;
        React.useEffect(() => {
            if (BackDropvisible == true) {
                document.body.style.overflowY = "hidden";
            }

            function handleClickOutside(event: MouseEvent) {
                if (
                    event.target instanceof HTMLElement &&
                    ModalRef.current &&
                    !ModalRef.current.contains(event.target)
                ) {
                    setClosing(true);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
                if (BackDropvisible) document.body.style.overflowY = "auto";
            };
        }, [BackDropvisible]);

        return (
            <>
                <button
                    onClick={() => {
                        setBackDropVisible(!BackDropvisible);
                    }}
                    className="inline-flex items-center mr-2 mb-2 px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800"
                >
                    +{data.length} more
                </button>


                {BackDropvisible &&
                    ReactDOM.createPortal(
                        <>
                            <div
                                onAnimationEnd={(e) => {
                                    if (e.animationName == "fadeOut") {
                                        setBackDropVisible(false);
                                        setClosing(false);
                                    }
                                }}
                                className={` rounded-md block bg-black  z-40 fixed ${closing ? ` animate-fadeOut ` : ` animate-fadeIn `
                                    } h-full w-full top-0 left-0 `}
                            >
                                <div ref={ModalRef}>
                                    <div
                                        className={`z-50 border-t border-t-gray-300 rounded-xl px-5  ${closing
                                            ? ` md:hidden translate-y-48  opacity-0 `
                                            : `   `
                                            }  transition-all  rounded-md  h-[50%]    bg-white fixed bottom-0 left-0 w-full`}
                                    >
                                        <div className="">
                                            <div className="my-8 mx-8"><div className="text-2xl">
                                                Tags
                                            </div>
                                                <div className='pt-5'>
                                                    <div className="flex gap-4 flex-wrap">
                                                        {data.map((e, index) => <div key={e + Date.now()} className="w-auto h-auto text-center px-4 py-1  rounded-md text-sm font-medium bg-[#EDEDED] text-[#6B6B6B]"> {e} </div>)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>,
                        document.getElementById("modal")!
                    )}
            </>
        );
    }

    function FiltersComponent({ filters }: any) {
        return (
            <dd className="mt-1 text-sm text-gray-900 font-medium ">
                {/* @ts-ignore */}

                <span className="inline-flex items-center mr-2 mb-2 px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">{filters[0]}</span>

                {filters.length > 1 ? <BottomPanel data={filters.slice(1, filters.length - 1)} /> : null}
            </dd>)
    }

    function MobileRow({ alert }: { alert: any }) {
        const [isOpen, setIsOpen] = React.useState(false)
        return (
            <a className={`block ${isOpen ? 'bg-gray-100' : ''}`}>
                <div className='flex items-center px-4 py-4 sm:px-6'>
                    <div className='min-w-0 flex-1 flex items-center'>
                        <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4'>
                            <div className='flex'>
                                <span className='relative -left-6 '>
                                    <input
                                        type='checkbox'
                                        className='absolute top-3 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 '

                                        checked={selectedAlerts.includes(alert)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedAlerts([
                                                    ...selectedAlerts,
                                                    alert,
                                                ]);
                                            } else {
                                                setSelectedAlerts(
                                                    selectedAlerts.filter(
                                                        (item) => item !== alert
                                                    )
                                                );
                                            }
                                        }}
                                    />
                                </span>
                            </div>
                            <div onClick={() => setIsOpen(!isOpen)}>
                                <p className='text-md font-medium text-black truncate'>
                                    {alert.name}
                                </p>

                                <p className='mt-2 flex items-center text-sm text-gray-500'>
                                    <span className='truncate'>
                                        {alert.date}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            src='https://strapi.web3p.in/uploads/chevron_right_4f2156d4d3.svg'
                            className={`${isOpen ? 'rotate-90' : ''} duration-300 ease-in-out`}
                        />
                    </div>
                </div>
                <div className={`bg-white mx-auto ${isOpen ? 'grid duration-700 ease-in-out' : '-top-28 hidden duration-700 ease-in-out'} `}>
                    <div className="border border-gray-200 px-4 py-6 sm:px-6 grid grid-cols-2 gap-x-4 gap-y-8 ">
                        <div className="px-4">
                            <dt className="text-sm font-medium text-gray-500 ">Tags </dt>
                            <FiltersComponent filters={alert.filter} />
                        </div>

                        <div className="px-4"><dt className="text-sm font-medium text-gray-500 ">Actions </dt>
                            <dd className="flex mt-0 text-sm text-gray-900 font-medium ">
                                <span className="flex gap-3  px-3 py-4 ">
                                    <button>
                                        <img src="https://strapi.web3p.in/uploads/trash3_d6313bdfdd.svg?updated_at=2023-01-18T09:26:51.468Z" className="" />
                                    </button>
                                    <button>
                                        <img src="https://strapi.web3p.in/uploads/pause_btn_8ce887c0fd.svg?updated_at=2023-01-18T09:26:29.989Z" />
                                    </button>
                                </span>
                            </dd>
                        </div>
                    </div>
                </div>
            </a>
        );
    }

    return (
        <div className='px-4 '>
            <div className='flex items-center'>
                <div className='sm:flex-auto'>
                    <h1 className='text-xl font-semibold text-gray-900'>
                        My Alerts
                    </h1>
                </div>
                <div
                    className={`mt-4 ${selectedAlerts.length > 0 ? 'visible' : 'invisible'
                        } pl-10`}>
                    <button
                        type='button'
                        className='inline-flex items-center justify-between gap-3 '>
                        <img src='https://strapi.web3p.in/uploads/trash3_d6313bdfdd.svg?updated_at=2023-01-18T09:26:51.468Z' />
                        Delete Selected
                    </button>
                </div>
            </div>
            <div className='mt-8 flex flex-col'>
                <div className='-my-2 hidden md:block -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                            <table className='min-w-full table-fixed divide-y divide-gray-300'>
                                <thead className='bg-[#F8FBFF] text-[#6B6B6B]'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='relative w-12 px-6 sm:w-16 sm:px-8'>
                                            <input
                                                type='checkbox'
                                                className='absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6'
                                                ref={checkbox}
                                                checked={checked}
                                                onChange={toggleAll}
                                            />
                                        </th>
                                        <th className='text-left font-normal'>
                                            #
                                            <span className='sr-only'>
                                                Serial Numbeer
                                            </span>
                                        </th>
                                        <th
                                            scope='col'
                                            className='min-w-[12rem] py-3.5 pr-3 text-left text-sm font-normal'>
                                            Alert Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-3 py-3.5 text-left text-sm font-normal '>
                                            Filters
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-3 py-3.5 text-left text-sm font-normal'>
                                            Data Created
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-3 py-3.5 text-left text-sm font-normal'>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200 bg-white'>
                                    {AryaBotAlerts.map((alert, index) => (
                                        <tr
                                            key={index}
                                            className={
                                                selectedAlerts.includes(alert)
                                                    ? 'bg-gray-50'
                                                    : undefined
                                            }>
                                            <td className='relative  w-12 px-6 sm:w-16 sm:px-8'>
                                                {selectedAlerts.includes(
                                                    alert
                                                ) && (
                                                        <div className='absolute inset-y-0 left-0 w-0.5 bg-indigo-600' />
                                                    )}
                                                <input
                                                    type='checkbox'
                                                    className='absolute left-4 top-0 mt-5 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6'
                                                    value={alert.name}
                                                    checked={selectedAlerts.includes(
                                                        alert
                                                    )}
                                                    onChange={(e) =>
                                                        setSelectedAlerts(
                                                            e.target.checked
                                                                ? [
                                                                    ...selectedAlerts,
                                                                    alert,
                                                                ]
                                                                : selectedAlerts.filter(
                                                                    (p) =>
                                                                        p !==
                                                                        alert
                                                                )
                                                        )
                                                    }
                                                />
                                            </td>
                                            <td className='align-top pt-4'>
                                                <div className='mr-7 '>
                                                    {index + 1}
                                                </div>
                                            </td>
                                            <td
                                                className={classNames(
                                                    'whitespace-nowrap py-4 pr-3 text-sm align-top pt-4 font-medium',
                                                    selectedAlerts.includes(
                                                        alert
                                                    )
                                                        ? 'text-indigo-600'
                                                        : 'text-gray-900'
                                                )}>
                                                {alert.name}
                                            </td>
                                            <td className=' px-3 py-4 text-sm flex flex-wrap gap-2 w-56 '>
                                                <TableBadge
                                                    name={alert.filter[0]}
                                                />
                                                {alert.filter[1] ?
                                                    <TableBadge
                                                        name={alert.filter[1]}
                                                    /> : null}
                                                {alert.filter[2] ?
                                                    <TableBadge
                                                        name={alert.filter[2]}
                                                    /> : null}
                                                {alert.filter.length > 3 && (
                                                    <span className='text-black'>
                                                        +
                                                        {alert.filter.length -
                                                            4}{' '}
                                                        more
                                                    </span>
                                                )}
                                            </td>
                                            <td className=' align-top pt-4 whitespace-nowrap px-3 py-4 text-sm '>
                                                {alert.date}
                                            </td>
                                            <td className='flex gap-3  px-3 py-4 '>
                                                <button>
                                                    <img
                                                        src='https://strapi.web3p.in/uploads/trash3_d6313bdfdd.svg?updated_at=2023-01-18T09:26:51.468Z'
                                                        className=''
                                                    />
                                                </button>
                                                <button>
                                                    <img src='https://strapi.web3p.in/uploads/pause_btn_8ce887c0fd.svg?updated_at=2023-01-18T09:26:29.989Z' />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Mobile View */}
                <div className='md:hidden'>
                    {AryaBotAlerts.map((alert, idx) => {
                        return <div key={alert.name + idx} className={`border border-x-gray-300 ${idx === 0 ? 'border-t-gray-300 rounded-md' : 'border-t-0'} ${idx === AryaBotAlerts.length - 1 ? 'border-b-gray-300 rounded-b-md' : 'rounded-b-none'}`}>
                            <MobileRow alert={alert} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};


function AlertTable() {
    return (
        <div className='max-w-5xl'>
            <Table />
        </div>
    );
}

export default AlertTable;
