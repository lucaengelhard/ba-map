import { mapDataPoint } from "./data";
import { pLivingArea, pAreamajor, pCities } from "./paths/pArea";

export const dDemography: mapDataPoint[] = [
  {
    id: 0,
    title: "Kurdisches Siedlungsgebiet",
    color: "#E74322",
    path: pLivingArea,
  },
  {
    id: 1,
    title: "Gebiet mit mehr als 75% kurdischer Bevölkerung",
    path: pAreamajor,
    color: "yellow",
    opacity: 1,
  },
  {
    id: 2,
    title: "Städte mit mehr als 50% kurdischer Bevölkerung",
    path: pCities,
    color: "green",
    opacity: 1,
  },
];
