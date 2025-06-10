import ExpandableImage from "@/customComponents/ExpandableImage";
import BlogLayout from "../customComponents/BlogLayout";
import type { ProjectEntry } from "@/projectData";

const imageMap = import.meta.glob(
  "../assets/images/poroKeycaps/*.{png,jpeg,jpg,svg}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export function ThreeDKeycapsProject({ lastUpdatedUnix }: ProjectEntry) {
  return (
    <BlogLayout
      title="Exploring 3D Printing: From Failures to Painted Keycaps"
      lastUpdatedUnix={lastUpdatedUnix}
    >
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 1: First Prints — Beautiful Failures
      </h2>
      <ExpandableImage
        src={imageMap["../assets/images/poroKeycaps/failedAttempt.jpeg"]}
        alt="Failed 3D print layers"
        className="sm:float-right sm:ml-6 mb-4 w-full xs:w-[100px] sm:w-[180px] md:w-[200px] rounded shadow-sm"
      />
      <p className="mb-6 text-base leading-relaxed">
        I started my journey into 3D printing by downloading a few STL files
        from the internet—some figurines, a few custom keycaps. I prepped them
        using <strong>Lychee Slicer</strong> and sent them off to my resin
        printer with high hopes.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        The first few prints were failures. The base layers weren’t adhering
        properly—turns out my <strong>base exposure time was too short</strong>.
        I learned that I should’ve been watching the first few layers before
        walking away. After increasing the exposure time slightly, the models
        started sticking—but now they were <strong>harder to remove</strong>.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 2: Fixing the Gaps — Finding the Sweet Spot
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        When the prints finally completed, they came out with strange internal
        gaps. It was a reminder that exposure isn’t just about the beginning:{" "}
        <strong>middle layer exposure</strong> needed adjustment too. I
        increased it to around 4–5 seconds, and the gaps disappeared like magic.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 3: Chemical Bath & the Sun Oven
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        After printing, I dunked each model in a vat of{" "}
        <strong>99.99% isopropyl alcohol</strong> to remove any uncured resin.
        It felt almost like giving them a little chemical spa day. Once cleaned,
        I placed them in what I jokingly call my “<strong>sun oven</strong>” — a
        UV curing station that hardened the parts and gave them a final finish.
      </p>
      <ExpandableImage
        src={imageMap["../assets/images/poroKeycaps/progress1.jpeg"]}
        alt="Curing station"
        className="place-self-center md:ml-6 mb-4 w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
      />
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 4: Painting the Army
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        With everything printed and cured, it was time for the fun part—{" "}
        <strong>painting</strong>. Using tiny brushes, I brought the models to
        life. It was slow, detailed work, but there was something satisfying
        about turning raw, gray resin into a colorful army of personalized
        keycaps.
      </p>{" "}
      <div className="flex place-self-center gap-4">
        <ExpandableImage
          src={imageMap["../assets/images/poroKeycaps/progress2.jpeg"]}
          alt="Painted keycaps"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/poroKeycaps/poroKeycaps.jpeg"]}
          alt="Painted keycaps"
          className="w-full sm:w-[200px] md:w-[250px] rounded shadow-sm"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-10 mb-4">Takeaways</h2>
      <p className="mb-6 text-base leading-relaxed">
        This journey taught me that 3D printing isn’t plug-and-play—it’s a
        craft. Between tweaking exposure settings, watching layers form, and
        finishing by hand, the process feels closer to art than automation. Now,
        every time I type on one of those keycaps, I’m reminded of how much I
        learned from just a few grams of resin.
      </p>
    </BlogLayout>
  );
}
