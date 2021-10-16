import { FC } from "react";
import { Map, TileLayer } from "react-leaflet";

import Earthquakes from "./Earthquakes";
import Legend from "./Legend";

export interface LeafletProps {}

const position: [number, number] = [35.66572, 139.731];

const Leaflet: FC<LeafletProps> = () => {
  return (
    <Map center={position} zoom={3} style={{ height: "100vh" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Earthquakes />
      <Legend />
    </Map>
  );
};

export default Leaflet;
