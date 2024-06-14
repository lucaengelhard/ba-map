import { mapDataPoint } from "./data";
import { pLivingArea } from "./paths/pArea";
import { pFuerstentuemer } from "./paths/pFuerstentuemer";

export const dFuerstentuemer: mapDataPoint[] = [
  {
    id: 0,
    outline: 2,
    outlineColor: "#e74322",
    title: "Kurdische Fürstentümer",
    path: pFuerstentuemer,
  },
  {
    id: 1,
    title: "Kurdisches Siedlungsgebiet",
    color: "#E74322",
    opacity: 0.4,
    path: pLivingArea,
  },
];
