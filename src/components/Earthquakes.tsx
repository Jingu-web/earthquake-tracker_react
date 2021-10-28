import { FC } from "react";
import { connect } from "react-redux";
import { withLeaflet } from "react-leaflet";
import L, { LatLng } from "leaflet";

import { IFeature } from "../models/IFEature";
import { geojsonMarkerOptions } from "../utils/geojsonMarkerOptions";
import { onEachFeature } from "../utils/onEachFeature";
import useEarthquakes from "../hooks/useEarthquakes";

export interface EarthquakesProps {
  leaflet: {
    map: any;
  };
  starttime: string;
  endtime: string;
}

let geojson: any;

const Earthquakes: FC<EarthquakesProps> = ({
  leaflet: { map },
  starttime,
  endtime,
}) => {
  const earthquakes = useEarthquakes(starttime, endtime);

  if (map.hasLayer(geojson)) map.removeLayer(geojson);

  geojson = L.geoJSON(earthquakes.features, {
    onEachFeature,
    pointToLayer: (feature: IFeature, latlng: LatLng) => {
      const magnitude = feature.properties.mag;
      return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
    },
  }).addTo(map);

  return null;
};

const mapStateToProps = (state: any) => ({
  starttime: state.earthquakes.starttime,
  endtime: state.earthquakes.endtime,
});

export default withLeaflet(connect(mapStateToProps)(Earthquakes));
