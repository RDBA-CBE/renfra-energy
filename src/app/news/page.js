"use client";

import { useEffect, useRef, useState } from "react";
import { Linkedin } from "lucide-react";
import InnerBanner from "@/components/Inner-banner";

/* ─────────────────────────────────────────────────────────────────────────
   LinkedIn posts — embedSrc from "Embed this post", postUrl is the real
   post link (used for the "Read more..." overlay link).
   ───────────────────────────────────────────────────────────────────────── */
const POSTS = [
   { embedSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7511430618443005952?collapsed=1", postUrl: "https://www.linkedin.com/feed/update/urn:li:share:7511430618443005952" },
  { embedSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7510567024398602240?collapsed=1", postUrl: "https://www.linkedin.com/feed/update/urn:li:share:7510567024398602240" },
  { embedSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7509473091429888000?collapsed=1", postUrl: "https://www.linkedin.com/feed/update/urn:li:share:7509473091429888000" },
  { embedSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7509222571389870081?collapsed=1", postUrl: "https://www.linkedin.com/feed/update/urn:li:share:7509222571389870081" },
  { embedSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7503719316807192576?collapsed=1", postUrl: "https://www.linkedin.com/feed/update/urn:li:share:7503719316807192576" },
  { embedSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7503422349191385089?collapsed=1", postUrl: "https://www.linkedin.com/feed/update/urn:li:share:7503422349191385089" },
];

/* ─────────────────────────────────────────────────────────────────────────
   EmbedCard
   ───────────────────────────────────────────────────────────────────────── */
function EmbedCard({ embedSrc, postUrl, index, onLoad }) {
  const iframeRef = useRef(null);
  const [iframeH, setIframeH] = useState(670);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.credentialless = true;
    }

    function onMessage(e) {
      if (
        e.origin === "https://www.linkedin.com" &&
        e.data?.msg === "lp_resize" &&
        typeof e.data?.data?.height === "number" &&
        iframeRef.current &&
        e.source === iframeRef.current.contentWindow
      ) {
        // Full height with a small buffer so likes, comments & action buttons are never cut off
        setIframeH(Math.ceil(e.data.data.height) + 4);
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <div
      className="relative break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
      style={{ height: iframeH }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-100/90 backdrop-blur-[1px]">
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#3AB257] border-t-transparent" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Loading
            </span>
          </div>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={embedSrc}
        title={`LinkedIn post ${index + 1}`}
        width="100%"
        height={iframeH}
        frameBorder="0"
        allowFullScreen
        scrolling="no"
        className={`block w-full border-0 transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        onLoad={handleLoad}
        credentialless="true"
      />

      {/* LinkedIn wordmark mask */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 160,
          height: 70,
          background: "white",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/*
        Full-card transparent overlay — intercepts ALL clicks on the iframe
        (including LinkedIn's own "...more" expand button) and instead opens
        the real LinkedIn post in a new tab. cursor:pointer signals it's clickable.
      */}
      <a
        href={postUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="View full post on LinkedIn"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          cursor: "pointer",
          display: "block",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Section
   ───────────────────────────────────────────────────────────────────────── */
function LinkedInPosts() {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [loadedCards, setLoadedCards] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadedCards === 0) {
        setIsPageLoading(false);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [loadedCards]);

  useEffect(() => {
    if (loadedCards >= POSTS.length) {
      setIsPageLoading(false);
    }
  }, [loadedCards]);

  const handleCardLoad = () => {
    setLoadedCards((count) => Math.min(count + 1, POSTS.length));
  };

  return (
    <section aria-labelledby="linkedin-heading">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#3AB257]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#3AB257]">
              Social Updates
            </span>
          </div>
          <h2
            id="linkedin-heading"
            className="text-2xl sm:text-3xl font-bold text-[#293E52] leading-tight"
          >
            Latest News{" "}
          </h2>
        </div>

        <a
          href="https://www.linkedin.com/company/renfraenergy"
          target="_blank"
          rel="noreferrer"
          className="w-fit inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow-sm transition-colors shrink-0"
        >
          <Linkedin className="h-4 w-4" />
          Follow on LinkedIn
        </a>
      </div>

      {isPageLoading ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5" aria-live="polite" aria-busy="true">
          {Array.from({ length: POSTS.length }).map((_, i) => (
            <div
              key={`skeleton-${i}`}
              className="mb-5 h-[420px] rounded-2xl border border-[#e2e8f0] bg-slate-100 shadow-sm"
            >
              <div className="flex h-full animate-pulse flex-col p-4">
                <div className="mb-4 h-8 w-24 rounded bg-slate-200" />
                <div className="mb-3 h-4 w-full rounded bg-slate-200" />
                <div className="mb-3 h-4 w-5/6 rounded bg-slate-200" />
                <div className="mb-3 h-4 w-4/6 rounded bg-slate-200" />
                <div className="mt-auto h-52 rounded-xl bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {POSTS.map((post, i) => (
            <EmbedCard
              key={post.embedSrc}
              embedSrc={post.embedSrc}
              postUrl={post.postUrl}
              index={i}
              onLoad={handleCardLoad}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default function NewsMedia() {
  return (
    <>
      <InnerBanner title="Media & News" bgImage="/images/news-ban.png" />
      <main className="min-h-screen bg-background">
        <div className="max-w-[85rem] 2xl:max-w-[90rem] mx-auto px-4 py-12 pb-0 sm:pb-12">
          <LinkedInPosts />
        </div>
      </main>
    </>
  );
}
