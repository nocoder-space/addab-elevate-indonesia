import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import workshopImg from "@/assets/event-corporate-training.webp";
import webinarImg from "@/assets/event-engagement-class.webp";
import trainingImg from "@/assets/event-leadership-workshop.webp";
import bootcampImg from "@/assets/event-capacity-building.webp";

const events = [
  { type: "Webinar Live", img: webinarImg, title: "Membangun Tim High-Performance dengan Nilai Adab", date: "7 Mei 2026", time: "19:30 WIB", location: "Online via Zoom", seats: "100 peserta", price: "Rp 299.000", featured: true },
  { type: "Public Workshop", img: workshopImg, title: "Sales & Marketing Champion — Public Class Jakarta", date: "22-23 Mei 2026", time: "09:00 – 17:00 WIB", location: "Hotel Mulia Senayan, Jakarta", seats: "30 peserta", price: "Rp 4.500.000", featured: false },
  { type: "Webinar Live", img: trainingImg, title: "Strategi People Development untuk Startup Bertumbuh", date: "12 Juni 2026", time: "20:00 WIB", location: "Online via Zoom", seats: "200 peserta", price: "Rp 199.000", featured: false },
  { type: "Public Workshop", img: bootcampImg, title: "Transformational Leadership Bootcamp", date: "5-7 Juli 2026", time: "Full day", location: "Bandung", seats: "25 peserta", price: "Rp 7.500.000", featured: false },
];

const Events = () => (
  <>
    <section className="pt-36 pb-16 bg-gradient-hero">
      <div className="container-wide">
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">Acara & Pelatihan Publik</div>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">Belajar langsung — dalam <em className="text-gradient-gold not-italic">ruang yang terjaga.</em></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Webinar, public workshop, dan bootcamp eksklusif. Setiap acara dirancang dengan kapasitas terbatas agar setiap peserta mendapatkan perhatian penuh.</p>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <div className="grid gap-6">
          {events.map((e, i) => (
            <div key={i} className={`card-premium p-2 grid lg:grid-cols-12 gap-6 items-center overflow-hidden ${e.featured ? "border-primary/40" : ""}`}>
              <div className="lg:col-span-4 aspect-[4/3] lg:aspect-auto lg:h-full rounded-xl overflow-hidden">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
              </div>
              <div className="lg:col-span-8 p-5 lg:p-7">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${e.featured ? "bg-signal text-signal-foreground" : "bg-primary/15 text-primary border border-primary/30"}`}>{e.type}</span>
                  {e.featured && <span className="text-[10px] uppercase tracking-wider text-signal font-semibold">Berikutnya</span>}
                </div>
                <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-4">{e.title}</h2>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground mb-5">
                  <div className="flex gap-2"><Calendar className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {e.date}</div>
                  <div className="flex gap-2"><Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {e.time}</div>
                  <div className="flex gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {e.location}</div>
                  <div className="flex gap-2"><Users className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Kapasitas {e.seats}</div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground">Investasi</div>
                    <div className="font-serif text-2xl text-gradient-gold">{e.price}</div>
                  </div>
                  <Button className="bg-gradient-gold text-primary-foreground shadow-gold">Daftar Sekarang <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-card/30 border-t border-border/60">
      <div className="container-tight text-center">
        <div className="eyebrow mb-3">Acara Privat Korporasi</div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">Ingin mengundang saya untuk acara internal?</h2>
        <p className="text-muted-foreground mt-5 max-w-xl mx-auto">Speaking engagement, town hall, leadership offsite, atau program in-house — saya menerima undangan terbatas setiap kuartal.</p>
        <Button asChild size="lg" className="mt-8 bg-gradient-gold text-primary-foreground shadow-gold h-14 px-8">
          <Link to="/contact">Ajukan Undangan <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Events;
