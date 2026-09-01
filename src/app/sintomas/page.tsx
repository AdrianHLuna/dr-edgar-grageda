import Link from "next/link";
import { symptoms } from "@/data/symptoms";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "Síntomas de Alarma Neurológica | Neurología Pediátrica",
  description: "Conoce los síntomas neurológicos que requieren atención especializada inmediata.",
};

export default function SintomasPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
        
        <FadeUp className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mt-8 mb-4">Síntomas de Alarma</h1>
          <p className="text-lg text-slate-600 max-w-3xl">El desarrollo infantil tiene etapas clave. Identificar a tiempo señales de alerta puede cambiar drásticamente el pronóstico neurológico de tu hijo.</p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {symptoms.map(sym => (
            <StaggerItem key={sym.id} className="h-full">
              <Link href={`/sintomas/${sym.slug}`} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-rose-300 hover:shadow-2xl hover:-translate-y-3 hover:shadow-rose-500/10 transition-all duration-300 flex flex-col h-full group">
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-200 group-hover:scale-110 transition-transform duration-700">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-widest group-hover:text-rose-400 transition-colors">Espacio Imagen</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">{sym.name}</h2>
                  <p className="text-slate-500 line-clamp-3 mb-6 flex-grow">{sym.description}</p>
                  <span className="text-rose-500 font-black flex items-center gap-2 uppercase text-sm tracking-wider">
                    Saber más <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
