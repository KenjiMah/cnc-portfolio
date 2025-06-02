// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { PerspectiveCamera, Vector3 } from "three";

type ModelViewerProps = {
  modelPath: string;
  camVectorInit?: [number, number, number];
  targetVectorInit?: [number, number, number];
};

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

export function ModelViewer({
  modelPath,
  camVectorInit = [2, 2, 2],
  targetVectorInit = [0, 0, 0],
}: ModelViewerProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [savedCameraPos, setSavedCameraPos] = useState(
    new Vector3(...camVectorInit)
  );
  const [savedTarget, setSavedTarget] = useState(
    new Vector3(...targetVectorInit)
  );

  const embeddedControlsRef = useRef<typeof OrbitControls>(null);
  const fullscreenControlsRef = useRef<typeof OrbitControls>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullScreen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const openFullScreen = () => {
    if (embeddedControlsRef.current) {
      setSavedCameraPos(embeddedControlsRef.current.object.position.clone());
      setSavedTarget(embeddedControlsRef.current.target.clone());
    }
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    if (fullscreenControlsRef.current) {
      setSavedCameraPos(fullscreenControlsRef.current.object.position.clone());
      setSavedTarget(fullscreenControlsRef.current.target.clone());
    }
    setIsFullScreen(false);
  };

  const resetView = () => {
    const controls = isFullScreen
      ? fullscreenControlsRef.current
      : embeddedControlsRef.current;

    if (controls) {
      controls.reset();
    }
  };

  const CanvasContent = ({
    controlsRef,
    cameraPosition,
    target,
  }: {
    controlsRef: React.RefObject<typeof OrbitControls>;
    cameraPosition: Vector3;
    target: Vector3;
  }) => {
    const { camera } = useThree();

    useEffect(() => {
      camera.position?.copy(cameraPosition);
      camera.lookAt(target);

      if (controlsRef.current) {
        controlsRef.current.target?.copy(target);
        controlsRef.current.object.position?.copy(cameraPosition);
        controlsRef.current.object.updateMatrixWorld();

        // ✅ Ensure reset goes to these values
        controlsRef.current.target0?.copy(target);
        controlsRef.current.object.position0?.copy(cameraPosition);

        controlsRef.current.update();
      }
    }, [cameraPosition, target, camera, controlsRef]);

    return (
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
  };

  return (
    <>
      <div className="relative w-full h-full bg-[#111]">
        <Canvas
          camera={{ position: camVectorInit, fov: 60 }}
          style={{ width: "100%", height: "100%" }}
        >
          <CanvasContent
            controlsRef={embeddedControlsRef}
            cameraPosition={savedCameraPos}
            target={savedTarget}
          />
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
            onClick={openFullScreen}
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
          <div className="absolute top-2 right-2 flex space-x-2 z-10">
            <button
              onClick={resetView}
              className="bg-black text-white rounded px-3 py-1 hover:bg-gray-800 transition cursor-pointer"
              aria-label="Reset camera view"
            >
              <i className="fa-solid fa-home" />
            </button>
            <button
              onClick={closeFullScreen}
              className="bg-black text-white rounded px-3 py-1 text-xl hover:bg-gray-800 transition cursor-pointer"
              aria-label="Close Fullscreen Viewer"
            >
              <i className="fa-solid fa-compress" />
            </button>
          </div>

          <div className="w-full h-full">
            <Canvas
              camera={{ position: camVectorInit, fov: 60 }}
              style={{ width: "100%", height: "100%" }}
            >
              <CanvasContent
                controlsRef={fullscreenControlsRef}
                cameraPosition={savedCameraPos}
                target={savedTarget}
              />
            </Canvas>
          </div>
        </div>
      )}
    </>
  );
}
