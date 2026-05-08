import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoEmbed from "@/components/VideoEmbed";
import workshopImg from "@/assets/event-corporate-training.webp";
import consultationImg from "@/assets/event-group-photo.webp";
import painBg from "@/assets/event-roleplay.webp";
import processBg from "@/assets/event-leadership-workshop.webp";

const painPoints = [
  { title: "Training tanpa diagnosis", desc: "Program dibeli berdasarkan tren, bukan kebutuhan riil organisasi — sehingga dampaknya cepat hilang." },
  { title: "Knowledge tidak menjadi behavior", desc: "Peserta paham di kelas, lupa di lapangan. Tidak ada sistem reinforcement pasca-training." },
  { title: "Tidak ada metrik dampak", desc: "Evaluasi berhenti di lembar kepuasan. Dampak tidak terukur, sponsor sulit diyakinkan untuk batch berikutnya." },
];

const signaturePrograms = [
  { title: "Sales & Marketing Champion", desc: "Program untuk membangun tim sales yang lebih disiplin, percaya diri, customer-centric, dan konsisten mengejar target dengan pendekatan yang terarah.", target: "Sales Team, Business Development, Marketing Team" },
  { title: "Impactful Communication Skill", desc: "Program untuk memperkuat cara menyampaikan pesan, mendengarkan, membangun engagement, dan menciptakan kolaborasi yang lebih efektif.", target: "Leader, Staff, Frontliner, Professional" },
  { title: "Transformational Leadership Mastery", desc: "Program untuk membantu leader menggerakkan tim, membangun kepercayaan, memperkuat mindset, dan menerjemahkan strategi menjadi aksi.", target: "Manager, Supervisor, Leader" },
  { title: "Team Synergy & Trust Building", desc: "Program untuk memperkuat kepercayaan, kolaborasi, komunikasi tim, dan energi kerja bersama melalui aktivitas experiential.", target: "Team, Division, Organization" },
];

const supportingModules = [
  "Strong Mindset & Motivation",
  "Service Excellence",
  "Negotiation & Persuasion",
  "Company Gathering & Kick-Off",
  "Financial Mastery",
  "Team Engagement Breakthrough",
];

const process = [
  { n: "01", title: "Diskusi Diagnostik", desc: "Sesi awal untuk memahami tantangan organisasi, target bisnis, dan konteks tim." },
  { n: "02", title: "Training Needs Analysis", desc: "Asesmen mendalam: wawancara stakeholder, observasi, dan review data performa." },
  { n: "03", title: "Desain Program", desc: "Arsitektur pembelajaran disesuaikan dengan budaya, bahasa, dan ritme bisnis Anda." },
  { n: "04", title: "Eksekusi & Fasilitasi", desc: "Delivery oleh fasilitator senior dengan metode experiential dan studi kasus relevan." },
  { n: "05", title: "Evaluasi Dampak", desc: "Pre/post assessment, feedback, report, dan rekomendasi tindak lanjut." },
];

const Corporate = () => (
  <>
    {/* HERO */}
    <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-hero">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial-gold blur-3xl" />
      <div className="container-wide relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 reveal">
          <div className="eyebrow mb-4">Solusi Korporasi • Adab. Science. Impact.</div>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">
            Program transformasi SDM untuk perusahaan yang <em className="text-gradient-gold not-italic">serius dengan perubahan perilaku dan dampak bisnis.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Kami membantu HR, L&D, dan leader merancang program pengembangan manusia yang dimulai dari diagnosis kebutuhan, dijalankan secara experiential, dan dievaluasi berdasarkan perubahan yang nyata.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold h-13 px-7">
              <Link to="/contact">Jadwalkan Diskusi Diagnostik <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-13 px-7 border-foreground/20">
              <a href="#programs">Lihat Corporate Solutions</a>
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
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Training yang baik bukan dimulai dari materi, tetapi dari diagnosis kebutuhan, perilaku yang ingin diubah, dan indikator hasil yang ingin dicapai.
          </p>
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
            <div className="eyebrow mb-3">ADDIE + ADAB Framework</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Pendekatan ilmiah yang menghasilkan keputusan investasi yang cerdas.</h2>
            <p className="text-muted-foreground mt-5">ADDIE menjadi fondasi desain pembelajaran. ADAB menjadi jembatan agar pembelajaran bergerak menuju perubahan perilaku dan dampak bisnis.</p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {[
              { t: "Diagnosis sebelum desain", d: "Kami mulai dari data, bukan asumsi. Hasilnya: program yang tepat sasaran." },
              { t: "Desain modular & kontekstual", d: "Konten disesuaikan dengan industri, level, dan bahasa internal organisasi Anda." },
              { t: "Pengembangan dengan studi kasus nyata", d: "Peserta belajar memecahkan masalah yang akan mereka temui di pekerjaan sehari-hari." },
              { t: "Implementasi dengan reinforcement", d: "Action learning project, pendampingan, dan komunitas pasca-program." },
              { t: "Evaluasi melalui assessment, report, dan tindak lanjut", d: "Pre/post assessment, feedback, dan rekomendasi tindak lanjut yang terukur." },
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

    {/* VIDEO — Corporate facilitation */}
    <section className="section-padding bg-card/30 border-y border-border/60">
      <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <VideoEmbed videoId="3SnYgfA_OS8" query="si=S1K0utafqt8YO06S" title="Cuplikan Fasilitasi Program Korporasi" />
        </div>
        <div className="lg:col-span-5">
          <div className="eyebrow mb-3">Cara Kami Bekerja di Ruang Kelas</div>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">Lihat bagaimana proses pembelajaran berlangsung.</h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Cuplikan fasilitasi, interaksi peserta, dan pendekatan experiential yang digunakan dalam program korporasi.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-foreground/85">
            <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Interaktif, bukan sekadar ceramah satu arah.</li>
            <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Berbasis studi kasus, simulasi, dan refleksi.</li>
            <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Diakhiri dengan action plan yang dapat ditindaklanjuti.</li>
          </ul>
          <Button asChild className="mt-7 bg-gradient-gold text-primary-foreground shadow-gold">
            <Link to="/contact">Jadwalkan Diskusi Diagnostik <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* SIGNATURE PROGRAMS */}
    <section id="programs" className="section-padding">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="eyebrow mb-3">Corporate Solutions</div>
          <h2 className="font-serif text-4xl md:text-5xl">Program dapat disesuaikan dengan kebutuhan organisasi.</h2>
          <p className="text-muted-foreground mt-4">Disesuaikan dengan industri, level peserta, dan target perubahan yang ingin dicapai.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {signaturePrograms.map((p, i) => (
            <div key={i} className="card-premium p-7 flex flex-col">
              <div className="text-xs uppercase tracking-wider text-primary mb-3">0{i + 1} • Signature Corporate Program</div>
              <h3 className="font-serif text-2xl md:text-3xl mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-5 pt-5 border-t border-border/60 flex items-center justify-between gap-4">
                <div className="text-xs text-muted-foreground"><span className="text-foreground/70 font-medium">Target:</span> {p.target}</div>
                <Button asChild size="sm" variant="outline" className="flex-shrink-0">
                  <Link to="/contact">Detail</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting modules */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="eyebrow mb-3">Supporting Modules</div>
            <h3 className="font-serif text-2xl md:text-3xl">Modul pendukung yang dapat dikombinasikan dengan program utama.</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {supportingModules.map((m, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-foreground/85 hover:border-primary/40 transition-colors">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CASE STUDY */}
    <section className="section-padding bg-card/30 border-y border-border/60">
      <div className="container-wide">
        <div className="card-premium p-10 md:p-14 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-3">Contoh Studi Kasus</div>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">BAPANAS — Pelatihan Peningkatan Kapasitas ASN</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Program dirancang untuk memperkuat growth mindset, komunikasi efektif, service excellence, dan internalisasi nilai kerja yang berorientasi pelayanan. Evaluasi menunjukkan kepuasan peserta yang tinggi dan peningkatan hasil post-test yang signifikan.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[{ n: "4,73/5", l: "Kepuasan Peserta" }, { n: "+22%", l: "Hasil Post-Test" }, { n: "5", l: "Hari Program" }].map(s => (
                <div key={s.l}>
                  <div className="font-serif text-3xl text-gradient-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-square rounded-2xl overflow-hidden border border-primary/20">
              <img src={consultationImg} alt="Studi kasus pelatihan ASN BAPANAS" className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="section-padding relative overflow-hidden">
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
          {process.map((p) => (
            <div key={p.n} className="card-premium p-6">
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
        <p className="text-muted-foreground mt-5 max-w-xl mx-auto">Sesi awal selalu gratis. Anda akan pulang dengan minimal satu insight baru — meskipun belum tentu kita bekerja sama.</p>
        <Button asChild size="lg" className="mt-8 bg-gradient-gold text-primary-foreground shadow-gold h-14 px-8">
          <Link to="/contact">Jadwalkan Konsultasi Corporate <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Corporate;
