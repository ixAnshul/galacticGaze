import React, { useState, useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import SpaceLoading from "../assets/loadingspace.gif"
import './APOD.css'
const fetchData = async ( setVideo, setPotd, setLoading) => {
  setLoading(true);
  try {
    const response = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=roCADWsb0gCLaFAJYRyVkHXqV6XZIcQE1vzorvIB"
    );

    if (response.data.media_type === "video") {
      setVideo(true);
    } else {
      setVideo(false);
    }
    console.log(data)
    setPotd(response.data);
  } catch (error) {
    console.error("Error fetching APOD data", error);
  }
  setLoading(false);
};

const APOD = () => {
  const [video, setVideo] = useState(false);
  const [potd, setPotd] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(setVideo, setPotd, setLoading);
  }, []);

  return (
    <div className="bg-black flex flex-col gap-10 bg-cover h-auto min-h-screen font-poppins text-white  w-full">
      <div className="w-10/12 mt-8 mx-auto">
        <p className="text-5xl sm:text-6xl text-center font-bold potd-header ">
          ASTRONOMY
        </p>
        <p className="text-lg sm:text-xl text-center font-bold ">
          PICK OF THE DAY
        </p>
        <div className="bg-green-600 h-1 w-2/12 mx-auto "></div>
      </div>
      <div className="w-10/12 relative flex flex-col gap-10 justify-center items-center mx-auto">
        <p className="text-4xl sm:text-6xl text-center font-bold ">
          {potd.title}
        </p>
        {loading ? (
          <div>
            <img src={SpaceLoading} />
          </div>
        ) : video ? (
          <video controls width="100%" height="65%">
            <source src={potd.url} type="video/mp4" />
            Your Browser can't play the Video
          </video>
        ) : (
          <img
            alt="picoftheday"
            className="rounded-xl  w-3/4"
            src={potd.url}
          />
        )}

        <p className="font-poppins text-center text-lg mb-8">
          {potd.explanation}
        </p>
      </div>
    </div>
  );
};

export default APOD;
