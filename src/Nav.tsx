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
        <div key={index}>
          <div
            className={`font-serif font-bold text-xl pb-1 ${
              currentTopic.id === topic.id ? "text-main" : "text-black"
            }`}
            onClick={() => onChange(topic.id, 0)}
          >
            {topic.title}{" "}
          </div>
          <div>
            {topic.chapters.map((chapter, cIndex) => (
              <div
                className="pl-4 pb-1"
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
