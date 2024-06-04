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

  useEffect(() => onChange(selected), [onChange, selected]);

  const timelineElementPos = useRef<Record<number, number>>({});

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

  const calcOptions = useMemo(
    () =>
      options.map((option, index) => {
        const diff =
          index === options.length - 1
            ? 0
            : options[index + 1].year - option.year;

        const diffRatio = diff / timespan.span;

        let span = Math.floor(diffRatio * rows) - 1;

        if (span <= 1) {
          span = 2;
        }

        if (span > 3) {
          span = 3;
        }

        return { ...option, diff, diffRatio, span };
      }),
    [options, rows, timespan.span]
  );

  function handleChange(selectedChange: number) {
    setSelected(selectedChange);
  }

  function onScroll() {
    if (sliderRef.current === null) return;

    const BoundingBox = sliderRef.current.getBoundingClientRect();

    const slidertop = BoundingBox.y;

    const elements = timelineElementPos.current;

    let maxPos = 0;
    let sliderSelected = 0;

    for (const id in elements) {
      if (Object.prototype.hasOwnProperty.call(elements, id)) {
        const pos = elements[id];
        if (pos <= slidertop + BoundingBox.height / 2 && pos > maxPos) {
          maxPos = pos;
          sliderSelected = parseInt(id);
        }
      }
    }

    handleChange(sliderSelected);
  }

  //Slider at the top when mounting
  useEffect(() => {
    if (sliderRef.current === null) return;

    sliderRef.current.scrollIntoView();
  }, []);

  function onGridChange({ rows }: { cols: number; rows: number }) {
    setRows(rows - 4);
  }

  return (
    <>
      <SideBarGrid cellWidth={gridSize} onGridChange={onGridChange}>
        <div style={{ gridColumn: "2 / -2", gridRow: "span 1" }}></div>
        {calcOptions.map((option, index) => (
          <SideBarGridElement
            key={index}
            gridColumn="2 / -1"
            className="flex gap-4 items-start"
            selected={option.id === selected}
            span={option.span}
            center={false}
          >
            <div>{option.year}</div>
            <div>{option.title}</div>
          </SideBarGridElement>
        ))}
      </SideBarGrid>
      {/**
    <div className="h-screen flex gap-2 border border-main-300">
      <div
        className="h-full max-w-20  overflow-x-hidden overflow-y-auto hide-scroll line-background"
        onScroll={onScroll}
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
      <div className="h-full flex flex-col justify-between pointer-events-none pb-7 pt-4">
        {calcOptions.map((option, index) => (
          <TimelineElement
            key={index}
            option={option}
            timelineElementPos={timelineElementPos}
            selected={selected === option.id}
          />
        ))}
      </div>
    </div> */}
    </>
  );
}

function TimelineElement({
  option,
  timelineElementPos,
  selected,
}: {
  option: {
    diff: number;
    diffRatio: number;
    id: number;
    year: number;
    title: string;
  };
  timelineElementPos: React.MutableRefObject<Record<number, number>>;
  selected: boolean;
}) {
  const boxRef = useRef<HTMLDivElement>(null);

  const getPosition = () => {
    if (boxRef.current === null) return;

    const y = boxRef.current.offsetTop;

    timelineElementPos.current = {
      ...timelineElementPos.current,
      [option.id]: y,
    };
  };

  useEffect(() => {
    getPosition();
  });

  useEffect(() => {
    window.addEventListener("resize", getPosition);
  });

  return (
    <div
      ref={boxRef}
      key={option.id}
      style={{
        flexGrow: option.diffRatio,
      }}
    >
      {" "}
      <SideBarGridElement
        className="w-full h-full text-sm flex gap-4 items-start"
        selected={selected}
        span={1}
      >
        <div>{option.year}</div>
        <div>{option.title}</div>
      </SideBarGridElement>
    </div>
  );
}
