export const ROUTES = {
  PROJECTPAGE: "projects",
  ABOUTMEPAGE: "about",
};

const imageMap = import.meta.glob("./assets/images/**/*.{png,jpeg,jpg,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const projects = [
  {
    id: "dice",
    title: "Precise Dice",
    projectType: "Case Study",
    description:
      "Precision practice for facing a perfect cube with -0.0003 tolerance",
    image: imageMap["./assets/images/dice/progress2.jpeg"],
  },
  {
    id: "metalLetter",
    title: "Metal Letter",
    projectType: "Case Study",
    description: "Beginner metal working project for learning metalshop tools.",
    image: imageMap["./assets/images/metalLetter/Letter.jpeg"],
  },
  {
    id: "maedaCrest",
    title: "Maeda Crest",
    projectType: "Case Study",
    description: "Beginner metal working project for learning metalshop tools.",
    image: imageMap["./assets/images/maedaCrest/Crest.jpeg"],
  },
  {
    id: "poroKeycaps",
    title: "3D Printed Keycaps",
    projectType: "SLA 3D Printing",
    description:
      "Printed some cute looking keycaps using the ELEGOO Saturn 2 MSLA 3D Printer.",
    image: imageMap["./assets/images/poroKeycaps/poroKeycaps.jpeg"],
  },
  {
    id: "parklet",
    title: "Mobile Parklet",
    projectType: "Woodworking",
    description:
      "Took part in designing and building a mobile parklet that ran along Ocean Ave.",
    image: "https://live.staticflickr.com/1634/24337360616_cb95a9141b_b.jpg",
  },
];
