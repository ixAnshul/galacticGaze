import { Routes, Route } from 'react-router-dom';
import Finished from './routes/finished';
import BasicImage from './routes/basic-image';
import GeojsonPolygon from './routes/geojson-polygon';
import GeojsonHexagon from './routes/geojson-hexagon';
import ArcsData from './routes/arcs-data';
import RingsData from './routes/rings-data';
import HTMLMarker from './routes/html-marker';
import CustomLayer from './routes/custom-layer';

import NotFound from './routes/not-found';
import EarthGlobe from './components/EarthGlobe';
import Home from './components/Home';
// import { Navbaar } from './components/Navbaar';
import APOD from './components/APOD';
import { Navbaar } from './components/Navbaar';

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Navbaar/>
    <Home/>
    <APOD/>
    {/* <EarthGlobe e1={<RingsData/>}/> */}
    </>
  );
};

export default App;
