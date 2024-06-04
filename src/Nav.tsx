import BGGrid from "./BGGrid";
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
    <nav className="col-span-3 p-4 relative">
      {topicList.topics.map((topic, index) => (
        <div key={index} className="mb-4">
          <div
            className={`font-serif font-bold text-3xl mb-1 pt-1`}
            onClick={() => onChange(topic.id, 0)}
          >
            {topic.title}{" "}
          </div>
          <div className="text-2xl">
            {topic.chapters.map((chapter, cIndex) => (
              <div
                className={`pb-1 ${
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
      <BGGrid width={40} />
    </nav>
  );
}
