import { topicList } from "./content";

export default function Nav({
  onChange,
}: {
  onChange: (topicID: number, chapterIndex: number) => void;
}) {
  return (
    <nav className="col-span-1">
      {topicList.topics.map((topic, index) => (
        <div>
          <div key={index} onClick={() => onChange(topic.id, 0)}>
            {topic.title}{" "}
          </div>
          <div>
            {topic.chapters.map((chapter, cIndex) => (
              <div
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
