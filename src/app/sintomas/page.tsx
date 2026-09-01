import Link from "next/link";
import { doctor } from "@/data/doctor";
import { symptoms } from "@/data/symptoms";
import Breadcrumbs from "@/components/Breadcrumbs";
import CardImageHeader from "@/components/CardImageHeader";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: `Síntomas de Alerta Quirúrgica | ${doctor.title} ${doctor.name}`,
  description: `Guía de orientación médica sobre síntomas de dolor abdominal, vesícula biliar y hernias tratados por el ${doctor.title} ${doctor.name} en Puebla.`,
};

export default function SintomasPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} isDark={false} />
        
        <div className="bg-[#0F172A] text-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30">
            Orientación Al Paciente
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Síntomas que Requieren Valoración Quirúrgica
          </h1>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            Identifica a tiempo los síntomas abdominales y señales de alerta para solicitar consulta con el cirujano general en Puebla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {symptoms.map(symptom => (
            <div
              key={symptom.id}
              className="group bg-white rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-2xl rounded-br-2xl border-2 border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:border-emerald-500 transition-all duration-500"
            >
              <div>
                {/* DEDICATED IMAGE CONTAINER FOR EVERY SYMPTOM CARD */}
                <CardImageHeader
                  src={symptom.image}
                  alt={symptom.name}
                  aspectRatio="aspect-[4/3]"
                  category="symptom"
                />

                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-black text-[#0F172A] leading-snug group-hover:text-emerald-700 transition-colors">
                    {symptom.name}
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {symptom.description}
                  </p>
                </div>
              </div>

              {/* INSTITUTIONAL CONCISE BUTTON (RULE 5) */}
              <div className="p-6 pt-0">
                <Link
                  href={`/sintomas/${symptom.slug}`}
                  className="w-full py-4 px-6 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-wider hover:bg-emerald-600 transition flex items-center justify-between leading-snug"
                >
                  <span>Ver Orientación Médica</span>
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
