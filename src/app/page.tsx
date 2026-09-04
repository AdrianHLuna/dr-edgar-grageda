"use client";

import Image from "next/image";
import Link from "next/link";
import { doctor } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import StructuredData from "@/components/StructuredData";
import CardImageHeader from "@/components/CardImageHeader";
import { motion } from "framer-motion";
import { 
  FaUserMd, 
  FaHospital, 
  FaCheckCircle, 
  FaArrowRight, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaCertificate, 
  FaAward, 
  FaUniversity, 
  FaMoneyBillWave, 
  FaExchangeAlt, 
  FaCreditCard, 
  FaCalendarCheck,
  FaStethoscope,
  FaBriefcaseMedical,
  FaNotesMedical,
  FaClock,
  FaDirections
} from "react-icons/fa";

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

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans relative overflow-hidden">
      <StructuredData data={schema} />

      {/* ─── HERO SECTION: CENTERED AURA WITH ARCHED METRICS DOCK (100vh) ─────── */}
      <section className="min-h-screen flex items-center justify-center py-16 px-6 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-emerald-50/30 border-b border-slate-200">
        
        {/* Decorative Background Lighting Effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12">
          
          {/* Centered Headline & Status Dock */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100/80 text-emerald-900 font-extrabold text-xs uppercase tracking-widest border border-emerald-300 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              {doctor.title} {doctor.name} • {doctor.specialty}
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0F172A] leading-[1.06] tracking-tight">
              Excelencia Quirúrgica y <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                Cirugía Laparoscópica de Mínima Invasión
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Especialista certificado en resolución de hernias abdominales, enfermedades de la vesícula biliar y atención quirúrgica de urgencia en Puebla (Hospital Puebla, Privada de las Ramblas #4).
            </p>

            {/* Main Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-9 py-4.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition shadow-xl shadow-emerald-600/25"
              >
                <FaCalendarCheck size={18} /> Agendar Cita en Consultorio ($900 MXN)
              </a>
              <a
                href={`tel:${doctor.phone}`}
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs uppercase tracking-wider border-2 border-slate-300 flex items-center justify-center gap-2 transition shadow-sm"
              >
                <FaPhoneAlt size={14} className="text-emerald-600" /> Atención Directa: {doctor.phone}
              </a>
            </div>
          </motion.div>

          {/* Arched Floating Metrics Dock & Showcase Container */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4"
          >
            {/* Left Column: 3 Metric Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              <motion.div variants={fadeUp} className="bg-white p-6 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl border-2 border-slate-200 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl flex-shrink-0">
                  <FaUserMd />
                </div>
                <div>
                  <span className="block text-2xl font-black text-[#0F172A]">+5,500</span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Pacientes Atendidos</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white p-6 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl border-2 border-slate-200 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl flex-shrink-0">
                  <FaBriefcaseMedical />
                </div>
                <div>
                  <span className="block text-2xl font-black text-[#0F172A]">10 Años</span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Experiencia Quirúrgica</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white p-6 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl border-2 border-slate-200 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl flex-shrink-0">
                  <FaCertificate />
                </div>
                <div>
                  <span className="block text-2xl font-black text-[#0F172A]">+1,000</span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Cirugías Realizadas</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Doctor Portrait Showcase Container */}
            <motion.div variants={fadeUp} className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-2xl rounded-br-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-800 p-2">
                <div className="w-full h-full rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl overflow-hidden relative">
                  <Image
                    src={doctor.photo}
                    alt={`Fotografía Oficial ${doctor.title} ${doctor.name}`}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                </div>
                {/* Floating Cert Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-lg flex-shrink-0">
                    <FaAward />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest block">
                      Consejo Mexicano de Cirugía General
                    </span>
                    <span className="text-xs font-extrabold text-slate-900">
                      Certificación Vigente Reg. C17004017
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ─── SECCIÓN 1: CIRUGÍAS Y SERVICIOS LAPAROSCÓPICOS (PRIMERA SECCIÓN) ──── */}
      <section className="py-24 px-6 bg-[#0F172A] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30">
                Especialidades de Quirófano
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mt-3">
                Cirugías y Procedimientos Laparoscópicos
              </h2>
            </div>
            <Link
              href="/servicios"
              className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 transition w-fit"
            >
              Ver Todas las Cirugías &rarr;
            </Link>
          </motion.div>

          {/* Bento Grid with Mandatory Image Space for Every Single Service Card */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group bg-white/5 rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-2xl rounded-br-2xl border-2 border-white/10 overflow-hidden flex flex-col justify-between hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-500 shadow-xl"
              >
                <div>
                  {/* MANDATORY DEDICATED IMAGE CONTAINER FOR EVERY SERVICE CARD */}
                  <CardImageHeader
                    src={service.image}
                    alt={service.name}
                    aspectRatio="aspect-video"
                    category="service"
                  />

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full">
                        {service.type === "hospitalario" ? "Hospitalario" : "Ambulatorio"}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {service.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white leading-snug group-hover:text-emerald-400 transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* INSTITUTIONAL CONCISE BUTTON (RULE 5) */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="w-full py-4 px-6 rounded-2xl bg-emerald-600 text-white font-black text-xs uppercase tracking-wider hover:bg-emerald-500 transition flex items-center justify-between leading-snug"
                  >
                    <span>Ver Ficha del Procedimiento</span>
                    <FaArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ─── SECCIÓN 2: SEMBLANZA Y TRAYECTORIA DEL DOCTOR ("ABOUT ME") ─────────── */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Doctor Photo Container (5 cols) */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-[3/4] rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-2xl rounded-br-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-800 p-2">
                <div className="w-full h-full rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl overflow-hidden relative">
                  <Image
                    src={doctor.photo}
                    alt={`Semblanza del ${doctor.title} ${doctor.name}`}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-xl text-slate-900">
                  <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest block">
                    Formación de Posgrado BUAP
                  </span>
                  <span className="text-xs font-bold">
                    Especialidad en Cirugía General (Céd. Esp. 10649245)
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Academic Details (7 cols) */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
                Formación & Certificaciones
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A]">
                {doctor.title} {doctor.name}
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-medium">
                {doctor.philosophy}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-6 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl border-2 border-slate-200 shadow-md space-y-2">
                  <FaUniversity className="text-emerald-700 text-2xl" />
                  <h3 className="text-base font-bold text-[#0F172A]">Formación BUAP</h3>
                  <p className="text-xs text-slate-500">
                    Médico Cirujano y Partero (Céd. Prof. 7878147) por la Benemérita Universidad Autónoma de Puebla.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl border-2 border-slate-200 shadow-md space-y-2">
                  <FaShieldAlt className="text-emerald-700 text-2xl" />
                  <h3 className="text-base font-bold text-[#0F172A]">Certificación CMCG</h3>
                  <p className="text-xs text-slate-500">
                    Certificado por el Consejo Mexicano de Cirugía General (Reg. C17004017).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-emerald-700 text-xl" />
                  <span className="text-xs font-extrabold text-emerald-900">
                    Miembro de la Asociación Mexicana de Cirugía General (AMCG)
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ─── SECCIÓN 3: PADECIMIENTOS Y ENFERMEDADES ATENDIDAS ─────────────────── */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
                Guía de Salud Abdominal
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] mt-3">
                Enfermedades y Patologías Atendidas
              </h2>
            </div>
            <Link
              href="/enfermedades"
              className="px-6 py-3 rounded-2xl bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-600 transition w-fit"
            >
              Ver Todas las Enfermedades &rarr;
            </Link>
          </motion.div>

          {/* 3-Column Grid with Mandatory Image Header for Every Single Disease Card */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {diseases.map((disease) => (
              <motion.div
                key={disease.id}
                variants={fadeUp}
                className="group bg-slate-50 rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-2xl rounded-br-2xl border-2 border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:border-emerald-500 transition-all duration-500"
              >
                <div>
                  {/* DEDICATED IMAGE CONTAINER FOR EVERY DISEASE CARD */}
                  <CardImageHeader
                    src={disease.image}
                    alt={disease.name}
                    aspectRatio="aspect-[16/10]"
                    category="disease"
                  />

                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                      {disease.technicalName}
                    </span>

                    <h3 className="text-xl font-black text-[#0F172A] leading-snug group-hover:text-emerald-700 transition-colors">
                      {disease.name}
                    </h3>

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
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ─── SECCIÓN 4: GUÍA ORIENTATIVA DE SÍNTOMAS (HORIZONTAL BANNER CARDS) ── */}
      <section className="py-24 px-6 bg-slate-100/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="text-xs font-black uppercase tracking-widest text-rose-700 bg-rose-100 px-4 py-1.5 rounded-full border border-rose-200">
              Orientación al Paciente
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A]">
              ¿Qué Síntomas Presentas?
            </h2>
            <p className="text-slate-600 text-sm">
              Identifica los signos de alerta que requieren evaluación por el cirujano general.
            </p>
          </motion.div>

          {/* Alternate Horizontal Banner Cards with Dedicated Left 40% Image Container */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {symptoms.map((symptom) => (
              <motion.div
                key={symptom.id}
                variants={fadeUp}
                className="group bg-white rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl border-2 border-slate-200 overflow-hidden flex flex-col sm:flex-row hover:shadow-2xl hover:border-emerald-500 transition-all duration-500"
              >
                {/* 40% DEDICATED IMAGE CONTAINER */}
                <div className="sm:w-5/12 relative flex-shrink-0 min-h-[160px] sm:min-h-full">
                  <CardImageHeader
                    src={symptom.image}
                    alt={symptom.name}
                    aspectRatio="h-full min-h-[180px]"
                    category="symptom"
                  />
                </div>

                {/* 60% Content Panel */}
                <div className="sm:w-7/12 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-[#0F172A] group-hover:text-emerald-700 transition-colors">
                      {symptom.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {symptom.description}
                    </p>
                  </div>

                  {/* INSTITUTIONAL CONCISE BUTTON (RULE 5) */}
                  <Link
                    href={`/sintomas/${symptom.slug}`}
                    className="w-full py-3.5 px-5 rounded-2xl bg-slate-900 text-white font-black text-[11px] uppercase tracking-wider hover:bg-emerald-600 transition flex items-center justify-between leading-snug"
                  >
                    <span>Ver Orientación Médica</span>
                    <FaArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ─── SECCIÓN 5: UBICACIÓN, COSTOS Y CENTRO DE MANDO (CONTACTO) ───────── */}
      <section className="py-24 px-6 bg-[#0F172A] text-white relative">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 lg:p-14 shadow-2xl space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-slate-800 pb-8">
              <div className="lg:col-span-8 space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30">
                  Ubicación & Citas Directas
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  Consultorio en Hospital Puebla, Privada de las Ramblas #4
                </h2>
                <p className="text-slate-300 text-sm">
                  {doctor.address} (Zona Desarrollo Atlixcáyotl).
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-xl"
                >
                  <FaWhatsapp size={18} /> Confirmar Cita por WhatsApp
                </a>
                <a
                  href={doctor.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition border border-white/20"
                >
                  <FaDirections size={16} className="text-emerald-400" /> Ruta GPS en Google Maps
                </a>
              </div>
            </div>

            {/* Fee & Payment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-2">
                <span className="text-xs font-bold text-slate-400">Costo de Consulta</span>
                <p className="text-3xl font-black text-emerald-400">${doctor.consultationPrice} MXN</p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-2">
                <span className="text-xs font-bold text-slate-400">Mensualidades</span>
                <p className="text-lg font-bold text-white">Hasta 12 MSI con Tarjetas</p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-2">
                <span className="text-xs font-bold text-slate-400">Seguros Médicos</span>
                <p className="text-lg font-bold text-white">Pago Directo y Convenio (Sin Reembolso Obli.)</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
