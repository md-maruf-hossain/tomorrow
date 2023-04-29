import React from "react";
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons";
const Temperature = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-5 text-lg text-cyan-300">
        <p>Cloudy/ sunny</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className="w-20" />
        <p className="text-5xl">32°</p>
        <div className="flex flex-col space-y-2">
            {/* real feel */}
          <div className="flex font-light text-sm justify-center items-start">
            <UilTemperature size={18} className="mr-1"/>
            Real Feel:
            <span className="font-medium ml-1">32°</span>
          </div>
          {/* humidity */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1"/>
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>
          {/* wind */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1"/>
            Wind:
            <span className="font-medium ml-1">10 km/h</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-row items-center justify-between text-white text-sm py-2">
        {/* sun rise*/}
        <UilSun/>
        <p className="font-light">Rise: <span className="font-medium">05:28 AM</span></p>
        <span className="font-light">|</span>
        {/* set */}
        <UilSunset/>
        <p className="font-light">Sunset: <span className="font-medium">06:35 PM</span></p>
        <span className="font-light">|</span>
        {/* high */}
        <UilArrowUp/>
        <p className="font-light">Highest: <span className="font-medium">42°</span></p>
        <span className="font-light">|</span>
        {/* low */}
        <UilArrowDown/>
        <p className="font-light">Lowest: <span className="font-medium">33°</span></p>
      </div>
    </div>
  );
};

export default Temperature;
