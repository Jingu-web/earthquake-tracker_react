import { timeConverter } from "../utils/timeConverter";
import { IFeature } from "../models/IFEature";
import { Layer } from "leaflet";

export const onEachFeature = (feature: IFeature, layer: Layer) => {
  const {
    properties: { title, place, time, mag, url },
    geometry: { coordinates },
  } = feature;

  let popupContent = `
  <h3>${title}</h3>
  <b>発生時刻(GMC+9)</b>: ${timeConverter(time, 9)} <br>
  <b>震源地</b>: ${place} <br>
  <b>緯度</b>: ${coordinates[1]} <br>
  <b>経度</b>: ${coordinates[0]} <br>
  <b>深さ</b>: ${coordinates[2]} km <br>
  <b>マグニチュード</b>: ${mag}<br>
  <a href=${url} target="_blank">より詳細な情報はココをクリック</a>
    `;

  layer.bindPopup(popupContent);
};
