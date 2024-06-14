import { mapDataPoint } from "./data";
import { pFruchtbarerHalbmond, pMedia, pUrartu } from "./paths/pOrigin";

export const dOrigin: mapDataPoint[] = [
  {
    id: 0,
    color: "green",
    title: "Fruchtbarer Halbmond",
    path: pFruchtbarerHalbmond,
  },
  {
    id: 1,
    opacity: 1,
    color: "red",
    title: "Urartu",
    path: pUrartu,
  },
  {
    id: 2,
    color: "blue",
    title: "Medisches Reich",
    path: pMedia,
  },
];
