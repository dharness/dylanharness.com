import demoReel from "./assets/projects/demo-reel/thumbnail.png?as=webp";
import skiBoots from "./assets/projects/ski-boots/thumbnail.png?as=webp";
import broncoHenry from "./assets/projects/bronco-henry/thumbnail.png?as=webp";
import overEats from "./assets/projects/over-eats/thumbnail.png?as=webp";
import freshCaught from "./assets/projects/fresh-caught/thumbnail.png?as=webp";
import feeRanger from "./assets/projects/fee-ranger/thumbnail.png?as=webp";
import gatorGum from "./assets/projects/gator-gum/thumbnail.png?as=webp";
import propmaker from "./assets/projects/propmaker/thumbnail.png?as=webp";
import portraitOfALady from "./assets/projects/portrait-of-a-lady/thumbnail.png?as=webp";
import purpleBusiness from "./assets/projects/purple-business/thumbnail.png?as=webp";

interface Project {
  name: string;
  hoverColor: string;
  vimeoId: string;
  aspectRatio?: AspectRatio;
  thumbnail: string;
}

export enum AspectRatio {
  $1x1,
  $4x3,
}

const projectData: Project[] = [
  {
    name: "reel",
    hoverColor: "#F0783E",
    vimeoId: "823151596",
    aspectRatio: AspectRatio.$4x3,
    thumbnail: demoReel,
  },
  {
    name: "ski-boots",
    hoverColor: "#F0783E",
    vimeoId: "822564645",
    aspectRatio: AspectRatio.$4x3,
    thumbnail: skiBoots,
  },
  {
    name: "bronco-henry",
    hoverColor: "#F0783E",
    vimeoId: "698724426",
    aspectRatio: AspectRatio.$1x1,
    thumbnail: broncoHenry,
  },
  {
    name: "over-eats",
    hoverColor: "#F0783E",
    vimeoId: "822564471",
    aspectRatio: AspectRatio.$1x1,
    thumbnail: overEats,
  },
  {
    name: "fresh-caught",
    hoverColor: "#F0783E",
    vimeoId: "722676961",
    aspectRatio: AspectRatio.$4x3,
    thumbnail: freshCaught,
  },
  {
    name: "fee-ranger",
    hoverColor: "#F0783E",
    vimeoId: "822564552",
    aspectRatio: AspectRatio.$4x3,
    thumbnail: feeRanger,
  },
  {
    name: "gator-gum",
    hoverColor: "#F0783E",
    vimeoId: "722708475",
    aspectRatio: AspectRatio.$1x1,
    thumbnail: gatorGum,
  },
  {
    name: "propmaker",
    hoverColor: "#F0783E",
    vimeoId: "822564291",
    aspectRatio: AspectRatio.$1x1,
    thumbnail: propmaker,
  },
  {
    name: "portrait-of-a-lady",
    hoverColor: "#F0783E",
    vimeoId: "686802629",
    aspectRatio: AspectRatio.$1x1,
    thumbnail: portraitOfALady,
  },
  {
    name: "purple-business",
    hoverColor: "#F0783E",
    vimeoId: "822563879",
    aspectRatio: AspectRatio.$4x3,
    thumbnail: purpleBusiness,
  },
];

export { projectData };
export type { Project };
