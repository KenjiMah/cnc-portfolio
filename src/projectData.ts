import { BasketballKeycapProject } from "./projectDetailedPages/BasketballKeycapProject";
import { CncLetterProject } from "./projectDetailedPages/CncLetterProject";
import { DiceProject } from "./projectDetailedPages/DiceProject";
import { MaedaCrestProject } from "./projectDetailedPages/MaedaCrestProject";
import { MetalLetterProject } from "./projectDetailedPages/MetalLetterProject";
import { ParkletProject } from "./projectDetailedPages/ParkletProject";
import { ThreeDKeycapsProject } from "./projectDetailedPages/ThreeDKeycapsProject";

const imageMap = import.meta.glob("./assets/images/**/*.{png,jpeg,jpg,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export interface ProjectEntry {
  id: string;
  title: string;
  projectType: string;
  description: string;
  tags?: string[]; // Optional tags for categorization
  image: string; // or possibly something like HTMLImageElement or a custom type if you're not using a simple path
  detailedPage?: React.ComponentType; // Uncomment and type accordingly if needed
  lastUpdatedUnix: number;
}

export const projects: ProjectEntry[] = [
  {
    id: "basketballKeycap",
    title: "Basketball Keycap",
    projectType: "Case Study",
    description:
      "Designed and milled a basketball keycap for a custom keyboard, with a focus on precision and aesthetics.",
    // Placeholder image, replace with actual image path
    image:
      imageMap["./assets/images/basketballKeycap/BasketballKeycapModel.png"],
    tags: ["3D Printing", "CNC Milling", "Keycap Design"],
    lastUpdatedUnix: 1750275382,
  },
  {
    id: "CNCLetter",
    title: "CNC Letter",
    projectType: "Case Study",
    description: "Milled a custom letter focusing on the CNC process.",
    image: imageMap["./assets/images/cncLetter/finished.jpeg"],
    tags: ["CNC Milling", "Aluminum", "CAM"],
    lastUpdatedUnix: 1749754603,
  },
  {
    id: "dice",
    title: "Precise Dice",
    projectType: "Case Study",
    description:
      'Precision practice for facing a perfect cube with -0.0003" tolerance',
    image: imageMap["./assets/images/dice/Finished.jpeg"],
    tags: ["CNC Milling", "Aluminum"],
    lastUpdatedUnix: 1749575996,
  },
  {
    id: "metalLetter",
    title: "Metal Letter",
    projectType: "Case Study",
    description: "Beginner metal working project for learning metalshop tools.",
    image: imageMap["./assets/images/metalLetter/Letter.jpeg"],
    tags: ["Aluminum"],
    lastUpdatedUnix: 1749575965,
  },
  {
    id: "maedaCrest",
    title: "Maeda Crest",
    projectType: "Case Study",
    description: "Beginner metal working project for learning metalshop tools.",
    image: imageMap["./assets/images/maedaCrest/Crest.jpeg"],
    tags: ["Aluminum"],
    lastUpdatedUnix: 1749575966,
  },
  {
    id: "poroKeycaps",
    title: "3D Printed Keycaps",
    projectType: "SLA 3D Printing",
    description:
      "Printed some cute looking keycaps using the ELEGOO Saturn 2 MSLA 3D Printer.",
    image: imageMap["./assets/images/poroKeycaps/poroKeycaps.jpeg"],
    tags: ["3D Printing", "SLA"],
    lastUpdatedUnix: 1749575936,
  },
  {
    id: "parklet",
    title: "Mobile Parklet",
    projectType: "Woodworking",
    description:
      "Took part in designing and building a mobile parklet that ran along Ocean Ave.",
    image: "https://live.staticflickr.com/1634/24337360616_cb95a9141b_b.jpg",
    tags: ["Woodworking", "Design in Public"],
    lastUpdatedUnix: 1749575926,
  },
];

export const PROJECT_MAPPER: Record<
  string,
  React.ComponentType<ProjectEntry>
> = {
  basketballKeycap: BasketballKeycapProject,
  CNCLetter: CncLetterProject,
  dice: DiceProject,
  metalLetter: MetalLetterProject,
  maedaCrest: MaedaCrestProject,
  poroKeycaps: ThreeDKeycapsProject,
  parklet: ParkletProject,
};
