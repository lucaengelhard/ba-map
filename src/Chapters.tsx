import Sonne from "./assets/icons/Sonne";
import { chapter, chapterContent, topic } from "./content";

export default function Chapters({
  topic,
  chapterIndex,
}: {
  topic: topic;
  chapterIndex: number;
}) {
  return (
    <main className="col-span-6 h-screen overflow-x-hidden hide-scroll pb-4 relative">
      <h1 className="text-main text-3xl sticky top-0 bg-white pt-4 pb-1 font-bold">
        {topic.title}
      </h1>
      <Chapter chapter={topic.chapters[chapterIndex]} />
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
          <blockquote className="text-main italic w-[90%]">
            {block.content}
          </blockquote>
        </div>
        {block.title !== undefined && (
          <div className="text-main flex justify-end mt-2">
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
          <figcaption className="text-main mt-2">{block.title}</figcaption>
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
