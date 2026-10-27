# 🚀 The Living Portfolio - Starter Pack (Pertemuan 6)
**Praktikum Pemrograman Web: SMAIT Nurul Fikri**

Selamat datang di lembar kerja praktikum **Pertemuan 6**! Pada pertemuan ini, kita melanjutkan proyek **The Living Portfolio** dengan menambahkan interaktivitas nyata menggunakan **React State (`useState`)**, **Filter Kategori Dinamis**, **Conditional Rendering Panel Rincian Karya**, dan **Like Counter Reaktif**.

---

## ⚡ Akses Cepat di Chromebook (Tanpa Install)

Bagi siswa yang menggunakan **Chromebook** atau belum menginstal Node.js di laptop, kamu bisa langsung ngoding di browser hanya dengan satu klik:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/raffirmdhn/portfolio-starter-nufidevs)

> 💡 **Petunjuk Penggunaan StackBlitz:**
> 1. Klik tombol **Open in StackBlitz** di atas.
> 2. Tunggu beberapa detik hingga proses instalasi dan server otomatis berjalan.
> 3. Klik tombol **Fork** di pojok kiri atas untuk menyimpan salinan proyek ke akunmu sendiri.
> 4. Mulai kerjakan misi dari **TODO 1** di file `src/components/ProjectSection.jsx`!

---

## 🛠️ Langkah Menjalankan di Laptop Pribadi (VS Code)

Jika menggunakan laptop pribadi dengan VS Code dan Node.js yang sudah terpasang:

1. Buka folder ini di terminal:
   ```bash
   cd pertemuan6/starter-portfolio-app
   ```
2. Pasang dependencies (cukup 1x di awal):
   ```bash
   npm install
   ```
3. Jalankan development server lokal:
   ```bash
   npm run dev
   ```
4. Tekan `Ctrl + Klik` tautan `http://localhost:5173` yang muncul di terminal untuk membukanya di browser!

---

## 📝 Checklist Misi Live-Coding Siswa (Pertemuan 6)

Fokus praktikum kita pekan ini berpusat pada satu file utama:  
👉 `src/components/ProjectSection.jsx`

Ikuti panduan berurutan di bawah ini bersama guru / mentor di kelas:

### [ ] TODO 1: React State 1 - Filter Kategori & Tag Dinamis
* **TODO 1A**: Impor hook `useState` dari React di baris paling atas file:
  ```javascript
  import { useState } from "react";
  ```
* **TODO 1B**: Buat state `selectedTag` dengan nilai default `"Semua"`:
  ```javascript
  const [selectedTag, setSelectedTag] = useState("Semua");
  ```
* **TODO 1C**: Ekstrak daftar tag unik secara dinamis dari seluruh array `projects` menggunakan loop `forEach` dan pengecekan `!includes`:
  ```javascript
  const uniqueTags = [];
  projects.forEach((project) => {
    if (!Array.isArray(project.tags)) return;
    project.tags.forEach((tag) => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
    });
  });
  const filterTags = ["Semua", ...uniqueTags.sort()];
  ```
* **TODO 1D**: Render deretan tombol tag filter di atas grid kartu dan pasang event `onClick={() => setSelectedTag(tag)}`.

---

### [ ] TODO 2: Menyaring Daftar Karya (`filteredProjects`)
* **TODO 2A**: Buat variabel penyaring `filteredProjects`:
  ```javascript
  const filteredProjects = selectedTag === "Semua"
    ? projects
    : projects.filter((project) => project.tags.includes(selectedTag));
  ```
* **TODO 2B**: Ubah perulangan pada grid kartu dari `projects.map(...)` menjadi `filteredProjects.map(...)`.

---

### [ ] TODO 3: React State 2 - Memilih Karya & Conditional Rendering Detail
* **TODO 3A**: Buat state `selectedProject` dengan nilai awal `null`:
  ```javascript
  const [selectedProject, setSelectedProject] = useState(null);
  ```
* **TODO 3B**: Hubungkan interaksi klik kartu pada komponen `<ProjectCard />`:
  - Kirim prop `isSelected={selectedProject?.code === project.code}`
  - Kirim prop `onSelect` untuk memilih karya atau membatalkan pilihan jika kartu yang sama diklik kembali:
    ```javascript
    onSelect={() =>
      setSelectedProject(
        selectedProject?.code === project.code ? null : project
      )
    }
    ```
* **TODO 3C**: Tepat di bawah grid kartu, tambahkan **Conditional Rendering** `{selectedProject && ( ... )}` untuk memunculkan panel rincian karya lengkap dengan judul, deskripsi, tag, dan tombol tutup (`onClick={() => setSelectedProject(null)}`).

---

### [ ] TODO 4: React State 3 - Like Counter (Apresiasi Karya Siswa)
* **TODO 4A**: Buat state `likes` dengan nilai awal objek kosong `{}`:
  ```javascript
  const [likes, setLikes] = useState({});
  ```
* **TODO 4B**: Buat fungsi `handleLike` untuk mencatat penambahan like per kode proyek secara reaktif:
  ```javascript
  const handleLike = (projectCode) => {
    setLikes((prev) => ({
      ...prev,
      [projectCode]: (prev[projectCode] || 0) + 1,
    }));
  };
  ```
* **TODO 4C**: Pasang tombol aksi apresiasi di dalam panel rincian karya:
  ```jsx
  <button
    type="button"
    onClick={() => handleLike(selectedProject.code)}
    className="px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
  >
    <span>❤️ Beri Apresiasi</span>
    <span>({likes[selectedProject.code] || 0})</span>
  </button>
  ```

---

## 💡 Konsep Penting yang Dipelajari:
1. **Apa itu State?**  
   State adalah "ingatan" atau memori internal komponen React. Berbeda dengan variabel biasa, ketika nilai state berubah melalui fungsi pengubahnya (`setter`), React akan otomatis merender ulang (re-render) tampilan UI agar selalu mutakhir.
2. **Conditional Rendering (`&&`)**  
   Pola di mana elemen UI hanya akan digambar ke layar jika suatu kondisi bernilai *truthy* (contoh: `{selectedProject && <PanelDetail />}`).
3. **Data Immutability pada Object State**  
   Saat memperbarui state berbentuk objek (seperti `likes`), kita selalu menggunakan pola spread operator `...prev` agar state lama tidak tertimpa secara merusak.
