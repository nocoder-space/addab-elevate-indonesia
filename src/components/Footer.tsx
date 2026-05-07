import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Mail, MessageCircle } from "lucide-react";
import logoFaisal from "@/assets/logo-faisal.webp";

const Footer = () => (
  <footer className="border-t border-border/60 bg-background relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial-gold opacity-30 pointer-events-none" />
    <div className="container-wide relative py-16">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 mb-4">
            <img src={logoFaisal} alt="Faisal Maulana logo" width={44} height={44} className="w-11 h-11 rounded-full object-contain ring-1 ring-primary/40 shadow-gold" />
            <div>
              <div className="font-serif font-semibold text-lg">Faisal Maulana</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-primary">Transformational People Development Expert</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Membantu organisasi mengubah strategi menjadi perilaku kerja nyata melalui pendekatan <span className="text-primary">ADDIE</span>, experiential learning, dan nilai adab yang inklusif.
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-primary/80">Adab • Science • Impact</p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Linkedin, Youtube, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Korporasi</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/corporate" className="hover:text-foreground">Signature Programs</Link></li>
            <li><Link to="/corporate" className="hover:text-foreground">Kerangka ADDIE</Link></li>
            <li><Link to="/corporate" className="hover:text-foreground">Studi Kasus</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Konsultasi</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Academy</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/academy" className="hover:text-foreground">E-book</Link></li>
            <li><Link to="/academy" className="hover:text-foreground">Online Course</Link></li>
            <li><Link to="/academy" className="hover:text-foreground">Webinar</Link></li>
            <li><Link to="/academy" className="hover:text-foreground">Membership</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Kontak</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> hello@faisalmaulana.id</li>
            <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-primary" /> +62 859-3000-6425</li>
            <li className="text-xs leading-relaxed pt-2">Bogor / Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Faisal Maulana. Seluruh hak cipta dilindungi.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Kebijakan Privasi</a>
          <a href="#" className="hover:text-foreground">Syarat & Ketentuan</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
