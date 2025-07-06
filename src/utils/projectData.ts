import { MinionPlaqueProject } from "@/projectDetailedPages/MinionPlaqueProject";
import { BasketballKeycapProject } from "../projectDetailedPages/BasketballKeycapProject";
import { CncLetterProject } from "../projectDetailedPages/CncLetterProject";
import { DiceProject } from "../projectDetailedPages/DiceProject";
import { MaedaCrestProject } from "../projectDetailedPages/MaedaCrestProject";
import { MetalLetterProject } from "../projectDetailedPages/MetalLetterProject";
import { ParkletProject } from "../projectDetailedPages/ParkletProject";
import { ThreeDKeycapsProject } from "../projectDetailedPages/ThreeDKeycapsProject";

export const ALL_IMAGES_MAP = import.meta.glob(
  "../assets/images/**/*.{png,jpeg,jpg,svg}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

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
    id: "minionPlaque",
    title: "Minion Plaque",
    projectType: "Case Study",
    description:
      "Designed and milled a Minion plaque for a custom project, with a focus on precision and aesthetics.",
    // Placeholder image, replace with actual image path
    image: ALL_IMAGES_MAP["../assets/images/minionPlaque/finishedMinion.jpeg"],
    tags: [
      "CNC Machining",
      "Keycap Design",
      "Tormach PCNC 1100",
      "CAM",
      "Aluminum",
      "Fusion 360",
      "Ball End Mill",
      "Tapping",
      "Tool Offsets",
      "Workholding",
      "Tramming",
      "Surface Finish",
      "Tapered End Mill",
    ],
    lastUpdatedUnix: 1751731026,
  },
  {
    id: "basketballKeycap",
    title: "Basketball Keycap",
    projectType: "Case Study",
    description:
      "Designed and milled a basketball keycap for a custom keyboard, with a focus on precision and aesthetics.",
    // Placeholder image, replace with actual image path
    image:
      ALL_IMAGES_MAP[
        "../assets/images/basketballKeycap/BasketballKeycapModel.png"
      ],
    tags: [
      "CNC Machining",
      "Keycap Design",
      "Tormach PCNC 1100",
      "CAM",
      "Aluminum",
      "Prototyping",
      "Micrometer",
      "Foam Machining",
      "Fusion 360",
      "Tool Deflection",
      "Finishing Passes",
      "Ball End Mill",
      "Workholding",
      "Tramming",
      "Surface Finish",
      "Tapered End Mill",
    ],
    lastUpdatedUnix: 1750399542,
  },
  {
    id: "CNCLetter",
    title: "CNC Letter",
    projectType: "Case Study",
    description: "Milled a custom letter focusing on the CNC process.",
    image: ALL_IMAGES_MAP["../assets/images/cncLetter/finished.jpeg"],
    tags: [
      "CNC Machining",
      "Tormach PCNC 1100",
      "CAM",
      "Aluminum",
      "Pocketing",
      "Contour Cutting",
      "Chamfering",
      "Toolpaths",
      "Endmills",
      "Keychain Design",
      "Manual Milling",
      "Finishing",
      "Jeweler’s Saw",
      "Grinding Wheel",
      "Fusion 360",
    ],
    lastUpdatedUnix: 1749754603,
  },
  {
    id: "dice",
    title: "Precise Dice",
    projectType: "Case Study",
    description:
      'Precision practice for facing a perfect cube with -0.0003" tolerance',
    image: ALL_IMAGES_MAP["../assets/images/dice/Finished.jpeg"],
    tags: [
      "Manual Milling",
      "Aluminum",
      "Precision Machining",
      "Dice Making",
      "Fusion 360",
      "Facing",
      "Chamfering",
      "Micrometer",
      "Peck Drilling",
      "Tool Setup",
      "Tolerances",
      "Rotary Tumbling",
      "Ceramic Media",
      "Surface Finishing",
      "Dial Indicator",
    ],
    lastUpdatedUnix: 1749575996,
  },
  {
    id: "metalLetter",
    title: "Metal Letter",
    projectType: "Case Study",
    description: "Beginner metal working project for learning metalshop tools.",
    image: ALL_IMAGES_MAP["../assets/images/metalLetter/Letter.jpeg"],
    tags: [
      "Aluminum",
      "Hand Tools",
      "Paper Transfer",
      "Vertical Bandsaw",
      "Drill Press",
      "Keychain Hole",
      "Manual Fabrication",
      "Dremel",
      "Bandsaw",
      "Chamfering",
      "Surface Finishing",
      "Rotary Tool",
    ],
    lastUpdatedUnix: 1749575965,
  },
  {
    id: "maedaCrest",
    title: "Maeda Crest",
    projectType: "Case Study",
    description: "Beginner metal working project for learning metalshop tools.",
    image: ALL_IMAGES_MAP["../assets/images/maedaCrest/Crest.jpeg"],
    tags: [
      "Aluminum",
      "Hand Tools",
      "Jeweler’s Saw",
      "Carbon Transfer Paper",
      "Bandsaw",
      "Relief Cuts",
      "Manual Fabrication",
      "Surface Finishing",
      "Table Grinder",
      "Precision Cutting",
      "Craftsmanship",
      "Metalworking",
    ],
    lastUpdatedUnix: 1749575966,
  },
  {
    id: "poroKeycaps",
    title: "3D Printed Keycaps",
    projectType: "SLA 3D Printing",
    description:
      "Printed some cute looking keycaps using the ELEGOO Saturn 2 MSLA 3D Printer.",
    image: ALL_IMAGES_MAP["../assets/images/poroKeycaps/poroKeycaps.jpeg"],
    tags: [
      "3D Printing",
      "Resin Printing",
      "Keycap Design",
      "Custom Keycaps",
      "Lychee Slicer",
      "UV Curing",
      "Isopropyl Cleaning",
      "Miniature Painting",
      "Model Finishing",
    ],
    lastUpdatedUnix: 1749575936,
  },
  {
    id: "parklet",
    title: "Mobile Parklet",
    projectType: "Community Project",
    description:
      "Took part in designing and building a mobile parklet that ran along Ocean Ave.",
    image: "https://live.staticflickr.com/1634/24337360616_cb95a9141b_b.jpg",
    tags: [
      "Community Design",
      "Architecture",
      "Public Space",
      "Full-Scale Fabrication",
      "Seating Design",
      "Wood Construction",
      "Power Tools",
      "Youth Art Exchange",
      "Iterative Design",
      "Collaboration",
      "Urban Design",
      "Portable Structures",
      "Furniture Prototyping",
      "Civic Engagement",
    ],
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
  minionPlaque: MinionPlaqueProject,
};
