import { colors } from "./colors";
import { mapDataPoint } from "./data";
import { pLivingArea, pAreamajor, pCitiesStars } from "./paths/pArea";

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
    path: pCitiesStars,
    color: "black",
    opacity: 1,
    icon: "M331.25 280.79 515.02 97.02l-20.9-20.9-183.77 183.77V0h-29.56v259.89L97.02 76.12l-20.9 20.9 183.77 183.77H0v29.56h259.89L76.12 494.12l20.9 20.9 183.77-183.77v259.89h29.56V331.25l183.77 183.77 20.9-20.9-183.77-183.77h259.89v-29.56H331.25z",
    iconViewbox: "0 0 591.14 591.14",
  },
];
