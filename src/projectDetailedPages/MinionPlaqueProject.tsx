import BlogLayout from "@/customComponents/BlogLayout";
import ExpandableImage from "@/customComponents/ExpandableImage";
import { ModelViewer } from "@/customComponents/ModelViewer";
import MnionGif from "@/assets/images/minionPlaque/minionPlaque.gif";
import type { ProjectEntry } from "@/utils/projectData";

const imageMap = import.meta.glob(
  "../assets/images/minionPlaque/*.{png,jpeg,jpg,svg}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export function MinionPlaqueProject({ lastUpdatedUnix }: ProjectEntry) {
  return (
    <BlogLayout title="Minion Plaque Project" lastUpdatedUnix={lastUpdatedUnix}>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 1: Design & Concept
      </h2>
      <ModelViewer
        modelPath={"./models/Minion Plaque.obj"}
        camVectorInit={[4.717, 2.067, 5.697]}
        targetVectorInit={[2.685, 0.937, -1.406]}
      />
      <p className="mb-6 text-base leading-relaxed">
        I wanted to incorporate two flat steel hex screws as the Minion’s
        goggles, using two pieces of flat aluminum (base + inset plaque) to
        create a fun, functional design.
      </p>
      <div className="flex xs:flex-block justify-center gap-6 mb-6">
        <ExpandableImage
          src={MnionGif}
          alt="Assembly of Minion Plaque"
          description="Minion Plaque assembly"
          className="w-full md:w-[200px] lg:w-[300px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/minionPlaque/MinionModel.png"]}
          alt="Minion model"
          className="w-full md:w-[200px] lg:w-[300px] rounded shadow-sm"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 2: Tool Management & Calibration
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        This build used seven tools:
      </p>
      <ul className="list-disc list-inside mb-4 text-base leading-relaxed">
        {[
          "¼″ flat endmill",
          "⅛″ flat endmill",
          "⅛″ ball endmill",
          "¼″ chamfer mill",
          "#7 drill bit",
          "¼″ drill bit",
          "½″ countersink",
        ].map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <p className="mb-6 text-base leading-relaxed">
        To speed up tool changes without re-zeroing each time, I used a surface
        plate with a height gauge. After each operation, I calibrated off
        it—saving time without sacrificing accuracy.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <ExpandableImage
          src={imageMap["../assets/images/minionPlaque/endmillMeasure.jpeg"]}
          alt="Tool calibration 1"
          description="Measuring tool height on surface plate"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/minionPlaque/drillBitMeasure.jpeg"]}
          alt="Tool calibration 2"
          description="Calibrating second tool group"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 3: Tool Calibration & Offset Setup
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        After measuring each tool’s length using my surface plate and gauge
        setup, I entered all seven lengths into the PathPilot **Tool Offsets
        table** (under the “Tool” tab). This saved me from re-zeroing Z each
        time.
      </p>
      <p className="mb-6 text-base leading-relaxed">Example workflow:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Measure tool length off the machine via gauge height.</li>
        <li>Open PathPilot Offsets → Tools tab.</li>
        <li>Enter each tool’s length under its corresponding “L” offset.</li>
        <li>Save the offsets.</li>
      </ul>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <ExpandableImage
          src={imageMap["../assets/images/minionPlaque/toolOffsetEntry.jpeg"]}
          alt="PathPilot tool offsets screen"
          description="Entering lengths into PathPilot Tool Offsets"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 4: Machining the Plaque
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        I faced, pocketed, contoured, and chamfered both aluminum plates, then
        drilled the screw holes.
      </p>
      <div className="flex xs:flex-block justify-center gap-6 mb-6">
        <ExpandableImage
          src={imageMap["../assets/images/minionPlaque/baseCAM.png"]}
          alt="Base CAM Paths"
          description="Base CAM Paths"
          className="w-auto md:h-[266px] lg:h-[400px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/minionPlaque/finishedBasePart.jpeg"]}
          alt="Finished base part"
          description="Finished base part"
          className="w-full md:w-[200px] lg:w-[300px] rounded shadow-sm"
        />
      </div>
      <div className="flex xs:flex-block justify-center gap-6 mb-6">
        <ExpandableImage
          src={imageMap["../assets/images/minionPlaque/plaqueCAM.png"]}
          alt="Inner plaque CAM Paths"
          description="Inner plaque CAM Paths"
          className="w-auto md:h-[266px] lg:h-[400px] rounded shadow-sm"
        />
        <ExpandableImage
          src={
            imageMap["../assets/images/minionPlaque/finishedPlaquePart.jpeg"]
          }
          alt="Finished plaque part"
          description="Finished plaque part"
          className="w-full md:w-[200px] lg:w-[300px] rounded shadow-sm"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 5: Tapping & Assembly
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        Hand-tapped the holes using a tap guide, then assembled the two plates
        and fitted the steel screws—longer than needed.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 6: Cutting & Finishing the Screws
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        Trimmed the screws with an angle grinder (with proper PPE and
        ventilation), then finished them smoothly on a belt sander.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <ExpandableImage
          src={imageMap["../assets/images/minionPlaque/angleGrinder.jpeg"]}
          alt="Grinding screws"
          description="Angle grinder trim"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 7: Assembly & Reveal
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        Assembled everything and the screws now serve as the Minion’s eyes—a
        fun, functional result that merges mechanical assembly and creative
        design.
      </p>
      <ExpandableImage
        src={imageMap["../assets/images/minionPlaque/finishedMinion.jpeg"]}
        alt="Final Minion plaque"
        description="Final plaque with installed screws"
        className="mx-auto w-full sm:w-[300px] md:w-[400px] rounded shadow-sm mb-12"
      />
    </BlogLayout>
  );
}
