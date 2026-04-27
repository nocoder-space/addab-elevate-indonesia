import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2, Star, Sparkles, Users, Building2, Award, Target, Lightbulb, Rocket, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/faisal-hero.jpg";
import portraitImg from "@/assets/faisal-profile.jpg";
import workshopImg from "@/assets/faisal-corporate.jpg";
import ebookImg from "@/assets/ebook-mockup.jpg";
import courseImg from "@/assets/course-mockup.jpg";
import webinarImg from "@/assets/webinar-mockup.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";
import patternBg from "@/assets/pattern-bg.jpg";
import methodologyBg from "@/assets/methodology-bg.jpg";
import galleryA from "@/assets/event-propertypro.webp";
import galleryB from "@/assets/event-corporate-training.webp";
import galleryC from "@/assets/event-leadership-workshop.webp";
import galleryD from "@/assets/event-capacity-building.webp";
import galleryE from "@/assets/event-ballroom.webp";
import philosophyBg from "@/assets/event-group-photo.webp";
import servicesBg from "@/assets/event-engagement-class.webp";

const trustBadges = ["Perbankan", "Asuransi", "BUMN", "Telekomunikasi", "FMCG", "Kementerian", "Energi", "Manufaktur"];

const addieStages = [
  { letter: "A", title: "Analysis", desc: "Diagnosa kebutuhan organisasi, gap kompetensi, dan akar persoalan performa sebelum desain dimulai.", icon: Target },
  { letter: "D", title: "Design", desc: "Merancang arsitektur pembelajaran yang selaras dengan tujuan bisnis dan budaya perusahaan.", icon: Lightbulb },
  { letter: "D", title: "Development", desc: "Membangun materi, simulasi, dan pengalaman yang relevan dengan konteks tim Anda.", icon: Sparkles },
  { letter: "I", title: "Implementation", desc: "Eksekusi terukur dengan fasilitator senior dan metode experiential learning.", icon: Rocket },
  { letter: "E", title: "Evaluation", desc: "Mengukur dampak perilaku, performa, dan ROI — bukan sekadar kepuasan peserta.", icon: BarChart3 },
];

const services = [
  { title: "Sales & Marketing Champion", outcome: "Naikkan rasio konversi dan revenue per representative", desc: "Membangun mentalitas juara, sistem prospecting, dan keterampilan closing berbasis psikologi pelanggan Indonesia." },
  { title: "Transformational Leadership", outcome: "Membentuk pemimpin yang dipercaya dan diikuti", desc: "Mengembangkan kapasitas pengaruh, pengambilan keputusan, dan keberanian moral di level manajerial." },
  { title: "Team Synergy & Trust Building", outcome: "Tingkatkan engagement dan menurunkan turnover", desc: "Membangun rasa saling percaya, akuntabilitas, dan ritme kolaborasi yang sehat di lintas divisi." },
  { title: "Service Excellence", outcome: "Menghidupkan budaya layanan yang memenangkan loyalitas", desc: "Mengubah sekadar prosedur menjadi pengalaman pelanggan yang konsisten dan bermakna." },
  { title: "Impactful Communication", outcome: "Menyampaikan ide yang didengar dan ditindaklanjuti", desc: "Public speaking, storytelling bisnis, dan struktur komunikasi yang dipakai eksekutif kelas dunia." },
  { title: "Negotiation & Persuasion", outcome: "Hasilkan kesepakatan tanpa mengorbankan hubungan", desc: "Strategi negosiasi berbasis prinsip, etika, dan pemahaman psikologis lawan bicara." },
];

const academyTeasers = [
  { img: ebookImg, badge: "E-book", title: "ADDIE + Adab: Panduan People Development", price: "Rp 149.000", outcome: "Kerangka kerja yang dapat langsung dipraktikkan HR & L&D." },
  { img: courseImg, badge: "Online Course", title: "Islamic Leadership Mastery", price: "Rp 1.999.000", outcome: "8 modul, 32 video, sertifikat — untuk pemimpin yang amanah." },
  { img: webinarImg, badge: "Live Webinar", title: "High-Performance Team dengan Nilai Adab", price: "Rp 299.000", outcome: "Rabu, 7 Mei • 90 menit live + replay 30 hari." },
];

const testimonials = [
  { name: "Aditya Pratama", role: "HR Director, BUMN Energi", img: t2, quote: "Pendekatan Pak Faisal berbeda — beliau melakukan diagnosa, bukan sekadar memberi training. ROI-nya terlihat dalam 6 bulan." },
  { name: "Annisa Rahmawati", role: "L&D Manager, Bank Nasional", img: t1, quote: "Materinya sistematis, fasilitasinya hangat. Tim kami akhirnya bicara hal yang sama dengan bahasa yang sama." },
  { name: "Reza Hadiansyah", role: "Founder, Startup Fintech", img: t3, quote: "Saya mengikuti Academy untuk mengembangkan tim awal. Praktis, terukur, dan tetap menjaga nilai." },
];

const Index = () => {
  return (
    <>
      {/* HERO — full-bleed cinematic photo with left-aligned copy that protects subject */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Faisal Maulana — People Development Expert Indonesia"
            className="w-full h-full object-cover object-[75%_center] md:object-[68%_center]"
            width={1920}
            height={1280}
            fetchPriority="high"
          />
          {/* Left-to-right fade keeps text legible while preserving subject on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 md:via-background/65 to-background/5" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute -left-32 top-1/3 w-[500px] h-[500px] bg-primary/15 blur-3xl rounded-full" />
        </div>

        <div className="container-wide relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 xl:col-span-6 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-background/60 backdrop-blur-sm mb-7">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold">ADDIE + Adab Framework</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.04] font-medium text-foreground">
              Mengubah <span className="italic text-gradient-gold">potensi manusia</span> menjadi performa bisnis yang terukur.
            </h1>

            <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed">
              Saya membantu perusahaan Indonesia membangun manusia — bukan sekadar melatih karyawan. Memadukan instructional design, experiential learning, dan nilai humanis Islami untuk transformasi yang berakhlak dan berdampak.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold h-13 px-7 font-semibold">
                <Link to="/contact">Konsultasi Gratis <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-7 border-foreground/25 bg-background/40 backdrop-blur-sm hover:border-primary hover:bg-primary/10">
                <Link to="/academy">Jelajahi Academy</Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg pt-6 border-t border-border/60">
              {[
                { n: "18+", l: "Tahun pengalaman" },
                { n: "200+", l: "Korporasi & institusi" },
                { n: "100K+", l: "Peserta terlatih" },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-serif text-2xl md:text-4xl text-gradient-gold">{s.n}</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-1.5">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-2.5 text-xs md:text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
              </div>
              <span>4.9 / 5 — dari 23.000+ peserta korporasi</span>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border/60 py-10 bg-card/40">
        <div className="container-wide">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-center mb-6">
            Dipercaya oleh organisasi terkemuka di Indonesia
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {trustBadges.map(b => (
              <div key={b} className="text-foreground/50 hover:text-primary transition-colors font-serif text-lg tracking-wide">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={philosophyBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="absolute inset-0 bg-gradient-radial-gold opacity-30 pointer-events-none" />
        <div className="container-tight relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow mb-4">Filosofi</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Menjembatani jurang antara <em className="text-gradient-gold not-italic">strategi dan eksekusi</em>, ilmu dan perilaku, pelatihan dan transformasi.
            </h2>
            <div className="mx-auto my-8 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Banyak program pengembangan SDM gagal bukan karena materinya buruk — tetapi karena memperlakukan manusia sebagai aset, bukan amanah. Pendekatan saya menempatkan martabat manusia sebagai pusat: ilmu sebagai struktur, adab sebagai jiwa, dan dampak bisnis sebagai bukti.
            </p>
            <p className="font-arabic text-2xl text-primary mt-8">"خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ"</p>
            <p className="text-sm text-muted-foreground italic mt-2">"Sebaik-baik manusia adalah yang paling bermanfaat bagi sesamanya."</p>
          </div>
        </div>
      </section>

      {/* ADDIE FRAMEWORK */}
      <section className="section-padding relative border-y border-border/60 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src={methodologyBg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-40 saturate-110"
          />
          {/* Soft vignette: gelap di atas & bawah, tengah tetap memperlihatkan foto */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/35 to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-3">Metodologi</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Kerangka <span className="text-gradient-gold">ADDIE + Adab</span> — proses transformasi yang sistematis.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-muted-foreground leading-relaxed">
                ADDIE adalah standar instructional design global. Kami memadukannya dengan prinsip adab, amanah, dan ikhlas — sehingga pengembangan SDM menjadi proses yang ilmiah, sekaligus memuliakan manusia.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {addieStages.map((s, i) => (
              <div key={i} className="card-premium p-6 group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center font-serif font-bold text-xl text-primary-foreground">
                    {s.letter}
                  </div>
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-serif text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow mb-3">Program Korporasi</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Dirancang untuk hasil bisnis, dijalankan dengan adab.</h2>
            <p className="text-muted-foreground mt-4">Enam fokus area yang paling sering dibutuhkan korporasi Indonesia — semuanya dapat dikustomisasi sesuai konteks tim Anda.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="card-premium p-7 flex flex-col group">
                <div className="text-xs uppercase tracking-wider text-primary mb-3">Outcome</div>
                <p className="text-sm text-foreground/90 mb-5 font-medium">{s.outcome}</p>
                <h3 className="font-serif text-2xl mb-3 leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <Link to="/corporate" className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                  Pelajari program <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMY TEASER — different visual style */}
      <section className="section-padding bg-surface-light text-surface-light-foreground relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-signal/30 blur-3xl rounded-full" />
        <div className="container-wide relative">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-surface-light-foreground/60 mb-3">Faisal Maulana Academy</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-2xl">Belajar kapan saja, dari mana saja — dengan kualitas korporasi.</h2>
            </div>
            <Button asChild size="lg" className="bg-signal text-signal-foreground hover:bg-signal/90 h-12 px-6 font-semibold">
              <Link to="/academy">Buka Toko Academy <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {academyTeasers.map((p, i) => (
              <div key={i} className="bg-background text-foreground rounded-2xl overflow-hidden border border-border shadow-card-premium hover:-translate-y-1 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden bg-card relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
                  <span className="absolute top-3 left-3 bg-signal text-signal-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">{p.badge}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-2 leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.outcome}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-foreground">{p.price}</span>
                    <Button size="sm" className="bg-signal text-signal-foreground hover:bg-signal/90 font-semibold">Beli</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow mb-3">Bukti Transformasi</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Apa kata mereka yang sudah bekerja sama.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="card-premium p-8 flex flex-col">
                <div className="flex mb-5">{[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-primary text-primary" />)}</div>
                <blockquote className="font-serif text-lg leading-relaxed text-foreground/90 flex-1">"{t.quote}"</blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-primary/30" loading="lazy" width={96} height={96} />
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative rounded-3xl overflow-hidden border border-primary/20 p-10 md:p-16 bg-gradient-hero">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${patternBg})`, backgroundSize: "cover" }} />
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-radial-gold blur-3xl" />
            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="eyebrow mb-4">Langkah Berikutnya</div>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight">Mari bicarakan transformasi tim Anda.</h2>
                <p className="text-muted-foreground mt-5 max-w-xl">Diskusi awal selama 30 menit — gratis, tanpa komitmen. Saya akan dengarkan tantangan Anda dan bantu petakan langkah pertama yang paling tepat.</p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold h-14 text-base">
                  <Link to="/contact">Jadwalkan Konsultasi Korporasi <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 text-base border-foreground/20">
                  <Link to="/academy">Mulai dari Academy</Link>
                </Button>
                <div className="text-xs text-muted-foreground text-center pt-2">Respon dalam 1×24 jam kerja</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
