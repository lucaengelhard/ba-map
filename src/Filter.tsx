import { useContext } from "react";
import { mapDataPoint } from "./content/data";
import { SideBarGrid, SideBarGridElement } from "./Nav";
import { GridSizeContext } from "./App";
import { chapter } from "./content";
import { isEven } from "./helpers";

export default function Filter({
  onChange,
  options,
  selected,
  currentChapter,
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
        {options.map((option, index) => (
          <>
            {currentChapter.small ? (
              <>
                {isEven(index) && (
                  <div
                    style={{ gridColumn: "1 / -1", gridRow: "span 1" }}
                  ></div>
                )}
              </>
            ) : (
              <div style={{ gridColumn: "1 / -1", gridRow: "span 1" }}></div>
            )}
            <SideBarGridElement
              key={index}
              className=""
              selected={selected.includes(option.id)}
              span={2}
              color={option.color ?? "grey"}
              onClick={() => onFilterClick(option.id)}
              gridColumn={
                currentChapter.small
                  ? isEven(index)
                    ? "2 / span 6"
                    : "9 / span 6"
                  : undefined
              }
            >
              <div className="text-3xl">{option.title}</div>
            </SideBarGridElement>
          </>
        ))}
      </SideBarGrid>
    </div>
  );
}
