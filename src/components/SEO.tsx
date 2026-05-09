import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, any> | Record<string, any>[];
};

const upsertMeta = (selector: string, attr: string, key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const SEO = ({ title, description, canonical, image, type = "website", jsonLd }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    upsertMeta(`meta[name="description"]`, "name", "description", description);
    upsertMeta(`meta[property="og:title"]`, "property", "og:title", title);
    upsertMeta(`meta[property="og:description"]`, "property", "og:description", description);
    upsertMeta(`meta[property="og:type"]`, "property", "og:type", type);
    if (image) upsertMeta(`meta[property="og:image"]`, "property", "og:image", image);
    upsertMeta(`meta[name="twitter:card"]`, "name", "twitter:card", "summary_large_image");
    upsertMeta(`meta[name="twitter:title"]`, "name", "twitter:title", title);
    upsertMeta(`meta[name="twitter:description"]`, "name", "twitter:description", description);
    if (image) upsertMeta(`meta[name="twitter:image"]`, "name", "twitter:image", image);

    const url = canonical || window.location.href;
    upsertLink("canonical", url);
    upsertMeta(`meta[property="og:url"]`, "property", "og:url", url);

    // JSON-LD
    document.head.querySelectorAll('script[data-seo-jsonld="true"]').forEach((n) => n.remove());
    const blocks = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
    blocks.forEach((b) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo-jsonld", "true");
      s.text = JSON.stringify(b);
      document.head.appendChild(s);
    });
  }, [title, description, canonical, image, type, JSON.stringify(jsonLd)]);

  return null;
};

export default SEO;
