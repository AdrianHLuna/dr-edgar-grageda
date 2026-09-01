import Image from "next/image";
import Link from "next/link";
import { doctor } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import StructuredData from "@/components/StructuredData";
import { 
  FaUserMd, 
  FaHospital, 
  FaCheckCircle, 
  FaArrowRight, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaCertificate, 
  FaStar, 
  FaClock, 
  FaCreditCard, 
  FaNotesMedical,
  FaSyringe,
  FaBriefcaseMedical
} from "react-icons/fa";

export const metadata = {
  title: `${doctor.title} ${doctor.name} | ${doctor.specialistTitle} en Puebla`,
  description: `Sitio web oficial del ${doctor.title} ${doctor.name}, especialista en Cirugía General y Laparoscopía de Mínima Invasión en Puebla (Torres Médicas Ramblas). Tratamiento de hernias, vesícula biliar y apendicitis.`,
};

export default function Home() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `${doctor.title} ${doctor.name}`,
    medicalSpecialty: doctor.specialty,
    telephone: doctor.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      addressCountry: doctor.country,
    },
    priceRange: `$${doctor.consultationPrice} MXN`,
  };

  return (
    <div className="min-h-screen bg-[#0B1B17] text-slate-100 relative overflow-hidden">
      <StructuredData data={schema} />

      {/* GLOWING EMERALD BACKGROUND WATERMARKS */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* ─── 1. HERO SECTION (100vh / min-h-screen OBLIGATORIO) ───────────────────── */}
      <section className="min-h-screen flex items-center justify-center py-12 px-6 relative z-10 border-b border-[#1F3D36]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: HIGH IMPACT TYPOGRAPHY & CREDENTIALS (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#112420] border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-widest">
              <FaShieldAlt className="text-emerald-400" /> Egresado BUAP • Certificado CMCG (C17004017)
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Cirugía General y Laparoscopía de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">Mínima Invasión</span> en Puebla
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
              {doctor.bio}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-2 pb-2">
              <div className="bg-[#112420] p-4 rounded-2xl border border-[#1F3D36] text-center">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400">+5,500</span>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Pacientes Atendidos</span>
              </div>
              <div className="bg-[#112420] p-4 rounded-2xl border border-[#1F3D36] text-center">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400">+1,000</span>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Cirugías Realizadas</span>
              </div>
              <div className="bg-[#112420] p-4 rounded-2xl border border-[#1F3D36] text-center">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400">10 Años</span>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Experiencia Quirúrgica</span>
              </div>
            </div>

            {/* Dual CTAs & Fee Card */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3 hover:brightness-110 transition shadow-2xl shadow-emerald-950"
              >
                <FaWhatsapp size={18} /> Agendar Cita en Consultorio ($900 MXN)
              </a>
              <a
                href={`tel:${doctor.phone}`}
                className="px-6 py-4 rounded-2xl bg-[#112420] text-slate-200 font-bold text-xs uppercase tracking-wider border border-[#1F3D36] flex items-center justify-center gap-2 hover:bg-emerald-950/60 transition"
              >
                <FaPhoneAlt size={14} className="text-emerald-400" /> {doctor.phone}
              </a>
            </div>

            {/* Location Pill */}
            <div className="pt-2 text-xs font-semibold text-slate-400 flex items-center gap-2">
              <FaHospital className="text-emerald-400 text-base" />
              <span>Privada de las Ramblas #4, Consultorio 631 (Torres Médicas), Puebla, Pue.</span>
            </div>

          </div>

          {/* RIGHT COLUMN: DEDICATED DOCTOR PHOTO CONTAINER (5 cols) (RULE 2 & 4) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[2.5rem] overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-gradient-to-b from-[#112420] to-[#081412] p-3">
              
              {/* Doctor Official Photo Placeholder / Image */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-[#172A2B]">
                <Image
                  src={doctor.photo}
                  alt={`Fotografía Oficial del ${doctor.title} ${doctor.name}`}
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B17] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Certification Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#112420]/90 backdrop-blur-md p-4 rounded-2xl border border-emerald-500/40 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-black">
                    <FaCertificate />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block">
                      Consejo Mexicano de Cirugía General
                    </span>
                    <span className="text-xs font-bold text-white">
                      Certificado Vigente C17004017
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── 2. ABOUT ME & ACADEMIC BACKBONE ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#081412] border-b border-[#1F3D36]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30">
              Formación & Filosofía Médica
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Trayectoria Quirúrgica Certificada en Puebla
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {doctor.philosophy}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: BUAP */}
            <div className="bg-[#112420] p-8 rounded-[2rem] border border-[#1F3D36] space-y-4 hover:border-emerald-500/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-black">
                <FaUserMd />
              </div>
              <h3 className="text-lg font-black text-white">Formación BUAP</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Médico Cirujano y Partero por la Benemérita Universidad Autónoma de Puebla (Céd. Prof. 7878147) y Especialista en Cirugía General (Céd. Esp. 10649245).
              </p>
            </div>

            {/* Card 2: Certificación CMCG */}
            <div className="bg-[#112420] p-8 rounded-[2rem] border border-[#1F3D36] space-y-4 hover:border-emerald-500/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-black">
                <FaShieldAlt />
              </div>
              <h3 className="text-lg font-black text-white">Certificación Oficial</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Certificado por el Consejo Mexicano de Cirugía General (CMCG Reg. C17004017) y Miembro de la Asociación Mexicana de Cirugía General (AMCG).
              </p>
            </div>

            {/* Card 3: Laparoscopía Mínima Invasión */}
            <div className="bg-[#112420] p-8 rounded-[2rem] border border-[#1F3D36] space-y-4 hover:border-emerald-500/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-black">
                <FaBriefcaseMedical />
              </div>
              <h3 className="text-lg font-black text-white">Cirugía Laparoscópica</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Abordaje de mínima invasión por microincisiones para hernia inguinal, vesícula biliar y apendicitis, reduciendo sustancialmente el dolor postoperatorio.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─── 3. PADECIMIENTOS PRINCIPALES (DISEASES BENTO GRID) ────────────────── */}
      <section className="py-20 px-6 border-b border-[#1F3D36] relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1F3D36] pb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                Catálogo de Patologías
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
                Enfermedades Atendidas en Cirugía General
              </h2>
            </div>
            <Link
              href="/enfermedades"
              className="px-6 py-3 rounded-xl bg-[#112420] text-emerald-300 font-bold text-xs uppercase tracking-wider border border-[#1F3D36] hover:bg-emerald-950 transition flex items-center gap-2 w-fit"
            >
              Ver Todas las Enfermedades <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diseases.map((disease) => (
              <div
                key={disease.id}
                className="bg-[#112420] rounded-[2rem] p-8 border border-[#1F3D36] flex flex-col justify-between space-y-6 hover:border-emerald-500/40 transition shadow-xl"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-block">
                    {disease.technicalName}
                  </span>
                  <h3 className="text-xl font-black text-white leading-snug">
                    {disease.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {disease.description}
                  </p>
                </div>

                {/* FORMATED SMALL CARD BUTTON (RULE 1) */}
                <Link
                  href={`/enfermedades/${disease.slug}`}
                  className="w-full py-4 px-6 rounded-2xl bg-[#0B1B17] text-emerald-300 font-black text-xs uppercase tracking-wider border border-[#1F3D36] hover:bg-emerald-500 hover:text-white transition flex items-center justify-between leading-snug"
                >
                  <span>Ver Guía Médica</span>
                  <FaArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 4. CIRUGÍAS & PROCEDIMIENTOS (SERVICES) ─────────────────────────── */}
      <section className="py-20 px-6 bg-[#081412] border-b border-[#1F3D36]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1F3D36] pb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                Procedimientos Quirúrgicos
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
                Cirugía Laparoscópica y Abdominal en Puebla
              </h2>
            </div>
            <Link
              href="/servicios"
              className="px-6 py-3 rounded-xl bg-[#112420] text-emerald-300 font-bold text-xs uppercase tracking-wider border border-[#1F3D36] hover:bg-emerald-950 transition flex items-center gap-2 w-fit"
            >
              Ver Todas las Cirugías <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#112420] rounded-[2rem] p-8 border border-[#1F3D36] flex flex-col justify-between space-y-6 hover:border-emerald-500/40 transition shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
                      {service.type === "hospitalario" ? "Hospitalario" : "Ambulatorio"}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {service.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* FORMATED SMALL CARD BUTTON (RULE 1) */}
                <Link
                  href={`/servicios/${service.slug}`}
                  className="w-full py-4 px-6 rounded-2xl bg-[#0B1B17] text-emerald-300 font-black text-xs uppercase tracking-wider border border-[#1F3D36] hover:bg-emerald-500 hover:text-white transition flex items-center justify-between leading-snug"
                >
                  <span>Ver Ficha del Procedimiento</span>
                  <FaArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 5. SÍNTOMAS PRINCIPALES (SYMPTOMS) ────────────────────────────────── */}
      <section className="py-20 px-6 border-b border-[#1F3D36]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1F3D36] pb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                Guía de Orientación Al Paciente
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
                ¿Qué Síntomas Requieren Valoración Quirúrgica?
              </h2>
            </div>
            <Link
              href="/sintomas"
              className="px-6 py-3 rounded-xl bg-[#112420] text-emerald-300 font-bold text-xs uppercase tracking-wider border border-[#1F3D36] hover:bg-emerald-950 transition flex items-center gap-2 w-fit"
            >
              Ver Todos los Síntomas <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {symptoms.map((symptom) => (
              <div
                key={symptom.id}
                className="bg-[#112420] rounded-[2rem] p-8 border border-[#1F3D36] flex flex-col justify-between space-y-6 hover:border-emerald-500/40 transition shadow-xl"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-white leading-snug">
                    {symptom.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {symptom.description}
                  </p>
                </div>

                {/* FORMATED SMALL CARD BUTTON (RULE 1) */}
                <Link
                  href={`/sintomas/${symptom.slug}`}
                  className="w-full py-4 px-6 rounded-2xl bg-[#0B1B17] text-emerald-300 font-black text-xs uppercase tracking-wider border border-[#1F3D36] hover:bg-emerald-500 hover:text-white transition flex items-center justify-between leading-snug"
                >
                  <span>Ver Orientación Médica</span>
                  <FaArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 6. CALL TO ACTION FINAL ────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#081412] to-[#0B1B17] relative">
        <div className="max-w-5xl mx-auto bg-[#112420] border-2 border-emerald-500/40 rounded-[3rem] p-10 lg:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden">
          
          <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-3xl mx-auto">
            <FaWhatsapp />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-800/60 inline-block">
              Atención Quirúrgica en Puebla
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              ¿Requieres una Valoración Quirúrgica o Segunda Opinión?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Consulta especializada por el {doctor.title} {doctor.name} en Torres Médicas Ramblas (Zona Atlixcáyotl, Puebla). Agendamiento directo y orientación personalizada.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-black text-xs uppercase tracking-wider hover:brightness-110 transition shadow-2xl flex items-center justify-center gap-3"
            >
              <FaWhatsapp size={20} /> Solicitar Cita por WhatsApp: {doctor.whatsapp}
            </a>
            <a
              href={`tel:${doctor.phone}`}
              className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-[#0B1B17] text-white font-bold text-xs uppercase tracking-wider border border-[#1F3D36] hover:bg-slate-900 transition flex items-center justify-center gap-2"
            >
              <FaPhoneAlt size={16} className="text-emerald-400" /> Telefonía Directa: {doctor.phone}
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
