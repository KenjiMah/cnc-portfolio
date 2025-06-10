import ExpandableImage from "@/customComponents/ExpandableImage";
import BlogLayout from "../customComponents/BlogLayout";
import { ModelViewer } from "../customComponents/ModelViewer";
import type { ProjectEntry } from "@/projectData";

const imageMap = import.meta.glob(
  "../assets/images/metalLetter/*.{png,jpeg,jpg,svg}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export function MetalLetterProject({ lastUpdatedUnix }: ProjectEntry) {
  return (
    <BlogLayout
      title="Learning the Basics: Letter Project"
      lastUpdatedUnix={lastUpdatedUnix}
    >
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 1: CAD Modeling and Blueprint Preparation
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        Before cutting any material, I created a to-scale CAD model of the
        letter and exported a 1:1 blueprint. This gave me a precise reference I
        could physically use during fabrication. After printing the outline, I
        carefully cut out the paper and taped it directly to the aluminum stock.
        This made it easy to trace and cut the exact profile by hand.
      </p>
      <ModelViewer
        modelPath={"./models/Basic Metal Project.obj"}
        camVectorInit={[2.23, 4.12, 3.31]}
        targetVectorInit={[0.76, 0.76, -0.88]}
      />
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 2: Preparing the Aluminum Stock
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        I started with a flat aluminum plate approximately{" "}
        <strong>0.25 inches thick</strong> and just under 2.5 inches wide. The
        initial length was oversized, so I trimmed it down to{" "}
        <strong>3.5 inches</strong> using a vertical bandsaw. This ensured the
        stock had a manageable footprint while still giving me enough material
        to work with for the final letter shape.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 3: Drilling the Keychain Hole
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        Before cutting the profile out of the stock, I needed to drill a hole
        for the keychain attachment. Doing this first was important—once the
        outline is cut, the material becomes more fragile and harder to secure.
        While the stock was still flat and rigid, I clamped it in a vise and
        taped the paper blueprint securely to it so I could align the drill
        press to the correct location.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        I used a center drill followed by a <strong>1/4-inch drill bit</strong>{" "}
        to create the hole. This size comfortably fits a split key ring while
        leaving enough wall thickness around the edge. Drilling early ensured
        accuracy, clean edges, and prevented deformation of the final part.
      </p>
      <ExpandableImage
        src={imageMap["../assets/images/metalLetter/drillPress.jpeg"]}
        alt="Dice progress"
        className="place-self-center md:ml-6 mb-4 w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
      />
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 4: Rough Cutting the Letter Profile
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        I used a <strong>vertical bandsaw</strong> to carefully cut out the
        outline of the letter. This required slow, deliberate cuts — especially
        around the internal corners — to stay tight to the layout while avoiding
        overcutting. Once the basic profile was freed, I removed the paper and
        prepared the piece for finishing.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 5: Edge Cleanup and Chamfering
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        To clean up the rough bandsaw edges and remove any burrs, I used a{" "}
        <strong>Dremel rotary tool</strong> with various sanding and grinding
        attachments. I rounded and chamfered all outside and inside corners to
        soften the geometry and give the piece a more polished, intentional
        appearance. This also made the letter safer to handle by eliminating any
        sharp points.
      </p>
      <div className="flex place-self-center gap-4">
        <ExpandableImage
          src={imageMap["../assets/images/metalLetter/roughCut.jpeg"]}
          alt="Dice progress"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/metalLetter/Dremel.jpeg"]}
          alt="Dice progress"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 6: Adding a Custom Surface Finish
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        For the final step, I used the Dremel again — this time to apply a
        unique surface texture. Moving the tool in tight, controlled swirls, I
        created a fine, directional finish that plays with the light and gives
        the letter a more handcrafted feel. It’s a small detail, but it adds a
        lot of character to the piece and sets it apart from a generic machined
        surface.
      </p>
      <div className="flex place-self-center gap-4">
        <ExpandableImage
          src={imageMap["../assets/images/metalLetter/Facing.jpeg"]}
          alt="Dice progress"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/metalLetter/Letter.jpeg"]}
          alt="Dice progress"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>
    </BlogLayout>
  );
}
