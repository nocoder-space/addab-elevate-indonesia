import { useState } from "react";
import { Building2, User, Mic, Mail, MessageCircle, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";

const segments = [
  { id: "corporate", icon: Building2, title: "Korporasi", desc: "HR, L&D, atau pengadaan training" },
  { id: "individual", icon: User, title: "Individu", desc: "Tertarik dengan Academy atau membership" },
  { id: "media", icon: Mic, title: "Media & Speaking", desc: "Wawancara, podcast, atau undangan acara" },
];

const faqs = [
  { q: "Berapa lama waktu respon untuk pengajuan korporasi?", a: "Tim kami merespon dalam 1×24 jam kerja. Untuk diskusi diagnostik biasanya dijadwalkan dalam 5 hari kerja." },
  { q: "Apakah bisa training di luar Jawa?", a: "Ya. Kami melayani in-house training di seluruh Indonesia, termasuk format hybrid dan sepenuhnya online." },
  { q: "Apakah materi disesuaikan dengan industri kami?", a: "Selalu. Setiap program dimulai dari Training Needs Analysis sehingga konten, studi kasus, dan bahasa disesuaikan dengan konteks Anda." },
  { q: "Apakah ada garansi untuk produk Academy?", a: "Ya. Setiap produk digital memiliki garansi 7 hari uang kembali, tanpa pertanyaan." },
  { q: "Bisakah kami request sertifikasi?", a: "Bisa. Kami menyediakan sertifikasi internal yang dapat dimasukkan dalam learning record karyawan." },
];

const Contact = () => {
  const [seg, setSeg] = useState("corporate");
  const [step, setStep] = useState(1);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Terima kasih! Tim kami akan menghubungi Anda dalam 1×24 jam kerja.");
    setStep(1);
  };

  return (
    <>
      <section className="pt-36 pb-16 bg-gradient-hero">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <div className="eyebrow mb-4">Hubungi Kami</div>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">Mari mulai dari satu <em className="text-gradient-gold not-italic">percakapan yang baik.</em></h1>
          <p className="mt-6 text-lg text-muted-foreground">Pilih jalur yang paling sesuai dengan kebutuhan Anda. Kami akan merespon dengan perhatian penuh.</p>
        </div>
      </section>

      {/* Segments */}
      <section className="pb-8 -mt-6">
        <div className="container-wide grid md:grid-cols-3 gap-4">
          {segments.map(s => (
            <button key={s.id} onClick={() => { setSeg(s.id); setStep(1); }}
              className={`card-premium p-6 text-left transition-all ${seg === s.id ? "border-primary !translate-y-0 shadow-gold" : ""}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${seg === s.id ? "bg-gradient-gold text-primary-foreground" : "bg-primary/10 text-primary border border-primary/30"}`}>
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Forms */}
      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="card-premium p-8 md:p-10">
              {seg === "corporate" && (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="eyebrow mb-2">Form Korporasi</div>
                      <h2 className="font-serif text-3xl">Langkah {step} dari 3</h2>
                    </div>
                    <div className="flex gap-1.5">{[1,2,3].map(s => <div key={s} className={`w-8 h-1.5 rounded-full ${step >= s ? "bg-primary" : "bg-border"}`} />)}</div>
                  </div>
                  <form onSubmit={submit} className="space-y-5">
                    {step === 1 && (
                      <>
                        <div><Label>Nama Perusahaan</Label><Input className="mt-2 h-12" placeholder="PT Contoh Indonesia" required /></div>
                        <div><Label>Industri</Label>
                          <Select required>
                            <SelectTrigger className="mt-2 h-12"><SelectValue placeholder="Pilih industri" /></SelectTrigger>
                            <SelectContent>
                              {["Perbankan","Asuransi","BUMN","Telekomunikasi","FMCG","Manufaktur","Kementerian","Energi","Lainnya"].map(x => <SelectItem key={x} value={x}>{x}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                        <div><Label>Ukuran Tim yang Akan Dilatih</Label>
                          <Select required>
                            <SelectTrigger className="mt-2 h-12"><SelectValue placeholder="Pilih jumlah peserta" /></SelectTrigger>
                            <SelectContent>{["< 25","25-50","50-100","100-300","> 300"].map(x => <SelectItem key={x} value={x}>{x}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <div><Label>Kebutuhan Pelatihan</Label>
                          <Select required>
                            <SelectTrigger className="mt-2 h-12"><SelectValue placeholder="Pilih fokus utama" /></SelectTrigger>
                            <SelectContent>{["Sales & Marketing","Leadership","Team Building","Service Excellence","Communication","Negotiation","Konsultasi Strategi"].map(x => <SelectItem key={x} value={x}>{x}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                        <div><Label>Estimasi Timeline</Label>
                          <Select required>
                            <SelectTrigger className="mt-2 h-12"><SelectValue placeholder="Kapan diharapkan dimulai" /></SelectTrigger>
                            <SelectContent>{["Bulan ini","1-2 bulan","3-6 bulan","Masih eksplorasi"].map(x => <SelectItem key={x} value={x}>{x}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                        <div><Label>Range Budget</Label>
                          <Select>
                            <SelectTrigger className="mt-2 h-12"><SelectValue placeholder="Opsional" /></SelectTrigger>
                            <SelectContent>{["< 50 juta","50-150 juta","150-300 juta","> 300 juta","Belum ditentukan"].map(x => <SelectItem key={x} value={x}>{x}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                        <div><Label>Tantangan Utama (singkat)</Label><Textarea className="mt-2 min-h-[100px]" placeholder="Jelaskan apa yang ingin diperbaiki atau dicapai..." /></div>
                      </>
                    )}
                    {step === 3 && (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div><Label>Nama PIC</Label><Input className="mt-2 h-12" required /></div>
                          <div><Label>Jabatan</Label><Input className="mt-2 h-12" required /></div>
                        </div>
                        <div><Label>Email Kantor</Label><Input type="email" className="mt-2 h-12" required /></div>
                        <div><Label>WhatsApp</Label><Input className="mt-2 h-12" placeholder="+62 ..." required /></div>
                        <div><Label>Channel komunikasi yang disukai</Label>
                          <Select required>
                            <SelectTrigger className="mt-2 h-12"><SelectValue placeholder="Pilih" /></SelectTrigger>
                            <SelectContent>{["Email","WhatsApp","Telepon","Video Call"].map(x => <SelectItem key={x} value={x}>{x}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    <div className="flex gap-3 pt-3">
                      {step > 1 && <Button type="button" variant="outline" onClick={() => setStep(step-1)}>Kembali</Button>}
                      {step < 3 && <Button type="button" className="flex-1 bg-gradient-gold text-primary-foreground shadow-gold h-12" onClick={() => setStep(step+1)}>Lanjut <ArrowRight className="ml-2 w-4 h-4" /></Button>}
                      {step === 3 && <Button type="submit" className="flex-1 bg-gradient-gold text-primary-foreground shadow-gold h-12">Kirim Pengajuan <CheckCircle2 className="ml-2 w-4 h-4" /></Button>}
                    </div>
                    <p className="text-xs text-muted-foreground text-center pt-2">Dapatkan template "Training Needs Analysis" gratis setelah submit.</p>
                  </form>
                </>
              )}

              {seg === "individual" && (
                <>
                  <div className="eyebrow mb-2">Form Individu</div>
                  <h2 className="font-serif text-3xl mb-7">Mari kami arahkan ke produk yang tepat.</h2>
                  <form onSubmit={submit} className="space-y-5">
                    <div><Label>Nama Lengkap</Label><Input className="mt-2 h-12" required /></div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><Label>Email</Label><Input type="email" className="mt-2 h-12" required /></div>
                      <div><Label>WhatsApp</Label><Input className="mt-2 h-12" required /></div>
                    </div>
                    <div><Label>Minat Anda</Label>
                      <Select required>
                        <SelectTrigger className="mt-2 h-12"><SelectValue placeholder="Pilih kategori" /></SelectTrigger>
                        <SelectContent>{["E-book","Online Course","Webinar","Membership","Coaching 1-on-1"].map(x => <SelectItem key={x} value={x}>{x}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div><Label>Pesan (opsional)</Label><Textarea className="mt-2 min-h-[100px]" /></div>
                    <Button type="submit" className="w-full bg-gradient-gold text-primary-foreground shadow-gold h-12">Kirim <ArrowRight className="ml-2 w-4 h-4" /></Button>
                  </form>
                </>
              )}

              {seg === "media" && (
                <>
                  <div className="eyebrow mb-2">Media & Speaking</div>
                  <h2 className="font-serif text-3xl mb-7">Undangan akan kami review tim media.</h2>
                  <form onSubmit={submit} className="space-y-5">
                    <div><Label>Nama / Organisasi</Label><Input className="mt-2 h-12" required /></div>
                    <div><Label>Email</Label><Input type="email" className="mt-2 h-12" required /></div>
                    <div><Label>Jenis Undangan</Label>
                      <Select required>
                        <SelectTrigger className="mt-2 h-12"><SelectValue placeholder="Pilih" /></SelectTrigger>
                        <SelectContent>{["Wawancara Media","Podcast","Keynote Speaker","Panelis","Town Hall Korporasi"].map(x => <SelectItem key={x} value={x}>{x}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div><Label>Detail Acara</Label><Textarea className="mt-2 min-h-[120px]" placeholder="Topik, tanggal, audiens, lokasi..." required /></div>
                    <Button type="submit" className="w-full bg-gradient-gold text-primary-foreground shadow-gold h-12">Kirim Pengajuan</Button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-5">
            <div className="card-premium p-7">
              <div className="eyebrow mb-3">Kontak Langsung</div>
              <div className="space-y-4 mt-4">
                <a href="mailto:hello@faisalmaulana.id" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all"><Mail className="w-4 h-4" /></div>
                  <div><div className="text-xs text-muted-foreground">Email</div><div className="text-sm font-medium">hello@faisalmaulana.id</div></div>
                </a>
                <a href="#" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all"><MessageCircle className="w-4 h-4" /></div>
                  <div><div className="text-xs text-muted-foreground">WhatsApp</div><div className="text-sm font-medium">+62 812-0000-0000</div></div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary"><MapPin className="w-4 h-4" /></div>
                  <div><div className="text-xs text-muted-foreground">Kantor</div><div className="text-sm font-medium">SCBD Lot 28, Jakarta Selatan</div></div>
                </div>
              </div>
            </div>

            <div className="card-premium p-7">
              <div className="eyebrow mb-4">Pertanyaan Umum</div>
              <Accordion type="single" collapsible>
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`} className="border-border">
                    <AccordionTrigger className="text-sm text-left hover:text-primary">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
