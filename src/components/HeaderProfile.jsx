/**
 * Komponen HeaderProfile
 * Menampilkan kartu profil siswa dalam teks biasa (tanpa props).
 */
export default function HeaderProfile() {
  return (
    <header id="profil" className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm">
      {/* Avatar Foto Profil */}
      <div className="shrink-0">
        <img
          src="/avatar.png"
          alt="Foto Profil Siswa"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>

      {/* Info Profil Siswa */}
      <div className="flex-1 text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900">Muhammad Fatih</h1>
        <p className="text-sm text-blue-600 font-medium mt-1">
          Aspiring Web Developer • SMAIT Nurul Fikri
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Siswa SMA yang antusias belajar web development modern dan suka memecahkan masalah lewat kode.
        </p>

        {/* Tombol Aksi */}
        <div className="flex gap-3 justify-center sm:justify-start mt-4">
          <a
            href="#proyek"
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            Lihat Karya
          </a>
          <a
            href="#kontak"
            className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200"
          >
            Kontak
          </a>
        </div>
      </div>
    </header>
  );
}
