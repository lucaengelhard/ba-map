import { mapDataPoint } from "../content/data";
import { interpolate } from "flubber";
type Tdata = {
  current: mapDataPoint;
  selected: mapDataPoint;
};

self.onmessage = (e: MessageEvent<Tdata>) => {
  const interpolator = interpolate(e.data.current.path, e.data.selected.path);

  const start = Date.now();
  const duration = 1000;
  const updateInterval = 20;
  let path = e.data.current.path;

  const interval = setInterval(() => {
    const elapsed = Date.now() - start;
    if (elapsed <= duration) {
      path = interpolator(elapsed / duration);
      self.postMessage({ finished: false, path });
    } else {
      clearInterval(interval);
      self.postMessage({ finished: true, path });
    }
  }, updateInterval);
};
