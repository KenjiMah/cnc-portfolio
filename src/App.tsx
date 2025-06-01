import { About } from "./About";
import { ROUTES } from "./constants";
import "./App.css";
import { DetailedProject } from "./DetailedProject";
import { IconLinks } from "./IconLinks";
import { PopoverMenubar } from "./PopoverMenubar";
import { Projects } from "./Projects";
import { Routes, Route } from "react-router-dom";
// import BackgroundImage from "/background.jpg";

function App() {
  return (
    <>
      <div className="relative h-80">
        {/* Background that fades on scroll */}
        <div
          className=" bg-black/50 sticky top-0 h-60 w-full bg-cover bg-center transition-opacity duration-300"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}background.png')`,
          }}
          id="hero-bg"
        >
          <h1
            className="text-zinc-100 text-5xl font-bold drop-shadow-md"
            style={{ paddingTop: "3rem" }}
          >
            Kenji Mah
          </h1>
          <p className="text-zinc-100 text-lg mt-4 drop-shadow-sm">
            Precision. Passion. Projects.
          </p>
          <div className="absolute bottom-0 left-0 w-full h-12 shadow-[inset_0_-60px_60px_-10px_rgba(24,24,27,0.9)] z-10">
            <IconLinks />
          </div>
          {/* Foreground content */}
        </div>
      </div>

      {/* OVERLAPPING CONTENT */}

      <section className="-mt-20 relative z-20 bg-zinc-950 text-zinc-100 px-6 py-12">
        <Routes>
          <Route index element={<Projects />} />
          <Route path={ROUTES.ABOUTMEPAGE} element={<About />} />
          <Route path={ROUTES.PROJECTPAGE} element={<Projects />} />
          <Route
            path={`${ROUTES.PROJECTPAGE}/:projectId`}
            element={<DetailedProject />}
          />
        </Routes>
      </section>
      <PopoverMenubar />
    </>
  );
}

export default App;
