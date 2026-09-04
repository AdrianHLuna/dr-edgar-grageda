import React from "react";
import Image from "next/image";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaClock, 
  FaCreditCard, 
  FaShieldAlt, 
  FaHospital,
  FaDirections,
  FaCheckCircle,
  FaMoneyBillWave
} from "react-icons/fa";

export const metadata = {
  title: `Ubicación del Consultorio y Citas | ${doctor.title} ${doctor.name}`,
  description: `Dirección del consultorio, mapa en vivo de Google Maps, teléfono de atención y WhatsApp del ${doctor.title} ${doctor.name} en Puebla (Hospital Puebla, Privada de las Ramblas #4, Consultorio 631).`,
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${doctor.title} ${doctor.name} - Cirugía General y Laparoscopía`,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      postalCode: "72197",
      addressCountry: doctor.country,
    },
    telephone: doctor.phone,
    priceRange: `$${doctor.consultationPrice} MXN`,
  };

  const exactPlaceMapEmbedUrl = "https://maps.google.com/maps?q=Hospital+Puebla,+Privada+de+las+Ramblas+4,+Desarrollo+Atlixcayotl,+72197+Puebla,+Pue.&t=&z=16&ie=UTF8&iwloc=B&output=embed";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-10 px-6 relative overflow-hidden">
      <StructuredData data={schema} />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        
        {/* BREADCRUMBS WITH HIGH CONTRAST */}
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Ubicación & Citas" }]} isDark={false} />

        {/* ─── 1. TOP HEADER TITLE (MINIMALIST & CLEAN, NO HORIZONTAL BANNER!) ─── */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-xs uppercase tracking-widest border border-emerald-300">
            <FaHospital className="text-emerald-700" /> Hospital Puebla • Consultorio 631 • Puebla
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Ubicación del Consultorio y Agendamiento
          </h1>
          <p className="text-slate-600 text-base max-w-3xl font-medium">
            Atención especializada en cirugía general, laparoscopía y urgencias por el {doctor.title} {doctor.name}.
          </p>
        </div>

        {/* ─── 2. FULL-WIDTH INTERACTIVE MAP CANVAS WITH FLOATING GLASS DOCK OVERLAY ─── */}
        <div className="w-full h-[520px] rounded-[3rem] overflow-hidden border-2 border-slate-300 shadow-2xl relative bg-slate-900">
          {/* Live Embedded Google Maps Canvas */}
          <iframe
            title="Mapa Interactivo Consultorio Dr. Edgar Grageda Flores"
            src={exactPlaceMapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* FLOATING GLASS DOCK OVERLAY ON TOP OF MAP (TOP-LEFT CORNER ON DESKTOP) */}
          <div className="absolute top-6 left-6 right-6 sm:right-auto sm:max-w-md bg-[#0F172A]/90 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] border-2 border-emerald-500/40 shadow-2xl text-white space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                  Consultorio 631
                </span>
                <h2 className="text-xl font-black text-white">
                  {doctor.title} {doctor.name}
                </h2>
              </div>
              <span className="text-xl font-black text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-xl">
                ${doctor.consultationPrice} MXN
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2 font-semibold">
                <FaMapMarkerAlt className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                <span>Hospital Puebla, Privada de las Ramblas #4, Consultorio 631, Col. Desarrollo Atlixcáyotl, Puebla</span>
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <FaPhoneAlt className="text-emerald-400 text-sm flex-shrink-0" />
                <span>Urgencias: <strong className="text-white">{doctor.phone}</strong></span>
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg"
              >
                <FaWhatsapp size={16} /> Agendar Cita por WhatsApp
              </a>
              <a
                href={doctor.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition border border-white/20"
              >
                <FaDirections size={14} className="text-emerald-400" /> Abrir en Google Maps / Waze
              </a>
            </div>
          </div>
        </div>

        {/* ─── 3. THREE HORIZONTAL COLUMNS BELOW THE MAP (RADICALLY DIFFERENT ARCHITECTURE) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          
          {/* Card 1: Dirección y Referencias de Llegada */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-200 shadow-xl space-y-4 hover:border-emerald-500 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl font-black">
              <FaMapMarkerAlt />
            </div>
            <h2 className="text-xl font-black text-[#0F172A]">Dirección del Consultorio</h2>
            <div className="text-xs text-slate-600 space-y-2 leading-relaxed font-medium">
              <p className="font-bold text-[#0F172A]">{doctor.address}</p>
              <p className="text-emerald-800 font-bold">• Hospital Puebla, Privada de las Ramblas #4, Consultorio 631</p>
              <p className="text-slate-500">• Entre Vía Atlixcáyotl y Calle María Morelos y Pavón</p>
            </div>
            <a
              href={doctor.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black text-emerald-700 uppercase tracking-wider hover:underline pt-2"
            >
              Ver Ruta GPS en Mapa &rarr;
            </a>
          </div>

          {/* Card 2: Horarios y Citas de Atención */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-200 shadow-xl space-y-4 hover:border-emerald-500 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl font-black">
              <FaClock />
            </div>
            <h2 className="text-xl font-black text-[#0F172A]">Horarios de Atención</h2>
            <div className="text-xs text-slate-600 space-y-2 leading-relaxed font-medium">
              <p className="font-extrabold text-[#0F172A]">Lunes a Viernes:</p>
              <p className="text-slate-700">09:00 a 19:00 hrs</p>
              <p className="font-extrabold text-[#0F172A] pt-1">Sábados:</p>
              <p className="text-slate-700">09:00 a 12:00 hrs</p>
              <p className="text-emerald-800 font-bold pt-1">• Urgencias Quirúrgicas Disponibles 24/7</p>
            </div>
          </div>

          {/* Card 3: Formas de Pago y Cédulas Oficiales */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-200 shadow-xl space-y-4 hover:border-emerald-500 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl font-black">
              <FaCreditCard />
            </div>
            <h2 className="text-xl font-black text-[#0F172A]">Pagos & Seguros</h2>
            <div className="text-xs text-slate-600 space-y-2 leading-relaxed font-medium">
              <p className="font-bold text-[#0F172A]">Efectivo, Tarjetas de Débito/Crédito y Transferencia</p>
              <p className="text-emerald-800 font-bold">• 12 Meses Sin Intereses con Tarjetas Participantes</p>
              <p className="text-slate-700">• Se aceptan Seguros de Gastos Médicos Mayores (Pago Directo y Reembolso)</p>
            </div>
            <div className="pt-2 text-[11px] font-bold text-slate-400 border-t border-slate-200">
              Céd. Prof. {doctor.cedula} | Céd. Esp. {doctor.cedulaEspecialidad} (BUAP)
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
