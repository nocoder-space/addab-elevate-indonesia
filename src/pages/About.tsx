import { Link } from "react-router-dom";
import { Award, BookOpen, Briefcase, GraduationCap, Heart, Mic, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/faisal-profile.jpg";
import heroScene from "@/assets/event-corporate-training.webp";
import narrativeBg from "@/assets/event-roleplay-stage.webp";
import timelineBg from "@/assets/event-interactive-class.webp";

const timeline = [
  { year: "2007", title: "Awal Perjalanan", desc: "Memulai karier sebagai trainer di industri perbankan, belajar bahwa transformasi sejati dimulai dari diagnosa, bukan motivasi." },
  { year: "2012", title: "Sertifikasi Internasional", desc: "Mendalami ADDIE Model, Kirkpatrick Evaluation, dan instructional design dari institusi global." },
  { year: "2016", title: "Kemitraan Korporasi", desc: "Mulai menjadi training partner bagi perusahaan multinasional di sektor asuransi, telekomunikasi, dan FMCG." },
  { year: "2019", title: "Integrasi Nilai Islami", desc: "Memformalkan kerangka 'ADDIE + Adab' — memadukan rigor ilmiah dengan nilai humanis." },
  { year: "2022", title: "Lahirnya Academy", desc: "Membuka akses pengetahuan korporasi kepada UMKM, founder, dan profesional muda Muslim di seluruh Indonesia." },
  { year: "Sekarang", title: "Ekosistem Pembelajaran", desc: "Lebih dari 200 organisasi dan 100.000+ peserta telah mengikuti program — dan terus bertumbuh." },
];

const values = [
  { icon: Heart, title: "Adab", desc: "Manusia bukan aset — manusia adalah amanah. Setiap interaksi dijaga dengan kehormatan." },
  { icon: Award, title: "Amanah", desc: "Janji kami kepada klien adalah komitmen, bukan negosiasi. Kualitas tidak berkompromi." },
  { icon: BookOpen, title: "Ilmu", desc: "Setiap rekomendasi berbasis riset, data, dan pengalaman lapangan — bukan opini." },
  { icon: Heart, title: "Ikhlas", desc: "Kami bekerja untuk dampak yang nyata, bukan untuk pengakuan atau panggung." },
];

const credentials = [
  "Certified Master Trainer — Asia Pacific Training Institute",
  "ADDIE Instructional Design Specialist",
  "Kirkpatrick Four Levels® Evaluation Certified",
  "DISC & MBTI Certified Practitioner",
  "Lebih dari 18 tahun pengalaman corporate training",
  "Penulis & pembicara di 200+ event korporasi",
];

const About = () => (
  <>
    <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-hero">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial-gold blur-3xl" />
      <div className="container-wide relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="eyebrow mb-4">Tentang Faisal Maulana</div>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">
            Lebih dari trainer. <em className="text-gradient-gold not-italic">Penjaga proses pertumbuhan manusia.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Selama lebih dari 18 tahun, saya berdiri di antara dunia korporasi yang menuntut hasil dan dunia spiritual yang menghormati manusia. Pekerjaan saya adalah memastikan keduanya bisa hidup berdampingan — dengan ilmu, dengan adab, dengan dampak yang nyata.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-square rounded-3xl overflow-hidden border border-primary/20 shadow-elegant">
            <img src={portrait} alt="Faisal Maulana — portrait" className="w-full h-full object-cover" width={1024} height={1024} />
          </div>
        </div>
      </div>
    </section>

    {/* NARRATIVE */}
    <section className="section-padding">
      <div className="container-tight prose prose-invert max-w-3xl">
        <div className="eyebrow mb-3 not-prose">Cerita di Balik Karya</div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight not-prose mb-8">Mengapa saya memilih jalan ini.</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>Saya memulai karier sebagai trainer muda yang penuh semangat, namun bingung. Saya melihat banyak program training yang meriah di kelas, tapi sunyi dampaknya. Peserta tertawa, tepuk tangan, lalu kembali ke meja kerja seperti tidak terjadi apa-apa.</p>
          <p>Saya mempelajari ADDIE — kerangka instructional design yang dipakai militer Amerika dan korporasi global. Disiplin ilmiahnya membuka mata saya. Tapi sesuatu masih terasa kurang.</p>
          <p>Sebagai Muslim, saya percaya bahwa pengembangan manusia tidak boleh hanya soal performa. Harus ada adab. Harus ada kehormatan. Harus ada ketulusan. Maka lahirlah <span className="text-primary font-medium">ADDIE + Adab</span> — bukan sebagai jargon, tapi sebagai cara kerja.</p>
          <p>Hari ini, saya membantu HR dan eksekutif Indonesia merancang program yang bukan hanya menaikkan KPI, tapi juga menjaga martabat manusia yang dilatih. Itu kontribusi kecil saya untuk dunia bisnis Indonesia.</p>
        </div>
      </div>
    </section>

    {/* TIMELINE */}
    <section className="section-padding bg-card/30 border-y border-border/60">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow mb-3">Perjalanan</div>
          <h2 className="font-serif text-4xl md:text-5xl">Tonggak yang membentuk pendekatan ini.</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {timeline.map((t, i) => (
            <div key={i} className="card-premium p-7 grid md:grid-cols-12 gap-5 items-start">
              <div className="md:col-span-3">
                <div className="font-serif text-3xl text-gradient-gold">{t.year}</div>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-xl mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* VALUES */}
    <section className="section-padding">
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
    <section className="section-padding bg-card/30 border-y border-border/60">
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
          <img src={heroScene} alt="Faisal Maulana di studio kerja" className="w-full h-full object-cover" loading="lazy" width={1024} height={1280} />
        </div>
      </div>
    </section>

    <section className="section-padding text-center">
      <div className="container-tight">
        <h2 className="font-serif text-4xl md:text-5xl">Mari berkolaborasi.</h2>
        <p className="text-muted-foreground mt-5 max-w-xl mx-auto">Saya membatasi jumlah klien korporasi yang dapat saya layani dalam satu kuartal. Diskusi awal selalu gratis dan tanpa komitmen.</p>
        <Button asChild size="lg" className="mt-8 bg-gradient-gold text-primary-foreground shadow-gold h-14 px-8">
          <Link to="/contact">Mulai Percakapan <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default About;
