import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Tag, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { articles, getArticleBySlug } from "@/data/articles";
import NotFound from "./NotFound";

const InsightDetail = () => {
  const { slug = "" } = useParams();
  const article = getArticleBySlug(slug);
  if (!article) return <NotFound />;

  const url = typeof window !== "undefined" ? window.location.href : `https://faisalmaulana.com/insights/${slug}`;
  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const fallbackRelated = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const recommended = related.length ? related : fallbackRelated;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [article.cover],
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Person", name: "Faisal Maulana", url: "https://faisalmaulana.com/about" },
    publisher: {
      "@type": "Organization",
      name: "Faisal Maulana — Transformational People Development",
      logo: { "@type": "ImageObject", url: "https://faisalmaulana.com/logo-faisal.webp" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: article.keywords.join(", "),
    articleSection: article.category,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://faisalmaulana.com/" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://faisalmaulana.com/insights" },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <>
      <SEO
        title={`${article.title} | Faisal Maulana Insights`}
        description={article.description}
        image={article.cover}
        type="article"
        jsonLd={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="pt-36 pb-12 bg-gradient-hero">
        <div className="container-tight">
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-primary mb-6">
            <span className="inline-flex items-center gap-1.5"><Tag className="w-3 h-3" /> {article.category}</span>
            <span className="text-muted-foreground/50">•</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-3 h-3" /> {article.readTime} baca</span>
            <span className="text-muted-foreground/50">•</span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="w-3 h-3" /> {new Date(article.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">{article.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">{article.description}</p>
          <div className="mt-8 text-sm text-foreground/80">
            Oleh <span className="text-primary font-semibold">Faisal Maulana</span> — Transformational People Development
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="container-tight">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-elegant">
          <img src={article.cover} alt={article.title} className="w-full h-full object-cover" loading="eager" width={1600} height={900} />
        </div>
      </section>

      {/* Body */}
      <article className="section-padding">
        <div className="container-tight grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90 first-letter:font-serif first-letter:text-6xl first-letter:font-medium first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]">
              {article.lead}
            </p>

            <div className="mt-12 space-y-10">
              {article.sections.map((s, i) => (
                <section key={i}>
                  <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-5">{s.heading}</h2>
                  <div className="space-y-4 text-foreground/85 leading-relaxed text-[1.05rem]">
                    {s.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                  {s.list && (
                    <ul className="mt-5 space-y-2 text-foreground/85">
                      {s.list.map((li, k) => (
                        <li key={k} className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> {li}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Key Takeaways */}
            <aside className="mt-14 card-premium p-7 hover:!translate-y-0">
              <div className="eyebrow mb-3">Ringkasan Kunci</div>
              <h3 className="font-serif text-2xl mb-5">Yang perlu Anda bawa pulang</h3>
              <ul className="space-y-3">
                {article.takeaway.map((t, i) => (
                  <li key={i} className="flex gap-3 text-foreground/85"><span className="font-serif text-primary text-lg flex-shrink-0">{i + 1}.</span> {t}</li>
                ))}
              </ul>
            </aside>

            {/* FAQ */}
            <section className="mt-14">
              <div className="eyebrow mb-3">Pertanyaan yang Sering Ditanyakan</div>
              <h2 className="font-serif text-3xl md:text-4xl mb-8">FAQ</h2>
              <div className="space-y-5">
                {article.faq.map((f, i) => (
                  <div key={i} className="border border-border rounded-xl p-6 bg-card/40">
                    <h3 className="font-serif text-lg mb-2 text-foreground">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="mt-14 card-premium p-8 md:p-10 text-center hover:!translate-y-0">
              <div className="eyebrow mb-3">Diskusikan dengan Faisal</div>
              <h3 className="font-serif text-3xl md:text-4xl mb-4">Siap menerapkan ini di tim Anda?</h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-7">Jadwalkan diskusi awal untuk memetakan kebutuhan tim dan menemukan kerangka program yang paling tepat.</p>
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold h-13 px-8">
                <Link to="/contact">Jadwalkan Diskusi <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-8">
              <div className="card-premium p-6 hover:!translate-y-0">
                <div className="eyebrow mb-3">Topik Terkait</div>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((k) => (
                    <span key={k} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">{k}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="eyebrow mb-4">Baca Juga</div>
                <div className="space-y-4">
                  {recommended.map((r) => (
                    <Link key={r.slug} to={`/insights/${r.slug}`} className="block group">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 border border-border">
                        <img src={r.cover} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={600} height={375} />
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-primary mb-1">{r.category}</div>
                      <h4 className="font-serif text-base leading-snug group-hover:text-primary transition-colors">{r.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
};

export default InsightDetail;
