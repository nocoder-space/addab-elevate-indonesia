import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Clock, Users, Award, BookOpen, Video, Crown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoEmbed from "@/components/VideoEmbed";
import ebookImg from "@/assets/ebook-mockup.jpg";
import courseImg from "@/assets/course-mockup.jpg";
import webinarImg from "@/assets/webinar-mockup.jpg";
import socialBg from "@/assets/event-ballroom.webp";
import membershipBg from "@/assets/event-roleplay.webp";

const products = [
  { type: "Digital Book", img: ebookImg, title: "Public Speaking Pro", who: "Profesional, leader, founder", outcome: "Membangun kepercayaan diri, menyusun pesan, dan menjadikan public speaking sebagai aset karier dan bisnis.", price: "Lihat Detail", featured: true, status: "active" },
  { type: "Digital Book", img: ebookImg, title: "Defeat Demotivation", who: "Individu dan profesional", outcome: "Mengatasi demotivasi, membangun kembali energi kerja, dan memperkuat mindset pertumbuhan.", price: "Lihat Detail", featured: false, status: "active" },
  { type: "Mini Masterclass", img: webinarImg, title: "Mini Masterclass Public Speaking", who: "Pemula yang ingin tampil percaya diri", outcome: "Mengatasi rasa takut bicara di depan umum, menyusun pesan, dan tampil lebih percaya diri.", price: "Lihat Detail", featured: true, status: "active" },
  { type: "Coming Soon", img: courseImg, title: "Sales Psychology Masterclass", who: "Sales rep dan team leader", outcome: "Kerangka mindset dan teknik closing untuk pasar Indonesia.", price: "Coming Soon", featured: false, status: "coming" },
  { type: "Coming Soon", img: courseImg, title: "Leadership & Adab Program", who: "Manager – C-Level", outcome: "Modul leadership berbasis adab, ilmu, dan dampak.", price: "Coming Soon", featured: false, status: "coming" },
  { type: "Coming Soon", img: ebookImg, title: "People Development Starter Pack", who: "HR yang baru memulai", outcome: "Bundle digital books, template, dan materi pendukung.", price: "Coming Soon", featured: false, status: "coming" },
];

const membership = [
  "Sesi Q&A bulanan langsung dengan Faisal",
  "Library template HR & L&D yang terus diperbarui",
  "Akses prioritas ke webinar dan event eksklusif",
  "Komunitas privat profesional people development",
  "Diskon untuk seluruh produk Academy",
];

const Academy = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);

  useEffect(() => {
    const target = new Date(); target.setDate(target.getDate() + 9);
    const tick = () => {
      const diff = +target - +new Date();
      setDays(Math.max(0, Math.floor(diff / 86400000)));
      setHours(Math.max(0, Math.floor((diff % 86400000) / 3600000)));
      setMins(Math.max(0, Math.floor((diff % 3600000) / 60000)));
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO — premium dark, conversion-focused */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-radial-gold blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full pointer-events-none" />

        <div className="container-wide relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Crown className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Faisal Maulana Academy</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-medium text-foreground">
              Pengetahuan korporasi, <span className="italic text-gradient-gold">untuk siapa saja</span> yang ingin bertumbuh.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Digital books, mini masterclass, webinar, dan materi pembelajaran yang disusun dari pengalaman lapangan dalam communication, mindset, leadership, dan people development.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold h-14 px-8 font-semibold">
                Telusuri Semua Produk <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-foreground/20 hover:border-primary hover:bg-primary/5">
                Gabung Membership
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Akses seumur hidup</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Materi berbasis pengalaman corporate</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Garansi 7 hari</div>
            </div>
          </div>

          <div className="lg:col-span-5 reveal reveal-delay-2">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, n: "18+", l: "Tahun pengalaman" },
                { icon: Users, n: "100K+", l: "Peserta program" },
                { icon: Video, n: "500+", l: "Event terselenggara" },
                { icon: BookOpen, n: "200+", l: "Perusahaan klien" },
              ].map((s, i) => (
                <div key={i} className="card-premium p-6">
                  <s.icon className="w-6 h-6 text-primary mb-4" />
                  <div className="font-serif text-3xl md:text-4xl text-gradient-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WEBINAR BANNER */}
      <section className="bg-card border-y border-border py-10">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2 font-semibold">Webinar Live Berikutnya</div>
            <h3 className="font-serif text-2xl md:text-3xl">High-Performance Team with Adab Values</h3>
            <p className="text-sm text-muted-foreground mt-1">Batch berikutnya segera dibuka • Notifikasi via email</p>
          </div>
          <div className="flex items-center gap-3">
            {[{n:days,l:"Hari"},{n:hours,l:"Jam"},{n:mins,l:"Menit"}].map(x => (
              <div key={x.l} className="bg-background border border-border rounded-xl px-5 py-3 text-center min-w-[80px]">
                <div className="font-serif text-3xl text-primary">{String(x.n).padStart(2,'0')}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{x.l}</div>
              </div>
            ))}
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 ml-2 font-semibold shadow-gold">Daftar Waiting List</Button>
          </div>
        </div>
      </section>

      {/* VIDEO — Cara belajar di Academy */}
      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <VideoEmbed videoId="S8A85niP3lU" query="si=EN0C7S_ppH2aMMvS" title="Pengantar Belajar di Faisal Maulana Academy" />
          </div>
          <div className="lg:col-span-5">
            <div className="eyebrow mb-3">Cara Belajar</div>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">Mulai dari satu pembelajaran, lanjut menjadi perubahan kebiasaan.</h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">Materi digital disusun agar ringkas, praktis, dan langsung bisa diterapkan dalam pekerjaan.</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Belajar dengan konsep yang sederhana.</li>
              <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Dilengkapi worksheet atau action prompt.</li>
              <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Terhubung dengan pengalaman corporate Faisal Maulana.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow mb-3">Katalog Lengkap</div>
              <h2 className="font-serif text-4xl md:text-5xl">Pilih format yang paling cocok untuk Anda.</h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Semua","Digital Book","Mini Masterclass","Webinar","Coming Soon"].map((f, i) => (
                <button key={f} className={`px-4 py-2 text-sm rounded-full border transition-colors ${i===0?"bg-primary text-primary-foreground border-primary":"border-border text-muted-foreground hover:text-foreground"}`}>{f}</button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 shadow-card-premium relative">
                {p.featured && <div className="absolute top-4 right-4 z-10 bg-signal text-signal-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Best Value</div>}
                <div className="aspect-[4/3] overflow-hidden bg-background relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
                  <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-border">{p.type}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-3 leading-snug min-h-[3.5rem]">{p.title}</h3>
                  <div className="space-y-1.5 text-xs text-muted-foreground mb-5">
                    <div><span className="text-foreground/70 font-medium">Untuk:</span> {p.who}</div>
                    <div><span className="text-foreground/70 font-medium">Outcome:</span> {p.outcome}</div>
                  </div>
                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <span className="font-serif text-base text-muted-foreground">{p.price}</span>
                    {p.status === "coming" ? (
                      <Button size="sm" variant="outline" className="font-semibold">Gabung Waiting List</Button>
                    ) : (
                      <Button size="sm" className="bg-signal text-signal-foreground hover:bg-signal/90 font-semibold">Lihat Detail</Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="section-padding bg-card/40 border-y border-border/60 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-[0.10]">
          <img src={membershipBg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
        </div>
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-3">Inner Circle</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">Inner Circle Faisal Maulana.</h2>
              <p className="text-muted-foreground mt-5 leading-relaxed">Komunitas belajar untuk profesional yang ingin memperkuat mindset, leadership, komunikasi, dan people development secara berkelanjutan.</p>
            </div>
            <div className="lg:col-span-7">
              <div className="card-premium p-8 md:p-10 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-radial-gold blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <Crown className="w-6 h-6 text-primary" />
                    <span className="font-serif text-2xl">Inner Circle Faisal Maulana</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-serif text-5xl text-gradient-gold">Rp 299rb</span>
                    <span className="text-muted-foreground">/ bulan</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {membership.map((m, i) => (
                      <li key={i} className="flex gap-3 text-sm"><Check className="w-5 h-5 text-primary flex-shrink-0" /> {m}</li>
                    ))}
                  </ul>
                  <Button size="lg" className="w-full bg-gradient-gold text-primary-foreground shadow-gold h-13">Gabung Waiting List</Button>
                  <div className="text-xs text-muted-foreground text-center mt-4">Pendaftaran dibuka secara bertahap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-[0.12]">
          <img src={socialBg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="container-wide text-center relative">
          <div className="eyebrow mb-3">Berbasis Pengalaman Lapangan</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-12">Materi yang lahir dari ruang training korporasi.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[{n:"18+",l:"Tahun pengalaman"},{n:"200+",l:"Perusahaan klien"},{n:"500+",l:"Event terselenggara"},{n:"100K+",l:"Peserta program"}].map(s => (
              <div key={s.l} className="card-premium p-7">
                <div className="font-serif text-4xl text-gradient-gold">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Academy;
