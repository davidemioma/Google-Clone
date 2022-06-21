import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";

const SearchHeader = ({ searchTerm }) => {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState(searchTerm);

  const search = (e) => {
    e.preventDefault();

    if (!searchInput.trim()) return;

    router.push(`/search?term=${searchInput}`);
  };

  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="flex w-full p-5 flex-col items-center md:flex-row">
        <div className="flex justify-between w-full md:w-[120px]">
          <Image
            className="cursor-pointer "
            onClick={() => router.push("/")}
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            width={120}
            height={40}
          />

          <div className="md:hidden">
            <Avatar />
          </div>
        </div>

        <form
          className="flex mt-3 md:mt-0 w-full flex-grow mx-3 items-center px-6 py-3 border border-gray-200 rounded-full shadow-lg max-w-2xl lg:max-w-3xl "
          onSubmit={search}
        >
          <input
            className="flex-grow w-full outline-none"
            value={searchInput}
            type="text"
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <XIcon
            onClick={() => setSearchInput("")}
            className="h-6 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 mr-3"
          />

          <MicrophoneIcon className="h-6 mr-3 text-blue-500 border-l-2 pl-3 border-gray-300 cursor-pointer" />

          <SearchIcon
            className="hidden sm:inline h-6 text-blue-500 cursor-pointer"
            onClick={search}
          />
        </form>

        <div className="hidden md:inline ml-auto">
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
