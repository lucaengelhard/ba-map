import { createContext, useMemo, useRef, useState } from "react";
import NewWindow from "react-new-window";

import Map from "./Map";

import TimeSlider from "./TimeSlider";
import { topicList } from "./content";
import Nav from "./Nav";
import Chapters from "./Chapters";
import Filter from "./Filter";

export const GridSizeContext = createContext(40);

function App() {
  const [currentTopic, setCurrenTopic] = useState(topicList.get(0));
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const currentChapter = useMemo(
    () => currentTopic.chapters[currentChapterIndex],
    [currentChapterIndex, currentTopic.chapters]
  );
  const [currentFilter, setCurrentFilter] = useState<number | number[]>(
    currentChapter.interactionData.map((option) => option.id)
  );

  const mainUi = useRef<HTMLDivElement>(null);

  function onSliderChange(selected: number) {
    setCurrentFilter(selected);
  }

  function onFilterChange(selected: number[]) {
    setCurrentFilter(selected);
  }

  function onChapterChange(topicID: number, chapterIndex: number) {
    const newTopic = topicList.get(topicID);
    setCurrenTopic(newTopic);
    setCurrentChapterIndex(chapterIndex);

    if (newTopic.chapters[chapterIndex].interactionType === "timeline") {
      setCurrentFilter(0);
    } else {
      setCurrentFilter(
        newTopic.chapters[chapterIndex].interactionData.map(
          (option) => option.id
        )
      );
    }
  }

  return (
    <>
      <GridSizeContext.Provider value={40}>
        <div
          ref={mainUi}
          className="grid grid-cols-12 text-black w-screen h-screen overflow-hidden select-none"
        >
          <Nav
            onChange={onChapterChange}
            currentChapterIndex={currentChapterIndex}
            currentTopic={currentTopic}
          />
          <Chapters topic={currentTopic} chapterIndex={currentChapterIndex} />
          <aside className="col-span-4">
            {currentChapter.interactionType === "timeline" ? (
              <TimeSlider
                options={currentChapter.interactionData}
                onChange={onSliderChange}
              />
            ) : (
              <Filter
                selected={currentFilter as number[]}
                onChange={onFilterChange}
                options={
                  currentTopic.chapters[currentChapterIndex].interactionData
                }
              />
            )}
          </aside>
        </div>
        <NewWindow features={{ width: 1920, height: 1080 }}>
          <Map
            base
            currentChapter={currentChapter}
            topic={currentTopic}
            selected={currentFilter}
          />
        </NewWindow>{" "}
      </GridSizeContext.Provider>
    </>
  );
}

export default App;
