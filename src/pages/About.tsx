import { Link } from "react-router-dom";
import { Award, BookOpen, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoEmbed from "@/components/VideoEmbed";
import portrait from "@/assets/faisal-profile.jpg";
import heroScene from "@/assets/event-corporate-training.webp";
import narrativeBg from "@/assets/event-roleplay-stage.webp";
import timelineBg from "@/assets/event-interactive-class.webp";

const timeline = [
  { phase: "Awal Karier", desc: "Memulai perjalanan sebagai trainer, belajar bahwa transformasi sejati dimulai dari diagnosis, bukan motivasi sesaat." },
  { phase: "Pendalaman Metodologi", desc: "Mendalami ADDIE Model, Kirkpatrick Evaluation, dan instructional design dari berbagai institusi global." },
  { phase: "Kemitraan Korporasi", desc: "Menjadi training partner bagi perusahaan multinasional di sektor perbankan, asuransi, telekomunikasi, dan FMCG." },
  { phase: "Integrasi Nilai Adab", desc: "Memformalkan ADDIE + ADAB Framework — memadukan rigor ilmiah dengan nilai adab yang inklusif dan profesional." },
  { phase: "Pengembangan Academy", desc: "Membuka akses pengetahuan korporasi kepada UMKM, founder, dan profesional di seluruh Indonesia." },
  { phase: "Ekosistem Pembelajaran", desc: "Lebih dari 200 organisasi dan 100.000+ peserta telah mengikuti program — dan terus bertumbuh." },
];

const values = [
  { icon: Heart, title: "Adab", desc: "Memulai perubahan dari cara berpikir, bersikap, dan memperlakukan manusia." },
  { icon: Award, title: "Amanah", desc: "Menjaga kepercayaan klien melalui proses yang jujur, rapi, dan bertanggung jawab." },
  { icon: BookOpen, title: "Ilmu", desc: "Berpijak pada pendekatan ilmiah, pengalaman lapangan, dan pembelajaran berkelanjutan." },
  { icon: Heart, title: "Ikhlas", desc: "Menjadikan pengembangan manusia sebagai kontribusi, bukan sekadar pekerjaan." },
];

const credentials = [
  "International Certified Trainer",
  "Certified Professional Coach",
  "Certified Financial Field Leader",
  "Registered Financial Planner",
  "Qualified Wealth Planner",
  "Certified Risk Management Officer",
  "18+ tahun pengalaman corporate training",
  "Pembicara di 500+ event korporasi & publik",
];

const About = () => (
  <>
    <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-hero">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial-gold blur-3xl" />
      <div className="container-wide relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="eyebrow mb-4">Tentang Faisal Maulana • Adab. Science. Impact.</div>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">
            Lebih dari trainer. <em className="text-gradient-gold not-italic">Arsitek transformasi manusia yang beradab dan terukur.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Selama lebih dari 18 tahun, Faisal Maulana mendampingi individu dan organisasi untuk mengubah mindset, komunikasi, kepemimpinan, dan cara kerja menjadi perilaku yang lebih berdampak.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-square rounded-3xl overflow-hidden border border-primary/20 shadow-elegant">
            <img src={portrait} alt="Faisal Maulana — Transformational People Development" className="w-full h-full object-cover" width={1024} height={1024} />
          </div>
        </div>
      </div>
    </section>

    {/* NARRATIVE */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={narrativeBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-[0.12]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      <div className="container-tight prose prose-invert max-w-3xl relative">
        <div className="eyebrow mb-3 not-prose">Cerita di Balik Karya</div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight not-prose mb-8">Mengapa saya memilih jalan ini.</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>Saya memulai karier sebagai trainer muda yang penuh semangat, namun bingung. Saya melihat banyak program training yang meriah di kelas, tapi sunyi dampaknya. Peserta tertawa, tepuk tangan, lalu kembali ke meja kerja seperti tidak terjadi apa-apa.</p>
          <p>Saya mempelajari ADDIE — kerangka instructional design yang dipakai militer dan korporasi global. Disiplin ilmiahnya membuka mata saya. Tapi sesuatu masih terasa kurang.</p>
          <p>Saya percaya bahwa pengembangan manusia tidak boleh hanya soal performa. Bagi saya, adab bukan label yang sempit. <span className="text-foreground/95">Adab adalah cara memperlakukan manusia dengan martabat: amanah, empati, integritas, dan tanggung jawab.</span> Maka lahirlah <span className="text-primary font-medium">ADDIE + ADAB Framework</span> — bukan sebagai jargon, tapi sebagai cara kerja.</p>
          <p>Hari ini, saya membantu HR, leader, dan eksekutif Indonesia merancang program yang bukan hanya menaikkan KPI, tapi juga menjaga martabat manusia yang dilatih.</p>
        </div>
      </div>
    </section>

    {/* VIDEO — Personal story */}
    <section className="section-padding bg-card/30 border-y border-border/60">
      <div className="container-tight max-w-4xl">
        <div className="text-center mb-10">
          <div className="eyebrow mb-3">Video Pengantar</div>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">Cerita singkat di balik pendekatan Faisal Maulana.</h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
            Sebuah video pengantar tentang perjalanan, keyakinan, dan alasan mengapa pengembangan manusia harus menggabungkan adab, ilmu, dan dampak.
          </p>
        </div>
        <VideoEmbed videoId="S8A85niP3lU" query="si=EN0C7S_ppH2aMMvS" title="Cerita di Balik Pendekatan Faisal Maulana" />
        <p className="text-center text-sm text-muted-foreground italic mt-6">Adab. Science. Impact. — fondasi transformasi manusia yang berkelanjutan.</p>
      </div>
    </section>

    {/* TIMELINE */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.08]">
        <img src={timelineBg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
      </div>
      <div className="container-wide relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow mb-3">Perjalanan</div>
          <h2 className="font-serif text-4xl md:text-5xl">Tonggak yang membentuk pendekatan ini.</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {timeline.map((t, i) => (
            <div key={i} className="card-premium p-7 grid md:grid-cols-12 gap-5 items-start">
              <div className="md:col-span-3">
                <div className="font-serif text-xl text-gradient-gold">0{i + 1}</div>
                <div className="text-sm uppercase tracking-wider text-primary mt-1">{t.phase}</div>
              </div>
              <div className="md:col-span-9">
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* VALUES */}
    <section className="section-padding bg-card/30 border-y border-border/60">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow mb-3">Nilai yang Dipegang</div>
          <h2 className="font-serif text-4xl md:text-5xl">Empat prinsip yang menyatukan setiap program.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div key={i} className="card-premium p-7">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CREDENTIALS */}
    <section className="section-padding">
      <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="eyebrow mb-3">Kredensial</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">Sertifikasi, pengalaman, dan rekam jejak.</h2>
          <ul className="space-y-3">
            {credentials.map((c, i) => (
              <li key={i} className="flex gap-3 text-foreground/90">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-primary/20">
          <img src={heroScene} alt="Faisal Maulana memfasilitasi sesi corporate training" className="w-full h-full object-cover" loading="lazy" width={1024} height={1280} />
        </div>
      </div>
    </section>

    <section className="section-padding text-center bg-card/30 border-t border-border/60">
      <div className="container-tight">
        <h2 className="font-serif text-4xl md:text-5xl">Mari berkolaborasi.</h2>
        <p className="text-muted-foreground mt-5 max-w-xl mx-auto">Diskusi awal selalu gratis dan tanpa komitmen. Kami akan membantu memetakan kebutuhan organisasi Anda.</p>
        <Button asChild size="lg" className="mt-8 bg-gradient-gold text-primary-foreground shadow-gold h-14 px-8">
          <Link to="/contact">Mulai Percakapan <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default About;
