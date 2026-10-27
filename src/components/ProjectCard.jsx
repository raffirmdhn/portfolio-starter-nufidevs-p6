/**
 * Komponen ProjectCard (Pertemuan 6)
 * Kartu ringkas karya siswa.
 * Ketika diklik, kartu akan memicu 'onSelect' untuk menampilkan panel detail di bawah grid.
 */
export default function ProjectCard({ project, isSelected = false, onSelect }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      className={`bg-white border rounded-xl p-5 cursor-pointer shadow-sm hover:shadow-md transition-all text-left ${
        isSelected
          ? "border-blue-500 ring-2 ring-blue-100"
          : "border-gray-200 hover:border-blue-400"
      }`}
    >
      {/* Header: Modul & Status Pilihan */}
      <div className="flex justify-between text-xs text-gray-500">
        <span className="font-medium">{project.module}</span>
        <span className="text-blue-600 font-semibold text-xs">
          {isSelected ? "Dipilih ✓" : "Lihat →"}
        </span>
      </div>

      {/* Judul & Kategori Singkat */}
      <h3 className="text-base font-bold text-gray-900 mt-2">
        {project.title}
      </h3>
      <p className="text-xs text-gray-500 mt-0.5">
        {project.category}
      </p>
    </div>
  );
}
