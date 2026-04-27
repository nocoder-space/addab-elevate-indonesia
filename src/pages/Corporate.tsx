import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Target, Users, Building2, Briefcase, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import workshopImg from "@/assets/event-corporate-training.webp";
import consultationImg from "@/assets/event-group-photo.webp";
import painBg from "@/assets/event-roleplay.webp";
import processBg from "@/assets/event-leadership-workshop.webp";

const painPoints = [
  { title: "Training tanpa diagnosa", desc: "Program dibeli berdasarkan tren, bukan kebutuhan riil organisasi — sehingga dampaknya cepat hilang." },
  { title: "Knowledge tidak menjadi behavior", desc: "Peserta paham di kelas, lupa di lapangan. Tidak ada sistem reinforcement pasca-training." },
  { title: "Tidak ada metrik dampak", desc: "Evaluasi berhenti di lembar kepuasan. ROI tidak terukur, sponsor sulit diyakinkan untuk batch berikutnya." },
];

const programs = [
  { cat: "Sales", title: "Sales & Marketing Champion", duration: "2-3 hari", level: "Frontline – Manager" },
  { cat: "Leadership", title: "Transformational Leadership", duration: "3 hari + coaching", level: "Manager – C-Level" },
  { cat: "Team", title: "Team Synergy & Trust Building", duration: "2 hari outdoor/indoor", level: "Cross-functional" },
  { cat: "Service", title: "Service Excellence Culture", duration: "2 hari + audit", level: "Frontline – Supervisor" },
  { cat: "Communication", title: "Impactful Business Communication", duration: "2 hari", level: "Semua level" },
  { cat: "Negotiation", title: "Principled Negotiation", duration: "2 hari", level: "Manager – Direksi" },
];

const process = [
  { n: "01", title: "Diskusi Diagnostik", desc: "Sesi 60 menit untuk memahami tantangan organisasi, target bisnis, dan konteks tim." },
  { n: "02", title: "Training Needs Analysis", desc: "Asesmen mendalam: wawancara stakeholder, observasi, dan review data performa." },
  { n: "03", title: "Desain Program Kustom", desc: "Arsitektur pembelajaran disesuaikan dengan budaya, bahasa, dan ritme bisnis Anda." },
  { n: "04", title: "Eksekusi & Fasilitasi", desc: "Delivery oleh fasilitator senior, dengan metode experiential dan studi kasus relevan." },
  { n: "05", title: "Evaluasi Dampak", desc: "Pengukuran level 1–4 Kirkpatrick, plus laporan ROI yang siap disampaikan ke direksi." },
];

const Corporate = () => (
  <>
    {/* HERO */}
    <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-hero">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial-gold blur-3xl" />
      <div className="container-wide relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 reveal">
          <div className="eyebrow mb-4">Solusi Korporasi</div>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">
            Program transformasi SDM untuk perusahaan yang <em className="text-gradient-gold not-italic">serius dengan dampak.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Kami bukan vendor training. Kami partner strategis bagi HR, L&D, dan eksekutif yang ingin pengembangan SDM yang terdiagnosa, terdesain, dan terukur — dari ruang kelas sampai laporan kuartal.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold h-13 px-7">
              <Link to="/contact">Jadwalkan Diskusi Diagnostik <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-13 px-7 border-foreground/20">
              <a href="#programs">Lihat Katalog Program</a>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-primary/20 shadow-elegant">
            <img src={workshopImg} alt="Workshop korporasi Faisal Maulana Jakarta" className="w-full h-full object-cover" width={1600} height={2000} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>

    {/* PAIN POINTS */}
    <section className="section-padding border-y border-border/60 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.10]">
        <img src={painBg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      </div>
      <div className="container-wide relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow mb-3">Mengapa Banyak Program Gagal</div>
          <h2 className="font-serif text-4xl md:text-5xl">Tiga jebakan yang membuat investasi training menguap.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((p, i) => (
            <div key={i} className="card-premium p-7">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 border border-destructive/30 flex items-center justify-center mb-5">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-serif text-xl mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ADDIE DEEP DIVE */}
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <div className="eyebrow mb-3">Logika Bisnis di Balik ADDIE</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Pendekatan ilmiah yang menghasilkan keputusan investasi yang cerdas.</h2>
            <p className="text-muted-foreground mt-5">Setiap rupiah yang dikeluarkan untuk pengembangan SDM harus bisa dipertanggungjawabkan. ADDIE memberi kami — dan Anda — kerangka untuk membuktikannya.</p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {[
              { t: "Diagnosa sebelum desain", d: "Kami mulai dari data, bukan asumsi. Hasilnya: program yang tepat sasaran." },
              { t: "Desain modular & kontekstual", d: "Konten disesuaikan dengan industri, level, dan bahasa internal organisasi Anda." },
              { t: "Pengembangan dengan studi kasus nyata", d: "Peserta belajar memecahkan masalah yang akan mereka temui besok pagi." },
              { t: "Implementasi dengan reinforcement", d: "Action learning project, coaching, dan komunitas pasca-program." },
              { t: "Evaluasi 4 level Kirkpatrick", d: "Kepuasan, pembelajaran, perilaku, dan hasil bisnis — semua diukur." },
            ].map((x, i) => (
              <div key={i} className="card-premium p-6 flex gap-5">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl mb-1.5">{x.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* PROGRAMS */}
    <section id="programs" className="section-padding bg-card/30 border-y border-border/60">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow mb-3">Katalog Program In-House</div>
          <h2 className="font-serif text-4xl md:text-5xl">Enam pilar transformasi yang sudah terbukti.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {programs.map((p, i) => (
            <div key={i} className="card-premium p-7 flex items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-primary">{p.cat}</span>
                <h3 className="font-serif text-2xl mt-2 mb-3">{p.title}</h3>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
                  <span>Durasi: {p.duration}</span>
                  <span>•</span>
                  <span>Audiens: {p.level}</span>
                </div>
              </div>
              <Button asChild size="sm" variant="outline" className="flex-shrink-0">
                <Link to="/contact">Detail</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CASE STUDY */}
    <section className="section-padding">
      <div className="container-wide">
        <div className="card-premium p-10 md:p-14 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-3">Studi Kasus</div>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">Transformasi budaya layanan di salah satu bank nasional</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Sebuah perbankan dengan 3.000+ frontline mengalami penurunan customer satisfaction. Dalam 9 bulan, kami merancang program Service Excellence berbasis ADDIE — dengan diagnosa, desain, sertifikasi internal, dan reinforcement digital.</p>
            <div className="grid grid-cols-3 gap-6">
              {[{ n: "+34%", l: "CSAT" }, { n: "+22%", l: "Cross-sell" }, { n: "−18%", l: "Turnover frontline" }].map(s => (
                <div key={s.l}>
                  <div className="font-serif text-3xl text-gradient-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-square rounded-2xl overflow-hidden border border-primary/20">
              <img src={consultationImg} alt="Studi kasus transformasi korporasi" className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="section-padding bg-card/30 border-y border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.10]">
        <img src={processBg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-transparent to-background/85" />
      </div>
      <div className="container-wide relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow mb-3">Cara Kami Bekerja</div>
          <h2 className="font-serif text-4xl md:text-5xl">Lima tahap dari diskusi awal hingga laporan dampak.</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {process.map((p, i) => (
            <div key={i} className="card-premium p-6">
              <div className="font-serif text-3xl text-gradient-gold mb-4">{p.n}</div>
              <h3 className="font-serif text-lg mb-2">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-tight text-center">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">Siap memulai diagnosa untuk tim Anda?</h2>
        <p className="text-muted-foreground mt-5 max-w-xl mx-auto">Sesi pertama gratis. Anda akan pulang dengan minimal satu insight baru — meskipun belum tentu kita bekerja sama.</p>
        <Button asChild size="lg" className="mt-8 bg-gradient-gold text-primary-foreground shadow-gold h-14 px-8">
          <Link to="/contact">Jadwalkan Konsultasi Korporasi <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Corporate;
