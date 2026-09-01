import Link from "next/link";
import { diseases } from "@/data/diseases";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "Padecimientos y Enfermedades | Neurología Pediátrica",
  description: "Catálogo de padecimientos neurológicos infantiles que atendemos.",
};

export default function EnfermedadesPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
        
        <FadeUp className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mt-8 mb-4">Enfermedades y Padecimientos</h1>
          <p className="text-lg text-slate-600 max-w-3xl">Conoce más sobre las condiciones neurológicas que diagnosticamos y tratamos con el mayor nivel científico y humano.</p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diseases.map(disease => (
            <StaggerItem key={disease.id} className="h-full">
              <Link href={`/enfermedades/${disease.slug}`} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-3 hover:border-primary/30 transition-all duration-300 flex flex-col h-full group">
                <div className="aspect-video relative overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-200 group-hover:scale-110 transition-transform duration-700">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-widest group-hover:text-primary/70 transition-colors">Espacio Imagen</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{disease.name}</h2>
                  <p className="text-slate-600 line-clamp-3 mb-6 flex-grow">{disease.description}</p>
                  <span className="text-accent font-black group-hover:text-primary transition-colors flex items-center gap-2 uppercase text-sm tracking-wider">
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
