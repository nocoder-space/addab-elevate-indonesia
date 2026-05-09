import workshopImg from "@/assets/corporate-workshop.jpg";
import consultationImg from "@/assets/consultation.jpg";
import ebookImg from "@/assets/ebook-mockup.jpg";
import courseImg from "@/assets/course-mockup.jpg";
import webinarImg from "@/assets/webinar-mockup.jpg";
import portrait from "@/assets/faisal-portrait.png";

export type ArticleSection = { heading: string; paragraphs: string[]; list?: string[] };
export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  cover: string;
  date: string;
  keywords: string[];
  lead: string;
  sections: ArticleSection[];
  faq: { q: string; a: string }[];
  takeaway: string[];
  featured?: boolean;
};

export const articles: Article[] = [
  {
    slug: "mengapa-program-training-korporasi-gagal",
    title: "Mengapa Banyak Program Training Korporasi Gagal — dan Bagaimana Memperbaikinya",
    description:
      "Analisis mendalam tentang penyebab kegagalan program training di Indonesia: dari TNA yang dangkal hingga kurangnya transfer of learning. Dilengkapi kerangka perbaikan ADDIE + ADAB.",
    category: "People Development",
    readTime: "9 menit",
    cover: workshopImg,
    date: "2025-04-12",
    keywords: [
      "training korporasi", "program training gagal", "people development", "training needs analysis",
      "transfer of learning", "ADDIE ADAB", "L&D Indonesia", "HR development",
    ],
    featured: true,
    lead:
      "Setiap tahun, perusahaan di Indonesia menghabiskan miliaran rupiah untuk program training—namun studi internal yang kami lakukan bersama HR di lebih dari 200 perusahaan menunjukkan pola yang sama: peserta antusias di hari pelatihan, tetapi 60–80% kembali ke kebiasaan lama dalam 30 hari. Mengapa? Bukan karena trainer kurang baik atau materi tidak menarik. Penyebab sebenarnya jauh lebih struktural.",
    sections: [
      {
        heading: "1. TNA dilakukan sebagai formalitas, bukan diagnosis",
        paragraphs: [
          "Training Needs Analysis (TNA) seharusnya menjadi fondasi semua program. Namun di banyak organisasi, TNA berhenti pada survei kepuasan atau usulan dari atasan langsung. Akibatnya, gap yang dilatihkan adalah gap yang dirasakan—bukan gap yang menggerakkan KPI bisnis.",
          "Diagnosis yang baik menelusuri tiga lapisan: behavior gap (apa yang tidak dilakukan), capability gap (apa yang belum dikuasai), dan system gap (apa yang menghalangi—proses, tools, leadership). Ketika tiga lapisan ini diabaikan, program akan menyelesaikan masalah yang salah.",
        ],
      },
      {
        heading: "2. Materi disusun berdasarkan tren, bukan konteks lokal",
        paragraphs: [
          "Banyak modul training di Indonesia adalah salinan dari kerangka Barat tanpa adaptasi. Padahal, perilaku tim di Indonesia dipengaruhi nilai kolektivisme, hubungan hierarkis, dan kerangka adab yang sangat khas. Memaksakan model 'radical candor' di tim yang masih mencari aman akan menghasilkan resistensi, bukan keterbukaan.",
          "Materi yang berdampak selalu melewati proses kontekstualisasi: bahasa, contoh kasus, dan latihan harus mencerminkan realitas peserta. Inilah alasan kami selalu menambahkan lapisan ADAB pada framework ADDIE—agar konten ilmiah tetap berakar pada nilai dan budaya.",
        ],
      },
      {
        heading: "3. Tidak ada arsitektur transfer of learning",
        paragraphs: [
          "Hari pelatihan hanyalah 10% dari perjalanan belajar. Sisanya—70% pengalaman aplikatif dan 20% sosial learning—justru sering tidak dirancang. Tanpa arsitektur ini, program training hanya menjadi event, bukan transformasi.",
          "Arsitektur transfer yang baik mencakup pre-work yang membangkitkan kesadaran, intervensi pasca-training (action plan, coaching, accountability buddy), dan dukungan atasan langsung. Tanpa tiga elemen ini, ROI training mendekati nol.",
        ],
      },
      {
        heading: "4. Atasan langsung tidak dilibatkan",
        paragraphs: [
          "Riset Brinkerhoff menunjukkan bahwa percakapan 15 menit antara peserta dan atasan—sebelum dan sesudah training—lebih menentukan transfer perilaku dibanding kualitas trainer itu sendiri. Sayangnya, di banyak perusahaan, manager menganggap training sebagai urusan HR.",
          "Solusinya bukan menambah modul, melainkan merancang briefing dan debriefing terstruktur untuk atasan. Kami biasanya memberikan satu lembar 'manager conversation guide' yang mengubah peran atasan dari pengamat menjadi enabler.",
        ],
      },
      {
        heading: "5. Evaluasi berhenti di level reaksi",
        paragraphs: [
          "Kirkpatrick Level 1 (kepuasan) adalah indikator yang paling lemah. Namun lebih dari 80% perusahaan tidak naik ke level 3 (perilaku) atau level 4 (hasil bisnis). Tanpa data ini, kita tidak pernah tahu apakah investasi training benar-benar bekerja.",
          "Evaluasi yang berdampak tidak harus rumit. Cukup tiga pertanyaan 60 hari setelah training: perilaku apa yang berubah, apa hambatan terbesarnya, dan dampak terukur apa yang sudah terjadi. Jawaban ini menjadi bahan bakar untuk perbaikan program berikutnya.",
        ],
      },
      {
        heading: "Kerangka perbaikan: ADDIE + ADAB",
        paragraphs: [
          "ADDIE (Analyze, Design, Develop, Implement, Evaluate) adalah tulang punggung instructional design global. Kami menambahkan lapisan ADAB—Align, Design with values, Activate experience, Bridge to behavior—untuk memastikan setiap fase tidak hanya ilmiah, tetapi juga selaras dengan budaya dan nilai organisasi Indonesia.",
          "Hasilnya, program tidak hanya tampak baik di hari pelatihan, tetapi terus hidup dalam perilaku tim selama berbulan-bulan setelahnya. Inilah yang membedakan training sebagai event dengan training sebagai transformasi.",
        ],
      },
    ],
    faq: [
      {
        q: "Berapa lama idealnya menjalankan TNA sebelum program training?",
        a: "Untuk program strategis, TNA sebaiknya berjalan 3–6 minggu, mencakup wawancara stakeholder, observasi lapangan, dan analisis data kinerja. Untuk topik taktis, 1–2 minggu sudah memadai jika datanya sudah tersedia.",
      },
      {
        q: "Apa indikator paling penting untuk mengukur keberhasilan training?",
        a: "Kombinasi tiga indikator: perubahan perilaku spesifik di lapangan (Kirkpatrick L3), dampak pada KPI tim (L4), dan tingkat penerapan action plan dalam 60 hari pertama. Skor kepuasan sebaiknya tidak menjadi indikator utama.",
      },
      {
        q: "Bagaimana melibatkan atasan langsung tanpa membebani mereka?",
        a: "Gunakan format percakapan 15 menit terstruktur sebelum dan sesudah training, didukung satu lembar manager guide. Cara ini terbukti meningkatkan transfer of learning hingga 3x lipat tanpa menambah workload signifikan.",
      },
    ],
    takeaway: [
      "Training gagal bukan karena trainer, tapi karena arsitektur belajar yang tidak lengkap.",
      "TNA harus mendiagnosis behavior, capability, dan system gap—bukan hanya kebutuhan yang dirasakan.",
      "70% transfer of learning terjadi setelah training, bukan saat training.",
      "Atasan langsung adalah multiplier terbesar untuk dampak program.",
      "Tambahkan lapisan ADAB pada ADDIE agar program sesuai konteks Indonesia.",
    ],
  },
  {
    slug: "adab-sebelum-ilmu-prinsip-kepemimpinan",
    title: "Adab Sebelum Ilmu: Prinsip Kepemimpinan yang Sering Dilupakan",
    description:
      "Mengapa kepemimpinan yang berakar pada adab menghasilkan kepercayaan, retensi, dan performa tim yang berkelanjutan—dengan studi kasus nyata dari perusahaan Indonesia.",
    category: "Leadership & Adab",
    readTime: "6 menit",
    cover: consultationImg,
    date: "2025-03-28",
    keywords: ["adab", "kepemimpinan", "leadership Indonesia", "values-based leadership", "trust", "people first"],
    lead:
      "Dalam tradisi keilmuan klasik, ada pepatah yang berbunyi: 'al-adab qabla al-ilm'—adab sebelum ilmu. Prinsip ini terlihat sederhana, tetapi dampaknya pada kepemimpinan modern sangat besar. Dari ratusan sesi mentoring eksekutif yang kami fasilitasi, pemimpin yang menempatkan adab di atas pengetahuan teknis konsisten menghasilkan tim yang lebih loyal, lebih berani jujur, dan lebih cepat berkembang.",
    sections: [
      {
        heading: "Adab bukan formalitas, tapi cara melihat manusia",
        paragraphs: [
          "Adab sering disalahpahami sebagai sopan santun permukaan—senyum, salam, sapa. Padahal, adab adalah cara kita memuliakan manusia di hadapan kita: mendengar tanpa menghakimi, berbicara dengan niat membangun, dan mengambil keputusan dengan mempertimbangkan martabat orang lain.",
          "Pemimpin yang beradab tidak menjadikan tim sebagai alat untuk mencapai target, tetapi sebagai manusia yang dipercayakan untuk dikembangkan. Pergeseran kecil ini mengubah seluruh dinamika tim.",
        ],
      },
      {
        heading: "Tiga praktik adab kepemimpinan",
        paragraphs: [
          "Pertama, hadir penuh saat seseorang bicara. Letakkan ponsel, tatap mata, dan bertanya untuk memahami—bukan untuk membalas. Praktik sederhana ini membangun psychological safety lebih cepat daripada kebijakan apa pun.",
          "Kedua, ucapkan koreksi dengan empat mata. Kritik yang disampaikan di forum publik melukai harga diri; koreksi yang disampaikan secara pribadi membangun pertumbuhan.",
          "Ketiga, akui kontribusi orang lain dengan spesifik. Pengakuan generik ('kerja bagus, tim') tidak berdampak. Pengakuan yang menyebut nama, perilaku spesifik, dan dampaknya akan diingat bertahun-tahun.",
        ],
      },
      {
        heading: "Studi kasus: bank BUMN, 2.400 frontliner",
        paragraphs: [
          "Pada salah satu program transformasi yang kami dampingi, manajemen meminta peningkatan NPS layanan. Alih-alih hanya melatih skill teknis, kami memulai dari adab kepemimpinan supervisor lini depan—mengubah cara mereka memberi feedback harian.",
          "Dalam 90 hari, NPS naik 18 poin. Yang lebih signifikan, tingkat absensi turun 22% dan turnover frontliner berkurang setengahnya. Ketika supervisor memuliakan tim, tim memuliakan pelanggan.",
        ],
      },
    ],
    faq: [
      {
        q: "Bagaimana cara menanamkan adab di tim yang sudah lama bekerja dengan budaya keras?",
        a: "Mulai dari pemimpin paling senior. Adab tidak bisa diceramahkan—ia menular dari atas. Tetapkan tiga perilaku spesifik (mendengar, koreksi pribadi, pengakuan spesifik) sebagai standar leadership selama 90 hari pertama.",
      },
      {
        q: "Apakah adab bertentangan dengan ketegasan?",
        a: "Tidak. Adab adalah cara, ketegasan adalah keputusan. Pemimpin yang beradab tetap bisa memberhentikan, mempromosikan, atau menolak proposal—bedanya, ia melakukannya tanpa merendahkan martabat orang lain.",
      },
    ],
    takeaway: [
      "Adab adalah fondasi kepercayaan; tanpa kepercayaan, kepemimpinan hanya sebatas otoritas.",
      "Tiga praktik harian: hadir penuh, koreksi pribadi, pengakuan spesifik.",
      "Adab pemimpin menular ke bawahan dan akhirnya tercermin pada pelanggan.",
    ],
  },
  {
    slug: "cara-membaca-laporan-tna",
    title: "Cara Membaca Laporan TNA agar Program Training Tepat Sasaran",
    description:
      "Panduan praktis bagi HR dan L&D untuk membaca Training Needs Analysis: membedakan gejala dari akar masalah, memilih intervensi yang tepat, dan menghindari training yang sia-sia.",
    category: "People Development",
    readTime: "7 menit",
    cover: ebookImg,
    date: "2025-03-15",
    keywords: ["TNA", "training needs analysis", "HR analytics", "L&D", "diagnostic training"],
    lead:
      "Laporan TNA yang tebal tidak menjamin program yang tepat sasaran. Yang menentukan adalah cara kita membacanya. Setelah meninjau ratusan laporan TNA dari klien korporasi, kami menemukan tiga kesalahan baca yang berulang—dan tiga lensa yang membantu HR mengubah data menjadi keputusan.",
    sections: [
      {
        heading: "Kesalahan baca #1: menyamakan keluhan dengan kebutuhan",
        paragraphs: [
          "Ketika peserta mengatakan 'kami butuh training komunikasi', itu bukan kebutuhan—itu hipotesis mereka tentang solusi. Kebutuhan sebenarnya bisa berupa kejelasan peran, tools yang tidak memadai, atau leadership yang tidak konsisten.",
          "Lensa pertama: tanyakan 'apa yang akan berbeda jika masalah ini hilang?' Jawaban terhadap pertanyaan ini menelanjangi gejala dari akar masalah.",
        ],
      },
      {
        heading: "Kesalahan baca #2: fokus pada rata-rata",
        paragraphs: [
          "Skor rata-rata 3,2 dari 5 untuk kompetensi negosiasi terdengar moderat. Tetapi ketika dipecah, mungkin 20% tim sudah expert dan 30% jauh di bawah. Program yang sama untuk semua orang akan membosankan top performer dan membingungkan bottom performer.",
          "Lensa kedua: selalu lihat distribusi, bukan rata-rata. Identifikasi cluster, lalu rancang jalur belajar berbeda untuk setiap cluster.",
        ],
      },
      {
        heading: "Kesalahan baca #3: mengabaikan konteks sistem",
        paragraphs: [
          "Sales yang lemah dalam closing mungkin bukan karena skill, tetapi karena CRM yang lambat, lead yang tidak terkualifikasi, atau insentif yang salah. Training pada kasus seperti ini akan terasa seperti memperbaiki pintu di rumah yang atapnya bocor.",
          "Lensa ketiga: telusuri rantai—skill, motivasi, tools, proses, leadership. Training hanya solusi yang tepat ketika gap utamanya benar-benar di skill.",
        ],
      },
      {
        heading: "Template tiga kolom",
        paragraphs: [
          "Kami biasanya merangkum TNA menjadi tabel tiga kolom: gejala (apa yang dilaporkan), akar masalah (apa yang sebenarnya), dan intervensi yang tepat (training, coaching, perbaikan sistem, atau kombinasinya). Tabel ini menjadi alat negosiasi dengan stakeholder bisnis: bukan semua masalah perlu dijawab dengan training.",
        ],
      },
    ],
    faq: [
      {
        q: "Apa indikator bahwa TNA sudah cukup mendalam?",
        a: "Setiap rekomendasi harus bisa ditelusuri ke data spesifik (wawancara, observasi, KPI), dan setiap rekomendasi harus memiliki indikator keberhasilan yang terukur dalam 90 hari.",
      },
      {
        q: "Apakah TNA bisa dilakukan tanpa konsultan eksternal?",
        a: "Bisa, terutama untuk topik taktis. Konsultan eksternal lebih bernilai untuk topik strategis lintas fungsi atau ketika ada blind spot internal yang sulit diakui.",
      },
    ],
    takeaway: [
      "Keluhan bukan kebutuhan—telusuri akar masalah sebelum merancang solusi.",
      "Lihat distribusi, bukan rata-rata.",
      "Pertimbangkan konteks sistem; tidak semua gap diselesaikan dengan training.",
    ],
  },
  {
    slug: "psikologi-closing-pasar-indonesia",
    title: "Psikologi Closing untuk Pasar Indonesia: 5 Pola yang Berulang",
    description:
      "Lima pola psikologis pembeli Indonesia yang menentukan keputusan closing—dengan teknik praktis untuk sales B2B dan B2C tanpa terjebak teknik manipulatif.",
    category: "Sales & Marketing",
    readTime: "8 menit",
    cover: courseImg,
    date: "2025-02-22",
    keywords: ["psikologi sales", "closing", "sales Indonesia", "B2B sales", "consumer behavior", "negosiasi"],
    lead:
      "Closing bukan tentang memaksa keputusan, melainkan membuat keputusan terasa aman. Setelah mendampingi ribuan sales di sektor banking, asuransi, properti, dan FMCG, kami menemukan lima pola psikologis yang berulang pada pembeli Indonesia. Memahami pola ini mengubah closing dari pertarungan menjadi percakapan.",
    sections: [
      {
        heading: "Pola 1: keputusan kolektif yang tersembunyi",
        paragraphs: [
          "Pembeli Indonesia jarang memutuskan sendirian. Suami-istri, atasan-bawahan, atau bahkan teman dekat ikut mempengaruhi. Sales yang hanya 'menjual' ke satu orang sering terjebak pada kalimat 'saya tanya dulu ke...'",
          "Praktik: di awal percakapan, tanyakan dengan halus 'biasanya keputusan seperti ini Bapak diskusikan dengan siapa?' Lalu siapkan materi yang bisa dibawa pulang untuk diskusi tersebut.",
        ],
      },
      {
        heading: "Pola 2: rasa segan menolak",
        paragraphs: [
          "Banyak prospek tidak menolak secara langsung. Mereka mengatakan 'nanti saya kabari' yang seringkali berarti 'tidak'. Sales yang tidak peka akan menunggu kabar yang tak pernah datang.",
          "Praktik: ajukan pertanyaan kalibrasi seperti 'kalau Bapak punya kekhawatiran, apa yang paling membuat ragu?' Pertanyaan ini memberi izin untuk jujur tanpa harus 'menolak'.",
        ],
      },
      {
        heading: "Pola 3: kebutuhan akan validasi sosial",
        paragraphs: [
          "Pembeli Indonesia sangat dipengaruhi oleh apa yang dipakai 'orang seperti saya'. Studi kasus, testimoni nyata dari profil yang mirip prospek, dan logo klien yang relevan jauh lebih berdampak dibanding fitur produk.",
        ],
      },
      {
        heading: "Pola 4: aversi terhadap penyesalan",
        paragraphs: [
          "Pembeli takut salah memilih lebih dari takut tidak memilih. Karena itu, garansi, periode evaluasi, dan kebijakan refund yang jelas sering menjadi pemicu closing—bukan diskon harga.",
        ],
      },
      {
        heading: "Pola 5: hubungan jangka panjang sebagai default",
        paragraphs: [
          "Pembeli Indonesia cenderung memilih penjual yang mereka percaya akan tetap ada setelah transaksi. Sales yang berinvestasi pada hubungan—follow-up tanpa menjual, edukasi gratis, kehadiran di momen penting—mengonversi lebih tinggi dalam jangka panjang.",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah teknik closing tradisional seperti scarcity masih efektif di Indonesia?",
        a: "Efektif jika benar adanya, tidak efektif jika dibuat-buat. Pembeli Indonesia sangat sensitif terhadap manipulasi; sekali ketahuan dimanipulasi, kepercayaan hilang permanen.",
      },
      {
        q: "Bagaimana membedakan 'nanti saya kabari' yang serius dengan yang sopan menolak?",
        a: "Tanyakan komitmen kecil: 'Bapak nyaman jika saya kontak hari Selasa siang?' Jika prospek menyetujui hari dan jam spesifik, biasanya minat masih ada.",
      },
    ],
    takeaway: [
      "Pahami pengambil keputusan tersembunyi sejak awal percakapan.",
      "Beri izin untuk jujur—jangan paksa keputusan.",
      "Gunakan validasi sosial dengan profil yang mirip prospek.",
      "Tawarkan jaminan untuk meredam aversi penyesalan.",
      "Investasi pada hubungan menghasilkan closing berulang.",
    ],
  },
  {
    slug: "storytelling-untuk-eksekutif",
    title: "Storytelling untuk Eksekutif: Kapan Data Tidak Cukup",
    description:
      "Mengapa eksekutif yang menguasai storytelling lebih efektif menggerakkan keputusan dan tim—dengan kerangka tiga babak yang siap dipakai di rapat board.",
    category: "Komunikasi",
    readTime: "5 menit",
    cover: webinarImg,
    date: "2025-02-08",
    keywords: ["storytelling", "executive communication", "presentasi", "leadership communication", "public speaking"],
    lead:
      "Data meyakinkan pikiran, cerita menggerakkan keputusan. Eksekutif yang efektif tahu kapan harus menggunakan masing-masing—dan kapan menggabungkannya. Berikut kerangka praktis yang sudah kami uji di ratusan sesi presentasi tingkat board dan town hall.",
    sections: [
      {
        heading: "Mengapa data saja tidak cukup",
        paragraphs: [
          "Riset Stanford menunjukkan bahwa cerita lebih mudah diingat 22 kali dibanding fakta tunggal. Di ruang rapat, audiens menerima ratusan angka per minggu—mereka kelelahan secara kognitif. Cerita memberi konteks emosional yang membuat angka 'menempel'.",
        ],
      },
      {
        heading: "Kerangka tiga babak",
        paragraphs: [
          "Babak 1: dunia normal yang bermasalah. Mulai dari status quo yang tidak berkelanjutan—gambarkan tokoh nyata (pelanggan, karyawan, atau perusahaan) yang merasakannya.",
          "Babak 2: titik perubahan. Apa yang terjadi yang memaksa keputusan? Di sini sertakan data—tetapi sebagai bukti, bukan sebagai inti.",
          "Babak 3: dunia baru yang lebih baik. Tunjukkan masa depan yang bisa dicapai jika keputusan diambil sekarang. Akhiri dengan ajakan spesifik.",
        ],
      },
      {
        heading: "Kapan menggunakan cerita, kapan menggunakan data",
        paragraphs: [
          "Gunakan cerita ketika tujuan Anda menggerakkan keputusan, mengubah sikap, atau membangun urgensi. Gunakan data ketika audiens sudah setuju pada arah dan butuh kepastian eksekusi. Penggabungan paling kuat: cerita di pembuka, data di tengah, cerita lagi di penutup.",
        ],
      },
    ],
    faq: [
      {
        q: "Bagaimana jika saya bukan tipe orang yang pandai bercerita?",
        a: "Storytelling adalah keterampilan, bukan bakat. Mulai dengan satu kerangka tiga babak dan latih di forum kecil sebelum membawanya ke board. Konsistensi mengalahkan kemampuan alami.",
      },
    ],
    takeaway: [
      "Data meyakinkan pikiran, cerita menggerakkan keputusan.",
      "Gunakan kerangka tiga babak: dunia normal → titik perubahan → dunia baru.",
      "Kombinasikan cerita dan data untuk dampak maksimal.",
    ],
  },
  {
    slug: "barakah-time-management",
    title: "Barakah Time Management: Produktivitas Tanpa Kehilangan Ketenangan",
    description:
      "Pendekatan time management yang menggabungkan prinsip keberkahan dengan praktik produktivitas modern—untuk profesional yang ingin berkinerja tinggi tanpa burnout.",
    category: "Produktivitas",
    readTime: "6 menit",
    cover: portrait,
    date: "2025-01-25",
    keywords: ["time management", "produktivitas", "barakah", "burnout", "deep work", "manajemen waktu"],
    lead:
      "Produktivitas modern sering mengukur kuantitas: berapa banyak tugas selesai, berapa banyak rapat dihadiri. Tetapi banyak profesional Indonesia merasa lelah meski 'produktif'. Konsep barakah menawarkan kerangka berbeda: bukan tentang lebih banyak, melainkan tentang dampak yang lebih dalam dari waktu yang sama.",
    sections: [
      {
        heading: "Apa itu barakah dalam konteks waktu",
        paragraphs: [
          "Barakah berarti pertumbuhan kebaikan yang melampaui perhitungan. Dalam konteks waktu, ini berarti satu jam yang fokus dan diberkahi bisa menghasilkan dampak setara dengan delapan jam yang terpecah. Fokusnya bukan pada efisiensi mekanis, tetapi pada kualitas kehadiran.",
        ],
      },
      {
        heading: "Tiga praktik harian",
        paragraphs: [
          "Pertama, mulai hari dengan niat yang jelas—bukan to-do list. Tuliskan satu hasil paling penting hari itu sebelum membuka email atau notifikasi.",
          "Kedua, blok waktu deep work selama 90–120 menit di pagi hari. Riset chronobiology menunjukkan kapasitas kognitif puncak terjadi 2–4 jam setelah bangun.",
          "Ketiga, lakukan muhasabah harian 10 menit di malam hari—bukan untuk menyalahkan diri, tetapi untuk memetakan apa yang menambah dan mengurangi kebermaknaan.",
        ],
      },
      {
        heading: "Apa yang harus dihentikan",
        paragraphs: [
          "Hentikan menjawab pesan saat sedang bersama keluarga. Hentikan rapat yang tidak punya keputusan jelas di akhir. Hentikan menyibukkan diri sebagai cara melarikan diri dari pekerjaan yang sebenarnya penting tetapi sulit.",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah konsep barakah hanya relevan bagi profesional muslim?",
        a: "Tidak. Konsep ini berakar pada tradisi Islam, tetapi prinsip 'kualitas mengalahkan kuantitas' bersifat universal. Praktiknya bisa diadopsi oleh siapa pun yang mencari produktivitas berkelanjutan.",
      },
    ],
    takeaway: [
      "Mulai hari dengan niat, bukan to-do list.",
      "Lindungi 90–120 menit deep work di pagi hari.",
      "Muhasabah harian menjaga kebermaknaan tetap di atas kesibukan.",
    ],
  },
  {
    slug: "sop-layanan-jadi-pengalaman-dirindukan",
    title: "Mengubah SOP Layanan Menjadi Pengalaman yang Dirindukan Pelanggan",
    description:
      "Mengapa SOP layanan yang ketat sering menghasilkan pengalaman yang dingin—dan bagaimana mengubahnya menjadi service excellence yang membuat pelanggan kembali.",
    category: "Service Excellence",
    readTime: "7 menit",
    cover: workshopImg,
    date: "2025-01-10",
    keywords: ["service excellence", "SOP", "customer experience", "NPS", "customer service", "layanan pelanggan"],
    lead:
      "SOP layanan diciptakan untuk konsistensi. Namun ketika dijalankan secara mekanis, ia menghasilkan pengalaman yang seragam—bukan yang dirindukan. Pertanyaannya bukan SOP atau tidak, melainkan bagaimana SOP menjadi panggung, bukan kerangkeng.",
    sections: [
      {
        heading: "Tiga lapisan pengalaman",
        paragraphs: [
          "Lapisan pertama adalah lapisan teknis: produk benar, harga tepat, transaksi cepat. Ini wajib, tetapi tidak menciptakan loyalitas.",
          "Lapisan kedua adalah lapisan emosional: pelanggan merasa dihargai, didengar, dipahami. Inilah lapisan yang menentukan kembali atau tidak.",
          "Lapisan ketiga adalah lapisan personal: pelanggan merasa diingat sebagai individu, bukan tiket. Inilah lapisan yang menciptakan advokasi.",
        ],
      },
      {
        heading: "SOP sebagai panggung, bukan naskah",
        paragraphs: [
          "SOP yang baik mendefinisikan hasil yang harus tercapai (waktu respons, kualitas solusi) tetapi memberi ruang pada cara mencapainya. Karyawan diberi prinsip, bukan kalimat hafalan.",
          "Praktik: ganti checklist 'ucapkan selamat datang' menjadi 'pastikan pelanggan merasa diterima dalam 10 detik pertama'. Hasilnya tetap konsisten, tetapi terasa tulus.",
        ],
      },
      {
        heading: "Tiga ritual yang mengubah budaya layanan",
        paragraphs: [
          "Pertama, briefing pagi 10 menit untuk membaca satu cerita pelanggan—baik yang baik maupun yang buruk. Ini menjaga empati tetap segar.",
          "Kedua, post-shift huddle untuk memetakan satu momen yang membanggakan dan satu yang ingin diperbaiki.",
          "Ketiga, monthly story sharing di mana frontliner berbagi cerita pelanggan terbaik—diakui dan dirayakan.",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah memberi keleluasaan pada karyawan tidak berisiko menurunkan konsistensi?",
        a: "Risiko itu nyata jika tidak ada prinsip yang jelas. Solusinya bukan SOP yang lebih ketat, tetapi prinsip yang lebih kuat dan coaching yang konsisten dari supervisor lini depan.",
      },
    ],
    takeaway: [
      "SOP harus mendefinisikan hasil, bukan kalimat hafalan.",
      "Lapisan emosional dan personal adalah penentu loyalitas.",
      "Ritual harian menjaga budaya layanan tetap hidup.",
    ],
  },
  {
    slug: "addie-adab-framework",
    title: "ADDIE + ADAB Framework: Cara Merancang Training yang Berdampak",
    description:
      "Penjelasan lengkap framework ADDIE + ADAB untuk perancang program training yang ingin menggabungkan rigor instructional design dengan nilai dan budaya Indonesia.",
    category: "People Development",
    readTime: "8 menit",
    cover: ebookImg,
    date: "2024-12-20",
    keywords: ["ADDIE", "ADAB", "instructional design", "training framework", "L&D", "program training"],
    lead:
      "ADDIE adalah tulang punggung instructional design selama lebih dari empat dekade. Tetapi di lapangan Indonesia, kami sering melihat ADDIE menghasilkan program yang ilmiah namun terasa asing. ADAB hadir sebagai lapisan komplementer—bukan pengganti—agar program tidak hanya benar secara metodologi, tetapi juga selaras secara budaya.",
    sections: [
      {
        heading: "Ringkasan ADDIE",
        paragraphs: [
          "Analyze: memahami gap, audiens, dan konteks. Design: menyusun tujuan belajar, struktur, dan strategi asesmen. Develop: membangun materi dan media. Implement: menjalankan program. Evaluate: mengukur dampak di empat level Kirkpatrick.",
        ],
      },
      {
        heading: "Lapisan ADAB",
        paragraphs: [
          "Align: pastikan tujuan program selaras dengan nilai organisasi dan kebutuhan strategis bisnis—bukan sekadar tren topik.",
          "Design with values: integrasikan nilai (adab, integritas, gotong royong) dalam setiap aktivitas—bukan sebagai modul terpisah.",
          "Activate experience: utamakan pengalaman aplikatif (role-play, simulasi, studi kasus lokal) di atas ceramah.",
          "Bridge to behavior: rancang jembatan eksplisit dari ruang training ke ruang kerja—action plan, coaching, dan dukungan atasan.",
        ],
      },
      {
        heading: "Penerapan praktis",
        paragraphs: [
          "Pada program leadership untuk perusahaan farmasi, ADDIE memberi struktur lima modul. Lapisan ADAB memastikan setiap modul dibuka dengan refleksi nilai, ditutup dengan komitmen perilaku, dan diiringi tindak lanjut 60 hari. Hasilnya, 78% peserta menerapkan minimal tiga perilaku baru di kuartal berikutnya—dibanding rata-rata industri 25%.",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah ADDIE + ADAB hanya untuk perusahaan dengan nilai religius?",
        a: "Tidak. ADAB di sini berarti penghormatan pada manusia dan konteks budaya—relevan untuk semua organisasi yang ingin programnya tidak terasa asing bagi peserta Indonesia.",
      },
    ],
    takeaway: [
      "ADDIE memberi rigor metodologi, ADAB memberi keselarasan budaya.",
      "Empat lapisan ADAB: Align, Design with values, Activate experience, Bridge to behavior.",
      "Perilaku berubah karena jembatan, bukan karena modul.",
    ],
  },
  {
    slug: "public-speaking-pro-aset-karier",
    title: "Public Speaking Pro: Mengubah Kemampuan Bicara Menjadi Aset Karier",
    description:
      "Mengapa public speaking adalah kompetensi terlewatkan paling berdampak di karier profesional—dan kerangka praktis untuk membangunnya dari nol.",
    category: "Komunikasi",
    readTime: "6 menit",
    cover: courseImg,
    date: "2024-12-05",
    keywords: ["public speaking", "presentasi", "komunikasi", "karier", "personal branding", "pitching"],
    lead:
      "Promosi karier sering tidak ditentukan oleh kompetensi teknis, melainkan oleh kemampuan menyampaikan ide secara meyakinkan. Profesional yang menguasai public speaking dianggap lebih siap memimpin—bahkan ketika kompetensi teknisnya sama dengan rekan lain. Kabar baiknya, public speaking adalah keterampilan yang bisa dilatih.",
    sections: [
      {
        heading: "Tiga miskonsepsi yang harus dihancurkan",
        paragraphs: [
          "Miskonsepsi pertama: 'pembicara hebat lahir dengan bakat'. Riset menunjukkan kebalikannya—mayoritas pembicara hebat adalah introvert yang berlatih intensif.",
          "Miskonsepsi kedua: 'rasa gugup harus dihilangkan'. Tidak. Rasa gugup harus diarahkan menjadi energi performa.",
          "Miskonsepsi ketiga: 'isi yang baik akan berbicara untuk dirinya sendiri'. Tidak akan. Isi yang baik membutuhkan struktur, ritme, dan kehadiran panggung.",
        ],
      },
      {
        heading: "Empat pilar latihan",
        paragraphs: [
          "Pilar 1: struktur pesan. Gunakan kerangka satu pesan utama dan tiga pendukung—maksimal.",
          "Pilar 2: kehadiran fisik. Postur stabil, kontak mata terdistribusi, gestur yang melayani isi.",
          "Pilar 3: vokal. Variasi pitch, pace, dan pause. Pause adalah senjata paling tidak digunakan oleh pembicara pemula.",
          "Pilar 4: kontrol gugup. Latihan napas 4-7-8 sebelum naik panggung dan visualisasi audiens yang ramah.",
        ],
      },
      {
        heading: "Latihan mingguan minimum",
        paragraphs: [
          "Rekam diri sendiri menjawab satu pertanyaan kompleks selama 90 detik—setiap minggu. Tonton ulang. Catat satu hal yang ditingkatkan, satu hal yang dipertahankan. Konsistensi 12 minggu mengubah cara Anda dilihat di rapat.",
        ],
      },
    ],
    faq: [
      {
        q: "Berapa lama waktu yang dibutuhkan untuk melihat perbaikan signifikan?",
        a: "Dengan latihan 30 menit, 3x seminggu, perbaikan kentara terlihat dalam 8–12 minggu. Yang paling cepat berubah biasanya adalah struktur pesan dan kontrol pause.",
      },
      {
        q: "Apakah harus mengikuti kelas formal?",
        a: "Tidak wajib, tetapi feedback berkualitas mempercepat 3–4 kali lipat. Minimal cari satu mentor atau teman latihan yang bisa memberi observasi spesifik.",
      },
    ],
    takeaway: [
      "Public speaking dilatih, bukan diwariskan.",
      "Empat pilar: struktur, kehadiran, vokal, kontrol gugup.",
      "Latihan rekam diri 90 detik, mingguan, konsisten 12 minggu.",
    ],
  },
];

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
