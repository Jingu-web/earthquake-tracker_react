const tilelayers = [
  {
    name: "モノクロ",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",
  },
  {
    name: "シンプル",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    name: "Googleストリート",
    attribution: "&copy; Google",
    url: "http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  },
  {
    name: "Googleサテライト",
    attribution: "&copy; Google",
    url: "http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  },
];

export default tilelayers;
