import { mapDataPoint } from "./data";
import {
  pAlevism,
  pChristianity,
  pJudaism,
  pShiism,
  pSunnism,
  pYarsanism,
  pYezidism,
} from "./paths/pReligion";

import chroma from "chroma-js";

export const dReligion: mapDataPoint[] = [
  {
    id: 0,
    title: "Sunnismus",
    path: pSunnism,
  },
  {
    id: 1,
    title: "Schiismus",
    path: pShiism,
  },
  {
    id: 2,
    title: "Alevismus",
    path: pAlevism,
  },
  {
    id: 3,
    title: "Yarsanismus",
    path: pYarsanism,
  },
  {
    id: 4,
    title: "Jesidentum",
    path: pYezidism,
  },
  {
    id: 5,
    title: "Christentum",
    path: pChristianity,
  },
  {
    id: 6,
    title: "Judentum",
    path: pJudaism,
  },
];

const colorScale = chroma
  .scale(["#8c0ba0", "#0ba02b"])
  .mode("lch")
  .colors(dReligion.length);

export const dReligionColor = dReligion.map((entry, index) => {
  return { ...entry, color: colorScale[index] };
});
