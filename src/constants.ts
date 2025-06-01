const imageMap = import.meta.glob("./assets/images/**/*.{png,jpeg,jpg,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const projects = [
  {
    title: "Metal Letter",
    description: "Beginner metal working project for learning metalshop tools",
    image: imageMap["./assets/images/metalLetter/Letter.jpeg"],
  },
  {
    title: "Engraved Nameplate",
    description: "High-speed engraving with custom font.",
    image: imageMap["./assets/images/maedaCrest/Crest.jpeg"],
  },
  {
    title: "Engraved Nameplate",
    description: "High-speed engraving with custom font.",
    image: imageMap["./assets/images/maedaCrest/Crest.jpeg"],
  },
  {
    title: "Engraved Nameplate",
    description: "High-speed engraving with custom font.",
    image: imageMap["./assets/images/maedaCrest/Crest.jpeg"],
  },
  {
    title: "Engraved Nameplate",
    description: "High-speed engraving with custom font.",
    image: imageMap["./assets/images/maedaCrest/Crest.jpeg"],
  },
];
