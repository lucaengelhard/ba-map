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
  },
  {
    id: 1,
    title: "Im Vertrag von Sévres vorgesehenes kurdisches Gebiet",
    year: 1920,
    path: pSevres,
  },
  {
    id: 2,
    title: "Vertrag von Lausanne",
    year: 1923,
    path: pLausanne,
  },
  {
    id: 5,
    title:
      "Von kurdischer Seite beanspruchtes Gebiet gemäß einer zur ersten UN-Sitzung in San Francisco eingereichten Petition",
    year: 1945,
    path: pSanFran,
  },
  {
    id: 9,
    title: "Kurdische Demokratische Republik von Mahabad",
    year: 1946,
    path: pMahabad,
  },
];
