import React from "react";
import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Pagination = () => {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="mb-10 flex max-w-lg justify-between text-blue-700">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />

            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />

          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default Pagination;
