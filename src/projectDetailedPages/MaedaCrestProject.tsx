import ExpandableImage from "@/customComponents/ExpandableImage";
import BlogLayout from "../customComponents/BlogLayout";
import { ModelViewer } from "../customComponents/ModelViewer";

const imageMap = import.meta.glob(
  "../assets/images/maedaCrest/*.{png,jpeg,jpg,svg}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export function MaedaCrestProject() {
  return (
    <BlogLayout title="Crafting a Symbol: Maeda Crest Project">
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 1: Design and Blueprint Transfer
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        For this project, I chose to cut out a{" "}
        <strong>Maeda family crest</strong> instead of a letter. This has
        personal significance, as it is my mother’s family crest. I started by
        scaling the design to fit my chosen stock size —{" "}
        <strong>2.5 x 2.5 x 0.25 inches</strong>. Instead of taping a paper
        blueprint, I used <strong>carbon transfer paper</strong> and a{" "}
        <strong>scribe</strong> to outline the crest directly onto the aluminum
        surface.
      </p>
      <ModelViewer
        modelPath={"./models/MaedaCrest.obj"}
        camVectorInit={[1.27, 1.06, 3.41]}
        targetVectorInit={[1.3, 0.97, -0.5]}
      />
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 2: Rough Cutting with Bandsaw
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        I used a <strong>vertical bandsaw</strong> to cut out the basic outer
        shape of the crest. Before tackling the curves, I made several{" "}
        <strong>relief cuts</strong> to help guide the blade and reduce tension
        during turns. This step was crucial for preventing overcuts in the
        delicate curves.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 3: Precision Cuts with Jeweler’s Saw
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        To handle the intricate details and tight corners of the Maeda crest, I
        used a <strong>jeweler’s saw</strong>. This was my first time using this
        tool, and I learned quickly how important it is to cut in one direction
        and avoid snags. I broke several blades in the process but gained
        valuable skill and appreciation for the tool’s capabilities.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 4: Surface Cleanup and Finishing
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        For finishing, I opted to use a <strong>table grinder</strong> instead
        of a Dremel. This allowed me to smooth the edges and apply a subtle
        surface texture that complements the handmade quality of the crest.
        While less refined than rotary tools, the grinder gave it a clean,
        industrial look with a personal touch.
      </p>

      <div className="flex place-self-center gap-4">
        <ExpandableImage
          src={imageMap["../assets/images/maedaCrest/progress1.jpeg"]}
          alt="Detailed cutout of Maeda crest"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/maedaCrest/Crest.jpeg"]}
          alt="Finished Maeda crest with surface finish"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>
    </BlogLayout>
  );
}
