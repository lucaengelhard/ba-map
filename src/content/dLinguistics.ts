import { colors } from "./colors";
import { mapDataPoint } from "./data";
import {
  pGurani,
  pKurmanji,
  pLingMixed,
  pSorani,
  pZaza,
} from "./paths/pLinguistics";

export const dLinguistics: mapDataPoint[] = [
  { id: 0, title: "Kurmânji", path: pKurmanji, color: "#e74322", opacity: 1 },
  { id: 1, title: "Sorâni", path: pSorani, color: "#c12020", opacity: 1 },
  { id: 2, title: "Zâzâ", path: pZaza, color: "#135c79", opacity: 1 },
  { id: 3, title: "Gurâni", path: pGurani, color: colors.blue, opacity: 1 },
  { id: 4, title: "Mixed", path: pLingMixed, color: colors.green, opacity: 1 },
];
