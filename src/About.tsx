import { TooltipLinkWrapper } from "./customComponents/TooltipWrapper";

function LeftCol() {
  return (
    <div className="flex flex-col items-center col-start-1 md:col-start-2">
      <img
        src={`${import.meta.env.BASE_URL}ProfilePic.png`}
        alt="Kenji Mah"
        className="w-40 h-40 rounded-full object-cover mb-4 border border-zinc-700 self-center"
      />
      <div className="text-sm text-zinc-300 w-full">
        <h3 className="font-semibold text-zinc-100 mb-1">🎓 Education</h3>
        <p className="mb-3">
          Arizona State University
          <br />
          <span className="text-xs text-zinc-400">
            Master of Computer Science
          </span>
        </p>
        <p className="mb-3">
          University of California Santa Cruz
          <br />
          <span className="text-xs text-zinc-400">
            Bachelor's of Science Computer Science
          </span>
        </p>

        <h3 className="font-semibold text-zinc-100 mb-1">📜 Certifications</h3>
        <ul className="list-disc pl-4 mb-3">
          <li>
            <a
              href="https://cp.certmetrics.com/amazon/en/public/verify/credential/8d6e62057dcb4d64bc174f0c5dbe5af5"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS Certified Developer
            </a>
          </li>
        </ul>

        <h3 className="font-semibold text-zinc-100 mb-1">📍 Location</h3>
        <p>San Francisco, CA</p>
      </div>
    </div>
  );
}

function RightCol() {
  return (
    <div className="md:col-span-3 text-left">
      <p className="mb-4">
        Hi, I’m <strong>Kenji</strong> — a frontend engineer and hands-on maker
        with a passion for building things, whether in code or in the shop.
      </p>
      <p className="mb-4">
        Most recently, I’ve been diving deep into{" "}
        <strong>CNC machining and digital fabrication</strong> through the{" "}
        <strong>HumanMade CNC Training Program</strong> (April 2025 – present).
        I’ve trained on a range of tools — from manual mills and Tormach CNCs to
        band saws, drill presses, and jeweler’s saws — and built several
        functional and creative projects. I also leveled up my skills in{" "}
        <strong>CAD and CAM with Fusion 360</strong>, giving me a strong
        understanding of how software and hardware intersect in real-world
        production.
      </p>
      <p className="mb-4">
        Before that, I worked as a{" "}
        <strong>Frontend Engineer at Breinify</strong>, where I led the
        development of complex UI features for large-scale data platforms. I
        built tools for API monitoring, messaging systems, reporting dashboards,
        and more — working closely with cross-functional teams to ship polished,
        high-impact software.
      </p>
      <p className="mb-4">
        Between roles, I experienced a layoff — but I stayed active and
        resourceful. I took on jobs like house painting and babysitting, which
        not only kept me grounded but also reminded me of the value of
        adaptability, patience, and work ethic. That time also gave me space to
        explore new skills and rediscover my love for building with my hands.
      </p>
      <p>
        Now, I’m focused on opportunities that let me combine my frontend
        experience with my growing capabilities in fabrication, engineering, and
        design. I bring a builder’s mindset, a user-focused approach, and a
        drive to learn and create at every level.
      </p>
      <div>
        <br />
        <h2 className="font-bold">Worked With</h2>
        <div className="gap-4 flex">
          <TooltipLinkWrapper
            link="https://www.linkedin.com/company/breinify/posts/?feedView=all"
            tooltip="Breinify"
          >
            <img
              src={`${import.meta.env.BASE_URL}breinify_inc__logo.png`}
              alt="Breinify"
              rel="noopener noreferrer"
              className="w-20 h-20 rounded-full object-contain mb-4 border border-white bg-white self-center"
            />
          </TooltipLinkWrapper>
          <TooltipLinkWrapper
            link="https://www.linkedin.com/company/sensagrate/posts/?feedView=all"
            tooltip="Sensagrate"
          >
            <img
              src={`${import.meta.env.BASE_URL}sensagrate_logo.png`}
              alt="Sensagrate"
              rel="noopener noreferrer"
              className="w-20 h-20 rounded-full object-contain mb-4 border border-white bg-white self-center p-0.5"
            />
          </TooltipLinkWrapper>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8">🛠️ About Me</h2>
      <div className="grid md:grid-cols-6 md:gap-8 justify-center grid-cols-1">
        {/* LEFT COLUMN */}
        <LeftCol />
        {/* RIGHT COLUMN – About Paragraph */}
        <RightCol />
      </div>
    </>
  );
}
