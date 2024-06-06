import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { timelineDataPoint } from "./content/data";
import Sonne from "./assets/icons/Sonne";
import { SideBarGrid, SideBarGridElement } from "./Nav";
import { GridSizeContext } from "./App";

export default function TimeSlider({
  options,
  onChange,
}: {
  options: timelineDataPoint[];
  onChange: (selected: number) => void;
}) {
  const gridSize = useContext(GridSizeContext);
  const [selected, setSelected] = useState(0);
  const [rows, setRows] = useState<number>(20);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => onChange(selected), [onChange, selected]);

  const sliderRef = useRef<HTMLDivElement>(null);

  const timespan = useMemo(() => {
    let maxYear: number = 0;
    let minYear: number = 0;
    options.sort((a, b) => {
      if (maxYear === 0) {
        maxYear = a.year;
      }

      if (minYear === 0) {
        minYear = a.year;
      }

      if (a.year > maxYear) {
        maxYear = a.year;
      }

      if (a.year < minYear) {
        minYear = a.year;
      }

      if (b.year > maxYear) {
        maxYear = b.year;
      }

      if (b.year < minYear) {
        minYear = b.year;
      }

      return a.year - b.year;
    });

    return { span: maxYear - minYear, minYear, maxYear };
  }, [options]);

  const calcOptions = useMemo(() => {
    let topHeight = gridSize;

    return options.map((option, index) => {
      const diff =
        index === options.length - 1
          ? 0
          : options[index + 1].year - option.year;

      const diffRatio = diff / timespan.span;

      let span = Math.floor(diffRatio * rows) + 1;

      if (span <= 1) {
        span = 2;
      }

      if (span > 3) {
        span = 3;
      }

      const elTop = topHeight;
      topHeight = topHeight + span * gridSize;

      return { ...option, diff, diffRatio, span, elTop };
    });
  }, [gridSize, options, rows, timespan.span]);

  function onScroll() {
    if (scrolling) return;
    if (sliderRef.current === null) return;

    const BoundingBox = sliderRef.current.getBoundingClientRect();

    const slidertop = BoundingBox.y;

    const filtered = calcOptions.filter(
      (opt) => opt.elTop < slidertop + BoundingBox.height / 2
    );

    if (filtered.length > 0) {
      const selected = filtered.reduce((prev, current) => {
        return prev.elTop > current.elTop ? prev : current;
      });

      setSelected(selected.id);
    } else {
      setSelected(0);
    }
  }

  //Slider at the top when mounting
  useEffect(() => {
    if (sliderRef.current === null) return;
    if (sliderRef.current.parentElement === null) return;

    sliderRef.current.parentElement.scrollBy({ top: window.innerHeight });
  }, []);

  function onGridChange({ rows }: { cols: number; rows: number }) {
    setRows(rows);
  }

  function onOptionClick(id: number) {
    const selectedOption = calcOptions.find((option) => option.id === id);
    if (selectedOption === undefined) return;

    setSelected(selectedOption.id);
    if (sliderRef.current === null) return;
    if (sliderRef.current.parentElement === null) return;

    setScrolling(true);
    const BoundingBox = sliderRef.current.getBoundingClientRect();

    const slidertop = BoundingBox.y;

    sliderRef.current.parentElement.scrollBy({
      top: slidertop - selectedOption.elTop,
      behavior: "instant",
    });
    setScrolling(false);
  }

  return (
    <>
      <SideBarGrid cellWidth={gridSize} onGridChange={onGridChange}>
        <div style={{ gridColumn: "4 / -2", gridRow: "span 1" }}></div>
        {calcOptions.map((option, index) => (
          <SideBarGridElement
            key={index}
            gridColumn="4 / -1"
            className="flex gap-4 items-start"
            selected={option.id === selected}
            span={option.span}
            center={false}
            onClick={() => onOptionClick(option.id)}
          >
            <div className="italic font-bold">{option.year}</div>
            <div className="font-sans">{option.title}</div>
          </SideBarGridElement>
        ))}
        <div
          className="overflow-x-hidden overflow-y-auto hide-scroll max-h-screen px-2"
          onScroll={onScroll}
          style={{ gridColumn: "1 / 4", gridRow: `1 / span ${rows}` }}
        >
          <div className="h-full"></div>
          <div
            ref={sliderRef}
            className="w-full sticky top-3 bottom-3 rounded-full p-2 bg-white"
          >
            <Sonne fill="#E74322" />
          </div>
          <div className="h-full"></div>
        </div>
        <div
          style={{
            gridColumn: "2 / 3",
            gridRow: `1 / span ${rows - 1}`,
            boxSizing: "border-box",
          }}
          className="bg-main-600 rounded-full border-[15px] border-white"
        ></div>
      </SideBarGrid>
    </>
  );
}
