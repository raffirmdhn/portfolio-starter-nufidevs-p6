import ProjectCard from "./ProjectCard";

// TODO 1A: Impor hook 'useState' dari React untuk membuat state interaktif
// Clue: import { useState } from "react";

/**
 * =========================================================================
 * MODUL 2 - LIVE CODING REACT: THE LIVING PORTFOLIO (PERTEMUAN 6)
 * KOMPONEN: ProjectSection.jsx (STARTER PACK)
 * =========================================================================
 * Pada pertemuan ini, kita mengubah tampilan statis menjadi interaktif
 * menggunakan React State (useState):
 * 
 * 1. Filter Kategori (selectedTag): Tombol filter tag dinamis dari data proyek.
 * 2. Conditional Rendering (selectedProject): Menampilkan panel rincian karya
 *    di bawah grid ketika kartu proyek diklik.
 * 3. Like Counter (likes): Menghitung apresiasi per karya secara reaktif.
 * =========================================================================
 */
export default function ProjectSection({ projects = [] }) {
  // -----------------------------------------------------------------------
  // TODO 1B: State 1 untuk kategori tag yang aktif
  // Nilai awal: "Semua"
  // Clue:
  // const [selectedTag, setSelectedTag] = useState("Semua");
  // -----------------------------------------------------------------------

  // -----------------------------------------------------------------------
  // TODO 3A: State 2 untuk karya yang sedang dipilih untuk melihat rincian
  // Nilai awal: null (belum ada karya yang dipilih)
  // Clue:
  // const [selectedProject, setSelectedProject] = useState(null);
  // -----------------------------------------------------------------------

  // -----------------------------------------------------------------------
  // TODO 4A: State 3 untuk mencatat jumlah apresiasi / likes per kode proyek
  // Nilai awal: objek kosong {}
  // Clue:
  // const [likes, setLikes] = useState({});
  // -----------------------------------------------------------------------

  // -----------------------------------------------------------------------
  // TODO 1C: Buat daftar filterTags secara dinamis dari tags seluruh proyek
  // Konsep: loop manual (forEach) dan cek keberadaan item (!includes)
  //
  // Clue:
  // const uniqueTags = [];
  // projects.forEach((project) => {
  //   if (!Array.isArray(project.tags)) return;
  //   project.tags.forEach((tag) => {
  //     if (!uniqueTags.includes(tag)) {
  //       uniqueTags.push(tag);
  //     }
  //   });
  // });
  // const filterTags = ["Semua", ...uniqueTags.sort()];
  // -----------------------------------------------------------------------

  // -----------------------------------------------------------------------
  // TODO 2A: Saring daftar proyek berdasarkan tag yang sedang aktif
  // Clue:
  // const filteredProjects = selectedTag === "Semua"
  //   ? projects
  //   : projects.filter((project) => project.tags.includes(selectedTag));
  // -----------------------------------------------------------------------

  // -----------------------------------------------------------------------
  // TODO 4B: Fungsi menambah like/apresiasi berdasarkan kode proyek
  // Clue:
  // const handleLike = (projectCode) => {
  //   setLikes((prev) => ({
  //     ...prev,
  //     [projectCode]: (prev[projectCode] || 0) + 1,
  //   }));
  // };
  // -----------------------------------------------------------------------

  return (
    <section id="proyek" className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Karya & Portofolio Siswa
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Aplikasi web nyata yang telah dibangun mandiri pada Modul 1 (Dasar Pemrograman Web).
        </p>
      </div>

      {/* 
        TODO 1D: Render Bar Tombol Filter Tags
        Tampilkan daftar tombol filter dari 'filterTags' di sini.
        Clue:
        <div className="flex flex-wrap gap-2 pt-1">
          {filterTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedTag === tag
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      */}

      {/* 
        TODO 2B & 3B: Grid Kartu Proyek
        1. Ganti 'projects.map' menjadi 'filteredProjects.map'
        2. Kirim prop 'isSelected' (selectedProject?.code === project.code)
        3. Kirim prop 'onSelect' untuk memilih/toggle karya yang diklik
        
        Clue pemanggilan ProjectCard yang sudah interaktif:
        <ProjectCard
          key={project.code}
          project={project}
          isSelected={selectedProject?.code === project.code}
          onSelect={() =>
            setSelectedProject(
              selectedProject?.code === project.code ? null : project
            )
          }
        />
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.code} project={project} />
        ))}
      </div>

      {/* 
        TODO 3C & 4C: CONDITIONAL RENDERING - Panel Rincian Karya & Like Button
        Panel ini hanya muncul jika ada karya yang sedang dipilih (selectedProject !== null).
        
        Clue:
        {selectedProject && (
          <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm space-y-4 transition-all">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  Rincian Karya • {selectedProject.module}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Kategori: {selectedProject.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="text-xs text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-lg transition-colors font-medium"
              >
                ✕ Tutup
              </button>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={() => handleLike(selectedProject.code)}
                className="px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>❤️ Beri Apresiasi</span>
                <span>({likes[selectedProject.code] || 0})</span>
              </button>

              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
              >
                <span>Buka Demo</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        )}
      */}
    </section>
  );
}
