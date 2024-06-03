import { useMemo, useRef } from "react";

export default function BGGrid({ width }: { width: number }) {
  const container = useRef<HTMLDivElement>(null);

  const numColumns = useMemo(() => {
    if (container.current === null) return 10;
    return Math.floor(container.current.clientWidth / width) + 1;
  }, [width]);

  const numRows = useMemo(() => {
    if (container.current === null) return 10;
    return Math.floor(container.current.clientHeight / width) + 1;
  }, [width]);

  const squares = useMemo(() => {
    const squares = [];
    for (let row = 0; row <= numRows; row++) {
      for (let col = 0; col <= numColumns; col++) {
        squares.push(
          <div
            key={`${row}-${col}`}
            className="border border-main grow aspect-square"
            style={{ width: width, height: width }}
          ></div>
        );
      }
    }

    return squares;
  }, [numColumns, numRows, width]);

  return (
    <div ref={container} className="absolute w-full h-full top-0 left-0 -z-40">
      <div className="flex opacity-35 flex-wrap">{squares}</div>
    </div>
  );
}
