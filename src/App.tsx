import { createContext, useEffect, useMemo, useRef, useState } from "react";
import NewWindow from "react-new-window";

import Map from "./Map";

import TimeSlider from "./TimeSlider";
import { topicList } from "./content";
import Nav from "./Nav";
import Chapters from "./Chapters";
import Filter from "./Filter";
//import BGGrid from "./BGGrid";

export const GridSizeContext = createContext(40);

function App() {
  const [currentTopic, setCurrenTopic] = useState(topicList.get(0));
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const currentChapter = useMemo(
    () => currentTopic.chapters[currentChapterIndex],
    [currentChapterIndex, currentTopic.chapters]
  );
  const [currentFilter, setCurrentFilter] = useState<number | number[]>(0);

  const mainUi = useRef<HTMLDivElement>(null);
  const [fullscreen, setFullScreen] = useState(false);

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

  async function startFullScreen() {
    if (mainUi.current === null) return;
    await mainUi.current.requestFullscreen();
    setFullScreen(true);
  }

  return (
    <>
      <GridSizeContext.Provider value={40}>
        <div
          ref={mainUi}
          className="grid grid-cols-12 text-black w-screen h-screen overflow-hidden bg-white"
        >
          {" "}
          {!fullscreen && (
            <div
              className="fixed top-1/2 left-1/2 bg-main-600 p-10 z-50"
              onClick={startFullScreen}
            >
              Fullscreen
            </div>
          )}
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
        {/**
      <BGGrid width={80} /> */}
      </GridSizeContext.Provider>
    </>
  );
}

export default App;
