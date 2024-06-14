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
    color: "#E74322",
    path: pLivingArea,
  },
  {
    id: 3,
    title: "Heutiges irakisches Gebiet unter kurdischer Kontrolle",
    path: pTodayIraq,
  },
  {
    id: 4,
    title: "Heutige iranische Provinz Kordestan",
    path: pTodayIran,
  },
  {
    id: 5,
    title: "Autonome Region Kurdistan im heutigen Irak",
    path: pTodayIraqOfficial,
  },
  {
    id: 6,
    title: "Autonome Administration von Nord- und Ostsyrien (Rojava)",
    path: pRojava,
  },
];
