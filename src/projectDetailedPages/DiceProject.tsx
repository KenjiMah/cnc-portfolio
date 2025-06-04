import ExpandableImage from "@/customComponents/ExpandableImage";
import BlogLayout from "../customComponents/BlogLayout";
import { ModelViewer } from "../customComponents/ModelViewer";

const imageMap = import.meta.glob(
  "../assets/images/dice/*.{png,jpeg,jpg,svg}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export function DiceProject() {
  return (
    <BlogLayout title="Machining a Precision Aluminum Dice">
      <p className="mb-6 text-lg leading-relaxed">
        In this project, I wanted to challenge myself with something deceptively
        simple: making a precision dice cube out of aluminum using a manual
        mill. While it may seem straightforward, the tolerances and attention to
        detail demanded a level of care that rivals CNC work.
      </p>
      <div className="ml-8 md:float-right border-2 border-white w-[300px] h-[200px] lg:w-[600px] lg:h-[400px]">
        <ModelViewer modelPath={"./models/The Dice v6.obj"} />
      </div>
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
        className="float-right ml-6 mb-4 max-w-[250px] rounded shadow-sm"
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
      <div className="flex place-self-center gap-6">
        <ExpandableImage
          src={imageMap["../assets/images/dice/progress2.jpeg"]}
          alt="Dice progress"
          className="ml-6 mb-4 max-w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/dice/measure.jpeg"]}
          alt="Dice progress"
          className="ml-6 mb-4 max-w-[250px] rounded shadow-sm"
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
        alt="Dice progress"
        className="float-right ml-6 mb-4 max-w-[400px] rounded shadow-sm"
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
      <div className="flex place-self-center gap-6">
        <ExpandableImage
          src={imageMap["../assets/images/dice/chamferProgress.jpeg"]}
          alt="Dice progress"
          className="mb-4 max-w-[250px] rounded shadow-sm"
        />
      </div>

      <p className="italic text-sm text-gray-600">
        More details, measurements, and pictures to come — including the
        chamfering and polishing steps.
      </p>
    </BlogLayout>
  );
}
