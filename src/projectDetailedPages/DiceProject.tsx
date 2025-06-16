import ExpandableImage from "@/customComponents/ExpandableImage";
import BlogLayout from "../customComponents/BlogLayout";
import { ModelViewer } from "../customComponents/ModelViewer";
import type { ProjectEntry } from "@/projectData";

const imageMap = import.meta.glob(
  "../assets/images/dice/*.{png,jpeg,jpg,svg}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export function DiceProject({ lastUpdatedUnix }: ProjectEntry) {
  return (
    <BlogLayout
      title="Machining a Precision Aluminum Dice"
      lastUpdatedUnix={lastUpdatedUnix}
    >
      <p className="mb-6 text-lg leading-relaxed">
        In this project, I wanted to challenge myself with something deceptively
        simple: making a precision dice cube out of aluminum using a manual
        mill. While it may seem straightforward, the tolerances and attention to
        detail demanded a level of care that rivals CNC work.
      </p>
      {/* Model Viewer */}
      <ModelViewer
        modelPath={"./models/The Dice.obj"}
        camVectorInit={[1.936, 2.03, 2.03]}
        targetVectorInit={[0.0, 0.0, 0.0]}
      />
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 1: Planning and CAD Modeling
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        I started by designing the dice in Fusion 360 to finalize dimensions and
        dot placement before touching any material. This allowed me to visualize
        the finished cube, generate a reference blueprint for machining, and
        ensure that the layout would be symmetrical and consistent. Having a
        detailed CAD model on hand was especially helpful when setting up for
        precise drilling later on.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 2: Cutting the Raw Stock
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        I started with a rough-cut 1in x 1in x 5in aluminum block and used a
        vertical bandsaw to bring it down to just over the target size of{" "}
        <strong>0.95 inches</strong>. The vertical bandsaw is perfect for
        quickly removing bulk material while getting the stock close to square.
      </p>
      <ExpandableImage
        src={imageMap["../assets/images/dice/progress1.jpeg"]}
        alt="Dice progress"
        className="float-none md:float-right md:ml-6 mb-4 w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
      />
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 3: Precision Facing on the Manual Mill
      </h2>
      <p className="mb-4 text-base leading-relaxed">
        With the stock roughed out, I moved to the manual mill for the real
        precision work. I faced all six sides of the cube, using a dial
        indicator and edge finder to ensure squareness and repeatability. The
        goal was a final dimension of exactly 0.9500 inches on all sides — and I
        was able to achieve this within <strong>-0.0003 inches</strong> of
        tolerance.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        I relied heavily on precision measurement tools, including{" "}
        <strong>micrometers</strong> and <strong>calipers</strong> for checking
        exact dimensions between passes and <strong>edge finders</strong> for
        accurate setup and alignment. Light climb cuts, careful tool pressure
        management, and constant measuring helped avoid deflection and maintain
        accuracy. It’s satisfying to hold something that precise and know it was
        made completely by hand.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 4: Drilling the Dice Dots
      </h2>
      <p className="mb-4 text-base leading-relaxed">
        Once the cube was finished to size, I laid out the classic dice pattern.
        Using a center drill bit on the manual mill, I employed dynamic
        touchoffs to zero out the z axis and <strong>peck drilling</strong>{" "}
        techniques to mark each dot cleanly and accurately. Peck drilling helps
        clear chips and ensures each mark is clean and centered, especially in a
        shallow hole like this.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        I referenced each face from the same corner using a precise vise and
        vice stop to maintain consistent offsets and symmetry across each face.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <ExpandableImage
          src={imageMap["../assets/images/dice/progress2.jpeg"]}
          alt="Dice progress 2"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/dice/measure.jpeg"]}
          alt="Measurement setup"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 5: Chamfering the Edges
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        As we near the final product, it’s time to switch out the tool for a{" "}
        <strong>chamfer endmill</strong> and machine a clean bevel along the
        outer edges of the part. This operation is slightly more involved than a
        standard profile cut due to the tool geometry and how we determine the
        point of contact.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        First, we raise the <strong>Z height</strong> so that the chamfer tool
        clears both the vice and vice stop. We’re aiming to cut in roughly the{" "}
        <strong>middle of the chamfer’s cutting area</strong>—in this case, the
        midpoint along the triangular edge of the tool. This ensures consistent
        contact and prevents excessive wear or chatter at the tip.
      </p>
      <ExpandableImage
        src={imageMap["../assets/images/dice/chamferMill.png"]}
        alt="Chamfering setup"
        className="float-none md:float-right md:ml-6 mb-4 w-full sm:w-[280px] md:w-[400px] rounded shadow-sm"
      />
      <p className="mb-6 text-base leading-relaxed">
        We perform a{" "}
        <strong>dynamic touch-off from the positive Y direction </strong> to
        allows us to determine the distance between the{" "}
        <strong>center of the tool</strong> and where the cutting edge actually
        contacts the material. As the tool begins to touch off, we note that
        point and then subtract approximately <strong>0.02 inches</strong>. This
        ensures that when we begin our cut along the X-axis, the tool is backed
        off slightly and not immediately digging into the material.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        Once we’ve found that offset, we can use it to{" "}
        <strong>calculate our final cut positions</strong>. Since we now know
        the difference between the tool center and the actual edge engagement
        point, we can add or subtract that offset from our intended edge
        coordinates. These adjusted values are then entered into the{" "}
        <strong>DRO (Digital Read Out)</strong> to guide our toolpath. This lets
        us confidently chamfer all edges by referencing accurate, corrected
        coordinates that compensate for the unique geometry of the chamfer
        endmill.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-6 w-full ">
        <ExpandableImage
          src={imageMap["../assets/images/dice/chamferProgress.jpeg"]}
          alt="Chamfer in progress"
          className="sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/dice/chamferFinish.jpeg"]}
          alt="Chamfer finished"
          className="sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 6: Tumbling and Polishing
      </h2>

      <p className="mb-6 text-base leading-relaxed">
        With the machining complete, I moved on to finishing the surface. To
        polish the dice, I placed it in a <strong>rotary tumbler</strong> filled
        with <strong>cylindrical ceramic media</strong>. This media is ideal for
        smoothing out tool marks and creating a soft satin finish without
        removing too much material or rounding the sharp edges.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        The tumbling process ran for several days to ensure an even polish on
        all faces. While slower than hand-polishing, this method provides a
        consistent surface finish that blends the chamfers, drilled faces, and
        edges beautifully. I occasionally paused to rinse the dice and remove
        slurry buildup between cycles.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        As expected, the prolonged exposure to water and air in the tumbler led
        to slight <strong>oxidation of the aluminum</strong>. This gave the
        surface a muted, slightly gray tone — not accidental, but also not
        highly controlled. The result complements the satin finish and enhances
        the industrial, handmade feel of the piece.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        The final result is a smooth, even finish that highlights the precision
        of the machining underneath — a tactile reminder that this dice wasn’t
        just machined, but carefully refined.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <ExpandableImage
          src={imageMap["../assets/images/dice/tumblerPrep.jpeg"]}
          alt="Tumbler prep"
          description="Initial tumble setup"
          className="float-none md:float-right md:ml-6 mb-6 w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/dice/tumblerStart.jpeg"]}
          alt="Tumbler start"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/dice/24HrProgress.jpeg"]}
          alt="24h tumble"
          description="After 24 hours"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/dice/96HrProgress.jpeg"]}
          alt="96h tumble"
          description="After 96 hours"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>

      {/* Final Image */}
      <ExpandableImage
        src={imageMap["../assets/images/dice/Finished.jpeg"]}
        alt="Finished dice"
        description="Final product"
        className="mx-auto w-full sm:w-[300px] md:w-[350px] rounded shadow-sm mb-12"
      />
    </BlogLayout>
  );
}
