// import { BasketballKeycapProject } from "./projectDetailedPages/BasketballKeycapProject";
import { DiceProject } from "./projectDetailedPages/DiceProject";
import { MaedaCrestProject } from "./projectDetailedPages/MaedaCrestProject";
import { MetalLetterProject } from "./projectDetailedPages/MetalLetterProject";
import { ParkletProject } from "./projectDetailedPages/ParkletProject";
import { ThreeDKeycapsProject } from "./projectDetailedPages/ThreeDKeycapsProject";

const imageMap = import.meta.glob("./assets/images/**/*.{png,jpeg,jpg,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const projects = [
  {
    id: "basketballKeycap",
    title: "Basketball Keycap",
    projectType: "Case Study",
    description:
      "Designed and milled a basketball keycap for a custom keyboard, with a focus on precision and aesthetics.",
    // Placeholder image, replace with actual image path
    image:
      imageMap["./assets/images/basketballKeycap/BasketballKeycapModel.png"],
    // detailedPage: BasketballKeycapProject,
  },
  {
    id: "dice",
    title: "Precise Dice",
    projectType: "Case Study",
    description:
      'Precision practice for facing a perfect cube with -0.0003" tolerance',
    image: imageMap["./assets/images/dice/progress2.jpeg"],
    detailedPage: DiceProject,
  },
  {
    id: "metalLetter",
    title: "Metal Letter",
    projectType: "Case Study",
    description: "Beginner metal working project for learning metalshop tools.",
    image: imageMap["./assets/images/metalLetter/Letter.jpeg"],
    detailedPage: MetalLetterProject,
  },
  {
    id: "maedaCrest",
    title: "Maeda Crest",
    projectType: "Case Study",
    description: "Beginner metal working project for learning metalshop tools.",
    image: imageMap["./assets/images/maedaCrest/Crest.jpeg"],
    detailedPage: MaedaCrestProject,
  },
  {
    id: "poroKeycaps",
    title: "3D Printed Keycaps",
    projectType: "SLA 3D Printing",
    description:
      "Printed some cute looking keycaps using the ELEGOO Saturn 2 MSLA 3D Printer.",
    image: imageMap["./assets/images/poroKeycaps/poroKeycaps.jpeg"],
    detailedPage: ThreeDKeycapsProject,
  },
  {
    id: "parklet",
    title: "Mobile Parklet",
    projectType: "Woodworking",
    description:
      "Took part in designing and building a mobile parklet that ran along Ocean Ave.",
    image: "https://live.staticflickr.com/1634/24337360616_cb95a9141b_b.jpg",
    detailedPage: ParkletProject,
  },
];
