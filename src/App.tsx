import { useMemo, useState } from "react";
import NewWindow from "react-new-window";

import Border from "./Border";
import Map from "./Map";

import TimeSlider from "./TimeSlider";
import { topicList } from "./content";
import Nav from "./Nav";
import Chapters from "./Chapters";
import Filter from "./Filter";

function App() {
  const [currentTopic, setCurrenTopic] = useState(topicList.get(0));
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const currentChapter = useMemo(
    () => currentTopic.chapters[currentChapterIndex],
    [currentChapterIndex, currentTopic.chapters]
  );
  const [currentFilter, setCurrentFilter] = useState<number | number[]>(0);

  function onSliderChange(selected: number) {
    setCurrentFilter(selected);
  }

  function onFilterChange(selected: number[]) {
    setCurrentFilter(selected);
  }

  function onChapterChange(topicID: number, chapterIndex: number) {
    setCurrenTopic(topicList.get(topicID));
    setCurrentChapterIndex(chapterIndex);
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-4">
        <Nav onChange={onChapterChange} />
        <Chapters topic={currentTopic} chapterIndex={currentChapterIndex} />
        <aside className="col-span-1">
          {currentChapter.interactionType === "timeline" ? (
            <TimeSlider
              options={currentChapter.interactionData}
              onChange={onSliderChange}
            />
          ) : (
            <Filter
              onChange={onFilterChange}
              options={
                currentTopic.chapters[currentChapterIndex].interactionData
              }
            />
          )}
        </aside>
      </div>
      <NewWindow features={{ width: 1920, height: 1080 }}>
        <Map />
        <Border id={currentFilter} />
      </NewWindow>
    </>
  );
}

export default App;
