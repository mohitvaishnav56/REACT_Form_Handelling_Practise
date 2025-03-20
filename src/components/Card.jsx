import React from "react";
import { RxCross2 } from "react-icons/rx";

function Card({ image, song, artist, isFavourite, handleClick, identity, handleRemove }) {
  return (
    <div className="w-40 px-2 py-3 bg-white rounded-md flex gap-2 relative pb-6 shadow-md">
      <div className="h-12 w-12 bg-orange-400 rounded-md overflow-hidden">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div>
        <h1 className="font-semibold text-base leading-none">{song}</h1>
        <h6 className="text-xs">{artist}</h6>
        <span
          onClick={() => handleRemove(identity)}
          className="absolute top-0 right-0 cursor-pointer p-1 rounded-full bg-red-400 shadow-md"
        >
          <RxCross2 size={".5em"} />
        </span>
        <button
          onClick={() => {
            handleClick(identity);
          }}
          className={`px-3 py-1.5 rounded-full ${
            isFavourite ? "bg-red-400" : "bg-teal-400"
          } text-white text-xs whitespace-nowrap absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-1/2 cursor-pointer`}
        >
          {isFavourite ? "Remove" : "Favourite"}
        </button>
      </div>
    </div>
  );
}

export default Card;
