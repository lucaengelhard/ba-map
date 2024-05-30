import { useState } from "react";
import NewWindow from "react-new-window";

import SVG1919 from "./datapoints/borders/SVG1919";
import SVG1920 from "./datapoints/borders/SVG1920";
import Border from "./datapoints/borders/Border";
import Map from "./Map";
import { borders } from "./data";
import TimeSlider from "./TimeSlider";

function App() {
  const [currentTopic, setCurrenTopic] = useState<number | undefined>(
    undefined
  );
  const [currentFilter, setCurrentFilter] = useState<number | undefined>(
    undefined
  );

  const topics = [
    { id: 0, name: "Gebiete & Grenzen" },
    { id: 1, name: "Unterdrückung & Widerstand" },
  ];

  function onSliderChange(selected: number) {
    setCurrentFilter(selected);
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-4">
        <nav className="col-span-1">
          {topics.map((topic, index) => (
            <button
              key={index}
              className="block"
              onClick={() => setCurrenTopic(topic.id)}
            >
              {topic.name}
            </button>
          ))}
        </nav>
        <main className="col-span-2">main</main>
        <aside className="col-span-1">
          <TimeSlider options={borders} onChange={onSliderChange} />
        </aside>
      </div>
      <NewWindow features={{ width: 1920, height: 1080 }}>
        <Map />
        <Border id={currentFilter ?? 0} />
      </NewWindow>
    </>
  );
}

export default App;
