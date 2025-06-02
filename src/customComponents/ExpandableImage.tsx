import { useState } from "react";

type ExpandableImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

export default function ExpandableImage({
  src,
  alt = "image",
  className,
}: ExpandableImageProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
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

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onClick={() => setExpanded(true)}
        className={`cursor-zoom-in ${className}`}
      />
    </div>
  );
}
