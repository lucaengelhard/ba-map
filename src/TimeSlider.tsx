import { useEffect, useMemo, useRef, useState } from "react";

export default function TimeSlider({
  options,
  onChange,
}: {
  options: { id: number; year: number; title: string }[];
  onChange: (selected: number) => void;
}) {
  const [sliderVal, setSliderVal] = useState(0);
  const [selected, setSelected] = useState(0);

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

        return { ...option, diff, diffRatio };
      }),
    [options, timespan.span]
  );

  function handleChange(selectedChange: number) {
    setSelected(selectedChange);
    onChange(selectedChange);
  }

  function onScroll() {
    if (sliderRef.current === null) return;

    const slidertop = sliderRef.current.getBoundingClientRect().y;

    const elements = timelineElementPos.current;

    let maxPos = 0;
    let sliderSelected = 0;

    for (const id in elements) {
      if (Object.prototype.hasOwnProperty.call(elements, id)) {
        const pos = elements[id];
        if (pos <= slidertop && pos > maxPos) {
          maxPos = pos;
          sliderSelected = parseInt(id);
        }
      }
    }

    handleChange(sliderSelected);
  }

  return (
    <div className="h-screen flex">
      <div
        className="bg-red-600 h-full w-7 shrink-0  overflow-x-hidden overflow-y-auto hide-scroll"
        onScroll={onScroll}
      >
        <div className="h-full"></div>
        <div
          ref={sliderRef}
          className="bg-black w-full h-7 sticky top-0 bottom-0"
        ></div>
        <div className="h-full"></div>
      </div>
      <div className="h-full flex flex-col justify-between pointer-events-none">
        {calcOptions.map((option, index) => (
          <TimelineElement
            key={index}
            option={option}
            timelineElementPos={timelineElementPos}
            selected={selected === option.id}
          />
        ))}
      </div>
    </div>
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
  const [y, setY] = useState<number>();
  const boxRef = useRef<HTMLDivElement>(null);

  const getPosition = () => {
    if (boxRef.current === null) return;

    const y = boxRef.current.offsetTop;
    setY(y);
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
      className="p-4 text-sm flex gap-4"
      key={option.id}
      style={{
        flexGrow: option.diffRatio,
        textDecoration: selected ? "underline" : "none",
      }}
    >
      <div>{option.year}</div>
      <div>{option.title}</div>
    </div>
  );
}
