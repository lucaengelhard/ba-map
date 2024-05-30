import { useState } from "react";
import NewWindow from "react-new-window";

import SVG1919 from "./datapoints/borders/SVG1919";
import SVG1920 from "./datapoints/borders/SVG1920";
import Border from "./Border";
import Map from "./Map";
import { borders } from "./content/data";
import TimeSlider from "./TimeSlider";
import { topic, topics } from "./content";
import Nav from "./Nav";
import Chapters from "./Chapters";

function App() {
  const [currentTopic, setCurrenTopic] = useState<topic>(topics[0]);
  const [currentFilter, setCurrentFilter] = useState<number | undefined>(
    undefined
  );

  function onSliderChange(selected: number) {
    setCurrentFilter(selected);
  }

  function onChapterChange(topicID: number, chapterIndex: number) {
    setCurrenTopic(topics.find((topic) => topic.id === topicID));
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-4">
        <Nav onChange={onChapterChange} />
        <Chapters topic={currentTopic} />
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
