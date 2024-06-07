export type mapDataPoint = {
  id: number;
  title: string;
  path: string;
  mask?: string;
  color?: string;
  opacity?: number;
  outline?: boolean;
};

export type timelineDataPoint = mapDataPoint & { year: number };

export type dedicatedAnimationDataPoint = timelineDataPoint & {
  path: string;
  target: mapDataPoint;
};

export type interactionData = mapDataPoint | timelineDataPoint;

export function combineData(
  dataset1: timelineDataPoint[],
  dataset2: timelineDataPoint[]
): timelineDataPoint[];
export function combineData(
  dataset1: timelineDataPoint[],
  dataset2: mapDataPoint[]
): mapDataPoint[];
export function combineData(
  dataset1: mapDataPoint[],
  dataset2: timelineDataPoint[]
): mapDataPoint[];
export function combineData(
  dataset1: mapDataPoint[],
  dataset2: mapDataPoint[]
): mapDataPoint[];
export function combineData(
  dataset1: mapDataPoint[] | timelineDataPoint[],
  dataset2: mapDataPoint[] | timelineDataPoint[]
): mapDataPoint[] {
  return [...dataset1, ...dataset2];
}
