'use client';

import { useState } from "react";

interface ExpandableDescriptionProps {
  description: string;
  detailedDescription: string;
}

export default function ExpandableDescription({
  description,
  detailedDescription,
}: ExpandableDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
      {isExpanded ? detailedDescription : description}{" "}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="text-zinc-500 hover:text-zinc-300 transition-colors underline-offset-2 hover:underline"
        aria-expanded={isExpanded}
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
}
