import React from "react";
import { useState } from "react";

interface IToggleProps {
  handleToggleBtn: () => void;
}

const Header = ({ handleToggleBtn }: IToggleProps) => {
  return (
    <header className="w-full">
      <div className="mb-3 flex">
        <button onClick={handleToggleBtn}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            ></path>
          </svg>
        </button>

        <div className="m-auto flex items-center">
          <span>aha q&a</span>
          <button>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <form className="relative flex items-center pb-2">
          <label htmlFor="search"></label>
          <input
            id="search"
            className="  h-8 w-[32rem] max-w-max rounded-full bg-gray-200 text-center shadow-md focus:outline-none"
            type="text"
          />
          <svg
            className="absolute right-4 h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </form>
      </div>
    </header>
  );
};

export default Header;
