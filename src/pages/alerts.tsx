import React, {
  useRef,
  useState,
  useLayoutEffect,
  MutableRefObject,
  useEffect,
} from "react";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

const AryaBotAlerts: {
  name: string;
  filter: string[];
  date: string;
}[] = [
  {
    name: "Current Projects by Promoter",
    filter: ["Rustomjee", "Promoters", "RERA Promoters", "part3","part4","part5"],
    date: "2021-09-01",
  },{
    name: "RERA Promoters",
    filter: ["Rustomjee", "Promoters", "RERA Promoters", "Something ","Mpre Stuffs"],
    date: "2021-09-01",
  },
  {
    name: "Current Projects by Promoter",
    filter: ["Rustomjee", "Promoters", "RERA Promoters", "part3","part4","part5"],
    date: "2021-09-01",
  },{
    name: "RERA Promoters",
    filter: ["Rustomjee", "Promoters", "RERA Promoters", "Something ","Mpre Stuffs"],
    date: "2021-09-01",
  }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TableBadge = ({name}:{name:string}) =>{
    return <div className="p-1 bg-[#EDEDED] text-[#6B6B6B] w-fit rounded-md">{name}</div>
}

const Table = () => {
  const checkbox = useRef() as MutableRefObject<HTMLInputElement>;
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedAlerts, setSelectedAlerts] = useState<typeof AryaBotAlerts>([]);

  useEffect(() => {
    const isIndeterminate =
      selectedAlerts.length > 0 && selectedAlerts.length < AryaBotAlerts.length;
    setChecked(selectedAlerts.length === AryaBotAlerts.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedAlerts]);

  function toggleAll() {
    setSelectedAlerts(checked || indeterminate ? [] : AryaBotAlerts);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="px-4">
      <div className="flex items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">My Alerts</h1>
        </div>
        <div className={`mt-4 sm:mt-0 ${selectedAlerts.length>0?"visible" : "invisible"} sm:ml-16 sm:flex-none`}>
          <button
            type="button"
            className="inline-flex items-center justify-between gap-3 "
          >
            <img  src="https://strapi.web3p.in/uploads/trash3_d6313bdfdd.svg?updated_at=2023-01-18T09:26:51.468Z"/>
            Delete Selected
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        
        <div className="-my-2 hidden md:block -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-[#F8FBFF] text-[#6B6B6B]">
                  <tr>
                    <th
                      scope="col"
                      className="relative w-12 px-6 sm:w-16 sm:px-8"
                    >
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th className="text-left font-normal" >
                        #
                        <span className="sr-only">Serial Numbeer</span>
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-normal"
                    >
                      Alert Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-normal "
                    >
                      Filters
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-normal"
                    >
                      Data Created
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-normal"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {AryaBotAlerts.map((alert,index) => (
                    <tr
                      key={index}
                      className={
                      
                        selectedAlerts.includes(alert)
                          ? "bg-gray-50"
                          : undefined
                      }
                    >
                      <td className="relative  w-12 px-6 sm:w-16 sm:px-8">
                        {selectedAlerts.includes(alert) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-0 mt-5 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          value={alert.name}
                          checked={selectedAlerts.includes(alert)}
                          onChange={(e) =>
                            setSelectedAlerts(
                              e.target.checked
                                ? [...selectedAlerts, alert]
                                : selectedAlerts.filter((p) => p !== alert)
                            )
                          }
                        />
                      </td>
                      <td className="align-top pt-4">
                        <div className="mr-7 ">

                        {index+1}
                        </div>
                      </td>
                      <td
                        className={classNames(
                          "whitespace-nowrap py-4 pr-3 text-sm align-top pt-4 font-medium",
                          selectedAlerts.includes(alert)
                            ? "text-indigo-600"
                            : "text-gray-900"
                        )}
                      >
                        {alert.name}
                      </td>
                      <td className=" px-3 py-4 text-sm flex flex-wrap gap-2 w-56 ">
                        <TableBadge name={alert.filter[0]}/>
                        <TableBadge name={alert.filter[1]}/>
                        <TableBadge name={alert.filter[2]}/>
                        {alert.filter.length > 3 && (<span className="text-black">+{alert.filter.length-3} more</span>)}
                      </td>
                      <td className=" align-top pt-4 whitespace-nowrap px-3 py-4 text-sm ">
                        {alert.date}
                      </td>
                      <td className="flex gap-3  px-3 py-4 ">
                        <button>
                                <img src="https://strapi.web3p.in/uploads/trash3_d6313bdfdd.svg?updated_at=2023-01-18T09:26:51.468Z"/>
                        </button>
                        <button>

                                <img src="https://strapi.web3p.in/uploads/pause_btn_8ce887c0fd.svg?updated_at=2023-01-18T09:26:29.989Z"/>
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
        <div>
                          
        </div>
      </div>
    </div>
  );
};

function alerts() {
  return (
    <div className="max-w-5xl">
      <Table />
    </div>
  );
}

export default alerts;
