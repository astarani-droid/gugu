# Gugu — *The Silent Journey*

Puzzle-platformer 2D di mana seekor burung kecil yang tak bersuara harus memulihkan nyanyian dunia yang dikutuk keheningan.

## Dokumentasi

- [📄 Game Design Document (GDD)](GDD.md) — visi, mekanik, cerita, desain level, spesifikasi teknis, dan jadwal pengembangan lengkap.

## Konsep Singkat

| Atribut | Detail |
|---|---|
| Genre | 2D Puzzle-Platformer |
| Engine | Godot 4.x |
| Platform | PC + Web Browser |
| Estimasi Durasi | 4–6 jam |

## Status

> 🚧 **Pre-Production** — GDD selesai; prototype sedang direncanakan.

## Langkah Berikutnya (What to do now)

1) **Siapkan proyek Godot 4**  
   - Inisialisasi struktur folder seperti di GDD (assets/, scenes/, scripts/).  
   - Buat scene dasar: `Main.tscn` (hub Desa Sunyi) + `Player.tscn`.

2) **Prototype mekanik inti**  
   - Gerak dasar: lari, lompat, wall-slide/jump.  
   - Sistem Fragmen Suara: pickup & aktivasi 1 fragmen (mulai dari Air), efek sederhana pada objek (mis. mencairkan es).

3) **Bangun level demo Area 1 (Hutan Terbakar)**  
   - 2–3 ruangan puzzle kecil + 1 encounter bayangan.  
   - Checkpoint + reset level (R) harus berfungsi.

4) **Pipeline aset & audio**  
   - Gunakan placeholder tile 16×16; simpan di `assets/tilesets/`.  
   - Siapkan template SFX (ogg/wav) untuk fragmen Air dan langkah kaki.

5) **Manajemen proyek**  
   - Buat issue board: Pre-Production, Prototype, Alpha.  
   - Tugaskan milestone \"Prototype\" (2 bulan) sesuai GDD.

Setiap langkah di atas dirinci lebih lengkap di [GDD.md](GDD.md); gunakan sebagai referensi harian.
