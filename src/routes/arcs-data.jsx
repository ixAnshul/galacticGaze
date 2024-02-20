import Globe from 'react-globe.gl';

import globeImage from '../assets/earth-dark.jpg';

const Page = () => {
  const myData = [
    {
      startLat: 25.204849,
      startLng: 55.270783,
      endLat: 28.621322361013092,
      endLng: 77.20347613099612,
      color: ['#00ff33', '#ff0000'],
      stroke: 1,
      gap: 0.02,
      dash: 0.02,
      scale: 0.3,
      time: 2000,
    }
  ];

  return (
    <div className='cursor-move'>
      <Globe
      height={300}
      width={300}
        globeImageUrl={globeImage}
        arcsData={myData}
        arcColor='color'
        arcStroke='stroke'
        arcDashGap='gap'
        arcDashLength='dash'
        arcAltitudeAutoScale='scale'
        arcDashAnimateTime='time'
      />
    </div>
  );
};

export default Page;
