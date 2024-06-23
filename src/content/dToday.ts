import { colors } from "./colors";
import { mapDataPoint } from "./data";
import {
  pLivingArea,
  pRojava,
  pTodayIran,
  pTodayIraq,
  pTodayIraqOfficial,
} from "./paths/pArea";

export const dToday: mapDataPoint[] = [
  {
    id: 0,
    title: "Kurdisches Siedlungsgebiet",
    opacity: 0.7,
    outline: 3,
    outlineColor: "#c12020",
    color: colors.main,
    path: pLivingArea,
  },
  {
    id: 1,
    title: "Heutiges irakisches Gebiet unter kurdischer Kontrolle",
    path: pTodayIraq,
    color: "#424242",
    opacity: 0.8,
  },
  {
    id: 2,
    title: "Heutige iranische Provinz Kordestan",
    path: pTodayIran,
    color: "#626361",
    opacity: 0.8,
  },
  {
    id: 3,
    title: "Autonome Region Kurdistan im heutigen Irak",
    path: pTodayIraqOfficial,
    color: "#757575",
    opacity: 0.8,
  },
  {
    id: 4,
    title: "Autonome Administration von Nord- und Ostsyrien (Rojava)",
    path: pRojava,
    color: "#9e9d9d",
    opacity: 0.8,
  },
];
