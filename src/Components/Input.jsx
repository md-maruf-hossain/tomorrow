import React from "react";
import { UilSearch , UilLocationPinAlt  } from "@iconscout/react-unicons";

const Input = () => {
  return (
    <div className="flex flex-row justify-center my-5">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input type="text" 
        placeholder="Your Location"
        className="text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize"/>

        <UilSearch size={30} className="text-white cursor-pointer"/>
        <UilLocationPinAlt size={30} className="text-white cursor-pointer"/>
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-thin">°C</button>
        <span className="text-xl text-white font-thin mx-1">|</span>
        <button name="imperial" className="text-xl text-white font-thin">°F</button>
      </div>
    </div>
  );
};

export default Input;
