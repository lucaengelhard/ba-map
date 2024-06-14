import { dedicatedAnimationDataPoint, timelineDataPoint } from "./data";
import {
  PersiaAlexanderTarget,
  pPersia539,
  pPersia547,
  pPersiaAlexanderBG,
  pPersiaMask,
  pPersiaMedia,
  pPersiaOrigin,
} from "./paths/pEmpires";

export const dEmpires: Array<timelineDataPoint | dedicatedAnimationDataPoint> =
  [
    {
      id: 0,
      color: "#e74322",
      title: "Ursprung des Persischen Reichs",
      year: -559,
      path: pPersiaOrigin,
    },
    {
      id: 1,
      color: "#e74322",
      title: "Erorberung des Medischen Reichs durch die Perser",
      year: -550,
      path: pPersiaMedia,
    },
    {
      id: 2,
      color: "#e74322",
      title: "",
      year: -547,
      path: pPersia547,
    },
    {
      id: 3,
      title: "",
      color: "#e74322",
      year: -539,
      path: pPersia539,
    },
    {
      id: 4,
      outlineColor: "white",
      outline: 10,
      color: "green",
      mask: pPersiaMask,
      title: "Eroberung des Persischen Reichs durch Alexander den Großen",
      year: -331,
      path: "M30.35,203.6c0,2.65-2.15,4.8-4.8,4.8s-4.8-2.15-4.8-4.8,2.15-3.15,4.8-3.15,4.8.5,4.8,3.15Z",
      background: pPersiaAlexanderBG,
      backgroundColor: "#e74322",
      target: {
        id: 5,
        title: "",
        path: PersiaAlexanderTarget,
      },
    },
  ];
