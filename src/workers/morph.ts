import {
  dedicatedAnimationDataPoint,
  timelineDataPoint,
} from "../content/data";
import { interpolate } from "flubber";
type Tdata = {
  current: timelineDataPoint | dedicatedAnimationDataPoint;
  selected: timelineDataPoint | dedicatedAnimationDataPoint;
};

let path = "";
let instances = 0;

self.onmessage = (e: MessageEvent<Tdata>) => {
  instances++;
  const index = instances;
  if (path.length === 0) {
    path = e.data.current.path;
  }

  const interpolator = interpolate(path, e.data.selected.path);

  const start = Date.now();
  const duration = "target" in e.data.selected ? 0 : 1000;
  const updateInterval = 20;
  path = e.data.current.path;

  const interval = setInterval(() => {
    if (instances > index) {
      clearInterval(interval);
      return;
    }
    const elapsed = Date.now() - start;
    if (elapsed <= duration) {
      path = interpolator(elapsed / duration);
      self.postMessage({ finished: false, path });
    } else {
      clearInterval(interval);
      path = interpolator(1);
      self.postMessage({ finished: true, path });
    }
  }, updateInterval);
};
