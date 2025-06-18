import ExpandableImage from "@/customComponents/ExpandableImage";
import BlogLayout from "../customComponents/BlogLayout";
import type { ProjectEntry } from "@/utils/projectData";

export function ParkletProject({ lastUpdatedUnix }: ProjectEntry) {
  return (
    <BlogLayout
      title="Designing in Public: Ocean Avenue Mobile Parklet"
      lastUpdatedUnix={lastUpdatedUnix}
    >
      <p className="mb-6 text-base leading-relaxed">
        The Mobile Ocean Avenue Parklet was a collaborative design-build project
        led by Youth Art Exchange (YAX) and funded by a mix of community
        partners and city agencies. The goal was ambitious: to design a fully
        functional, portable parklet that could rotate between different
        businesses along Ocean Avenue every six months. As one of six high
        school students selected for the project, I worked from a pop-up
        architecture studio inside a vacant storefront, where we transformed raw
        concepts into a realized public amenity.
      </p>

      <p className="mb-6 text-base leading-relaxed">
        At the beginning of the project, each of us created our own design for
        what the parklet could look like. It was a mini design charette—everyone
        presented sketches and physical models, and we held group discussions
        about what worked and what didn’t. Ultimately, we merged the best
        features from all of our designs to arrive at a unified concept that we
        would then build together. It was the first time I’d experienced a
        democratic design process, and it taught me how valuable it is to
        listen, adapt, and collaborate.
      </p>

      <ExpandableImage
        src="https://live.staticflickr.com/3700/13769466843_c3e8507995_c.jpg"
        alt="Early parklet sketch"
        className="place-self-center max-w-[300px] rounded shadow-sm"
      />

      <p className="mb-6 text-base leading-relaxed">
        I was personally responsible for designing and building the seating
        portion of the parklet. Lounge seating might sound simple, but getting
        it right required iteration. I experimented with various backrest
        angles, seat depths, and materials to find something that felt both
        durable and comfortable. Much of this was done through trial and
        error—cutting mockups, testing them physically, and refining dimensions
        until everything felt just right.
      </p>

      <ExpandableImage
        src={"https://live.staticflickr.com/3773/13769460913_424123f738_c.jpg"}
        alt="Seating angles"
        className="place-self-center max-w-[300px] rounded shadow-sm"
      />

      <p className="mb-6 text-base leading-relaxed">
        Tools played a major role in the build process. From setting chalklines
        for accurate layout to ripping lumber on the table saw, this was
        hands-on, full-scale fabrication. We used nail guns, circular saws,
        power drills, and plenty of clamps to assemble the frame and wooden
        seating components. On multiple days, I stayed late with our instructor
        to keep the project on schedule—an experience that taught me the value
        of urgency and teamwork in a real-world production timeline.
      </p>

      <p className="mb-6 text-base leading-relaxed">
        What made this parklet special wasn’t just its form—it was its function
        as a shared neighborhood resource. Once completed, the modular frame was
        outfitted with drought-resistant plants and installed temporarily
        outside Foglifter Cafe for its unveiling. It was designed to be moved
        easily and shared by local merchants, representing a unique city-backed
        experiment in flexible public space. While its final permanent location
        has changed over the years, the original prototype became a model for
        future mobile parklets across San Francisco.
      </p>

      <div className="flex place-self-center gap-4 flex-wrap justify-center">
        <ExpandableImage
          src={
            "https://live.staticflickr.com/5585/14909694245_7c721c4bda_c.jpg"
          }
          alt="Parklet build day"
          className="max-w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={
            "https://live.staticflickr.com/5583/14723089038_d992a9fa7e_c.jpg"
          }
          alt="Final parklet installed"
          className="max-w-[250px] rounded shadow-sm"
        />
        <ExpandableImage
          src={
            "https://live.staticflickr.com/3691/13769459393_2654aea821_c.jpg"
          }
          alt="Students working on parklet"
          className="max-w-[250px] rounded shadow-sm"
        />
      </div>

      <p className="mt-6 text-base leading-relaxed">
        This experience marked one of my earliest exposures to community-driven
        design and the logistics of full-scale fabrication. The ability to see
        an idea go from sketch to structure in a public setting gave me a
        lasting appreciation for design’s role in shaping neighborhoods.
      </p>
    </BlogLayout>
  );
}
