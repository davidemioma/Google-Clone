import React from "react";
import Link from "next/link";
import Pagination from "./Pagination";

const SearchResults = ({ results }) => {
  return (
    <div className="w-full mx-auto px-3 sm:px-[5%] md:px-[14%] lg:px-52">
      <p className="mt-3 mb-5 text-gray-600 ">
        About {results?.searchInformation?.formattedTotalResults} results (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results && (
        <div className="flex flex-col space-y-5 pb-6">
          {results.items?.map((item) => (
            <div key={item.link}>
              <div className="group">
                <Link href={item.link}>{item.formattedUrl}</Link>

                <Link href={item.link}>
                  <h2 className="text-blue-800 truncate text-xl font-medium cursor-pointer group-hover:underline">
                    {item.title}
                  </h2>
                </Link>
              </div>

              <p className="line-clamp-2">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}

      <Pagination />
    </div>
  );
};

export default SearchResults;
