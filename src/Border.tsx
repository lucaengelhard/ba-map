import { useEffect, useState } from "react";
import { mapDataPoint } from "./content/data";
import { interpolate } from "flubber";

export default function Border({
  options,
  selected,
}: {
  options: mapDataPoint[];
  selected: number | number[];
}) {
  return (
    <div className="fixed inset-0">
      {typeof selected === "number" ? (
        <TimelineMap options={options} selected={selected} />
      ) : (
        <FilterMap options={options} selected={selected} />
      )}
    </div>
  );
}

function TimelineMap({
  options,
  selected,
}: {
  options: mapDataPoint[];
  selected: number;
}) {
  const [current, setCurrent] = useState(options[selected]);
  const [path, setPath] = useState(current.path);

  useEffect(() => {
    const interval = morph(current, options[selected], 1000, 20);
    return () => clearInterval(interval);
  }, [current, options, selected]);

  function morph(
    currentObj: mapDataPoint,
    targetObj: mapDataPoint,
    duration: number,
    updateInterval: number
  ) {
    const interpolator = interpolate(currentObj.path, targetObj.path);
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      if (elapsed < duration) {
        setPath(interpolator(elapsed / duration));
      } else {
        setCurrent(targetObj);
        setPath(targetObj.path);
        clearInterval(interval);
      }
    }, updateInterval);

    return interval;
  }

  return (
    <div className="fixed inset-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        <path d={path}></path>
      </svg>
    </div>
  );
}

function FilterMap({
  options,
  selected,
}: {
  options: mapDataPoint[];
  selected: number[];
}) {
  return (
    <div className="fixed inset-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        {selected.map((index) => (
          <path d={options[index].path}></path>
        ))}
      </svg>
    </div>
  );
}
