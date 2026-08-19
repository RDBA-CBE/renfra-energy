"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function CareerCard({ job }) {
  return (
    <div className="border border-border rounded-lg p-6 bg-card shadow-md transition-shadow hover:shadow-lg">
      <div className="flex items-start justify-between mb-3">
        <h2 className="text-xl font-semibold text-[#293E52] flex-1">
          {job.title}
        </h2>
        <Link
          href={`/career-details?jobId=${job.job_id}`}
          className="relative flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0 ml-2"
          aria-label="View job details"
        >
          <ExternalLink
            className="w-6 h-6"
            style={{
              stroke: "url(#linkGradient)",
            }}
          />

          <svg className="absolute w-0 h-0">
            <defs>
              <linearGradient
                id="linkGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#329ACD" />
                <stop offset="100%" stopColor="#3AB257" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
      </div>

      <p className="text-sm font-medium text-muted-foreground mb-3">
        {job.job_id}
      </p>

      {/* <p
        className="text-sm text-[#293E52] font-medium mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: `<span class="font-bold">Requirements: </span>${job.requirements}`,
        }}
      /> */}

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap items-center gap-4">

  {/* LEVEL */}
  {job.level && (
    <div className="flex items-center gap-2">
      <img src="/images/work.svg" alt="Level" className="w-4 h-4" />
      <span className="text-sm text-[#293E52]">{job.level}</span>
    </div>
  )}

  {/* EXPERIENCE */}
  {job.experience && (
    <div className="flex items-center gap-2">
      
      <span className="text-sm text-[#293E52]">({job.experience})</span>
    </div>
  )}

</div>
        
        {job.location && (
          <div className="flex items-center gap-2">
            <img src="/images/loc.svg" alt="Location" className="w-4 h-4" />
            <span className="text-sm text-[#293E52]">{job.location}</span>
          </div>
        )}
      </div>
    </div>
  );
}
