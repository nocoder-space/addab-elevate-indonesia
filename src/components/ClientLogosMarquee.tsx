import lamudi from "@/assets/clients/lamudi.webp";
import kemenkes from "@/assets/clients/kemenkes.webp";
import prudential from "@/assets/clients/prudential.webp";
import axaMandiri from "@/assets/clients/axa-mandiri.webp";
import combiphar from "@/assets/clients/combiphar.webp";
import bni from "@/assets/clients/bni.webp";
import disdik from "@/assets/clients/disdik-jabar.webp";
import cimb from "@/assets/clients/cimb-niaga.webp";
import manulife from "@/assets/clients/manulife.webp";

const logos = [
  { src: bni, alt: "BNI" },
  { src: cimb, alt: "CIMB Niaga" },
  { src: axaMandiri, alt: "AXA Mandiri" },
  { src: prudential, alt: "Prudential" },
  { src: manulife, alt: "Manulife" },
  { src: combiphar, alt: "Combiphar" },
  { src: kemenkes, alt: "Kementerian Kesehatan" },
  { src: disdik, alt: "Disdik Provinsi Jawa Barat" },
  { src: lamudi, alt: "Lamudi" },
];

const ClientLogosMarquee = () => {
  // Duplicate the array to create a seamless loop
  const loop = [...logos, ...logos];

  return (
    <section
      aria-label="Klien dan mitra terpercaya"
      className="relative border-y border-border/60 bg-card/30 py-12 md:py-14 overflow-hidden"
    >
      {/* Subtle radial highlight to match premium tone */}
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-20 pointer-events-none" />

      <div className="container-wide relative">
        <div className="text-center mb-8">
          <div className="text-[11px] uppercase tracking-[0.3em] text-primary/80 font-semibold">
            Dipercaya Oleh
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Korporasi, institusi keuangan, dan kementerian terkemuka di Indonesia
          </p>
        </div>

        {/* Marquee track with edge fade masks */}
        <div className="relative group">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10"
            style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10"
            style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
          />

          <div className="overflow-hidden">
            <div className="flex w-max items-center gap-12 md:gap-16 animate-marquee group-hover:[animation-play-state:paused]">
              {loop.map((logo, i) => (
                <div
                  key={i}
                  className="shrink-0 h-14 md:h-16 flex items-center justify-center px-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="h-10 md:h-12 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
