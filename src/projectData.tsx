interface Project {
  name: string;
  hoverColor: string;
  vimeoId: string;
  aspectRatio?: AspectRatio;
}

export enum AspectRatio {
  $1x1,
  $4x3,
}

const projectData: Project[] = [
  {
    name: "demo-reel",
    hoverColor: "#F0783E",
    vimeoId: "823151596",
    aspectRatio: AspectRatio.$4x3,
  },
  {
    name: "ski-boots",
    hoverColor: "#F0783E",
    vimeoId: "822564645",
    aspectRatio: AspectRatio.$4x3,
  },
  {
    name: "bronco-henry",
    hoverColor: "#F0783E",
    vimeoId: "698724426",
    aspectRatio: AspectRatio.$1x1,
  },
  {
    name: "over-eats",
    hoverColor: "#F0783E",
    vimeoId: "822564471",
    aspectRatio: AspectRatio.$1x1,
  },
  {
    name: "fresh-caught",
    hoverColor: "#F0783E",
    vimeoId: "722676961",
    aspectRatio: AspectRatio.$4x3,
  },
  {
    name: "fee-ranger",
    hoverColor: "#F0783E",
    vimeoId: "822564552",
    aspectRatio: AspectRatio.$4x3,
  },
  {
    name: "gator-gum",
    hoverColor: "#F0783E",
    vimeoId: "722708475",
    aspectRatio: AspectRatio.$1x1,
  },
  {
    name: "propmaker",
    hoverColor: "#F0783E",
    vimeoId: "822564291",
    aspectRatio: AspectRatio.$1x1,
  },
  {
    name: "portrait-of-a-lady",
    hoverColor: "#F0783E",
    vimeoId: "686802629",
    aspectRatio: AspectRatio.$1x1,
  },
  {
    name: "purple-business",
    hoverColor: "#F0783E",
    vimeoId: "822563879",
    aspectRatio: AspectRatio.$4x3,
  },
];

export { projectData };
export type { Project };
