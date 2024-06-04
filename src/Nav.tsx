//import BGGrid from "./BGGrid";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
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
  return (
    <nav className="col-span-3">
      <SideBarGrid numCols={10}>
        <div style={{ gridColumn: "2 / -2", gridRow: "span 1" }}></div>
        {topicList.topics.map((topic, tIndex) => (
          <>
            <SideBarGridElement
              span={2}
              className="text-3xl font-bold"
              content={topic.title}
              onClick={() => onChange(topic.id, 0)}
              selected={currentTopic.id === topic.id}
              key={tIndex}
            />

            {topic.chapters.map((chapter, cIndex) => (
              <SideBarGridElement
                onClick={() => {
                  onChange(topic.id, cIndex);
                }}
                content={chapter.title}
                selected={
                  currentTopic.id === topic.id && currentChapterIndex === cIndex
                }
                span={1}
                key={cIndex}
                className="text-xl"
              />
            ))}
            <div style={{ gridColumn: "2 / -2", gridRow: "span 1" }}></div>
          </>
        ))}
      </SideBarGrid>
    </nav>
  );
}

export function SideBarGrid({
  children,
  numCols,
}: {
  numCols: number;
  children: ReactNode;
}) {
  const container = useRef<HTMLDivElement>(null);
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
            className="border border-main-300 grow aspect-square"
            style={{ width: cellWidth, height: cellWidth }}
          ></div>
        );
      }
    }

    return squares;
  }, [cellWidth, numCols, numRows]);

  return (
    <div
      ref={container}
      className="grid h-screen relative"
      style={{
        gridTemplateColumns: `repeat(${numCols}, ${cellWidth}px)`,
        gridTemplateRows: `repeat(${numRows}, ${cellWidth}px)`,
      }}
    >
      {children}
      <div
        className="absolute h-full w-full top-0 left-0 -z-40 grid"
        style={{
          gridTemplateColumns: `repeat(${numCols}, ${cellWidth}px)`,
          gridTemplateRows: `repeat(${numRows}, ${cellWidth}px)`,
        }}
      >
        {squares.map((square) => square)}
      </div>
    </div>
  );
}

export function SideBarGridElement({
  content,
  onClick,
  selected,
  className,
  span,
}: {
  content: string;
  selected: boolean;
  onClick: () => void;
  className: string;
  span: number;
}) {
  return (
    <div
      className={`flex items-center p-2 relative overflow-hidden ${className}`}
      onClick={onClick}
      style={{ gridColumn: "2 / -2", gridRow: `span ${span}` }}
    >
      {content}
      <div
        className={`absolute top-0 h-full w-full border border-main-300 bg-main-600 -z-20 transition-all duration-300 ${selected ? "left-0" : "-left-full"}`}
      ></div>
      <div
        className={`absolute top-0 h-full w-full border border-main-300 bg-white -z-20 transition-all duration-300 ${!selected ? "left-0" : "left-full"}`}
      ></div>
    </div>
  );
}
