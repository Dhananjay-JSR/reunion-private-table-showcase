import React from "react";
import { ContentBuilder } from "../components/ContentBuilder";

const Divider = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid  grid-cols-2">{children}</div>;
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

const SideButton = ({ children }: { children: string }) => {
  return (
    <button className="pl-7 w-full pr-4 py-4 flex items-center justify-between">
      {children}
      <img src="https://strapi.web3p.in/uploads/chevron_right_4f2156d4d3.svg" />
    </button>
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

const NavBarButton = ({ children }: { children: string }) => (
  <button className="h-9 bg-[#026FFA] px-5 rounded-md text-white text-lg mr-5">
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
        subTitle1="Ninad Dere vs John Deo, John Doe, Ninad Dere, Ninad Dere"
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

function App() {
  const [selected, setSelected] = React.useState([]);
  return (
    <Divider>
      <div className="h-full w-full border-r border-[#DFDFDF]">
        <NavBar>
          <div className="flex items-center gap-4">
            <HamBurger />
            <Logo />
          </div>
          <div className="flex items-center">
            <NavBarButton>Apply</NavBarButton>
          </div>
        </NavBar>
        <div className="flex   w-full">
          <div className=" pt-3 text-xl h-fit border-r border-b ">
            <div className="pl-7 font-medium py-4 w-80">Entities</div>
            <SideButton>Cause List</SideButton>
            <SideButton>Litigations</SideButton>
            <SideButton>Customer Complaints</SideButton>
            <SideButton>Technical Details</SideButton>
            <SideButton>Approvals</SideButton>
            <SideButton>Buildings</SideButton>
            <SideButton>Project</SideButton>
            <SideButton>Promoters</SideButton>
          </div>
          <div className="pt-3  w-full">
            <div className="border-b pb-7 px-7">
              <div className="py-4  font-medium text-xl">Filter</div>
              <div className="text-lg">Search for a keyword</div>
              <input className="border  text-xl py-2 mt-3 rounded-md px-1 w-full" />
            </div>
            <div className="px-7">
              <div className="py-4  font-medium text-xl">Advanced Filters</div>
              <div>
                <div>Date of Hearing</div>
                <div className="flex mt-3 justify-between text-[#A7A7A7] w-full mb-3">
                  <div className="border flex px-2 py-2 justify-between rounded-md w-40">
                    FROM
                    <img src="https://strapi.web3p.in/uploads/calendar2_date_74c3bc3c74.svg?updated_at=2023-01-18T09:21:42.789Z" />
                  </div>
                  <div className="border flex px-2 justify-between  rounded-md py-2 w-40">
                    TO
                    <img src="https://strapi.web3p.in/uploads/calendar2_date_74c3bc3c74.svg?updated_at=2023-01-18T09:21:42.789Z" />
                  </div>
                </div>
              </div>

              <div>
                <div>Last Date of Hearing</div>
                <div className="flex mt-3 justify-between text-[#A7A7A7] w-full mb-3">
                  <div className="border flex px-2 py-2 justify-between rounded-md w-40">
                    FROM
                    <img src="https://strapi.web3p.in/uploads/calendar2_date_74c3bc3c74.svg?updated_at=2023-01-18T09:21:42.789Z" />
                  </div>
                  <div className="border flex px-2 justify-between  rounded-md py-2 w-40">
                    TO
                    <img src="https://strapi.web3p.in/uploads/calendar2_date_74c3bc3c74.svg?updated_at=2023-01-18T09:21:42.789Z" />
                  </div>
                </div>
              </div>
              <div>
                <div>Date of Cause List Publication</div>
                <div className="flex mt-3 justify-between text-[#A7A7A7] w-full mb-3">
                  <div className="border flex px-2 py-2 justify-between rounded-md w-40">
                    FROM
                    <img src="https://strapi.web3p.in/uploads/calendar2_date_74c3bc3c74.svg?updated_at=2023-01-18T09:21:42.789Z" />
                  </div>
                  <div className="border flex px-2 justify-between  rounded-md py-2 w-40">
                    TO
                    <img src="https://strapi.web3p.in/uploads/calendar2_date_74c3bc3c74.svg?updated_at=2023-01-18T09:21:42.789Z" />
                  </div>
                </div>
              </div>
              <div>
              <div className="text-lg">Stage<button className="inline-flex items-center gap-2 text-sm ml-2 text-primary">contains <img src="https://strapi.web3p.in/uploads/chevron_down_5d05db4669.svg?updated_at=2023-01-18T09:21:20.603Z" /></button></div>
              <input className="border  text-xl py-2 mt-3 rounded-md px-1 w-full" />
              </div>
              <div>
              <div className="text-lg">Court<button className="inline-flex items-center gap-2 text-sm ml-2 text-primary">contains <img src="https://strapi.web3p.in/uploads/chevron_down_5d05db4669.svg?updated_at=2023-01-18T09:21:20.603Z" /></button></div>
              <input className="border  text-xl py-2 mt-3 rounded-md px-1 w-full" />
              </div>
              <div>
              <div className="text-lg">Advocate Name<button className="inline-flex items-center gap-2 text-sm ml-2 text-primary">contains <img src="https://strapi.web3p.in/uploads/chevron_down_5d05db4669.svg?updated_at=2023-01-18T09:21:20.603Z" /></button></div>
              <input className="border  text-xl py-2 mt-3 rounded-md px-1 w-full" />
              </div>
              <div>
              <div className="text-lg">Promoter Name<button className="inline-flex items-center gap-2 text-sm ml-2 text-primary">contains <img src="https://strapi.web3p.in/uploads/chevron_down_5d05db4669.svg?updated_at=2023-01-18T09:21:20.603Z" /></button></div>
              <input className="border  text-xl py-2 mt-3 rounded-md px-1 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full ">
        <NavBar>
          <div className="ml-7">
            <div className="text-2xl font-medium">Results</div>
          </div>
          <div className="flex items-center">
            <NavBarButton>Start Tracking</NavBarButton>
          </div>
        </NavBar>
        <div className="pt-3  ">
          <div className="pl-7 py-4  text-lg text-[#6B6B6B]">
            Showing top 3 results
          </div>
          <div className="px-7 ">
            <DummyContentRender />
          </div>
        </div>
      </div>
    </Divider>
  );
}

export default App;
