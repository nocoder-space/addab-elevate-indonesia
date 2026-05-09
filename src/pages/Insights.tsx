import VideoEmbed from "@/components/VideoEmbed";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import { articles } from "@/data/articles";

const categories = ["Semua", "People Development", "Leadership & Adab", "Sales & Marketing", "Produktivitas", "Komunikasi", "Service Excellence"];

const leadMagnets = [
  { title: "Template Training Needs Analysis", desc: "Lembar kerja yang dipakai konsultan korporasi untuk diagnosis.", cta: "Unduh Gratis" },
  { title: "5 Framework Kepemimpinan Beradab", desc: "PDF 24 halaman — siap diterapkan di tim Anda minggu ini.", cta: "Unduh Gratis" },
  { title: "Checklist Service Excellence", desc: "30 titik kritis yang membedakan layanan biasa dari yang dirindukan.", cta: "Unduh Gratis" },
];

const Insights = () => {
  const [activeCat, setActiveCat] = useState("Semua");
  const [query, setQuery] = useState("");

  const featured = useMemo(() => articles.find((a) => a.featured) || articles[0], []);
  const rest = useMemo(() => articles.filter((a) => a.slug !== featured.slug), [featured]);

  const filtered = useMemo(() => {
    return rest.filter((a) => {
      const matchCat = activeCat === "Semua" || a.category === activeCat;
      const q = query.trim().toLowerCase();
      const matchQ = !q || a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q) || a.keywords.some((k) => k.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [rest, activeCat, query]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://faisalmaulana.com/insights/${a.slug}`,
      name: a.title,
    })),
  };

  return (
    <>
      <SEO
        title="Insights — Artikel People Development, Leadership & Adab | Faisal Maulana"
        description="Knowledge center berisi artikel mendalam tentang training korporasi, kepemimpinan beradab, sales psychology, service excellence, dan produktivitas — berbasis pengalaman lapangan di 200+ perusahaan Indonesia."
        type="website"
        jsonLd={itemListSchema}
      />

      <section className="pt-36 pb-12 bg-gradient-hero">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="eyebrow mb-4">Insights & Pengetahuan</div>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">Knowledge center untuk profesional yang serius dengan <em className="text-gradient-gold not-italic">transformasi manusia.</em></h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Artikel panjang, panduan praktis, dan tools berbasis Adab, Science, dan Impact untuk HR, L&D, leader, dan eksekutif.</p>
          </div>
          <div className="mt-10 max-w-xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari topik, artikel, atau tools..." className="pl-11 h-12 bg-card border-border" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-border/60 py-5 sticky top-20 z-30 glass">
        <div className="container-wide flex gap-2 overflow-x-auto scrollbar-none">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`px-4 py-2 text-sm rounded-full border whitespace-nowrap transition-colors ${activeCat === c ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="eyebrow mb-6">Artikel Pilihan</div>
          <article className="grid lg:grid-cols-12 gap-10 items-center card-premium p-8 md:p-10 hover:!translate-y-0">
            <div className="lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden">
              <img src={featured.cover} alt={featured.title} className="w-full h-full object-cover" loading="lazy" width={1600} height={1000} />
            </div>
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-primary mb-4">
                <Tag className="w-3 h-3" /> {featured.category} <span className="text-muted-foreground/50">•</span> <Clock className="w-3 h-3" /> {featured.readTime} baca
              </div>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">{featured.title}</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">{featured.description}</p>
              <Button asChild className="mt-6 bg-gradient-gold text-primary-foreground shadow-gold">
                <Link to={`/insights/${featured.slug}`}>Baca Artikel <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Article Grid */}
      <section className="section-padding bg-card/30 border-y border-border/60">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-6">
            <div className="eyebrow">Terbaru</div>
            <div className="text-xs text-muted-foreground">{filtered.length} artikel</div>
          </div>
          {filtered.length === 0 ? (
            <p className="text-muted-foreground py-12 text-center">Tidak ada artikel yang cocok. Coba kategori atau kata kunci lain.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a) => (
                <Link to={`/insights/${a.slug}`} key={a.slug} className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 group flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={600} />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-primary mb-3">
                      {a.category} <span className="text-muted-foreground/50">•</span> {a.readTime}
                    </div>
                    <h3 className="font-serif text-xl leading-snug group-hover:text-primary transition-colors">{a.title}</h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">{a.description}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary font-semibold">
                      Baca selengkapnya <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Insight Pilihan */}
      <section className="section-padding bg-card/30 border-y border-border/60">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow mb-3">Video Insight Pilihan</div>
            <h2 className="font-serif text-4xl md:text-5xl">Video insight pilihan.</h2>
            <p className="text-muted-foreground mt-4">Cuplikan gagasan singkat untuk memahami pendekatan Faisal Maulana dalam people development.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div>
              <VideoEmbed videoId="S8A85niP3lU" query="si=EN0C7S_ppH2aMMvS" title="Adab, Science, dan Impact dalam People Development" />
              <h3 className="font-serif text-lg mt-4">Adab, Science, dan Impact dalam people development</h3>
            </div>
            <div>
              <VideoEmbed videoId="3SnYgfA_OS8" query="si=S1K0utafqt8YO06S" title="Experiential Learning dalam Program Korporasi" />
              <h3 className="font-serif text-lg mt-4">Experiential learning dalam program korporasi</h3>
            </div>
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
};

export default Insights;
