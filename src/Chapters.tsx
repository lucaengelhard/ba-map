import { chapter, chapterContent, topic } from "./content";

export default function Chapters({
  topic,
  chapterIndex,
}: {
  topic: topic;
  chapterIndex: number;
}) {
  return (
    <main className="col-span-2 h-screen overflow-x-hidden hide-scroll">
      <h1>{topic.title}</h1>
      <Chapter chapter={topic.chapters[chapterIndex]} />
    </main>
  );
}

function Chapter({ chapter }: { chapter: chapter }) {
  return (
    <div>
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
      <div>
        <h3>{block.title}</h3>
        <p>{block.content}</p>
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <div>
        <blockquote>{block.content}</blockquote>
      </div>
    );
  }

  if (block.type === "image") {
    return (
      <div>
        <figure>
          {" "}
          <img src={block.content} alt="" />
          <figcaption>{block.title}</figcaption>
        </figure>
      </div>
    );
  }

  if (block.type === "video") {
    return (
      <div>
        <figure>
          {" "}
          <video src={block.content} alt="" />
          <figcaption>{block.title}</figcaption>
        </figure>
      </div>
    );
  }
}
