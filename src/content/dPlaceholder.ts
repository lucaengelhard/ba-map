import { colors } from "./colors";
import { timelineDataPoint } from "./data";
import { pLivingArea } from "./paths/pArea";

export const dPlaceholder: timelineDataPoint[] = [
  {
    id: 0,
    title: "No Data",
    path: pLivingArea,
    year: 2024,
    color: colors.main,
    opacity: 1,
  },
];
