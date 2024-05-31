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
    <div className="h-screen">
      {options.map((option, index) => (
        <FilterElement
          key={index}
          index={index}
          option={option}
          onFilterClick={onFilterClick}
          selected={selected.includes(index)}
        />
      ))}
    </div>
  );
}

function FilterElement({
  option,
  onFilterClick,
  index,
  selected,
}: {
  option: mapDataPoint;
  onFilterClick: (index: number) => void;
  index: number;
  selected: boolean;
}) {
  return (
    <div
      style={{ opacity: selected ? 1 : 0.5 }}
      onClick={() => onFilterClick(index)}
    >
      {option.title}
    </div>
  );
}
