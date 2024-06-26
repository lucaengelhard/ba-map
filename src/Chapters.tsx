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
    <main
      className="grow h-screen overflow-x-hidden relative"
      style={{
        overflow: topic.chapters[chapterIndex].missing ? "hidden" : undefined,
      }}
    >
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
      {topic.chapters[chapterIndex].missing ? (
        <ChapterMissing />
      ) : (
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
      )}
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

function ChapterMissing() {
  const gridSize = useContext(GridSizeContext);
  return (
    <div className="relative">
      <div className="bg-main-600 opacity-70 w-full h-screen absolute"></div>
      <div
        className="text-base opacity-5"
        style={{
          paddingLeft: gridSize + "px",
          paddingRight: gridSize + "px",
          paddingTop: gridSize + "px",
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quae id
        error, quo provident sit sapiente. Tempore at laborum nobis ad natus
        sunt earum illum autem neque. Fugiat blanditiis laborum, quos maxime
        eius atque quo reprehenderit eum corporis recusandae a fuga soluta velit
        praesentium illum quibusdam, laboriosam commodi nulla deserunt dicta cum
        provident aperiam. Maxime recusandae aut dolores, ullam quibusdam
        cupiditate maiores provident architecto quia laboriosam tempore harum
        dolor iste aspernatur ut libero eveniet odit blanditiis vitae labore.
        Asperiores ipsa, vitae corrupti exercitationem quia possimus fugiat
        laborum sequi nemo cupiditate quis! Magnam laborum cumque consectetur
        dolorum illum numquam praesentium reprehenderit fugit repellendus
        deleniti doloremque, eius rem ex, architecto eaque amet, magni veritatis
        qui ipsa molestias. Omnis suscipit, ullam numquam praesentium veniam
        quia iste vitae dolores repudiandae incidunt nulla accusamus ex, enim
        odit porro debitis perferendis saepe voluptatem laborum distinctio. Quia
        nulla maiores autem eligendi amet placeat expedita, similique deserunt
        eveniet repellendus quasi. A tempore placeat est asperiores, amet illo
        unde? Cumque unde incidunt culpa aperiam tempore! Commodi ducimus illum
        tempore minima itaque corrupti necessitatibus autem ipsa dolores,
        deserunt, praesentium facilis deleniti sed voluptatem, quisquam fugit
        culpa odit vero cum dignissimos eaque beatae nostrum pariatur!
        Recusandae at modi a eveniet explicabo veritatis numquam ab,
        necessitatibus corrupti, quaerat quae dolorem fugiat amet tenetur neque
        laborum. Sunt ab earum quos blanditiis expedita laborum odio, ut
        obcaecati facere perferendis cum sequi corrupti enim omnis commodi
        voluptatum, quisquam et, illum pariatur neque consectetur veniam sint?
        Minima libero soluta eaque! Harum assumenda consectetur illo, alias
        deserunt sapiente nulla voluptates fuga aperiam eaque ipsa mollitia cum
        consequatur neque accusamus vel, porro repellendus voluptatum
        repudiandae vitae dolore quam quia error. Facere soluta suscipit
        exercitationem placeat, fugiat deserunt ratione dicta repellat, totam
        porro eveniet dolorum autem non, assumenda iusto? Saepe ullam sunt quod
        eveniet necessitatibus deleniti architecto blanditiis sint!
      </div>
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
