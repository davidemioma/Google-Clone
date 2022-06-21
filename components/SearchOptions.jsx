import React from "react";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import SearchOption from "./SearchOption";

const SearchOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      <div className="flex items-center space-x-5 ">
        <SearchOption Icon={SearchIcon} text="All" selected />

        <SearchOption Icon={PhotographIcon} text="Images" />

        <SearchOption Icon={PlayIcon} text="Videos" />

        <SearchOption Icon={NewspaperIcon} text="News" />

        <SearchOption Icon={MapIcon} text="Maps" />

        <SearchOption Icon={DotsVerticalIcon} text="More" />
      </div>

      <div className="flex space-x-3">
        <p className="link">Settings</p>

        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default SearchOptions;
