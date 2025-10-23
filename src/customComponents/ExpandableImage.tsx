import { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useMenubarVisibilityContext } from "../context/MenubarVisibilityContext";

type ExpandableImageProps = {
  src: string;
  alt?: string;
  className?: string;
  description?: string; // Optional description
};

export default function ExpandableImage({
  src,
  alt = "image",
  className = "",
  description,
}: ExpandableImageProps) {
  const [expanded, setExpanded] = useState(false);
  const [scale, setScale] = useState(1);
  const { hideMenubar, showMenubar } = useMenubarVisibilityContext();

  // Hide/show menubar when image is expanded/collapsed
  useEffect(() => {
    if (expanded) {
      hideMenubar();
    } else {
      showMenubar();
    }
  }, [expanded, hideMenubar, showMenubar]);

  const handleTransform = (ref: { state: { scale: number } }) => {
    setScale(ref.state.scale);
  };

  const handleExpandedChange = () => {
    if (scale === 1) {
      setExpanded(false);
    }
  };

  return (
    <div
      className={`relative group h-fit ${className}`}
      onClick={() => setExpanded(true)}
      style={{ touchAction: "manipulation" }}
    >
      {/* Fullscreen overlay when expanded */}
      {expanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={handleExpandedChange}
        >
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the overlay from closing
              setExpanded(false);
            }}
            className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition z-10"
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="w-full h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image area
          >
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={8}
              centerOnInit={true}
              centerZoomedOut={true}
              wheel={{ step: 0.1 }}
              pinch={{ step: 5 }}
              doubleClick={{ disabled: false, step: 0.7 }}
              panning={{ disabled: false }}
              limitToBounds={true}
              onTransformed={handleTransform}
            >
              {({
                zoomIn,
                zoomOut,
                resetTransform,
              }: {
                zoomIn: () => void;
                zoomOut: () => void;
                resetTransform: () => void;
              }) => (
                <>
                  <TransformComponent
                    wrapperStyle={{ width: "100%", height: "100%" }}
                    contentStyle={{ width: "100%", height: "100%" }}
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-full object-contain"
                    />
                  </TransformComponent>

                  {/* Zoom controls */}
                  <div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 rounded-full px-4 py-2 flex items-center space-x-4 z-10"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking zoom controls
                  >
                    <button
                      onClick={() => zoomOut()}
                      className="text-white text-xl font-bold hover:bg-opacity-80 transition px-2 py-1 rounded"
                    >
                      −
                    </button>
                    <span className="text-white text-sm">
                      {Math.round(scale * 100)}%
                    </span>
                    <button
                      onClick={() => zoomIn()}
                      className="text-white text-xl font-bold hover:bg-opacity-80 transition px-2 py-1 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => resetTransform()}
                      className="text-white text-sm hover:bg-opacity-80 transition px-2 py-1 rounded"
                    >
                      Reset
                    </button>
                  </div>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>
      )}

      {/* Thumbnail with hover dim effect and optional description */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onClick={() => setExpanded(true)}
        onTouchStart={(e) => {
          e.stopPropagation();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setExpanded(true);
        }}
        className={`h-auto cursor-zoom-in transition duration-300 group-hover:brightness-90 object-contain touch-manipulation ${className}`}
        style={{ touchAction: "manipulation" }}
      />

      {description && (
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </div>
      )}
    </div>
  );
}
