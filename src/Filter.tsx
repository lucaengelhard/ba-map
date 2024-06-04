import { useEffect, useState } from "react";
import { mapDataPoint } from "./content/data";

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
    <div className="h-screen p-4 grid items-center">
      <div>
        {" "}
        {options.map((option, index) => (
          <FilterElement
            key={index}
            option={option}
            onFilterClick={onFilterClick}
            selected={selected.includes(option.id)}
          />
        ))}
      </div>
    </div>
  );
}

export function FilterElement({
  option,
  onFilterClick,
  selected,
}: {
  option: mapDataPoint;
  onFilterClick: (index: number) => void;
  selected: boolean;
}) {
  return (
    <div
      style={{ opacity: selected ? 1 : 0.5 }}
      onClick={() => onFilterClick(option.id)}
      className="flex text-3xl mb-7"
    >
      <div
        className="aspect-square w-1/12"
        style={{ backgroundColor: option.color ?? "grey" }}
      ></div>
      <div className="relative py-1 px-2">
        {option.title}
        <div
          className="absolute top-0 left-0 w-full h-full -z-40 opacity-50"
          style={{ backgroundColor: option.color ?? "grey" }}
        ></div>
      </div>
    </div>
  );
}
