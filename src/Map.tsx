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
    <div className="p-4  absolute top-2/3 m-4">
      <h1 className="text-[2rem] font-bold text-main">{topic.title}</h1>
      <h2 className="text-main ">{currentChapter.title}</h2>
      {typeof selected !== "number" ? (
        currentChapter.interactionData.map((el, index) => (
          <MapInfoElement
            key={index}
            datapoint={el}
            selected={selected.includes(el.id)}
          />
        ))
      ) : (
        <div
          style={{
            maxWidth: "20vw",
          }}
        >
          {
            currentChapter.interactionData.find(
              (point) => point.id === selected
            )?.title
          }
        </div>
      )}
    </div>
  );
}

function MapInfoElement({
  datapoint,
  selected,
}: {
  selected: boolean;
  datapoint: mapDataPoint;
}) {
  return (
    <div
      style={{
        opacity: selected ? 1 : 0.5,
        maxWidth: "20vw",
        whiteSpace: "nowrap",
        overflow: "clip",
        textOverflow: "ellipsis",
      }}
    >
      {datapoint.title}
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
  const [color, setColor] = useState<string>();

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
    if (targetObj === undefined) return;
    const interpolator = interpolate(currentObj.path, targetObj.path);
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      if (elapsed < duration) {
        setPath(interpolator(elapsed / duration));
      } else {
        setCurrent(targetObj);
        setPath(targetObj.path);
        setColor(targetObj.color);
        clearInterval(interval);
      }
    }, updateInterval);

    return interval;
  }

  return (
    <div className="fixed inset-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        <path fill={color} d={path}></path>
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
            fill={option.color}
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
