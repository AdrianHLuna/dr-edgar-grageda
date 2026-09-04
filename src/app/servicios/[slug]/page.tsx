import Image from "next/image";
import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaCheckCircle, FaInfoCircle, FaCalendarCheck } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};
  
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.longDescription,
    procedureType: service.type === "ambulatorio" ? "NoninvasiveProcedure" : "SurgicalProcedure",
    howPerformed: service.description,
    preparation: service.anesthesiaType ? `Anestesia: ${service.anesthesiaType}` : undefined,
    performer: {
      "@type": "Physician",
      name: `${doctor.title} ${doctor.name}`,
    },
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <StructuredData data={schema} />
      
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }, { label: service.name }]} />
        
        {/* Hero Servicio */}
        <FadeUp className="flex flex-col lg:flex-row gap-8 mb-16 mt-8">
          <div className="lg:w-1/2 bg-primary rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-6 uppercase tracking-wider">
                {service.type}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-6 relative z-10">{service.name}</h1>
            <p className="text-lg text-white/90 relative z-10 leading-relaxed">{service.longDescription}</p>
          </div>
          <div className="lg:w-1/2 min-h-[350px] relative rounded-[3rem] overflow-hidden border-4 border-white shadow-xl bg-slate-900 group">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent pointer-events-none" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contenido Principal */}
          <StaggerContainer className="lg:col-span-2 space-y-12">
            
            <StaggerItem>
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3"><FaInfoCircle className="text-accent" /> Ficha Técnica</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="border-b border-slate-100 pb-4">
                  <dt className="text-sm font-bold text-slate-500 uppercase">Duración</dt>
                  <dd className="text-lg font-medium text-slate-900">{service.duration || "Variable"}</dd>
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <dt className="text-sm font-bold text-slate-500 uppercase">Recuperación</dt>
                  <dd className="text-lg font-medium text-slate-900">{service.recoveryTime || "Inmediata"}</dd>
                </div>
                <div className="border-b sm:border-0 border-slate-100 pb-4 sm:pb-0">
                  <dt className="text-sm font-bold text-slate-500 uppercase">¿Es doloroso?</dt>
                  <dd className="text-lg font-medium text-slate-900">{service.isPainful ? "Sí, requiere manejo del dolor" : "Completamente indoloro"}</dd>
                </div>
                {service.priceRange && (
                  <div>
                    <dt className="text-sm font-bold text-slate-500 uppercase">Costo Estimado</dt>
                    <dd className="text-lg font-medium text-slate-900">{service.priceRange}</dd>
                  </div>
                )}
                
                {/* Custom Specs */}
                {service.technicalSpecs && Object.entries(service.technicalSpecs).map(([key, value]) => (
                  <div key={key} className="col-span-1 sm:col-span-2 border-t border-slate-100 pt-4 mt-2">
                    <dt className="text-sm font-bold text-slate-500 uppercase">{key}</dt>
                    <dd className="text-lg font-medium text-slate-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3"><FaCheckCircle className="text-green-500" /> Beneficios del Procedimiento</h2>
              <ul className="grid grid-cols-1 gap-4">
                {service.benefits.map(benefit => (
                  <li key={benefit} className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start gap-3 hover:shadow-md hover:-translate-y-1 transition-all group">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="font-medium text-green-900">{benefit}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Recomendaciones Posteriores</h2>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
                <ul className="list-disc list-inside text-slate-700 space-y-3">
                  {service.postOpRecommendations.map(rec => <li key={rec} className="hover:text-slate-900 transition-colors">{rec}</li>)}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Sidebar CTA */}
          <FadeUp delay={0.2} className="lg:col-span-1">
            <div className="sticky top-32 bg-slate-900 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow group">
              <h3 className="text-2xl font-black mb-4">¿Requiere este servicio?</h3>
              <p className="text-slate-300 mb-8">Antes de cualquier procedimiento, el {doctor.title} {doctor.name} realizará una valoración integral para asegurar que es la mejor opción para tu salud.</p>
              <a href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="block w-full flex items-center justify-center gap-3 bg-primary text-white font-black py-4 rounded-xl hover:scale-105 hover:bg-primary/90 transition-all shadow-lg">
                <FaCalendarCheck className="group-hover:rotate-12 transition-transform" /> Agendar Valoración
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

