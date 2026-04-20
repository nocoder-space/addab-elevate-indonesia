import { Link } from "react-router-dom";
import { Search, ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import workshopImg from "@/assets/corporate-workshop.jpg";
import consultationImg from "@/assets/consultation.jpg";
import ebookImg from "@/assets/ebook-mockup.jpg";
import courseImg from "@/assets/course-mockup.jpg";
import webinarImg from "@/assets/webinar-mockup.jpg";
import portrait from "@/assets/faisal-portrait.png";

const categories = ["Semua", "People Development", "Islamic Leadership", "Sales & Marketing", "Produktivitas", "Komunikasi", "Service Excellence"];

const featured = {
  img: workshopImg,
  cat: "People Development",
  title: "Mengapa 70% program training korporasi gagal — dan bagaimana memperbaikinya",
  excerpt: "Pelajaran dari 18 tahun mendampingi HR dan eksekutif Indonesia membangun program yang benar-benar menggerakkan perilaku tim.",
  read: "9 menit baca",
};

const articles = [
  { img: consultationImg, cat: "Islamic Leadership", title: "Adab sebelum ilmu: prinsip kepemimpinan yang sering dilupakan", read: "6 menit" },
  { img: ebookImg, cat: "People Development", title: "Cara membaca laporan TNA agar program training tepat sasaran", read: "7 menit" },
  { img: courseImg, cat: "Sales & Marketing", title: "Psikologi closing untuk pasar Indonesia: 5 pola yang berulang", read: "8 menit" },
  { img: webinarImg, cat: "Komunikasi", title: "Storytelling untuk eksekutif: kapan data tidak cukup", read: "5 menit" },
  { img: portrait, cat: "Produktivitas", title: "Barakah time management: produktivitas tanpa kehilangan ketenangan", read: "6 menit" },
  { img: workshopImg, cat: "Service Excellence", title: "Mengubah SOP layanan menjadi pengalaman yang dirindukan pelanggan", read: "7 menit" },
];

const leadMagnets = [
  { title: "Template Training Needs Analysis", desc: "Lembar kerja yang dipakai konsultan korporasi untuk diagnosa.", cta: "Unduh Gratis" },
  { title: "5 Framework Kepemimpinan Islami", desc: "PDF 24 halaman — siap diterapkan di tim Anda minggu ini.", cta: "Unduh Gratis" },
  { title: "Checklist Service Excellence", desc: "30 titik kritis yang membedakan layanan biasa dari yang dirindukan.", cta: "Unduh Gratis" },
];

const Insights = () => (
  <>
    <section className="pt-36 pb-12 bg-gradient-hero">
      <div className="container-wide">
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">Insights & Pengetahuan</div>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">Knowledge center untuk profesional yang serius dengan <em className="text-gradient-gold not-italic">people development.</em></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Artikel mendalam, panduan praktis, dan tools yang dipakai oleh HR, L&D, dan eksekutif untuk membangun manusia yang lebih baik.</p>
        </div>
        <div className="mt-10 max-w-xl relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Cari topik, artikel, atau tools..." className="pl-11 h-12 bg-card border-border" />
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="border-y border-border/60 py-5 sticky top-20 z-30 glass">
      <div className="container-wide flex gap-2 overflow-x-auto scrollbar-none">
        {categories.map((c, i) => (
          <button key={c} className={`px-4 py-2 text-sm rounded-full border whitespace-nowrap transition-colors ${i===0?"bg-primary text-primary-foreground border-primary":"border-border text-muted-foreground hover:text-foreground"}`}>{c}</button>
        ))}
      </div>
    </section>

    {/* Featured */}
    <section className="section-padding">
      <div className="container-wide">
        <div className="eyebrow mb-6">Artikel Pilihan</div>
        <article className="grid lg:grid-cols-12 gap-10 items-center card-premium p-8 md:p-10 hover:!translate-y-0">
          <div className="lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden">
            <img src={featured.img} alt={featured.title} className="w-full h-full object-cover" loading="lazy" width={1600} height={1000} />
          </div>
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-primary mb-4">
              <Tag className="w-3 h-3" /> {featured.cat} <span className="text-muted-foreground/50">•</span> <Clock className="w-3 h-3" /> {featured.read}
            </div>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">{featured.title}</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">{featured.excerpt}</p>
            <Button asChild className="mt-6 bg-gradient-gold text-primary-foreground shadow-gold">
              <Link to="#">Baca Artikel <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </article>
      </div>
    </section>

    {/* Article Grid */}
    <section className="section-padding bg-card/30 border-y border-border/60">
      <div className="container-wide">
        <div className="eyebrow mb-6">Terbaru</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <Link to="#" key={i} className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={600} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-primary mb-3">
                  {a.cat} <span className="text-muted-foreground/50">•</span> {a.read}
                </div>
                <h3 className="font-serif text-xl leading-snug group-hover:text-primary transition-colors">{a.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Lead Magnets */}
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow mb-3">Tools Gratis</div>
          <h2 className="font-serif text-4xl md:text-5xl">Template dan panduan yang biasanya hanya tersedia untuk klien korporasi.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {leadMagnets.map((m, i) => (
            <div key={i} className="card-premium p-7">
              <h3 className="font-serif text-xl mb-3">{m.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{m.desc}</p>
              <Button className="w-full bg-gradient-gold text-primary-foreground shadow-gold">{m.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Insights;
