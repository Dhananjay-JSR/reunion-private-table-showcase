import React, { MutableRefObject } from "react";
import { ContentBuilder } from "../components/ContentBuilder";
import { Portal } from "../components/portal/Portal";
import { SearchPanel } from "../components/portal/SearchBox";
import { AdvancedFilter } from "../FiltersComponent";
import SVGEmbed from "../components/CustomComponent/SVGEmbed";

const Divider = ({ children }: { children: React.ReactNode }) => {
  return <div className="lg:grid   lg:grid-cols-2">{children}</div>;
};

const NavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-16 w-full border-b border-[#DFDFDF] flex justify-between items-center">
        {children}
      </div>
    </div>
  );
};

const HamBurger = () => (
  <button className="w-9 h-9 cursor-pointer p-1.5 rounded-md shadow-lg bg-white ml-7">
    <img
      src="https://strapi.web3p.in/uploads/list_90fe85b523.svg"
      className="w-full h-full"
      alt="burger menu"
    />
  </button>
);

const Logo = () => (
  <div>
    <img
      src="https://strapi.web3p.in/uploads/logo_horizontal_bfd91456bf.svg"
      className="h-7 w-auto"
      alt="logo"
    />
  </div>
);

const NavBarButton = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: React.DOMAttributes<HTMLButtonElement>["onClick"];
}) => (
  <button
    onClick={onClick}
    className="h-9 bg-[#026FFA] px-5 rounded-md text-white text-lg mr-5"
  >
    {children}
  </button>
);

const DummyContentRender = () => {
  return (
    <>
      <ContentBuilder
        Type="Cause List"
        subHead="Rustomjee Uptown Urbania"
        Head="Court Number 5, MahaREAT"
        subTitle1="Ninad Dere vs John Deo"
        subTitle2="Appeal # A51700001179"
        tag="26 Dec 22, 11:00AM"
      />
      <ContentBuilder
        Type="Legal Orders"
        subHead="Rustomjee Uptown Urbania"
        Head="Ninad Dere vs John Doe"
        subTitle1="MahaRERA"
        subTitle2="Case # 7"
        tag="26 Dec 22"
      />
      <ContentBuilder
        Type="Customer Complaints"
        subHead="Rustomjee Uptown Urbania"
        Head="Ninad Dere"
        subTitle1="MahaRERA"
        subTitle2="Case # CC0100100051654 | Active"
        tag="26 Dec 22"
      />
      <ContentBuilder
        Type="Property Documents"
        subHead="Rustomjee Uptown Urbania"
        Head="Legal title report"
      />

      <ContentBuilder
        Type="Approvals"
        subHead="Rustomjee Uptown Urbania"
        Head="Building Plan (IOD)"
      />

      <ContentBuilder
        Type="Unit & Configuration"
        subHead="Rustomjee Uptown Urbania"
        Head="3-4BHK"
        subTitle1="134-140 sqft. | 12 Apartements"
      />

      <ContentBuilder
        Type="Buildings"
        subHead="Rustomjee Uptown Urbania"
        Head="Mayflower"
        subTitle1="12 Apartements | 15-08-22 | 58% completed"
      />

      <ContentBuilder
        Type="RERA Promoters"
        Head="Ninad Dere"
        subTitle1="Contractor"
      />

      <ContentBuilder
        Type="Technical Details"
        Head="Rustomjee Uptown Urbania"
        subTitle1="Total Carper area 5000 sqft. | Land Area 5000 sqft. | Approved FSI 5000 sqft. "
      />
    </>
  );
};

const AdvanceCalenderPicker = ({ title }: { title: string }) => {
  return (
    <div className="mb-5">
      <div className="mb-4 text-lg">{title}</div>
      <div className="flex mt-3 justify-between text-[#A7A7A7] w-full">
        <button className="border flex px-2 py-2 justify-between   rounded-md  w-32  md:w-32 lg:w-36 xl:w-40 2xl:w-48">
          FROM
          <SVGEmbed src="/uploads/calendar2_date_74c3bc3c74.svg" className="fill-primary h-6 w-6"  />
          {/* <img src="https://strapi.web3p.in/uploads/calendar2_date_74c3bc3c74.svg?updated_at=2023-01-18T09:21:42.789Z" /> */}
        </button>
        <button className="border flex px-2 py-2 justify-between  rounded-md   w-32  md:w-32 lg:w-36 xl:w-40 2xl:w-48">
          TO
          <SVGEmbed src="/uploads/calendar2_date_74c3bc3c74.svg" className="fill-primary h-6 w-6"  />
        </button>
      </div>
    </div>
  );
};

const AdvanceOptionInput = ({
  title,
  allowBottomOverlay,
}: {
  title: string;
  allowBottomOverlay?: boolean;
}) => {
  const [overlay, setOverlay] = React.useState(false);
  const [filter_type, setFilterType] = React.useState<
    "contains" | "does not contains"
  >("contains");
  const modalRef = React.useRef() as MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOverlay(false);
      }
    };
    if (overlay) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [overlay]);

  const [BackDropvisible, setBackDropvisible] = React.useState(false);

  return (
    <div className="mb-5">
      <div className="text-lg">
        {title}
        <button
          onClick={() => {
            if (allowBottomOverlay) {
              setBackDropvisible(!BackDropvisible);
            }
            setOverlay(!overlay);
          }}
          className="inline-flex relative items-center gap-2 text-sm ml-2 text-primary"
        >
          {overlay &&
            (allowBottomOverlay ? (
              <>
                <Portal
                  BackDropvisible={BackDropvisible}
                  setBackDropVisible={setBackDropvisible}
                >
                  {(closing, setClosing) => (
                    <>
                      {/* <SearchPanel
            placeholderText="Name your Alert"
            closing={closing}
            setClosing={setClosing}
            >
            Give this alert a name
          </SearchPanel> */}
                      <div
                        className={`fixed bottom-0 h-40 ${
                          closing
                            ? `md:scale-75  md:translate-y-0 translate-y-48 opacity-0`
                            : ``
                        } w-full bg-white rounded-t-lg p-5 pt-7`}
                      >
                        <button
                          onClick={() => {
                            setClosing(true);
                            setFilterType((prev) => "contains");
                          }}
                          className={`${
                            filter_type == "contains"
                              ? "text-black"
                              : "text-secondary"
                          } block text-lg mb-2`}
                        >
                          contains
                        </button>
                        <button
                          onClick={() => {
                            setClosing(true);
                            setFilterType((prev) => "does not contains");
                          }}
                          className={`${
                            filter_type == "does not contains"
                              ? "text-black"
                              : "text-secondary"
                          } block text-lg`}
                        >
                          does not contains
                        </button>
                      </div>
                    </>
                  )}
                </Portal>
              </>
            ) : (
              <div
                ref={modalRef}
                className="absolute text-black rounded-md border-[#CACACA] border top-full py-1   bg-white w-max shadow-xl px-4"
              >
                <button
                  onClick={() => {
                    setFilterType((prev) => "contains");
                  }}
                  className="my-1 w-full hover:text-primary text-left hover:transition-all transition-all"
                >
                  contains
                </button>
                <button
                  onClick={() => {
                    setFilterType((prev) => "does not contains");
                  }}
                  className="my-1 block  hover:text-primary hover:transition-all transition-all"
                >
                  does not contains
                </button>
              </div>
            ))}

          {filter_type}
          <img src="https://strapi.web3p.in/uploads/chevron_down_5d05db4669.svg?updated_at=2023-01-18T09:21:20.603Z" />
        </button>
      </div>
      <input className="border  text-xl py-2 mt-3 rounded-md px-3 w-full" />
    </div>
  );
};

const SideButton = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: (value: string) => any;
}) => {
  return (
    <button
      onClick={() => {
        onClick && onClick(children);
      }}
      className="pl-7 w-full pr-4 py-4 flex text-left items-center xl:w-52 2xl:w-72  justify-between"
    >
      {children}
      <img src="https://strapi.web3p.in/uploads/chevron_right_4f2156d4d3.svg" />
    </button>
  );
};

const EntityOption = ({ fnClick }: { fnClick?: (value: any) => any }) => (
  <div className=" pt-3  lg:text-lg  xl:text-xl h-fit border-r border-b ">
    <div className="pl-7 font-medium py-4 ">Entities</div>
    <div className="text-[#314250]">
      <SideButton onClick={fnClick}>Cause List</SideButton>
      <SideButton onClick={fnClick}>Litigations</SideButton>
      <SideButton onClick={fnClick}>Customer Complaints</SideButton>
      <SideButton onClick={fnClick}>Technical Details</SideButton>
      <SideButton onClick={fnClick}>Approvals</SideButton>
      <SideButton onClick={fnClick}>Buildings</SideButton>
      <SideButton onClick={fnClick}>Project</SideButton>
      <SideButton onClick={fnClick}>Promoters</SideButton>
    </div>
  </div>
);

const AdvanceFilterPanel = ({
  allowBottomOverlay,
}: {
  allowBottomOverlay?: boolean;
}) => {
  return (
    <div className="pt-3 w-full ">
      <div className=" pb-7 border-b px-7">
        <div className="py-4  font-medium text-xl">Filter</div>
        <div className="text-lg">Search for a keyword</div>
        <input className="border px-3 text-xl py-2 mt-3 w-full rounded-md  " />
      </div>

      <div className="px-7">
        <div className="py-4  font-medium text-xl">Advanced Filters</div>
        <AdvanceCalenderPicker title="Date of Hearing" />
        <AdvanceCalenderPicker title="Last Date of Hearing" />
        <AdvanceCalenderPicker title="Date of Cause List Publication" />
        <AdvanceOptionInput
          allowBottomOverlay={allowBottomOverlay}
          title="Stage"
        />
        <AdvanceOptionInput
          allowBottomOverlay={allowBottomOverlay}
          title="Court"
        />
        <AdvanceOptionInput
          allowBottomOverlay={allowBottomOverlay}
          title="Advocate Name"
        />
        <AdvanceOptionInput
          allowBottomOverlay={allowBottomOverlay}
          title="Promoter Name"
        />
      </div>
    </div>
  );
};

const BottomApplyPanel = ({ onClick }: { onClick?: () => any }) => {
  return (
    <div className="w-full h-16  fixed z-20 bg-white bottom-0 rounded-lg border flex">
      <button className="text-secondary  w-full text-xl">Clear</button>
      <div className="bg-[#EEEEEE] my-auto w-1 h-[60%]"></div>
      <button onClick={onClick} className="text-xl w-full text-primary">
        Apply
      </button>
    </div>
  );
};

function App() {
  const [overlay, setOverlay] = React.useState(false);
  const [filter_type, setFilterType] = React.useState(null);
  const [currentScreen, setCurrentScreen] = React.useState(0);
  const [selectedEntity, setSelectedEntity] = React.useState(null);
  return (
    <React.Fragment>
      <Portal BackDropvisible={overlay} setBackDropVisible={setOverlay}>
        {(closing, setClosing) => (
          <SearchPanel
            placeholderText="Name your Alert"
            closing={closing}
            setClosing={setClosing}
          >
            Give this alert a name
          </SearchPanel>
        )}
      </Portal>
      <div className="flex flex-col h-screen lg:h-fit">
        <Divider>
          <NavBar>
            <div className="flex items-center gap-4">
              <HamBurger />
              <Logo />
            </div>
            <div className="hidden lg:flex items-center ">
              <NavBarButton>Apply</NavBarButton>
            </div>
          </NavBar>
          <div className="hidden lg:block  ">
            <NavBar>
              <div className="ml-7">
                <div className="text-2xl font-medium">Results</div>
              </div>
              <div className="flex items-center">
                <NavBarButton
                  onClick={() => {
                    setOverlay(true);
                  }}
                >
                  Start Tracking
                </NavBarButton>
              </div>
            </NavBar>
          </div>
        </Divider>
        <div className="grow ">
          <div className="h-full lg:grid   lg:grid-cols-2">
            <div className="h-full w-full ">
              {/* <CompleteNavBar/> */}
              <div className="lg:hidden h-full w-full ">
                {filter_type == null ? (
                  <>
                    {currentScreen == 0 && (
                      <div className="h-full w-full flex justify-center items-center">
                        <div className="items-center flex flex-col">
                          <div className="w-fit text-2xl">Select Filters</div>
                          <div className="w-fit mt-4 text-secondary text-xl">
                            Apply Filters to get started
                          </div>
                          <button
                            onClick={() => {
                              setCurrentScreen((prev) => 1);
                            }}
                            className="bg-primary mt-4 text-white p-3 rounded-md w-fit "
                          >
                            Select Category
                          </button>
                        </div>{" "}
                      </div>
                    )}
                    {currentScreen == 1 && (
                      <>
                        <EntityOption
                          fnClick={(entity) => {
                            setSelectedEntity(entity);
                            setCurrentScreen((prev) => 2);
                          }}
                        />
                      </>
                    )}
                    {currentScreen == 2 && (
                      <>
                        <div className="mb-20">
                          <AdvanceFilterPanel allowBottomOverlay />{" "}
                        </div>{" "}
                        <BottomApplyPanel
                          onClick={() => {
                            setFilterType(selectedEntity);
                          }}
                        />
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div className="px-4">
                      <DummyContentRender />
                    </div>
                  </>
                )}
              </div>
              <div className="lg:block hidden">
                <div className="pt-3  ">
                  <div className="pl-7 py-4  text-lg text-[#6B6B6B]">
                    Showing top 3 results
                  </div>
                  <div className="px-7 ">
                    <DummyContentRender />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full hidden lg:block order-first w-full border-r border-[#DFDFDF]">
              <div className="flex  w-full">
                <EntityOption />
                <AdvanceFilterPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
