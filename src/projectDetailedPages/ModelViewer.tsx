import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { PerspectiveCamera } from "three";

const Scene = ({ modelPath }: { modelPath: string }) => {
  const obj = useLoader(OBJLoader, modelPath);
  return <primitive object={obj} scale={0.4} />;
};

function ResizeHandler() {
  const { camera, gl, size } = useThree();
  const prevSize = useRef(size);

  useEffect(() => {
    const cam = camera as PerspectiveCamera;
    if (
      size.width !== prevSize.current.width ||
      size.height !== prevSize.current.height
    ) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
      gl.setSize(size.width, size.height);
      prevSize.current = size;
    }
  }, [size, camera, gl]);

  return null;
}

export function ModelViewer({ modelPath }: { modelPath: string }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const controlsRef = useRef(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullScreen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const resetView = () => {
    if (controlsRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      controlsRef?.current?.reset();
    }
  };

  const CanvasContent = ({ modelPath }: { modelPath: string }) => (
    <>
      <ResizeHandler />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls ref={controlsRef} enableDamping />
      <Scene modelPath={modelPath} />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="white"
        />
      </GizmoHelper>
    </>
  );

  return (
    <>
      <div className="relative w-[600px] h-[400px] bg-[#111]">
        <Canvas
          camera={{ position: [2, 2, 2], fov: 60 }}
          style={{ width: "100%", height: "100%" }}
        >
          <CanvasContent modelPath={modelPath} />
        </Canvas>

        <div className="absolute top-2 right-2 flex space-x-2 z-10">
          <button
            onClick={resetView}
            className="bg-black text-white rounded px-3 py-1 hover:bg-gray-800 transition cursor-pointer"
            aria-label="Reset camera view"
          >
            <i className="fa-solid fa-home" />
          </button>

          <button
            onClick={() => setIsFullScreen(true)}
            className="bg-black text-white rounded px-3 py-1 hover:bg-gray-800 transition cursor-pointer"
            aria-label="Enlarge Model Viewer"
          >
            <i className="fa-solid fa-expand" />
          </button>
        </div>
      </div>

      {isFullScreen && (
        <div
          className="fixed inset-0 z-[9999] bg-black bg-opacity-95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-4 right-4 z-[10000] bg-black text-white rounded px-3 py-1 text-xl hover:bg-gray-800 transition cursor-pointer"
            aria-label="Close Fullscreen Viewer"
          >
            <i className="fa-solid fa-compress" />
          </button>

          <div className="w-full h-full">
            <Canvas
              camera={{ position: [2, 2, 2], fov: 60 }}
              style={{ width: "100%", height: "100%" }}
            >
              <CanvasContent modelPath={modelPath} />
            </Canvas>
          </div>
        </div>
      )}
    </>
  );
}
