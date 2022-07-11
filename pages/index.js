import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather";
import Loading from "../components/Loading";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHERLY_KEY}`;

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await axios.get(url).then((res) => {
      setWeather(res.data);
      setLoading(false);
    });
    setCity("");
    setLoading(false);
  };

  if (loading) {
    return (
      <>
        <Loading />;
      </>
    );
  } else {
    return (
      <div>
        <Head>
          <title>Weatherly</title>
          <meta name="description" content="Weatherly" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[1]">
          {/* Background image */}
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1508012340316-cdf9d309cea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            layout="fill"
            alt="Background image"
          />
        </div>
        {/* Search */}
        <div className="relative flex justify-between items-center max-w-[360px] w-full m-auto pt-4 text-white z-10">
          <form
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
            onSubmit={fetchWeather}
          >
            <div>
              <input
                className="bg-transparent border-none text-white focus:outline-none text-2xl"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                type="text"
                placeholder="Search City"
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={25} />
            </button>
          </form>
        </div>
        {/* Weather */}
        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
}
