## Masalah

Anda benar — secara visual gambar background di section **ADDIE + Adab** memang tidak terlihat. Penyebabnya:

1. Opacity gambar diset terlalu rendah (`opacity-15` = 15%).
2. Di atasnya ada overlay gradient `from-background via-background/85 to-background` yang hampir menutup penuh gambar — bagian atas & bawah jadi 100% gelap, bagian tengah hanya 15% terang.
3. Hasil akhir: gambar nyaris menyatu dengan background `#121111`, terlihat seolah tidak ada perubahan.

File `src/assets/methodology-bg.jpg` (380 KB) sebenarnya sudah ada di project — hanya saja tidak terlihat karena layering di atas.

## Rencana Perbaikan

**File:** `src/pages/Index.tsx` — section ADDIE (baris 150–191)

1. Naikkan opacity gambar dari `opacity-15` → `opacity-40` agar foto terbaca jelas namun teks tetap nyaman.
2. Ganti overlay yang menutup penuh dengan **vignette lembut**:
   - Hilangkan `via-background/85` (yang membuat tengah gelap).
   - Pakai gradient halus dari atas & bawah saja (`from-background/90 via-background/40 to-background/90`) supaya bagian tengah gambar tetap terlihat.
3. Tambahkan sedikit `bg-background/30` di belakang kartu ADDIE (atau tetap pakai `card-premium` yang sudah punya backdrop-blur) agar kontras teks tetap aman tanpa menutup gambar latar.
4. (Opsional) tambahkan filter `saturate-110` ringan pada gambar agar warna hangat sesuai tema Sophisticated Warm Moody.

## Hasil yang Diharapkan

- Foto background terlihat jelas sebagai elemen visual section Metodologi.
- Teks heading, paragraf, dan 5 kartu ADDIE tetap kontras tinggi & mudah dibaca.
- Tidak ada perubahan pada section lain.

Setujui plan ini agar saya langsung lanjut implementasi.