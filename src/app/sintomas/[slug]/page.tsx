import Image from "next/image";
import { symptoms } from "@/data/symptoms";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaExclamationTriangle, FaCalendarCheck } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) return {};
  
  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
  };
}

export default async function SymptomPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalSignOrSymptom",
    name: symptom.name,
    description: symptom.description,
    cause: symptom.causes.map(c => ({ "@type": "MedicalCause", name: c })),
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <StructuredData data={schema} />
      
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas", href: "/sintomas" }, { label: symptom.name }]} />
        
        {/* Hero Síntoma */}
        <FadeUp className="flex flex-col lg:flex-row gap-8 mb-16 mt-8">
          <div className="lg:w-1/2 bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl" />
            <h1 className="text-4xl lg:text-5xl font-black mb-6 relative z-10">{symptom.name}</h1>
            <p className="text-lg text-slate-300 relative z-10 leading-relaxed">{symptom.description}</p>
          </div>
          <div className="lg:w-1/2 min-h-[350px] relative rounded-[3rem] overflow-hidden border-4 border-white shadow-xl bg-slate-900 group">
            <Image
              src={symptom.image}
              alt={symptom.name}
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
              <div className="bg-rose-50 border border-rose-200 p-8 rounded-3xl hover:shadow-lg hover:-translate-y-1 transition-all group">
                <h2 className="text-2xl font-black text-rose-700 mb-4 flex items-center gap-3">
                  <FaExclamationTriangle className="group-hover:scale-125 transition-transform" /> ¿Por qué no debes ignorarlo?
                </h2>
                <p className="text-lg text-rose-900 font-medium leading-relaxed">
                  {symptom.whyConsult}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Posibles Causas</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {symptom.causes.map(cause => (
                  <li key={cause} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm font-medium text-slate-700 hover:shadow-md hover:border-slate-300 transition-all cursor-default">
                    {cause}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 mt-4 italic">* Estas son solo posibles causas. El diagnóstico definitivo debe realizarlo el especialista tras una valoración.</p>
            </StaggerItem>
          </StaggerContainer>

          {/* Sidebar CTA */}
          <FadeUp delay={0.2} className="lg:col-span-1">
            <div className="sticky top-32 bg-primary rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow group">
              <h3 className="text-2xl font-black mb-4">El {doctor.title} {doctor.name} atiende este síntoma</h3>
              <p className="text-white/80 mb-8">No esperes más. Agendar una valoración oportuna es el primer paso para tu salud y tranquilidad.</p>
              <a href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="block w-full flex items-center justify-center gap-3 bg-white text-primary font-black py-4 rounded-xl hover:scale-105 hover:bg-slate-50 transition-all shadow-lg">
                <FaCalendarCheck className="group-hover:rotate-12 transition-transform" /> Agendar Valoración
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

