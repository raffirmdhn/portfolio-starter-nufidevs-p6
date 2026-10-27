/**
 * Komponen Navbar
 * Bar navigasi sederhana di atas halaman dalam teks biasa.
 */
export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo / Nama Siswa */}
        <a href="#profil" className="font-bold text-gray-900 text-base">
          Muhammad Fatih
        </a>

        {/* Menu Navigasi */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#skills" className="hover:text-blue-600">
            Keahlian
          </a>
          <a href="#proyek" className="hover:text-blue-600">
            Proyek
          </a>
          <a
            href="#kontak"
            className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
}
