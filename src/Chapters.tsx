import { useContext } from "react";
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

  return (
    <main className="col-span-5 h-screen overflow-x-hidden hide-scroll relative">
      <h1
        className="text-main-600 text-3xl sticky top-0 bg-white  font-bold border border-main-300 flex items-center p-2"
        style={{
          height: gridSize * 3 + "px",
          paddingLeft: gridSize + "px",
          paddingTop: gridSize + "px",
        }}
      >
        {topic.title}
      </h1>
      <div
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
    <div className="text-xl">
      <h2>{chapter.title}</h2>
      {chapter.content.map((block, bIndex) => (
        <ChapterContent key={bIndex} block={block} />
      ))}
    </div>
  );
}

function ChapterContent({ block }: { block: chapterContent }) {
  if (block.type === "text") {
    return (
      <div className={block.title !== undefined ? "py-4" : "pb-4"}>
        {block.title !== undefined && <h3 className="italic">{block.title}</h3>}
        <p className="font-sans">{block.content}</p>
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <div className="py-4">
        <div className="flex gap-4 items-center px-14 ">
          {" "}
          <Sonne fill="#E74322" className="w-[10%]" />
          <blockquote className="text-main-600 italic w-[90%]">
            {block.content}
          </blockquote>
        </div>
        {block.title !== undefined && (
          <div className="text-main-600 flex justify-end mt-2">
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
