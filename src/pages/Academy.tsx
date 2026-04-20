import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Star, Clock, Users, Award, BookOpen, Video, Crown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ebookImg from "@/assets/ebook-mockup.jpg";
import courseImg from "@/assets/course-mockup.jpg";
import webinarImg from "@/assets/webinar-mockup.jpg";

const products = [
  { type: "E-book", img: ebookImg, title: "ADDIE + Adab: Panduan People Development", who: "HR, L&D, founder", outcome: "Kerangka kerja siap pakai dalam 5 jam baca", price: "Rp 149.000", featured: false },
  { type: "E-book", img: ebookImg, title: "5 Framework Kepemimpinan Islami", who: "Manager dan supervisor", outcome: "Kepemimpinan yang amanah dan dipercaya", price: "Rp 99.000", featured: false },
  { type: "Course", img: courseImg, title: "Islamic Leadership Mastery", who: "Manager – C-Level", outcome: "8 modul, 32 video, sertifikat resmi", price: "Rp 1.999.000", featured: true },
  { type: "Course", img: courseImg, title: "Sales Psychology Masterclass", who: "Sales rep dan team leader", outcome: "Naik konversi 30% dalam 90 hari", price: "Rp 1.799.000", featured: false },
  { type: "Bundle", img: ebookImg, title: "People Development Starter Pack", who: "HR yang baru memulai", outcome: "3 e-book + 1 mini course + template", price: "Rp 499.000", featured: true },
  { type: "Webinar", img: webinarImg, title: "High-Performance Team dengan Adab", who: "Founder dan team leader", outcome: "Live 90 menit + replay 30 hari", price: "Rp 299.000", featured: false },
];

const membership = [
  "Sesi Q&A bulanan langsung dengan Faisal",
  "Library template HR & L&D yang terus diperbarui",
  "Akses prioritas ke webinar dan event eksklusif",
  "Komunitas privat profesional people development",
  "Diskon 30% untuk seluruh produk Academy",
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
      {/* HERO — energetic, conversion-driven */}
      <section className="relative pt-36 pb-16 bg-surface-light text-surface-light-foreground overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-signal/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
        <div className="container-wide relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-signal/20 border border-signal/40 mb-6">
              <Crown className="w-3.5 h-3.5 text-surface-light-foreground" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">Faisal Maulana Academy</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] font-medium">
              Belajar people development <em className="italic text-foreground/70">dari praktisi korporasi</em>, langsung dari rumah Anda.
            </h1>
            <p className="mt-6 text-lg text-surface-light-foreground/70 max-w-2xl">
              E-book, online course, webinar live, dan membership eksklusif — dengan kualitas yang sama seperti program in-house korporasi kami.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-signal text-signal-foreground hover:bg-signal/90 h-14 px-7 font-semibold">
                Telusuri Semua Produk <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-7 border-surface-light-foreground/30 text-surface-light-foreground hover:bg-surface-light-foreground/5">
                Gabung Membership
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Akses seumur hidup</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Sertifikat resmi</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Garansi 7 hari uang kembali</div>
            </div>
          </div>
        </div>
      </section>

      {/* WEBINAR COUNTDOWN */}
      <section className="bg-foreground text-background py-12">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-signal mb-2">Webinar Live Berikutnya</div>
            <h3 className="font-serif text-2xl md:text-3xl">Membangun Tim High-Performance dengan Nilai Adab</h3>
            <p className="text-sm opacity-70 mt-1">Hanya untuk 100 peserta pertama • Rp 299.000</p>
          </div>
          <div className="flex items-center gap-3">
            {[{n:days,l:"Hari"},{n:hours,l:"Jam"},{n:mins,l:"Menit"}].map(x => (
              <div key={x.l} className="bg-background/10 border border-background/20 rounded-xl px-5 py-3 text-center min-w-[80px]">
                <div className="font-serif text-3xl text-signal">{String(x.n).padStart(2,'0')}</div>
                <div className="text-[10px] uppercase tracking-wider opacity-60">{x.l}</div>
              </div>
            ))}
            <Button size="lg" className="bg-signal text-signal-foreground hover:bg-signal/90 h-14 ml-2 font-semibold">Daftar</Button>
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
              {["Semua","E-book","Course","Bundle","Webinar"].map((f, i) => (
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
                    <span className="font-serif text-2xl text-foreground">{p.price}</span>
                    <Button size="sm" className="bg-signal text-signal-foreground hover:bg-signal/90 font-semibold">Beli Sekarang</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="section-padding bg-card/40 border-y border-border/60">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-3">Inner Circle</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">Membership untuk profesional yang ingin terus tumbuh.</h2>
              <p className="text-muted-foreground mt-5 leading-relaxed">Sebuah lingkaran kecil — terjaga, hangat, dan bergerak bersama. Akses langsung ke pengetahuan, template, dan komunitas yang biasanya hanya tersedia untuk klien korporasi.</p>
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
                  <Button size="lg" className="w-full bg-gradient-gold text-primary-foreground shadow-gold h-13">Bergabung Sekarang</Button>
                  <div className="text-xs text-muted-foreground text-center mt-4">Bisa berhenti kapan saja • Garansi 30 hari</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <div className="eyebrow mb-3">Sudah Dipilih Ribuan Profesional</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-12">Kualitas korporasi, harga yang terjangkau.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[{n:"12.000+",l:"Student aktif"},{n:"4.9/5",l:"Rating produk"},{n:"30+",l:"Course tersedia"},{n:"95%",l:"Tingkat penyelesaian"}].map(s => (
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
