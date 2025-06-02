import ExpandableImage from "@/customComponents/ExpandableImage";
import BlogLayout from "../customComponents/BlogLayout";
import { ModelViewer } from "./ModelViewer";

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
      <div className="ml-8 float-right border-2 border-white">
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
        <strong>micrometers</strong> for checking exact dimensions between
        passes and <strong>edge finders</strong> for accurate setup and
        alignment. Light climb cuts, careful tool pressure management, and
        constant measuring helped avoid deflection and maintain accuracy. It’s
        satisfying to hold something that precise and know it was made
        completely by hand.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 4: Drilling the Dice Dots
      </h2>
      <p className="mb-4 text-base leading-relaxed">
        Once the cube was finished to size, I laid out the classic dice pattern.
        Using a center drill bit on the manual mill, I employed the{" "}
        <strong>peck drilling</strong> technique to mark each dot cleanly and
        accurately. Peck drilling helps clear chips and ensures each mark is
        clean and centered, especially in a shallow hole like this.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        I referenced each face from the same corner using a precise vise and
        vice stop to maintain consistent offsets and symmetry across each face.
      </p>
      <ExpandableImage
        src={imageMap["../assets/images/dice/progress2.jpeg"]}
        alt="Dice progress"
        className="float-right ml-6 mb-4 max-w-[250px] rounded shadow-sm"
      />
      <p className="italic text-sm text-gray-600">
        More details, measurements, and pictures to come — including the
        chamfering and polishing steps.
      </p>
    </BlogLayout>
  );
}
