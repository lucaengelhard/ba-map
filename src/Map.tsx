import { useEffect, useMemo, useState } from "react";
import Mapbase from "./Mapbase";
import { mapDataPoint } from "./content/data";
import { interpolate } from "flubber";
import { chapter, topic } from "./content";

export default function Map({
  selected,
  base,
  currentChapter,
  topic,
}: {
  selected: number | number[];
  base?: boolean;
  topic: topic;
  currentChapter: chapter;
}) {
  const options = useMemo(
    () => currentChapter.interactionData,
    [currentChapter.interactionData]
  );

  return (
    <div className="fixed inset-0">
      {base ? <Mapbase /> : undefined}
      {typeof selected === "number" ? (
        <TimelineMap options={options} selected={selected} />
      ) : (
        <FilterMap options={options} selected={selected} />
      )}

      <div className="fixed h-screen w-screen inset-0">
        <MapInfo
          currentChapter={currentChapter}
          selected={selected}
          topic={topic}
        />
      </div>
      <div className="fixed h-screen w-screen inset-0 rotate-180">
        <MapInfo
          currentChapter={currentChapter}
          selected={selected}
          topic={topic}
        />
      </div>
    </div>
  );
}

function MapInfo({
  currentChapter,
  selected,
  topic,
}: {
  topic: topic;
  currentChapter: chapter;
  selected: number | number[];
}) {
  return (
    <div className="p-4 bg-main absolute bottom-48 m-4">
      <h1>{topic.title}</h1>
      <h2>{currentChapter.title}</h2>
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
        {options.map((option) => (
          <path
            style={{
              opacity: selected.includes(option.id) ? 0.5 : 0.01,
              transition: "opacity 0.5s",
            }}
            d={option.path}
          ></path>
        ))}
      </svg>
    </div>
  );
}
