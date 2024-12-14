import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <aside className="flex flex-wrap justify-center items-center gap-8 bg-gray-100 rounded-lg p-6 sm:p-10">
        <div className="text-center sm:text-right flex-1 space-y-6">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Download Now
            <span className="block sm:hidden text-xl">Lorem Ipsum</span>
          </h2>
          <Link
            className="inline-flex items-center px-6 py-3 text-white font-medium bg-orange-700 rounded-lg hover:opacity-75"
            to="/"
          >
            <svg
              fill="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            &nbsp; Download now
          </Link>
        </div>

        <div className="flex justify-center items-center flex-1">
          <img
            className="max-w-full w-48 sm:w-96 lg:w-[400px]"
            src="https://i.ibb.co/5BCcDYB/Remote.png"
            alt="image1"
          />
        </div>
      </aside>

      <div className="flex justify-center items-center mt-10">
        <img
          className="max-w-ful min-w-48 sm:w-96 lg:w-[400px]"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
        />
      </div>

      <h1 className="text-center text-xl sm:text-5xl py-10 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere!
      </h1>
    </div>
  );
}
