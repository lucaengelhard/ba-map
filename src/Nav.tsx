import { topic, topicList } from "./content";

export default function Nav({
  onChange,
  currentChapterIndex,
  currentTopic,
}: {
  onChange: (topicID: number, chapterIndex: number) => void;
  currentTopic: topic;
  currentChapterIndex: number;
}) {
  return (
    <nav className="col-span-2 p-4">
      {topicList.topics.map((topic, index) => (
        <div key={index} className="mb-4">
          <div
            className={`w-[max-content] max-w-full font-serif font-bold text-xl px-2 mb-1 pt-1 ${
              currentTopic.id === topic.id && "bg-main text-white"
            }`}
            onClick={() => onChange(topic.id, 0)}
          >
            {topic.title}{" "}
          </div>
          <div>
            {topic.chapters.map((chapter, cIndex) => (
              <div
                className={`pl-6 pb-1 ${
                  currentTopic.id === topic.id && cIndex === currentChapterIndex
                    ? "underline"
                    : ""
                }`}
                key={cIndex}
                onClick={() => {
                  onChange(topic.id, cIndex);
                }}
              >
                {chapter.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
