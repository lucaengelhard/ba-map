import { mapDataPoint } from "../content/data";
import { interpolate } from "flubber";
type Tdata = {
  current: mapDataPoint;
  selected: mapDataPoint;
};

let path = "";

self.onmessage = (e: MessageEvent<Tdata>) => {
  if (path.length === 0) {
    path = e.data.current.path;
  }

  const interpolator = interpolate(path, e.data.selected.path);

  const start = Date.now();
  const duration = 1000;
  const updateInterval = 20;
  path = e.data.current.path;

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
