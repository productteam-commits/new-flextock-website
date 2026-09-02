"use client";

import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

import { arabicCopy, siteConfig, videoContent } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function VideoShowcase() {
  const { locale } = useLocale();
  const content = locale === "ar" ? arabicCopy.video : videoContent;
  const siteCopy = locale === "ar" ? arabicCopy.site : siteConfig;
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  function togglePlayback() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

  return (
    <section className="border-b border-flextock-line bg-flextock-navy px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
        <div>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            <Play size={14} fill="currentColor" />
            {content.eyebrow}
          </p>
          <h2 className="mt-7 text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-flextock-foreground sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-flextock-muted">
            {content.description}
          </p>
        </div>
        <div className="relative overflow-hidden border-y border-flextock-line bg-flextock-panel">
          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            src={content.source}
            poster={content.poster}
            autoPlay={!reduceMotion}
            muted
            loop
            playsInline
            controls
            preload="none"
            aria-label={content.label}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={(event) => {
              const video = event.currentTarget;
              setProgress(video.duration ? video.currentTime / video.duration : 0);
            }}
          />
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={
              isPlaying ? siteCopy.pauseVideoLabel : siteCopy.playVideoLabel
            }
            className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-flextock-neon text-flextock-navy transition-colors hover:bg-flextock-foreground focus:outline-none focus:ring-2 focus:ring-flextock-neon focus:ring-offset-2 focus:ring-offset-flextock-navy"
          >
            {isPlaying ? (
              <Pause size={17} fill="currentColor" />
            ) : (
              <Play size={17} fill="currentColor" />
            )}
          </button>
          <div className="pointer-events-none absolute bottom-11 left-0 right-0 h-1 bg-black/30">
            <div
              className="h-full bg-flextock-neon transition-[width]"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
