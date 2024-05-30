import { topics } from "./content";

export default function Nav({
  onChange,
}: {
  onChange: (topicID: number, chapterIndex: number) => void;
}) {
  return (
    <nav className="col-span-1">
      {topics.map((topic, index) => (
        <div key={index} onClick={() => onChange(topic.id, 0)}>
          {topic.title}
          <div>
            {topic.chapters.map((chapter, cIndex) => (
              <div key={cIndex} onClick={() => onChange(topic.id, cIndex)}>
                {chapter.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
