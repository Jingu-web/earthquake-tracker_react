import { FC } from "react";
import { Map, TileLayer, LayersControl, GeoJSON } from "react-leaflet";

import Earthquakes from "./Earthquakes";
import Legend from "./Legend";
import tilelayers from "../constants/tilelayers";
import { ITilelayer } from "../models/ITilelayer";
import tectonicPlates from "../assets/boundaries.json";
import { tectonicPlatesStyle } from "../constants/tectonicPlatesStyle";

export interface LeafletProps {}

const position: [number, number] = [35.66572, 139.731];

const Leaflet: FC<LeafletProps> = () => {
  return (
    <Map center={position} zoom={3} style={{ height: "100vh" }}>
      <LayersControl position="topright">
        {tilelayers.map(({ name, attribution, url }: ITilelayer) => {
          return (
            <LayersControl.BaseLayer
              key={name}
              name={name}
              checked={name === "Googleストリート" ? true : false}
            >
              <TileLayer attribution={attribution} url={url} />
            </LayersControl.BaseLayer>
          );
        })}
        <LayersControl.Overlay name="Tectonic Plates">
          <GeoJSON
            data={tectonicPlates as GeoJSON.GeoJsonObject}
            style={tectonicPlatesStyle}
          />
        </LayersControl.Overlay>
      </LayersControl>
      <Earthquakes />
      <Legend />
    </Map>
  );
};

export default Leaflet;
