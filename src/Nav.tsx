//import BGGrid from "./BGGrid";
import {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { topic, topicList } from "./content";
import { GridSizeContext } from "./App";
import clsx from "clsx";

export default function Nav({
  onChange,
  currentChapterIndex,
  currentTopic,
}: {
  onChange: (topicID: number, chapterIndex: number) => void;
  currentTopic: topic;
  currentChapterIndex: number;
}) {
  const gridSize = useContext(GridSizeContext);

  return (
    <nav style={{ width: `${10 * gridSize}px` }} className="shrink-0">
      <SideBarGrid cellWidth={gridSize}>
        <div style={{ gridColumn: "2 / -2", gridRow: "span 1" }}></div>
        {topicList.topics.map((topic) => (
          <>
            <SideBarGridElement
              span={3}
              className="text-3xl font-bold"
              children={topic.title}
              onClick={() => onChange(topic.id, 0)}
              selected={currentTopic.id === topic.id}
              key={topic.id + topic.title}
            />

            {currentTopic.id === topic.id &&
              topic.chapters.map((chapter, cIndex) => (
                <SideBarGridElement
                  onClick={() => {
                    onChange(topic.id, cIndex);
                  }}
                  children={chapter.title}
                  selected={
                    currentTopic.id === topic.id &&
                    currentChapterIndex === cIndex
                  }
                  span={2}
                  key={topic.id + topic.title + cIndex + chapter.title}
                  className="text-2xl"
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
  cellWidth,
  onGridChange,
}: {
  cellWidth: number;
  children: ReactNode;
  onGridChange?: ({ cols, rows }: { cols: number; rows: number }) => void;
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

  const numCols = useMemo(() => {
    return Math.floor(containerSize.width / cellWidth);
  }, [containerSize.width, cellWidth]);

  const numRows = useMemo(() => {
    return Math.floor(containerSize.height / cellWidth) + 1;
  }, [cellWidth, containerSize.height]);

  useEffect(() => {
    if (onGridChange) {
      onGridChange({ cols: numCols, rows: numRows });
    }
  }, [numCols, numRows, onGridChange]);

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
  children,
  onClick,
  selected,
  className,
  span,
  color,
  gridColumn,
  center,
}: {
  children: ReactNode;
  selected: boolean;
  onClick?: () => void;
  className: string;
  span: number;
  color?: string;
  gridColumn?: string;
  center?: boolean;
}) {
  return (
    <div
      className={clsx(
        className,
        "flex p-2 relative overflow-hidden",
        center && "items-center",
        selected && "text-white"
      )}
      onClick={onClick}
      style={{ gridColumn: gridColumn ?? "2 / -2", gridRow: `span ${span}` }}
    >
      {children}
      <div
        className={`absolute top-0 h-full w-full border border-main-300 bg-main-600 -z-20 transition-all duration-300 ${selected ? "left-0" : "-left-full"}`}
        style={{ backgroundColor: color ?? "#e74322" }}
      ></div>
      <div
        className={`absolute top-0 h-full w-full border border-main-300 bg-white -z-20 transition-all duration-300 ${!selected ? "left-0" : "left-full"}`}
      ></div>
    </div>
  );
}
