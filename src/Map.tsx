import { useEffect, useMemo, useState } from "react";
import Mapbase from "./Mapbase";
import { mapDataPoint } from "./content/data";

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

  const selectedOption = useMemo(() => {
    if (typeof selected !== "number") return;
    return options.find((option) => option.id === selected) ?? options[0];
  }, [options, selected]);

  return (
    <div className="fixed inset-0">
      {typeof selected === "number" ? (
        <TimelineMap selected={selectedOption ?? options[0]} />
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
      {base ? <Mapbase /> : undefined}
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
      <h1 className="text-[2rem] font-bold text-main-600">{topic.title}</h1>
      <h2 className="text-main-600 ">{currentChapter.title}</h2>
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

function TimelineMap({ selected }: { selected: mapDataPoint }) {
  const [current, setCurrent] = useState(selected);
  const [path, setPath] = useState(current.path);
  const color = useMemo(() => {
    return selected.color;
  }, [selected.color]);

  const morphWorker = useMemo(
    () =>
      new Worker(new URL("./workers/morph.ts", import.meta.url), {
        type: "module",
      }),
    []
  );

  useEffect(() => {
    morphWorker.postMessage({ current, selected });
    morphWorker.onmessage = (
      e: MessageEvent<{ finished: true; path: string }>
    ) => {
      setPath(e.data.path);
      if (e.data.finished) {
        setCurrent(selected);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, morphWorker]);

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
            stroke={option.outline ? option.color ?? "grey" : "none"}
            fill={!option.outline ? option.color : "none"}
            style={{
              opacity: selected.includes(option.id)
                ? option.opacity !== undefined
                  ? option.opacity
                  : 0.5
                : 0.01,
              transition: "opacity 0.5s",
            }}
            d={option.path}
          ></path>
        ))}
      </svg>
    </div>
  );
}
