import Link from "next/link";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "Órganos y Sistemas Tratados | Neurología Pediátrica",
  description: "Conoce los órganos, sistemas y extremidades neurológicas que atendemos.",
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
        
        <FadeUp className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mt-8 mb-4">Órganos y Sistemas</h1>
          <p className="text-lg text-slate-600 max-w-3xl">La neurología abarca desde el cerebro hasta los nervios periféricos en brazos y piernas. Explora nuestras áreas de especialidad.</p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map(service => (
            <StaggerItem key={service.id} className="h-full">
              <Link href={`/servicios/${service.slug}`} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-3 hover:border-primary/30 transition-all duration-300 flex flex-col sm:flex-row h-full group">
                <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-200 group-hover:scale-110 transition-transform duration-700">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-widest group-hover:text-primary/70 transition-colors">Espacio Imagen</span>
                  </div>
                </div>
                <div className="sm:w-3/5 p-8 flex flex-col justify-center flex-grow">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.name}</h2>
                  <p className="text-slate-600 line-clamp-3 mb-6 flex-grow">{service.description}</p>
                  <span className="text-primary font-black transition-colors flex items-center gap-2 uppercase text-sm tracking-wider">
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
