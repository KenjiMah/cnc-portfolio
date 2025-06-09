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
    <div className={`relative group ` + className}>
      {/* Fullscreen overlay when expanded */}
      {expanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setExpanded(false)}
        >
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
        className={`cursor-zoom-in transition duration-300 group-hover:brightness-90 ${className}`}
      />

      {description && (
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </div>
      )}
    </div>
  );
}
