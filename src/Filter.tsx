import { useContext } from "react";
import { mapDataPoint } from "./content/data";
import { SideBarGrid, SideBarGridElement } from "./Nav";
import { GridSizeContext } from "./App";
import { chapter } from "./content";

export default function Filter({
  onChange,
  options,
  selected,
}: {
  options: mapDataPoint[];
  onChange: (selected: number[]) => void;
  selected: number[];
  currentChapter: chapter;
}) {
  const gridSize = useContext(GridSizeContext);

  function onFilterClick(index: number) {
    if (selected.includes(index)) {
      onChange(selected.filter((i) => i !== index));
    } else {
      onChange([...selected, index]);
    }
  }

  return (
    <div className="h-screen">
      <SideBarGrid cellWidth={gridSize}>
        {options.map((option) => (
          <>
            {/**
            {currentChapter.small ? (
              <>
                {isEven(index) && (
                  <div
                    key={option.id + option.title}
                    style={{ gridColumn: "1 / -1", gridRow: "span 1" }}
                  ></div>
                )}
              </>
            ) : (
              
            )} */}
            <div style={{ gridColumn: "1 / -1", gridRow: "span 1" }}></div>
            <SideBarGridElement
              key={option.id + option.title}
              className=""
              selected={selected.includes(option.id)}
              span={2}
              color={option.color ?? "grey"}
              onClick={() => onFilterClick(option.id)}
              gridColumn={
                /**
                currentChapter.small
                  ? isEven(index)
                    ? "2 / span 6"
                    : "9 / span 6"
                  : */ undefined
              }
            >
              <div className="text-xl">{option.title}</div>
            </SideBarGridElement>
          </>
        ))}
      </SideBarGrid>
    </div>
  );
}
