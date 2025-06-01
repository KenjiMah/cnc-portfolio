const imageMap = import.meta.glob("./assets/images/**/*.{png,jpeg,jpg,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const projects = [
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
];
