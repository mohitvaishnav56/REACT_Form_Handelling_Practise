import React from "react";
import { IoAdd } from "react-icons/io5";

function Navbar({ data, handleForm}) {
  return (
    <div className="w-full flex items-center justify-between py-6 px-20">
      <h1 className="text-orange-600 text-2xl font-bold">Orange</h1>
      <div className="flex gap-4 items-center">
        <span onClick={handleForm} title="Add Song" className="p-2 bg-orange-400 rounded-full cursor-pointer">
        <IoAdd size={"1.5em"} color="white"/>
        </span>
        <div className="flex px-4 py-2 rounded-md items-center gap-2 bg-orange-400">
          <h3 className="text-white font-semibold">Favourites</h3>
          <h4 className="text-white bg-orange-600 py-.5 px-2 rounded-sm">
            {
              data.filter((item) => {
                return item.isFavourite;
              }).length
            }
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
