import Globe from "react-globe.gl";
import hexRgb from "hex-rgb";

import globeImage from "../assets/earth-day.jpg";

const Page = () => {
  const myData = [
    {
      lat: 28.621322361013092,
      lng: 77.20347613099612,
      radius: 40,
      color: '#ffff00',
      speed: 20,
      repeat: 500,
    },
    {
      lat: 25.204849,
      lng: 55.270783,
      radius: 5,
      color: '#00ff33',
      speed: 2,
      repeat: 1000,
    },
  ];

  return (
    <div className="cursor-move">
      <Globe
        height={400}
        width={400}
        globeImageUrl={globeImage}
        ringsData={myData}
        ringMaxRadius="radius"
        ringColor={(ring) => (time) => {
          const { red, green, blue } = hexRgb(ring.color);
          return `rgba(${red},${green},${blue},${Math.sqrt(1 - time)})`;
        }}
        ringPropagationSpeed="speed"
        ringRepeatPeriod="repeat"
        initialRotation={{ latitude: 25, longitude: 55, zoom: 0 }}
      />
    </div>
  );
};

export default Page;
