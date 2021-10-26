import { FC } from "react";
import { connect } from "react-redux";
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
  query: string;
}

let geojson: any;

const Earthquakes: FC<EarthquakesProps> = ({ leaflet, query }) => {
  const earthquakes = useEarthquakes(query);

  const onEachFeature = (feature: IFeature, layer: Layer) => {
    let popupContent = `
    <h3>${feature.properties.title}</h3>
    <b>発生時刻(JST)</b>: ${timeConverter(feature.properties.time, 9)} <br>
    <b>震源地</b>: ${feature.properties.place} <br>
    <b>緯度</b>: ${feature.geometry.coordinates[1]} <br>
    <b>経度</b>: ${feature.geometry.coordinates[0]} <br>
    <b>深さ</b>: ${feature.geometry.coordinates[2]} km <br>
    <b>マグニチュード</b>: ${feature.properties.mag}<br>
    <a href=${
      feature.properties.url
    } target="_blank">より詳細な情報はココをクリック</a>
      `;

    if (feature.properties) layer.bindPopup(popupContent);
  };

  if (leaflet.map.hasLayer(geojson)) leaflet.map.removeLayer(geojson);

  geojson = L.geoJSON(earthquakes.features, {
    onEachFeature,
    pointToLayer: function (feature: IFeature, latlng: LatLng) {
      const magnitude = feature.properties.mag;
      return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
    },
  }).addTo(leaflet.map);

  return null;
};

const mapStateToProps = (state: any) => ({
  query: state.earthquakes.query,
});

export default withLeaflet(connect(mapStateToProps)(Earthquakes));
