# Game Design Document (GDD)
## Gugu — *The Silent Journey*

**Studio:** Bunny Dog Studio  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Pre-Production

---

## Daftar Isi / Table of Contents

1. [Visi & Konsep Game](#1-visi--konsep-game)
2. [Ringkasan Cerita](#2-ringkasan-cerita)
3. [Gameplay & Mekanik Inti](#3-gameplay--mekanik-inti)
4. [Karakter](#4-karakter)
5. [Desain Dunia & Level](#5-desain-dunia--level)
6. [Antarmuka Pengguna (UI/UX)](#6-antarmuka-pengguna-uiux)
7. [Arah Seni (Art Direction)](#7-arah-seni-art-direction)
8. [Audio](#8-audio)
9. [Spesifikasi Teknis](#9-spesifikasi-teknis)
10. [Monetisasi](#10-monetisasi)
11. [Jadwal Pengembangan](#11-jadwal-pengembangan)
12. [Risiko & Mitigasi](#12-risiko--mitigasi)

---

## 1. Visi & Konsep Game

| Atribut | Detail |
|---|---|
| **Judul** | Gugu — *The Silent Journey* |
| **Genre** | 2D Puzzle-Platformer |
| **Platform Target** | PC (Windows / macOS / Linux), Web Browser |
| **Target Pemain** | Casual–mid-core, usia 12+, menyukai puzzle naratif |
| **Mode Permainan** | Single-player |
| **Estimasi Durasi** | 4–6 jam (story mode) |

### Logline
> *Seekor burung kecil bernama Gugu tidak bisa bersuara. Untuk menolong desa yang dikutuk keheningan, ia harus memecahkan teka-teki dunia menggunakan hanya gerakan, ekspresi, dan objek di sekitarnya.*

### Nilai Jual Unik (USP)
- **Komunikasi tanpa kata** — seluruh narasi disampaikan lewat animasi, gambar, dan bahasa tubuh karakter; zero dialog teks.
- **Mekanik "resonansi suara"** — Gugu memungut dan menggabungkan fragmen suara yang tersebar di dunia untuk membuka jalan.
- **Estetika lokal** — visual terinspirasi seni wayang dan batik; soundtrack gamelan modern.

---

## 2. Ringkasan Cerita

### Latar Belakang
Desa Sunyi terletak di lereng Gunung Kahyangan. Selama ratusan tahun, keseimbangan dijaga oleh Pohon Nyanyian — sebuah pohon ajaib yang memancarkan melodi penyembuh. Suatu hari, Pohon Nyanyian layu akibat kutukan Bayangan Bisu, dan seluruh desa kehilangan kemampuan bicara.

### Protagonis
**Gugu** — seekor burung kecil berwarna biru yang lahir tuli dan bisu sejak kecil. Justru karena ia sudah hidup tanpa suara, ia satu-satunya yang mampu bergerak bebas di bawah kutukan.

### Alur Cerita (3 Act)

**Act 1 – Penemuan (Discovery)**  
Gugu menemukan bahwa kutukan mulai menyebar ke hutan. Ia bertemu Nenek Bisu — manusia pertama yang bisa "berbicara" dengannya lewat gestur. Nenek Bisu memberikan tas kecil yang bisa menyimpan fragmen suara.

**Act 2 – Perjalanan (Journey)**  
Gugu menjelajahi 4 wilayah berbeda untuk mengumpulkan Fragmen Suara (Fire, Water, Wind, Earth). Di setiap wilayah, ia berhadapan dengan Guardian yang dijaga oleh bayangan bisu — musuh yang berubah menjadi teman setelah puzzle diselesaikan.

**Act 3 – Pemulihan (Restoration)**  
Dengan semua fragmen terkumpul, Gugu mendaki Gunung Kahyangan, menghadapi Bayangan Bisu yang ternyata adalah refleksi rasa takut desa sendiri. Ending bercabang berdasarkan pilihan pemain.

### Dua Ending
- **Ending Terang:** Gugu mengorbankan kemampuan geraknya untuk memulihkan Pohon Nyanyian secara sempurna. Desa sembuh, Gugu hidup tenang tanpa bisa terbang.
- **Ending Abu-abu:** Gugu memilih keseimbangan — hanya sebagian kutukan terangkat. Desa perlahan pulih; perjalanan berlanjut (setup sequel).

---

## 3. Gameplay & Mekanik Inti

### 3.1 Kontrol

| Input | Aksi |
|---|---|
| Arrow / WASD | Gerak kiri-kanan |
| Space / Z | Lompat (tahan untuk higher jump) |
| E / Enter | Interaksi / Ambil objek |
| Shift | Tahan nafas (berhenti di udara sejenak) |
| Q | Buka inventory fragmen suara |
| R | Putar ulang puzzle ruangan saat ini |

### 3.2 Mekanik Utama

#### A. Platform & Traversal
- Lompat standar, double jump (diperoleh di pertengahan game)
- Wall-slide & wall-jump di permukaan tertentu
- Area gelap hanya bisa dilewati dengan Fragmen Cahaya aktif

#### B. Fragmen Suara (Sound Fragments)
Inti sistem puzzle. Fragmen adalah potongan melodi berbentuk kristal kecil.

| Tipe Fragmen | Efek Gameplay |
|---|---|
| 🔴 Api (Fire) | Mencairkan es, membakar jaring laba-laba |
| 🔵 Air (Water) | Menumbuhkan tanaman, mengisi mekanisme air |
| 🟢 Angin (Wind) | Menggerakkan platform udara, meniup abu |
| 🟡 Tanah (Earth) | Memindahkan batu besar, membuka retakan tanah |

Pemain bisa **menggabungkan** dua fragmen untuk efek baru:
- Fire + Water = Steam → membuka pintu uap
- Wind + Earth = Sandstorm → membutakan musuh sementara

#### C. Bahasa Gestur
Saat berinteraksi dengan NPC, Gugu memilih respons berupa **ikon gestur** (mengangguk, menggeleng, menunjuk, memeluk). Pilihan gestur mempengaruhi hubungan dengan NPC dan membuka dialog/jalur alternatif.

#### D. Sistem Bayangan (Shadow System)
Bayangan Bisu muncul di area tertentu. Jika Gugu menyentuh bayangan:
- Level tidak berakhir — melainkan Gugu "terserap" ke dimensi bayangan (versi monokrom dari level yang sama)
- Pemain harus menemukan Fragmen Cahaya untuk kembali
- Mechanic ini mengajarkan navigasi dua-layer dunia

### 3.3 Progression Loop

```
Masuk Area Baru
     ↓
Eksplorasi & Kumpul Fragmen
     ↓
Pecahkan Puzzle (gunakan Fragmen)
     ↓
Bebaskan Guardian (mini-boss)
     ↓
Terima Upgrade / Fragmen Baru
     ↓
Lanjut ke Area Berikutnya
```

### 3.4 Tantangan & Kesulitan
- **Tidak ada game over** — jika Gugu jatuh atau diserap bayangan, kembali ke checkpoint terdekat
- **Mode Santai (Casual):** Semua puzzle diberi petunjuk visual
- **Mode Standar (Standard):** Petunjuk hanya muncul setelah 3 menit gagal
- **Mode Puisi (Poet):** Tanpa petunjuk sama sekali; reward kosmetik eksklusif

---

## 4. Karakter

### 4.1 Gugu (Protagonis)
- **Visual:** Burung biru kecil, mata besar ekspresif, tidak memiliki paruh yang bisa membuka (simbolisasi kebisuan)
- **Kepribadian:** Penasaran, pemberani, mudah terharu
- **Kemampuan Awal:** Berlari, lompat dasar, ambil objek
- **Kemampuan Akhir:** Double jump, wall-jump, kombinasi 2 fragmen

### 4.2 Nenek Bisu (Mentor)
- **Visual:** Wanita tua dengan selendang batik, tangan selalu bergerak (sign language)
- **Peran:** Memberikan tas fragmen, muncul di akhir setiap act sebagai narasi visual
- **Mechanics:** Interaksi dengan Nenek Bisu membuka peta area berikutnya

### 4.3 Guardian (4 Karakter)

| Guardian | Elemen | Lokasi | Transformasi |
|---|---|---|---|
| **Ignis** | Api | Hutan Terbakar | Dari monster api → penjaga lentera desa |
| **Aqua** | Air | Danau Beku | Dari naga es → pemandu sungai bawah tanah |
| **Aero** | Angin | Puncak Tebing | Dari elang bisu → pembawa pesan |
| **Terra** | Tanah | Gua Batu | Dari raksasa batu → jembatan hidup |

### 4.4 Bayangan Bisu (Antagonis)
- **Visual:** Siluet hitam berbentuk burung — cermin dari Gugu sendiri
- **Narasi:** Bukan jahat secara inheren; ia adalah manifestasi rasa takut kolektif desa akan keheningan
- **Encounter:** Final boss di Gunung Kahyangan — puzzle-based, bukan combat

---

## 5. Desain Dunia & Level

### 5.1 Peta Dunia

```
                    [Gunung Kahyangan]
                           |
          [Hutan Terbakar] [Danau Beku]
                  \           /
                [Desa Sunyi (Hub)]
                  /           \
          [Puncak Tebing]  [Gua Batu]
```

**Desa Sunyi** berfungsi sebagai hub dunia. Pemain kembali ke sini setelah selesai di setiap area; perubahan di desa mencerminkan progress pemain (semakin banyak warna, tanaman tumbuh, NPC mulai bergerak).

### 5.2 Detail Area

#### Area 1 — Hutan Terbakar
- **Mood:** Oranye, abu, abu-abu gelap
- **Tema Puzzle:** Memadamkan api dengan Fragmen Air; menavigasi asap tebal
- **Jumlah Level:** 6 ruangan + 1 boss room
- **Unlock:** Fragmen Api, kemampuan wall-slide

#### Area 2 — Danau Beku
- **Mood:** Biru muda, putih, transparan
- **Tema Puzzle:** Mencairkan jalur es; navigasi di bawah lapisan es
- **Jumlah Level:** 7 ruangan + 1 boss room
- **Unlock:** Fragmen Air, double jump

#### Area 3 — Puncak Tebing
- **Mood:** Hijau langit, angin visual (daun beterbangan)
- **Tema Puzzle:** Platform bergerak angin; celah sempit vertikal
- **Jumlah Level:** 7 ruangan + 1 boss room
- **Unlock:** Fragmen Angin, dash di udara

#### Area 4 — Gua Batu
- **Mood:** Cokelat tua, emas, bioluminescent
- **Tema Puzzle:** Mendorong batu, jalur di bawah tanah, puzzle gelap
- **Jumlah Level:** 8 ruangan + 1 boss room
- **Unlock:** Fragmen Tanah, ground slam

#### Area Final — Gunung Kahyangan
- **Mood:** Hitam putih → perlahan berwarna sesuai keputusan pemain
- **Tema Puzzle:** Gabungan semua fragmen, shadow mechanic penuh
- **Jumlah Level:** 5 ruangan + final confrontation

### 5.3 Struktur Level Tipikal

```
[ Pintu Masuk ]
      |
[ Puzzle Kecil — tutorial mechanic baru ]
      |
[ Ruangan Eksplorasi — collectible tersembunyi ]
      |
[ Puzzle Utama — wajib diselesaikan ]
      |
[ Encounter Bayangan (opsional) ]
      |
[ Checkpoint + Pintu Keluar ]
```

### 5.4 Kolektibel
- **Noktah Melodi** (50 tersebar) — kosmetik: mengubah warna bulu Gugu
- **Catatan Nenek** (20 tersebar) — lore tambahan dalam bentuk ilustrasi tanpa kata
- **Kristal Kenangan** (10 tersebar) — membuka galeri concept art

---

## 6. Antarmuka Pengguna (UI/UX)

### 6.1 Filosofi UI
- **Minimal & Diegetic** — tidak ada HUD permanen. Informasi ditampilkan di dalam dunia (tas bergetar saat fragmen perlu digunakan, bayangan Gugu berubah gelap saat dekat bahaya).
- **Inklusif** — dukungan untuk colorblind mode (setiap fragmen punya bentuk ikon unik, bukan hanya warna).

### 6.2 Screen Flow

```
[Splash Screen / Logo Studio]
         ↓
    [Main Menu]
    ┌────────────────┐
    │  New Game      │
    │  Continue      │
    │  Settings      │
    │  Credits       │
    └────────────────┘
         ↓
  [World Map / Hub]
         ↓
     [Gameplay]
         ↓
   [Pause Menu]
   ┌────────────────┐
   │  Resume        │
   │  Restart Level │
   │  Settings      │
   │  Quit to Menu  │
   └────────────────┘
```

### 6.3 Inventory & Fragmen
- Akses via tombol Q → Layar setengah (half-screen overlay)
- Fragmen terkumpul ditampilkan sebagai kristal bercahaya dalam tas
- Tap/klik fragmen untuk kombinasikan dua fragmen

### 6.4 Aksesibilitas
| Fitur | Keterangan |
|---|---|
| Colorblind Mode | Ikon bentuk berbeda per tipe fragmen |
| High Contrast Mode | Outline tebal semua objek interaktif |
| Remappable Controls | Semua tombol bisa diubah |
| Hint System | Muncul otomatis setelah timeout (mode Standard) |
| Screen Reader | Deskripsi audio untuk menu (bukan gameplay) |

---

## 7. Arah Seni (Art Direction)

### 7.1 Visual Style
- **Resolusi Referensi:** 1920×1080, pixel art 16-bit dengan layer parallax
- **Pixel Density:** 16×16 hingga 32×32 per tile; karakter 32×32 hingga 64×64
- **Palet Warna:** Per area memiliki palet dominan 8 warna; desa hub menggabungkan semua warna setelah progress

### 7.2 Inspirasi Visual
- Seni wayang kulit (siluet, bayangan)
- Motif batik (pattern di background dan kostum NPC)
- Studio Ghibli (ekspresi karakter tanpa dialog)
- *Ori and the Blind Forest* (cahaya dan kontras)

### 7.3 Animasi
| Aksi | Jumlah Frame |
|---|---|
| Idle | 4 |
| Walk | 6 |
| Run | 8 |
| Jump | 3 |
| Fall | 2 |
| Land | 2 |
| Interact | 6 |
| Hurt | 3 |
| Shadow Absorb | 10 |

### 7.4 Efek Visual
- Partikel fragmen suara: kristal kecil melayang saat dipungut
- Bayangan bergerak: bayangan Gugu berperilaku independen saat di area kutukan
- Transisi area: fade-to-black dengan motif batik sebagai wipe

---

## 8. Audio

### 8.1 Filosofi Audio
- **Sound = Narasi** — karena tidak ada dialog, audio adalah bahasa ketiga (setelah visual dan gestur)
- Dunia secara harfiah "diam" di awal game; suara perlahan muncul seiring fragmen dikumpulkan

### 8.2 Musik
| Track | Keterangan |
|---|---|
| Main Theme | Melodi gamelan minimalis, tempo lambat |
| Desa Sunyi (awal) | Hampir sunyi — hanya angin dan langkah |
| Desa Sunyi (progress) | Gamelan semakin ramai sesuai fragmen terkumpul |
| Hutan Terbakar | Perkusi kayu, distorsi ringan |
| Danau Beku | Angklung + synthesizer dingin |
| Puncak Tebing | Suling + arpegio cepat |
| Gua Batu | Kendang + bass dalam |
| Gunung Kahyangan | Orkestral gamelan — semua instrumen bergabung |
| Boss Encounter | Versi tegang dari tema area, tempo 2× |
| Credits | Full orchestra — semua melodi fragmen dimainkan bersama |

### 8.3 Sound Effects
- Setiap tipe fragmen punya "suara khas" (nada do-re-mi-fa)
- Langkah Gugu berbeda di setiap surface (rumput, batu, es, kayu)
- Saat di dimensi bayangan: semua SFX ter-reverb dan terdengar jauh

### 8.4 Adaptive Audio
- Sistem musik layered: semakin dekat bahaya → lapisan perkusi masuk
- Saat semua fragmen aktif di inventory → tema utama muncul samar di background

---

## 9. Spesifikasi Teknis

### 9.1 Engine & Tools

| Komponen | Tool |
|---|---|
| Game Engine | Godot 4.x (GDScript) |
| Version Control | Git + GitHub |
| Seni & Pixel Art | Aseprite |
| Audio | LMMS / Audacity |
| Level Editor | Godot built-in TileMap |
| Project Management | GitHub Issues + Milestones |

### 9.2 Target Platform & Minimum Specs

**PC:**
| Spec | Minimum | Direkomendasikan |
|---|---|---|
| OS | Windows 10 / macOS 12 / Ubuntu 20 | Windows 11 / macOS 14 |
| CPU | Intel Core i3 / AMD Ryzen 3 | Intel Core i5 / AMD Ryzen 5 |
| RAM | 2 GB | 4 GB |
| GPU | Intel HD 620 / AMD Radeon R5 | Dedicated GPU |
| Storage | 500 MB | 1 GB |

**Web Browser:**
- Chrome 90+, Firefox 88+, Edge 90+
- Export via Godot Web Export (HTML5/WASM)

### 9.3 Struktur Proyek (Godot)

```
gugu/
├── assets/
│   ├── sprites/        # Aseprite output PNG + JSON
│   ├── tilesets/       # Per-area tilesets
│   ├── audio/
│   │   ├── music/      # .ogg files
│   │   └── sfx/        # .wav files
│   └── fonts/
├── scenes/
│   ├── world/          # Area scenes
│   ├── characters/     # Player, NPCs, enemies
│   ├── ui/             # Menu, HUD, inventory
│   └── levels/         # Level scenes per area
├── scripts/
│   ├── player/
│   ├── fragments/
│   ├── shadows/
│   ├── npcs/
│   └── managers/       # GameManager, AudioManager, SaveManager
├── data/
│   └── save/           # Save file format (.json)
└── project.godot
```

### 9.4 Sistem Save
- Auto-save setiap kali Gugu melewati checkpoint
- 3 slot save manual
- Format: JSON lokal di `user://save_X.json`
- Data tersimpan: posisi, fragmen terkumpul, kolektibel, stat guardian

---

## 10. Monetisasi

### 10.1 Model
- **Buy-to-play** — harga satu kali beli
- Tidak ada in-app purchase, tidak ada ads

### 10.2 Harga Target
| Platform | Harga |
|---|---|
| Steam (PC) | USD 9.99 |
| Itch.io (Web/PC) | USD 7.99 (atau Pay-What-You-Want untuk demo) |

### 10.3 Free Demo
- Tersedia di web browser (itch.io embed)
- Mencakup Area 1 penuh (Hutan Terbakar) + intro desa
- Estimasi durasi demo: 45–60 menit

### 10.4 Post-Launch
- Patch gratis: bug fix + level tambahan (tahun pertama)
- Kemungkinan DLC: "Catatan Nenek" — side story Nenek Bisu muda (hanya jika game sukses)

---

## 11. Jadwal Pengembangan

### Tim (Minimum Viable Team)
| Peran | Jumlah |
|---|---|
| Game Designer / Producer | 1 (+ GDD ini sebagai panduan) |
| Programmer (Godot/GDScript) | 1–2 |
| Pixel Artist | 1 |
| Composer / Audio | 1 (part-time / freelance) |

### Milestone

| Fase | Durasi | Deliverable |
|---|---|---|
| **Pre-Production** | 1 bulan | GDD final, prototype mekanik inti, pipeline aset |
| **Prototype** | 2 bulan | 1 level playable: Hutan Terbakar; semua mekanik inti berjalan |
| **Alpha** | 3 bulan | 2 area selesai; sistem fragmen lengkap; UI dasar |
| **Beta** | 2 bulan | Semua area selesai; konten lengkap; playtesting internal |
| **Polish** | 1 bulan | Bug fix, optimisasi, audio mix, aksesibilitas |
| **Launch** | — | Rilis di Itch.io (Web) + Steam (PC) |
| **Post-Launch** | 2 bulan | Hotfix, DLC perencanaan |

**Total estimasi: ±11 bulan** (tim 3–4 orang)

### Gantt Chart (Ringkas)

```
Bulan:  1    2    3    4    5    6    7    8    9   10   11
        ├────┤
Pre-Pro  ████
Prototype     ████████
Alpha              ████████████
Beta                        ████████
Polish                              ████
Launch                                   ★
Post-Launch                               ████████
```

---

## 12. Risiko & Mitigasi

| Risiko | Probabilitas | Dampak | Mitigasi |
|---|---|---|---|
| Scope creep (fitur bertambah terus) | Tinggi | Tinggi | Feature freeze ketat setelah Beta; backlog untuk sequel |
| Aset seni terlambat | Sedang | Tinggi | Gunakan placeholder art selama dev; kontrak aset bertahap |
| Mekanik fragmen terlalu kompleks | Sedang | Sedang | Playtesting awal; sederhanakan kombinasi jika perlu |
| Tim kecil — satu orang keluar | Rendah | Tinggi | Dokumentasi kode dan aset wajib; knowledge sharing rutin |
| Godot versi update breaking changes | Rendah | Sedang | Pin versi Godot spesifik; update hanya setelah review |
| Penerimaan pasar rendah | Sedang | Tinggi | Demo gratis lebih dulu; build community di itch.io & X/Twitter |

---

## Lampiran

### A. Referensi Game
- *Ori and the Blind Forest* — narasi visual tanpa dialog
- *GRIS* — ekspresi emosi lewat warna dan musik
- *Braid* — puzzle-platformer dengan mekanik unik per area
- *Celeste* — kontrol yang presisi, aksesibilitas tinggi
- *A Short Hike* — dunia kecil dengan eksplorasi bebas dan karakter ekspresif

### B. Glossary
| Istilah | Definisi |
|---|---|
| Fragmen Suara | Objek kolektibel berupa kristal melodi; inti sistem puzzle |
| Bayangan Bisu | Musuh/antagonis berupa siluet; juga mechanic dimensi paralel |
| Guardian | Boss area yang setelah dikalahkan menjadi sekutu |
| Desa Sunyi | Hub world; lokasi awal dan tempat kembali setelah setiap area |
| Mode Puisi | Tingkat kesulitan tertinggi — tanpa petunjuk sama sekali |
| Resonansi | Efek gabungan dua fragmen yang dimainkan bersamaan |

### C. Inspirasi Nama
**Gugu** dalam bahasa percakapan informal Indonesia bisa merujuk pada suara bayi atau kata-kata tak berbentuk — selaras dengan karakter utama yang tidak bisa bersuara secara normal, namun mampu "berbicara" dengan cara lain kepada dunia.

---

*Dokumen ini adalah living document. Akan diperbarui seiring berjalannya pre-production dan playtest.*

**Bunny Dog Studio © 2026**
