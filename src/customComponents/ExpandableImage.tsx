import { useState } from "react";

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

  return (
    <div className={`relative group h-fit ${className}`}>
      {/* Fullscreen overlay when expanded */}
      {expanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setExpanded(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the overlay from closing
              setExpanded(false);
            }}
            className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition"
            aria-label="Close image"
          >
            ×
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-4xl max-h-[90vh] rounded shadow-lg object-contain transition-all duration-300"
          />
        </div>
      )}

      {/* Thumbnail with hover dim effect and optional description */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onClick={() => setExpanded(true)}
        className={`h-fit h-auto cursor-zoom-in transition duration-300 group-hover:brightness-90 object-contain ${className}`}
      />

      {description && (
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </div>
      )}
    </div>
  );
}
