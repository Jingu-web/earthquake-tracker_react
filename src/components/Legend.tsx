import L from "leaflet";
import { withLeaflet } from "react-leaflet";

import { circleMarkerColor } from "../utils/circleMarkerColor";
import "../styles/Legend.css";
import { FC } from "react";

export interface LegendProps {
  leaflet: {
    map: any;
  };
}

const Legend: FC<LegendProps> = ({ leaflet }) => {
  const legend = new L.Control({ position: "bottomright" });

  legend.onAdd = (map: any) => {
    console.log(map);
    let div = L.DomUtil.create("div", "info legend"),
      grades = [0, 1, 2, 3, 5, 7],
      labels = [],
      from,
      to;

    labels.push("<h4>Magnitude</h4>");

    for (let i = 0; i < grades.length; i++) {
      from = grades[i];
      to = grades[i + 1];

      labels.push(
        '<i style="background:' +
          circleMarkerColor(from + 1) +
          '"></i> ' +
          from +
          (to ? "&ndash;" + to : "+")
      );
    }

    div.innerHTML = labels.join("<br>");
    return div;
  };

  legend.addTo(leaflet.map);

  return null;
};

export default withLeaflet(Legend);
