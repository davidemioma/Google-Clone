import React, { useState } from "react";
import { MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";

const Body = () => {
  const router = useRouter();

  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    router.push(`/search?term=${input}`);

    setInput("");
  };

  return (
    <form
      className="flex flex-col items-center px-4 flex-grow mt-36"
      onSubmit={search}
    >
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        width={300}
        height={100}
      />

      <div className="mt-5 w-full flex items-center group hover:shadow-lg focus-within:shadow-lg max-w-md border border-gray-200 rounded-full px-5 py-3 sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 text-gray-500 mr-3" />

        <input
          className="flex-grow outline-none "
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <MicrophoneIcon className="h-5 text-gray-500" />
      </div>

      <div className="mt-3 flex items-center space-x-3">
        <button type="submit" className="body_btn" onClick={search}>
          Google Search
        </button>

        <button className="body_btn">I&apos;m feeling lucky </button>
      </div>
    </form>
  );
};

export default Body;
