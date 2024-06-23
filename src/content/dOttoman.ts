import { timelineDataPoint } from "./data";
import {
  pOttoman1359,
  pOttoman1451,
  pOttoman1481,
  pOttoman1520,
  pOttoman1566,
  pOttomanOrigin,
} from "./paths/pOttoman";

const colorOttoman = "#522F88";

export const dOttoman: timelineDataPoint[] = [
  {
    id: 0,
    color: colorOttoman,

    title: "Ursprungsgebiet",
    year: 1300,
    path: pOttomanOrigin,
  },
  {
    id: 1,
    title: "",
    color: colorOttoman,
    year: 1359,
    path: pOttoman1359,
  },
  {
    id: 2,
    title: "",
    color: colorOttoman,
    year: 1451,
    path: pOttoman1451,
  },
  {
    id: 3,
    title: "",
    color: colorOttoman,
    year: 1481,
    path: pOttoman1481,
  },
  {
    id: 4,
    title: "",
    color: colorOttoman,
    year: 1520,
    path: pOttoman1520,
  },
  {
    id: 5,
    color: colorOttoman,
    title: "Größte Ausdehnung",
    year: 1566,
    path: pOttoman1566,
  },
];
