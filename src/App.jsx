import Navbar from "./components/Navbar";
import HeaderProfile from "./components/HeaderProfile";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";

// Data proyek karya siswa Modul 1
const projects = [
  {
    code: "kalkulator-belanja",
    title: "Kalkulator Belanja & Kasir NF",
    module: "Modul 1 • Pertemuan 3",
    category: "Logika Percabangan",
    tags: ["Logika", "DOM", "Matematika"],
    description: "Aplikasi kasir untuk menghitung subtotal belanja, potongan diskon bertingkat (if/else), dan format Rupiah otomatis.",
    demoUrl: "https://github.com",
  },
  {
    code: "smart-todo-app",
    title: "Smart To-Do List App",
    module: "Modul 1 • Pertemuan 4",
    category: "Data-Driven UI",
    tags: ["Array", "Fetch API", "DOM"],
    description: "Aplikasi pencatat tugas interaktif dengan operasi CRUD in-memory (unshift & splice) serta simulasi data asinkron dari internet.",
    demoUrl: "https://github.com",
  },
];

/**
 * Komponen Utama: App
 * Menggabungkan seluruh komponen The Living Portfolio.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <HeaderProfile />
        <SkillSection />
        <ProjectSection projects={projects} />
        <Footer />
      </main>
    </div>
  );
}
