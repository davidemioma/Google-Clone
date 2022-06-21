import React from "react";
import { GlobeIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 grid divide-y-[1px] divide-gray-300 text-gray-500 text-sm">
      <div className="px-6 py-3 md:px-8">
        <p>United Kingdom</p>
      </div>

      <div className="px-6 py-3 md:px-8 grid grid-cols-1 gap-y-4 grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center justify-center space-x-2 whitespace-nowrap md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5 text-green-700 " />

          <p>Carbon neutral since 2007</p>
        </div>

        <div className="flex items-center justify-center space-x-5 whitespace-nowrap md:justify-self-start ">
          <p>Advertising</p>

          <p>Business</p>

          <p>New Search Work</p>
        </div>

        <div className="flex items-center justify-center space-x-5 whitespace-nowrap md:ml-auto">
          <p>Privacy</p>

          <p>Terms</p>

          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
