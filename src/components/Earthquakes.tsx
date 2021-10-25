import { FC } from "react";
import { withLeaflet } from "react-leaflet";
import L, { LatLng, Layer } from "leaflet";

import { IFeature } from "../models/IFEature";
import { geojsonMarkerOptions } from "../utils/geojsonMarkerOptions";
import { timeConverter } from "../utils/timeConverter";
import useEarthquakes from "../hooks/useEarthquakes";

export interface EarthquakesProps {
  leaflet: {
    map: any;
  };
}

const Earthquakes: FC<EarthquakesProps> = ({ leaflet }) => {
  const [earthquakes]: any = useEarthquakes();

  const onEachFeature = (feature: IFeature, layer: Layer) => {
    let popupContent = `
            <h3>${feature.properties.title}</h3>
            <b>発生時刻(JST)</b>: ${timeConverter(
              feature.properties.time,
              9
            )} <br>
            <b>震源地</b>: ${feature.properties.place} <br>
            <b>緯度</b>: ${feature.geometry.coordinates[1]} <br>
            <b>経度</b>: ${feature.geometry.coordinates[0]} <br>
            <b>深さ</b>: ${feature.geometry.coordinates[2]} km <br>
            <b>マグニチュード</b>: ${feature.properties.mag} Richter <br>
            <b>詳細</b>: <a href=${
              feature.properties.url
            } target="_blank">詳細はココをクリック</a>
        `;

    if (feature.properties) layer.bindPopup(popupContent);
  };

  L.geoJSON(earthquakes.features, {
    onEachFeature,
    pointToLayer: function (feature: IFeature, latlng: LatLng) {
      const magnitude = feature.properties.mag;
      return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
    },
  }).addTo(leaflet.map);

  return null;
};

export default withLeaflet(Earthquakes);
