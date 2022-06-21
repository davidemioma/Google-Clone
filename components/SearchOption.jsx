import React from "react";

const SearchOption = ({ Icon, text, selected }) => {
  return (
    <div
      className={`${
        selected && "text-blue-500 border-blue-500"
      } flex items-center space-x-1 border-b-4 border-transparent pb-3 cursor-pointer hover:text-blue-500 hover:border-blue-500`}
    >
      <Icon className="h-4" />

      <p className="hidden sm:inline">{text}</p>
    </div>
  );
};

export default SearchOption;
