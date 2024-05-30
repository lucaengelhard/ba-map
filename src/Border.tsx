import { useEffect, useState } from "react";
import { borders } from "./content/data";
import { interpolate } from "flubber";

type borderID = (typeof borders)[number]["id"];

export default function Border({ id }: { id: borderID }) {
  const [current, setCurrent] = useState(id);

  const [path, setPath] = useState(
    borders.find((border) => border.id === id)?.path
  );

  useEffect(() => {
    const interval = morph(1000, 20);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function morph(duration: number, updateInterval: number) {
    if (id === current) return;

    const currentObj = borders.find((border) => border.id === current);
    const targetObj = borders.find((border) => border.id === id);

    const interpolator = interpolate(currentObj?.path, targetObj?.path);

    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      if (elapsed < duration) {
        setPath(interpolator(elapsed / duration));
      } else {
        setCurrent(id);

        setPath(targetObj?.path);
        clearInterval(interval);
      }
    }, updateInterval);

    return interval;
  }

  return (
    <div className="fixed inset-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        <path d={path}></path>
      </svg>
    </div>
  );
}
