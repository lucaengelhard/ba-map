import { useContext } from "react";
import { mapDataPoint } from "./content/data";
import { SideBarGrid, SideBarGridElement } from "./Nav";
import { GridSizeContext } from "./App";

export default function Filter({
  onChange,
  options,
  selected,
}: {
  options: mapDataPoint[];
  onChange: (selected: number[]) => void;
  selected: number[];
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
            <div style={{ gridColumn: "2 / -2", gridRow: "span 1" }}></div>
            <SideBarGridElement
              key={index}
              className=""
              selected={selected.includes(option.id)}
              span={2}
              color={option.color ?? "grey"}
              onClick={() => onFilterClick(option.id)}
            >
              <div className="text-3xl">{option.title}</div>
            </SideBarGridElement>
          </>
        ))}
      </SideBarGrid>
    </div>
  );
}
