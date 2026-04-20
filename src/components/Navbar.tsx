import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/corporate", label: "Korporasi" },
  { to: "/academy", label: "Academy" },
  { to: "/about", label: "Tentang" },
  { to: "/insights", label: "Insights" },
  { to: "/events", label: "Acara" },
  { to: "/contact", label: "Kontak" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass" : "bg-transparent"}`}>
      <div className="container-wide flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-gold flex items-center justify-center font-serif font-bold text-primary-foreground text-lg">
            F
          </div>
          <div className="leading-tight">
            <div className="font-serif font-semibold text-lg text-foreground">Faisal Maulana</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-primary">People Development Expert</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive ? "text-primary" : "text-foreground/75 hover:text-foreground"}`
              }>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
            <Link to="/academy">Masuk Academy</Link>
          </Button>
          <Button asChild size="sm" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
            <Link to="/contact">Konsultasi Gratis <ArrowUpRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border/50">
          <div className="container-wide py-4 flex flex-col gap-1">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-3 text-base font-medium rounded-md ${isActive ? "text-primary bg-muted" : "text-foreground/85"}`
                }>
                {l.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-3">
              <Button asChild variant="outline" className="flex-1"><Link to="/academy">Academy</Link></Button>
              <Button asChild className="flex-1 bg-gradient-gold text-primary-foreground"><Link to="/contact">Konsultasi</Link></Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
