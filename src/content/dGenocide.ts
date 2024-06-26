import { colors } from "./colors";
import { mapDataPoint } from "./data";
import { pLivingArea } from "./paths/pArea";
import { pGenoicde } from "./paths/pGenocide";

export const dGenocide: mapDataPoint[] = [
  {
    id: 0,
    title: "Kurdisches Siedlungsgebiet",
    path: pLivingArea,
    opacity: 1,
    color: colors.main,
  },
  { id: 1, title: "Schauplätze", path: pGenoicde, opacity: 1, color: "black" },
];
