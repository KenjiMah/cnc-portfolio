import ExpandableImage from "@/customComponents/ExpandableImage";
import BlogLayout from "../customComponents/BlogLayout";
import { ModelViewer } from "../customComponents/ModelViewer";
import type { ProjectEntry } from "@/utils/projectData";

const imageMap = import.meta.glob(
  "../assets/images/cncLetter/*.{png,jpeg,jpg,svg}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export function CncLetterProject({ lastUpdatedUnix }: ProjectEntry) {
  return (
    <BlogLayout
      title="First CAM Project: Letter Carved on Tormach PCNC 1100"
      lastUpdatedUnix={lastUpdatedUnix}
    >
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Introduction & CAM Focus
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        This was my first experience using the Tormach PCNC 1100 CNC mill. I
        designed a letter profile in CAD, and focused heavily on CAM to machine
        features beyond what I could do by hand—like pockets, keychain holes,
        and sharper chamfers.
      </p>
      <ModelViewer
        modelPath={"./models/CNC Letter Project.obj"}
        camVectorInit={[2.61, 2.54, 3.76]}
        targetVectorInit={[0.4, 1.02, -1.37]}
      />
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 1: Preparing the Stock
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        I started with a long piece of aluminum and used a horizontal bandsaw to
        cut it down to rough dimensions, ensuring it fit the Tormach vise
        securely.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 2: Facing the Stock (Manual Mill)
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        Instead of using the CNC, I faced the stock quickly on my manual mill
        for a clean, flat surface before CAM work. This setup prep saved time
        and ensured consistent material height.
      </p>
      <ExpandableImage
        src={imageMap["../assets/images/cncLetter/Facing.jpeg"]}
        alt="Facing the stock"
        description="Facing the stock on the Tormach"
        className=" place-self-center w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 3: Pocket & Keychain Holes (CAM)
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        I began with a <strong>⅛″ flat endmill</strong>,to reach tighter corners
        and machine the keychain hole before cutting the perimeter.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <ExpandableImage
          src={imageMap["../assets/images/cncLetter/0.125CAM.png"]}
          alt="Pocket CAM setup"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/cncLetter/0.125Pocket.jpeg"]}
          alt="Pocket and keychain hole"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 4: Contour Cut & Outline with Tabs
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        I left the outline for last to maintain rigidity. A ¼″ endmill cut the
        letter’s perimeter with support tabs, ensuring the stock stayed secure
        until the end.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <ExpandableImage
          src={imageMap["../assets/images/cncLetter/0.25CAM.png"]}
          alt="Contour CAM setup"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/cncLetter/0.25Contour.jpeg"]}
          alt="Contour"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 5: 45° Chamfer for Sharp Edges
      </h2>
      <ExpandableImage
        src={imageMap["../assets/images/tormach/chamfer_setup.jpeg"]}
        alt="Chamfer path preview"
        description="45° chamfer in CAM"
        className="float-none md:float-right md:ml-6 mb-4 w-full sm:w-[200px] md:w-[300px] rounded shadow-sm"
      />
      <p className="mb-6 text-base leading-relaxed">
        I added a <strong>45° chamfer</strong> using a chamfer bit, with
        accurate plunge heights to avoid gouging. This sharpened the letter’s
        edges and refined the finish.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <ExpandableImage
          src={imageMap["../assets/images/cncLetter/ChamferCAM.png"]}
          alt="Dice progress 2"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/cncLetter/Chamfer.jpeg"]}
          alt="Measurement setup"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 6: Remove Tabs & Final Finishing
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        After the contour cut, I removed the support tabs with a{" "}
        <strong>jeweler’s saw</strong> to preserve the shell’s outer profile.
        Once the tabs were off, I refined the edges on a{" "}
        <strong>grinding wheel</strong> to smooth out any remaining material and
        clean up the shape. Finally, I hand-sanded the edges for a refined
        finish.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <ExpandableImage
          src={imageMap["../assets/images/cncLetter/tab_removal1.jpeg"]}
          alt="Removing tabs with jeweler's saw"
          description="Starting to saw off tabs"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/cncLetter/tab_removal2.jpeg"]}
          alt="Grinding tabs smooth"
          description="Grinding wheel cleanup"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/cncLetter/finished.jpeg"]}
          alt="Final polished letter"
          description="Finished, polished letter"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Final CAM Summary & Takeaways
      </h2>
      <ul className="list-disc list-inside mb-6 text-base leading-relaxed">
        <li>
          <strong>Tool strategy:</strong> Used ¼″ bit for rapid material
          removal, then ⅛″ bit for tighter corner cleanup and keychain hole.
        </li>
        <li>
          <strong>Pocket first, outline last:</strong> Kept stock rigid during
          processing.
        </li>
        <li>
          <strong>Tabs:</strong> Held part in place to prevent “flying.”
        </li>
        <li>
          <strong>Pocket depth:</strong> 0.05″ for inset feature.
        </li>
        <li>
          <strong>Feeds & speeds:</strong> ~¼ tool diameter, balancing speed and
          rigidity.
        </li>
        <li>
          <strong>Chamfer angle:</strong> 45° with precise plunge height for
          quality edge.
        </li>
        <li>
          <strong>Keychain hole:</strong> Machined before contour to ensure
          holding area remained intact.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Final Thoughts</h2>
      <p className="mb-12 text-base leading-relaxed">
        This project emphasized strategic tool usage: fast roughing, tight
        feature cleanup, and keeping the outline for last. It taught me how CAM
        sequencing, bit selection, and stock support make the difference between
        a sloppy part and a clean, precise finish.
      </p>
    </BlogLayout>
  );
}
