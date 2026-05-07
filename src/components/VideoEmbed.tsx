import { useState } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  /** YouTube video ID (e.g. "S8A85niP3lU") */
  videoId: string;
  /** Optional query string e.g. "si=EN0C7S_ppH2aMMvS" */
  query?: string;
  title?: string;
  className?: string;
  /** Override thumbnail (defaults to YouTube hqdefault) */
  thumbnail?: string;
}

/**
 * Lazy-loaded, click-to-play YouTube embed.
 * - 16:9 responsive
 * - No autoplay until user clicks
 * - Premium dark-gold framing
 */
const VideoEmbed = ({ videoId, query = "", title = "Video Faisal Maulana", className = "", thumbnail }: VideoEmbedProps) => {
  const [active, setActive] = useState(false);
  const thumb = thumbnail ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const src = `https://www.youtube.com/embed/${videoId}?${query}${query ? "&" : ""}rel=0`;

  return (
    <div
      className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-primary/20 bg-card shadow-elegant ${className}`}
    >
      {!active ? (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Putar video: ${title}`}
          className="group absolute inset-0 w-full h-full"
        >
          <img
            src={thumb}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-background/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold transition-transform duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <div className="text-xs uppercase tracking-[0.2em] text-primary/90 font-semibold">Faisal Maulana</div>
            <div className="font-serif text-base md:text-lg text-foreground/95 leading-tight mt-1 line-clamp-2">{title}</div>
          </div>
        </button>
      ) : (
        <iframe
          src={`${src}&autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
};

export default VideoEmbed;
