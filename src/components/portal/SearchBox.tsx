import React from "react";

export function SearchPanel({
    children,
    closing,
    placeholderText,
    setClosing,
  }: {
    children:string,
    placeholderText:string,
    closing: boolean;
    setClosing: React.Dispatch<boolean>;
  }) {
    return (
      <div
        className={`absolute ${
          closing ? `md:scale-75  md:translate-y-0 translate-y-48 opacity-0` : ``
        } transition-all md:pt-0 md:py-4  pt-8 bottom-0 md:top-56 h-[269px] md:h-fit md:left-[50%] md:-translate-x-[50%] md:max-w-4xl  w-full bg-white rounded-tl-lg md:rounded-bl-lg md:rounded-br-lg rounded-tr-lg`}
      >
        <div data-testid="search-panel-modal" className="px-4 py-5 md:pt-8 md:px-16 md:pb-10 sm:p-6">
          <div className="flex items-center justify-center  md:justify-between w-full">
            <h3 className="md:inline-block text-lg leading-6 font-medium text-gray-900  text-center md:text-left">
              {children}
            </h3>
            <button
              onClick={() => {
                setClosing(true);
              }}
              className="hidden md:inline-block md:float-right"
              data-testid="search-panel-close-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <div className="mt-5 md:my-8  justify-center md:justify-start sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs md:max-w-none md:grow">
              <input
                type="text"
                data-testid="search-element-input"
                className="shadow-sm md:h-14  focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md  border p-3"
                placeholder={placeholderText}
              />
            </div>
            <button
              onClick={() => {
                setClosing(true);
              }}
              data-testid="search_panel_save_btn"
              className="mt-3 md:h-14 md:px-10 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-primary hover:bg-primary/70 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }