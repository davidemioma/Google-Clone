import React from "react";
import Avatar from "./Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4 text-sm text-gray-700 ">
      <div className="flex items-center space-x-3">
        <p className="link">About</p>

        <p className="link">Store</p>
      </div>

      <div className="flex items-center space-x-3">
        <p className="link">Gmail</p>

        <p className="link">Images</p>

        <ViewGridIcon className="w-10 h-10 p-2 cursor-pointer rounded-full hover:bg-gray-100" />

        <Avatar />
      </div>
    </header>
  );
};

export default Header;
