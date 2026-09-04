import Image from "next/image";
import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaCheckCircle, FaExclamationTriangle, FaStethoscope } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return diseases.map((disease) => ({
    slug: disease.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) return {};
  
  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
  };
}

export default async function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) notFound();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      name: disease.name,
      description: disease.description,
      signOrSymptom: disease.symptoms.map(s => ({ "@type": "MedicalSignOrSymptom", name: s })),
      riskFactor: disease.riskFactors.map(r => ({ "@type": "MedicalRiskFactor", name: r })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: disease.faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <StructuredData data={schemas} />
      
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades", href: "/enfermedades" }, { label: disease.name }]} />
        
        {/* Hero Enfermedad */}
        <FadeUp className="flex flex-col lg:flex-row gap-8 mb-16 mt-8">
          <div className="lg:w-1/2 bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <h1 className="text-4xl lg:text-5xl font-black mb-6 relative z-10">{disease.name}</h1>
            <p className="text-lg text-slate-300 relative z-10 leading-relaxed">{disease.description}</p>
          </div>
          <div className="lg:w-1/2 min-h-[350px] relative rounded-[3rem] overflow-hidden border-4 border-white shadow-xl bg-slate-900 group">
            <Image
              src={disease.image}
              alt={disease.name}
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
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3"><FaExclamationTriangle className="text-accent" /> Síntomas y Signos</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {disease.symptoms.map(sym => (
                  <li key={sym} className="bg-white p-4 rounded-xl border border-slate-100 flex items-start gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="font-medium text-slate-700">{sym}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3"><FaStethoscope className="text-primary" /> Causas y Factores de Riesgo</h2>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-800">Causas Principales</h3>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    {disease.causes.map(cause => <li key={cause} className="hover:text-slate-900 transition-colors">{cause}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">Factores de Riesgo</h3>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    {disease.riskFactors.map(factor => <li key={factor} className="hover:text-slate-900 transition-colors">{factor}</li>)}
                  </ul>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3"><FaCheckCircle className="text-green-500" /> Opciones de Tratamiento</h2>
              <div className="flex flex-wrap gap-3">
                {disease.treatments.map(treatment => (
                  <span key={treatment} className="bg-green-50 text-green-700 px-5 py-2.5 rounded-full font-bold text-sm border border-green-100 hover:bg-green-100 hover:scale-105 transition-all cursor-default">
                    {treatment}
                  </span>
                ))}
              </div>
            </StaggerItem>

            {/* FAQs */}
            <StaggerItem>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                {disease.faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Sidebar CTA */}
          <FadeUp delay={0.2} className="lg:col-span-1">
            <div className="sticky top-32 bg-primary rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow group">
              <h3 className="text-2xl font-black mb-4">¿Presentas síntomas de {disease.name}?</h3>
              <p className="text-white/80 mb-8">El diagnóstico temprano cambia el pronóstico. El {doctor.title} {doctor.name} es especialista certificado en la evaluación y tratamiento de esta afección en Puebla.</p>
              <a href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="block w-full text-center bg-white text-primary font-black py-4 rounded-xl hover:scale-105 hover:bg-slate-50 transition-all shadow-lg">
                Agendar Consulta ($900 MXN)
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

