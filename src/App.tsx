import { useEffect, useMemo, useState } from "react";

function App() {
  const [current, setCurrent] = useState<number | null>(null);

  const topics = [
    { id: 0, name: "Gebiete & Grenzen" },
    { id: 1, name: "Unterdrückung & Widerstand" },
  ];

  const channel = useMemo(() => new BroadcastChannel("topic"), []);

  useEffect(() => {
    channel.postMessage(current);
  }, [channel, current]);

  return (
    <div className="grid grid-cols-4 gap-4 px-4">
      <nav className="col-span-1">
        {topics.map((topic, index) => (
          <button className="block" onClick={() => setCurrent(topic.id)}>
            {topic.name}
          </button>
        ))}
      </nav>
      <main className="col-span-2">main</main>
      <aside className="col-span-1">legend</aside>
    </div>
  );
}

export default App;
