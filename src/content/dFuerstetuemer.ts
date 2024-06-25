import { mapDataPoint } from "./data";

import {
  pBaban,
  pBayazid,
  pBitlis,
  pBokhti,
  pDozhik,
  pHakkari,
  pJelali,
  pMilan,
  pSoran,
  pTasini,
} from "./paths/pFuerstentuemer";

import chroma from "chroma-js";

export const dFuerstentuemer: mapDataPoint[] = [
  {
    id: 0,

    opacity: 1,

    title: "Baban",
    path: pBaban,
  },
  {
    id: 1,

    outline: 3,
    opacity: 1,
    title: "Bayazid",
    path: pBayazid,
  },
  {
    id: 2,

    opacity: 1,

    title: "Bitlis",
    path: pBitlis,
  },
  {
    id: 3,

    opacity: 1,

    title: "Bokhti",
    path: pBokhti,
  },
  {
    id: 4,

    opacity: 1,

    title: "Dozhik",
    path: pDozhik,
  },
  {
    id: 5,

    opacity: 1,

    title: "Hakkari",
    path: pHakkari,
  },
  {
    id: 6,

    opacity: 1,

    title: "Jelali",
    path: pJelali,
  },
  {
    id: 7,

    opacity: 1,

    title: "Milan",
    path: pMilan,
  },
  {
    id: 8,

    opacity: 1,

    title: "Soran",
    path: pSoran,
  },
  {
    id: 9,

    opacity: 1,

    title: "Tasini",
    path: pTasini,
  },
];

const colorScale = chroma
  .scale(["#e74322", "#6122e8"])
  .mode("lch")
  .colors(dFuerstentuemer.length);

export const dFuerstentuemerColor = dFuerstentuemer.map((entry, index) => {
  return {
    ...entry,
    color: colorScale[index],
    outline: 2,
    outlineColor: chroma(colorScale[index]).darken(2).hex(),
  };
});
