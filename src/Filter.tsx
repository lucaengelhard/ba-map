import { useEffect, useState } from "react";
import { mapDataPoint } from "./content/data";
import { SideBarGrid, SideBarGridElement } from "./Nav";

export default function Filter({
  onChange,
  options,
}: {
  options: mapDataPoint[];
  onChange: (selected: number[]) => void;
}) {
  const [selected, setSelected] = useState(options.map((option) => option.id));

  useEffect(() => onChange(selected), [onChange, selected]);

  function onFilterClick(index: number) {
    setSelected((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  }

  return (
    <div className="h-screen">
      <SideBarGrid numCols={10}>
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
