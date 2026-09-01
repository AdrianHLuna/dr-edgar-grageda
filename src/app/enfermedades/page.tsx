import Link from "next/link";
import { doctor } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import Breadcrumbs from "@/components/Breadcrumbs";
import CardImageHeader from "@/components/CardImageHeader";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: `Enfermedades y Patologías Abdominales | ${doctor.title} ${doctor.name}`,
  description: `Guía médica de enfermedades digestivas, hernias y patologías abdominales tratadas por el ${doctor.title} ${doctor.name} en Puebla.`,
};

export default function EnfermedadesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} isDark={false} />
        
        <div className="bg-[#0F172A] text-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30">
            Catálogo Clínico Integral
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Enfermedades y Padecimientos Abdominales
          </h1>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            Información médica detallada sobre las principales afecciones digestivas y hernias de la pared abdominal que diagnosticamos y operamos con técnica laparoscópica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diseases.map(disease => (
            <div
              key={disease.id}
              className="group bg-white rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-2xl rounded-br-2xl border-2 border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:border-emerald-500 transition-all duration-500"
            >
              <div>
                {/* DEDICATED IMAGE CONTAINER FOR EVERY DISEASE CARD */}
                <CardImageHeader
                  src={disease.image}
                  alt={disease.name}
                  aspectRatio="aspect-[16/10]"
                  category="disease"
                />

                <div className="p-6 space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                    {disease.technicalName}
                  </span>

                  <h2 className="text-xl font-black text-[#0F172A] leading-snug group-hover:text-emerald-700 transition-colors">
                    {disease.name}
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {disease.description}
                  </p>
                </div>
              </div>

              {/* INSTITUTIONAL CONCISE BUTTON (RULE 5) */}
              <div className="p-6 pt-0">
                <Link
                  href={`/enfermedades/${disease.slug}`}
                  className="w-full py-4 px-6 rounded-2xl bg-[#0F172A] text-white font-black text-xs uppercase tracking-wider hover:bg-emerald-600 transition flex items-center justify-between leading-snug"
                >
                  <span>Ver Guía Médica</span>
                  <FaArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
