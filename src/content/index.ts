import {
  gebieteGrenzenbisHeute,
  mapDataPoint,
  timelineDataPoint,
} from "./data";
import image01 from "/images/20240323-ba-newroz-012.jpg";

const topics: topic[] = [
  {
    id: 0,
    title: "Gebiete & Grenzen",
    chapters: [
      {
        title: "Ende Des Osmanischen Reichs bis heute",
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "timeline",
        content: [
          {
            title: "content",
            type: "text",
            content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,`,
          },
          { content: image01, type: "image" },
          { content: "Krasses Zitat", type: "quote" },
          { content: "/videos/C0007.MP4", type: "video" },
        ],
      },
      {
        title: "kapitel 2",
        content: [{ content: "asfdafadfa", type: "text" }],
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "filter",
      },
    ],
  },
];

export type chapterContent = {
  title?: string;
  type: "text" | "quote" | "image" | "video";
  content: string;
};

export type chapter =
  | {
      title: string;
      content: chapterContent[];
      interactionData: mapDataPoint[];
      interactionType: "filter";
    }
  | {
      title: string;
      content: chapterContent[];
      interactionData: timelineDataPoint[];
      interactionType: "timeline";
    };

export type topic = { id: number; title: string; chapters: chapter[] };

export type topicList = { topics: topic[]; get: (id: number) => topic };

export const topicList: topicList = {
  topics: topics,
  get(id) {
    return topics.find((topic) => topic.id === id) ?? topics[0];
  },
};
