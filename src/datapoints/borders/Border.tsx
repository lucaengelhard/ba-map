import { useEffect, useState } from "react";
import { borders } from "../../data";
import { interpolate } from "flubber";

type borderID = (typeof borders)[number]["id"];

export default function Border({ id }: { id: borderID }) {
  const [current, setCurrent] = useState(id);

  const [path, setPath] = useState(borders[id].path);

  useEffect(() => {
    morph(1000, 20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function morph(duration: number, updateInterval: number) {
    if (id === current) return;

    const interpolator = interpolate(borders[current].path, borders[id].path);

    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      if (elapsed < duration) {
        setPath(interpolator(elapsed / duration));
      } else {
        setCurrent(id);

        setPath(borders[id].path);
        clearInterval(interval);
      }
    }, updateInterval);
  }

  return (
    <div className="fixed inset-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        <path d={path}></path>
      </svg>
    </div>
  );
}
