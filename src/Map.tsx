import { useEffect, useMemo, useState } from "react";

export default function Map() {
  const [current, setCurrent] = useState<number | null>(null);
  const channel = useMemo(() => new BroadcastChannel("topic"), []);

  useEffect(() => {
    channel.addEventListener("message", (event) => {
      setCurrent(event.data);
    });
  });

  return <>{current}</>;
}
