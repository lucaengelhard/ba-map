import { timelineDataPoint } from "./data";
import {
  pOttoman1359,
  pOttoman1451,
  pOttoman1481,
  pOttoman1520,
  pOttoman1566,
  pOttomanOrigin,
} from "./paths/pOttoman";

export const dOttoman: timelineDataPoint[] = [
  {
    id: 0,
    color: "#e74322",

    title: "Ursprungsgebiet",
    year: 1300,
    path: pOttomanOrigin,
  },
  {
    id: 1,
    title: "",
    color: "#e74322",
    year: 1359,
    path: pOttoman1359,
  },
  {
    id: 2,
    title: "",
    color: "#e74322",
    year: 1451,
    path: pOttoman1451,
  },
  {
    id: 3,
    title: "",
    color: "#e74322",
    year: 1481,
    path: pOttoman1481,
  },
  {
    id: 4,
    title: "",
    color: "#e74322",
    year: 1520,
    path: pOttoman1520,
  },
  {
    id: 5,
    color: "#e74322",
    title: "Größte Ausdehnung",
    year: 1566,
    path: pOttoman1566,
  },
];
