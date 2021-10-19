export interface IFeature {
  geometry: any;
  properties: {
    mag: number;
    place: string;
    time: Date;
    url: string;
    title: string;
  };
}
