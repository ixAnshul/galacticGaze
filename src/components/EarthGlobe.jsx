import React from "react";
import RingsData from '../routes/rings-data';
import ArcsData from '../routes/arcs-data';
const EarthGlobe = (props) => {
  return (
    <div>
      <div className="w-full flex flex-row justify-around flex-wrap align-middle">
        {/* {props.RingData} */}
        <div className="rounded-full overflow-hidden flex justify-center align-center"
        style={{
            height: 400
        }}
        >
        <RingsData />
        </div>
        <ArcsData />
      </div>
    </div>
  );
};

export default EarthGlobe;
