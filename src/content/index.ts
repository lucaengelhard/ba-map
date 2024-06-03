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
        title: "Ursprünge",
        content: [
          { title: "Fruchtbarer Halbmond", content: "", type: "text" },
          { title: "Ursprungsgebiete", content: "", type: "text" },
          { title: "Frühe Zusammenschlüsse", content: "", type: "text" },
        ],
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "timeline",
      },
      {
        title: "Beherrscht",
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "timeline",
        content: [
          { title: "Alexander der Große", content: "", type: "text" },
          { title: "Selukiden", content: "", type: "text" },
          { title: "Partherreich", content: "", type: "text" },
          { title: "Römer", content: "", type: "text" },
          { title: "Islamisches Reich", content: "", type: "text" },
        ],
      },
      {
        title: "Fürstentümer",
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "timeline",
        content: [
          {
            title: "Dynastien im Islamischen Reich",
            content: "",
            type: "text",
          },
          { title: "Seldschuken", content: "", type: "text" },
          { title: "Osmansiches Reich", content: "", type: "text" },
        ],
      },
      {
        title: "Ende Des Osmanischen Reichs",
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "timeline",
        content: [
          {
            title: "Griechische Expansion",
            type: "text",
            content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,`,
          },
          { content: image01, type: "image" },
          {
            content:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            type: "quote",
          },
          { content: "/videos/C0007.MP4", type: "video" },
          { title: "Attatürks Feldzug", content: "", type: "text" },
          { title: "Sevres & Lausanne", content: "", type: "text" },
        ],
      },
      {
        title: "Heute",
        content: [{ content: "asfdafadfa", type: "text" }],
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "filter",
      },
    ],
  },
  {
    id: 1,
    title: "Demografie",
    chapters: [
      {
        title: "Lebensstandard",
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "timeline",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      },
      {
        title: "Bevölkerungsanteil",
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "timeline",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      },
      {
        title: "Sprache",
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "timeline",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      },
      {
        title: "Religion",
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "timeline",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      },
    ],
  },
  {
    id: 2,
    title: "Unterdrückung & Widerstand",
    chapters: [
      {
        title: "Verbote",
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "timeline",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      },
      {
        title: "Genozide",
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "timeline",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      },
      {
        title: "Widerstand",
        interactionData: gebieteGrenzenbisHeute,
        interactionType: "timeline",
        content: [{ title: "Überschrift", content: "", type: "text" }],
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
