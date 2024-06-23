import { colors } from "./colors";
import { mapDataPoint } from "./data";
import { pLivingArea, pAreamajor, pCities } from "./paths/pArea";

export const dDemography: mapDataPoint[] = [
  {
    id: 0,
    title: "Kurdisches Siedlungsgebiet",
    opacity: 0.5,
    outline: 3,
    outlineColor: "#c12020",
    color: colors.main,
    path: pLivingArea,
  },
  {
    id: 1,
    title: "Gebiet mit mehr als 75% kurdischer Bevölkerung",
    path: pAreamajor,
    opacity: 1,
    outline: 3,
    outlineColor: "#c12020",
    color: colors.main,
  },
  {
    id: 2,
    title: "Städte mit mehr als 50% kurdischer Bevölkerung",
    path: pCities,
    color: "black",
    opacity: 1,
  },
];
