import { useContext, useEffect, useRef } from "react";
import { GridSizeContext } from "./App";
import Sonne from "./assets/icons/Sonne";
import { chapter, chapterContent, topic } from "./content";

export default function Chapters({
  topic,
  chapterIndex,
}: {
  topic: topic;
  chapterIndex: number;
}) {
  const gridSize = useContext(GridSizeContext);

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current === null) return;
    if (container.current.parentElement === null) return;
    container.current.parentElement.scrollTo({ top: 0 });
  }, [topic, chapterIndex]);

  return (
    <main className="grow h-screen overflow-x-hidden relative">
      <h1
        className="text-main-600 text-2xl sticky top-0 bg-white  border border-main-300 flex items-center p-2 gap-4"
        style={{
          height: gridSize * 4 + "px",
          paddingLeft: gridSize + "px",
          paddingTop: gridSize + "px",
        }}
      >
        <div className="font-bold ">{topic.title} </div>
        <div>|</div>
        <div>{topic.chapters[chapterIndex].title}</div>
      </h1>
      <div
        ref={container}
        className="border border-main-300"
        style={{
          paddingLeft: gridSize + "px",
          paddingRight: gridSize + "px",
          paddingTop: gridSize + "px",
        }}
      >
        <Chapter chapter={topic.chapters[chapterIndex]} />
      </div>
    </main>
  );
}

function Chapter({ chapter }: { chapter: chapter }) {
  return (
    <div className="text-base">
      {chapter.content.map((block, bIndex) => (
        <ChapterContent key={bIndex} block={block} />
      ))}
    </div>
  );
}

function ChapterContent({ block }: { block: chapterContent }) {
  if (block.type === "text") {
    return (
      <div className={block.title !== undefined ? "pb-4 pt-8" : "pb-4"}>
        {block.title !== undefined && (
          <h3 className="italic text-2xl ">{block.title}</h3>
        )}
        <p className="font-sans">{block.content}</p>
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <div className="py-8 text-xl">
        <div className="flex gap-4 items-center px-14 ">
          {" "}
          <Sonne fill="#E74322" className="w-[10%]" />
          <blockquote className="text-main-600 italic w-[90%]">
            {block.content}
          </blockquote>
        </div>
        {block.title !== undefined && (
          <div className="text-main-600 flex justify-end mt-3">
            <div className="text-right w-1/2">{block.title}</div>
          </div>
        )}
      </div>
    );
  }

  if (block.type === "image") {
    return (
      <div className="py-4">
        <figure>
          {" "}
          <img src={block.content} alt={block.title} />
          <figcaption className="text-main-600 mt-2">{block.title}</figcaption>
        </figure>
      </div>
    );
  }

  if (block.type === "video") {
    return (
      <div className="py-4">
        <figure>
          {" "}
          <video src={block.content} />
          <figcaption>{block.title}</figcaption>
        </figure>
      </div>
    );
  }
}
