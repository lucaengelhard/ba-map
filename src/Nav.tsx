//import BGGrid from "./BGGrid";
import { useEffect, useMemo, useRef, useState } from "react";
import { topic, topicList } from "./content";

export default function Nav({
  onChange,
  currentChapterIndex,
  currentTopic,
}: {
  onChange: (topicID: number, chapterIndex: number) => void;
  currentTopic: topic;
  currentChapterIndex: number;
}) {
  const [numCols] = useState(10);

  const container = useRef<HTMLElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (container.current) {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setContainerSize({
            height: entry.contentRect.height,
            width: entry.contentRect.width,
          });
        }
      });

      observer.observe(container.current);
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const cellWidth = useMemo(() => {
    return Math.floor(containerSize.width / numCols);
  }, [containerSize.width, numCols]);

  const numRows = useMemo(() => {
    return Math.floor(containerSize.height / cellWidth) + 1;
  }, [cellWidth, containerSize.height]);

  const squares = useMemo(() => {
    const squares = [];
    for (let row = 0; row <= numRows; row++) {
      for (let col = 0; col <= numCols; col++) {
        squares.push(
          <div
            key={`${row}-${col}`}
            className="border border-main-600 grow aspect-square"
            style={{ width: cellWidth, height: cellWidth }}
          ></div>
        );
      }
    }

    return squares;
  }, [cellWidth, numCols, numRows]);

  return (
    <nav
      ref={container}
      className="col-span-3 grid h-screen relative"
      style={{
        gridTemplateColumns: `repeat(${numCols}, ${cellWidth}px)`,
        gridTemplateRows: `repeat(${numRows}, ${cellWidth}px)`,
      }}
    >
      <div style={{ gridColumn: "2 / -2", gridRow: "span 1" }}></div>
      {topicList.topics.map((topic) => (
        <>
          <div
            onClick={() => onChange(topic.id, 0)}
            style={{ gridColumn: "2 / -2", gridRow: "span 2" }}
            className={`text-3xl font-bold flex items-center p-2 ${currentTopic.id === topic.id ? "bg-main-600" : "bg-white"}`}
          >
            {topic.title}
          </div>

          {topic.chapters.map((chapter, cIndex) => (
            <div
              onClick={() => {
                onChange(topic.id, cIndex);
              }}
              style={{ gridColumn: "2 / -2", gridRow: "span 1" }}
              className={`flex items-center p-2 ${currentTopic.id === topic.id && currentChapterIndex === cIndex ? "bg-main-600" : "bg-white"}`}
            >
              {chapter.title}
            </div>
          ))}
          <div style={{ gridColumn: "2 / -2", gridRow: "span 1" }}></div>
        </>
      ))}
      <div
        className="absolute h-full w-full top-0 left-0 -z-40 grid opacity-50"
        style={{
          gridTemplateColumns: `repeat(${numCols}, ${cellWidth}px)`,
          gridTemplateRows: `repeat(${numRows}, ${cellWidth}px)`,
        }}
      >
        {squares.map((square) => square)}
      </div>
    </nav>
  );
}
