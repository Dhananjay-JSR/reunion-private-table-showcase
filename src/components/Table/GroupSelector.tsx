import React from "react";

function GroupSelector({
  column,
  tabularSetter,
}: {
  column: Object[];
  tabularSetter: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [show, setShow] = React.useState(false);
  const [text, setText] = React.useState("");
  const [Currselected, setCurrSelected] = React.useState<string[]>([]);
  const [group, setGroup] = React.useState<
    { name: string; columns: string[] }[]
  >([]);

  return (
    <div>
      {/* This Shows All The Selected Groups */}
      {group.length > 0 && (
        <div className="text-red-500 my-4">
          User Defined Groups
          {group.map((item) => {
            return (
              <div className="text-blue-600">
                <span className="font-bold mr-4 underline">{item.name}</span>
                <span>{item.columns.join(",")}</span>
                <button
                  onClick={() => {
                    setGroup((prev) => {
                      return prev.filter(
                        (groupItem) => groupItem.name !== item.name
                      );
                    });
                  }}
                  className="ml-4"
                >
                  <span className="text-red-500">X</span>
                </button>
              </div>
            );
          })}
        </div>
      )}
      <button
      className="
      my-3"
        onClick={() => {
          // This is the button that toggles the input field and exiting UNSELECTED columns
          setShow(!show);
        }}
      >
        Click to Add New Group
      </button>
      {show &&
        column.filter((item) => {
          let flag = true;
          group.forEach((groupItem) => {
            // @ts-ignore //TODO: fix this
            if (groupItem.columns.includes(item.title)) {
              flag = false;
            }
          });
          //   THis Function basically filter out all the UnderOrder Row
          return flag;
        }).length > 0 && (
          <div className="mt-1">
            <input
              className="mt-3 mb-3  "
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Group Name"
            />
            {column
              .filter((item) => {
                let flag = true;
                group.forEach((groupItem) => {
                  // @ts-ignore //TODO: fix this
                  if (groupItem.columns.includes(item.title)) {
                    flag = false;
                  }
                });
                //   THis Function basically filter out all the UnderOrder Row
                return flag;
              })
              .map((col: any) => {
                return (
                  <button
                    onClick={() => {
                      // toggles the selection of the column in current context
                      if (Currselected.includes(col.title)) {
                        // Remove Alreadt Selected Column
                        setCurrSelected(
                          Currselected.filter((item) => item !== col.title)
                        );
                      } else {
                        // Add New Column
                        setCurrSelected([...Currselected, col.title]);
                      }
                    }}
                    className="block"
                  >
                    <span
                      className={`${
                        Currselected.includes(col.title) ? "font-bold" : ""
                      }`}
                    >
                      {col.title} +
                    </span>
                  </button>
                );
              })}
            <button
              onClick={() => {
                // This is the button that adds the group to the group array
                if (text === "") {
                  alert("Please Enter a Name");
                  return;
                }
                setGroup([
                  ...group,
                  {
                    name: text,
                    columns: Currselected,
                  },
                ]);
                // setShow(false)
                setText("");
                setCurrSelected([]);
              }}
              className="my-3 text-primary"
            >
              Add
            </button>
          </div>
        )}
      <div className="w-fit">
        <button
          className="block bg-purple-950  text-white px-3 rounded-sm"
          onClick={() => {
            let data = column.reduce((acc, curr) => {
              //flag FALSE =  item doesn't belong to any group
              let flag = false;
              console.log(curr);
              group.forEach((groupItem) => {
                // @ts-ignore
                if (groupItem.columns.includes(curr.title)) {
                  flag = true;

                  // @ts-ignore
                  curr.headerGroup = groupItem.name;
                }
              });

              if (!flag) {
                // @ts-ignore
                curr.headerGroup = "";
              }

              // @ts-ignore
              return [...acc, curr];
            }, []);

            console.log(data);

            tabularSetter((prev: any) => data);
          }}
        >
          Apply Changes
        </button>
        <button
          className="bg-red-900 mt-4 w-full text-white "
          onClick={() => {
            column.map((item) => {
              // @ts-ignore
              item.headerGroup = "";
            });
            tabularSetter((prev: any) => column);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default GroupSelector;
