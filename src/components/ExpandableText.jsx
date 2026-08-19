"use client";

import { useState } from "react";

export default function ExpandableText({ lines = [], defaultCount = 4 }) {
  const [expanded, setExpanded] = useState(false);

  if (!Array.isArray(lines) || lines.length === 0) return null;

  const visibleLines = expanded ? lines : lines.slice(0, defaultCount);

  return (
    <div className="text-center text-gray-600 space-y-3">
      {visibleLines.map((line, i) => (
        <p key={i} className="text-sm sm:text-base leading-relaxed">
          {line}
        </p>
      ))}

      {lines.length > defaultCount && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-[#3CA948] font-semibold hover:text-[#329ACD] transition-colors"
        >
          {expanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
}
