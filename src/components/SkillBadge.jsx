/**
 * Komponen SkillBadge (Versi Ringkas Ramah Siswa)
 * Menampilkan 1 kotak keahlian dengan class Tailwind yang ringkas dan mudah dipahami.
 */
export default function SkillBadge({ skill }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-all">
      <div>
        <h3 className="font-bold text-gray-900 text-sm">{skill.name}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{skill.level}</p>
      </div>
      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
        {skill.category}
      </span>
    </div>
  );
}
