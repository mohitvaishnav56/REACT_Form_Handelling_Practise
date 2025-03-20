import React from "react";
import Card from "./Card";

function Cards({ data, handleClick, handleRemove}) {
  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-10 px-4 py-10">
        {data.map((obj, songIndex) => {
          if(obj){
          return <Card {...obj} handleRemove = {handleRemove} handleClick = {handleClick} identity = {songIndex} key={songIndex}  />;
          } 
        })}
      </div>
  );
}

export default Cards;

