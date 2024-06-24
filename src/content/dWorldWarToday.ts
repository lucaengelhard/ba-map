import { colors } from "./colors";
import { timelineDataPoint } from "./data";
import {
  pLausanne,
  pMahabad,
  pSanFran,
  pSevres,
  pWWParis,
} from "./paths/pWorldWarToday";

export const dWorldWarToday: timelineDataPoint[] = [
  {
    id: 0,
    title:
      "in der Pariser Friedenskonferenz von kurdischer Seite beanspruchtes Gebiet",
    year: 1919,
    path: pWWParis,
    color: colors.main,
  },
  {
    id: 1,
    title: "Im Vertrag von Sévres vorgesehenes kurdisches Gebiet",
    year: 1920,
    path: pSevres,
    color: colors.main,
  },
  {
    id: 2,
    title: "Vertrag von Lausanne",
    year: 1923,
    path: pLausanne,
    color: colors.main,
  },
  {
    id: 5,
    title:
      "Beanspruchtes Gebiet gemäß einer zur ersten UN-Sitzung eingereichten Petition",
    year: 1945,
    path: pSanFran,
    color: colors.main,
  },
  {
    id: 9,
    title: "Kurdische Demokratische Republik von Mahabad",
    year: 1946,
    path: pMahabad,
    color: colors.main,
  },
];
