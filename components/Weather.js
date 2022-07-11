import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-white z-10">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            height="100"
            width="100"
          />
          <p className="text-3xl">{data.weather[0].main}</p>

          <p className="text-lg text-gray-200">{data.weather[0].description}</p>
        </div>
        <div className="items-center grid grid-cols-1 text-center">
          <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
          <div className="grid grid-cols-2">
            <div>
              <p className="font-bold text-lg ">
                {data.main.temp_min.toFixed(1)}&#176;
              </p>

              <p className="text-sm text-gray-200">Min Temp</p>
            </div>
            <div>
              <p className="font-bold text-lg ">
                {data.main.temp_max.toFixed(1)}&#176;
              </p>
              <p className="text-sm text-gray-200">Max Temp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-black/50 relative p-8 rounded-lg">
        <p className="text-3xl text-center pb-8">
          Weather in {data.name}, {data.sys.country}
        </p>
        <div className="grid grid-cols-3 justify-between text-center">
          <div>
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(1)}&#176;
            </p>
            <p className="text-xl">Feels like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(1)} m/s
            </p>
            <p className="text-xl">Wind</p>
          </div>
        </div>
      </div>

      {/* Additional info */}
      <div></div>
    </div>
  );
};

export default Weather;
