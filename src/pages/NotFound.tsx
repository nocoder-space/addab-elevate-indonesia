import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => { console.error("404:", location.pathname); }, [location.pathname]);
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero pt-32 pb-20">
      <div className="container-tight text-center">
        <div className="font-serif text-8xl text-gradient-gold mb-4">404</div>
        <h1 className="font-serif text-3xl md:text-4xl mb-4">Halaman tidak ditemukan</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">Mungkin tautan yang Anda ikuti sudah pindah, atau halaman ini sedang dalam pengembangan.</p>
        <Button asChild className="bg-gradient-gold text-primary-foreground shadow-gold">
          <Link to="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
