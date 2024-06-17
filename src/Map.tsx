import { useEffect, useMemo, useState } from "react";
import Mapbase from "./Mapbase";
import {
  dedicatedAnimationDataPoint,
  mapDataPoint,
  timelineDataPoint,
} from "./content/data";

import { chapter, topic } from "./content";
import MapMask from "./MapMask";
import ContextMap from "./ContextMap";

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
    <div className="fixed inset-0 bg-white rotate-180">
      {" "}
      <div className="fixed inset-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
          <mask id="mapMask">
            <MapMask />
          </mask>
          {/**<g mask="url(#mapMask)"> */}
          <g mask="url(#mapMask)">
            {selectedOption?.mask && (
              <mask id="mainMask">
                <rect x="0" width="1920" height="1080" fill="#000" />
                <path fill="#fff" d={selectedOption.mask}></path>
              </mask>
            )}
            {currentChapter.background && (
              <g>
                <path
                  stroke={
                    currentChapter.backgroundOutline
                      ? currentChapter.backgroundColor
                      : undefined
                  }
                  strokeWidth={currentChapter.backgroundOutline}
                  fill={
                    !currentChapter.backgroundOutline
                      ? currentChapter.backgroundColor
                      : "transparent"
                  }
                  opacity={currentChapter.backgroundOpacity}
                  d={currentChapter.background}
                ></path>
              </g>
            )}
            <g>
              {typeof selected === "number" ? (
                <TimelineMap
                  selected={
                    (selectedOption ?? options[0]) as
                      | timelineDataPoint
                      | dedicatedAnimationDataPoint
                  }
                />
              ) : (
                <FilterMap options={options} selected={selected} />
              )}
            </g>
          </g>
        </svg>
      </div>
      <div className="fixed h-screen w-screen inset-0">
        <MapInfo
          currentChapter={currentChapter}
          selected={selected}
          topic={topic}
        />
      </div>
      <div
        className="fixed border-main-600 border"
        style={{
          top: "4rem",
          right: "4rem",
          width: "22rem",
          aspectRatio: "16/9",
        }}
      >
        <ContextMap className="w-full h-full" />
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
    <div className="p-4 absolute my-4" style={{ top: "45rem", left: "8.5rem" }}>
      <h1 className="font-bold text-main-600" style={{ fontSize: "3rem" }}>
        {topic.title}
      </h1>
      <h2 className="text-main-600 text-[2rem]">{currentChapter.title}</h2>
      <div style={{ fontSize: "2rem" }}>
        {typeof selected !== "number" ? (
          <div
            style={{
              display: currentChapter.small ? "grid" : undefined,
              gridTemplateColumns: "1fr 1fr",
              marginTop: "0.5rem",
            }}
          >
            {currentChapter.interactionData.map((el, index) => (
              <MapInfoElement
                key={index}
                datapoint={el}
                selected={selected.includes(el.id)}
              />
            ))}
          </div>
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
        display: "grid",
        gridTemplateColumns: "1.5rem 1fr",
        marginBottom: "0.5rem",
        gap: "0.5rem",
        alignItems: "center",
      }}
    >
      <div
        style={{
          aspectRatio: "1/1",
          backgroundColor: datapoint.color ?? "grey",
        }}
      ></div>
      <div>{datapoint.title}</div>
    </div>
  );
}

function TimelineMap({
  selected,
}: {
  selected: timelineDataPoint | dedicatedAnimationDataPoint;
}) {
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
        morphWorker.onmessage = null;
        if ("target" in selected) {
          morphWorker.postMessage({
            current: selected,
            selected: selected.target,
          });
          morphWorker.onmessage = (
            e2: MessageEvent<{ finished: true; path: string }>
          ) => {
            setPath(e2.data.path);
            if (e2.data.finished) {
              setCurrent(selected);
            }
          };
        }
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, morphWorker]);

  return (
    <>
      {"background" in selected && (
        <path d={selected.background} fill={selected.backgroundColor}></path>
      )}
      <path
        mask={selected.mask && "url(#mainMask)"}
        stroke={selected.outlineColor ? selected.outlineColor : selected.color}
        strokeWidth={selected.outline}
        fill={color}
        d={path}
        style={{ transition: "fill 0.3s" }}
      ></path>
    </>
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
    <>
      {options.map((option) => (
        <path
          stroke={option.outlineColor ? option.outlineColor : option.color}
          strokeWidth={option.outline}
          fill={option.color}
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
    </>
  );
}
