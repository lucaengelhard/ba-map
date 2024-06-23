import { colors } from "./colors";
import { mapDataPoint } from "./data";
import { pFruchtbarerHalbmond, pMedia, pUrartu } from "./paths/pOrigin";

export const dOrigin: mapDataPoint[] = [
  {
    id: 0,
    opacity: 1,
    color: "#135c79",
    title: "Fruchtbarer Halbmond",
    path: pFruchtbarerHalbmond,
  },
  {
    id: 1,
    opacity: 0.8,
    color: colors.blue,
    title: "Medisches Reich",
    path: pMedia,
  },
  {
    id: 2,
    opacity: 0.9,
    color: colors.lightblue,
    title: "Urartu",
    path: pUrartu,
  },
];
