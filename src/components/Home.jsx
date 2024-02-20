import React from "react";
import EarthHome from "./EarthHome";

const Home = () => {
  return (
    <div className="flex flex-row flex-wrap w-full justify-center "
    style={{
        backgroundImage: "url('https://windowsthemepack.com/themepack/_aircraft_space/Dark-space/3.jpg')"
    }}
    >
      <div
        className="m-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="text-white font-bold font-serif text-3xl">National Aeronautics</p>
      </div>
      <div
        style={{
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 0 50px 15px #0e1b32",
          display: "flex",
        }}
      >
        <EarthHome />
      </div>
      <div
        className="m-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="text-white font-bold font-serif text-3xl">Space Administration</p>
      </div>
    </div>
  );
};

export default Home;
