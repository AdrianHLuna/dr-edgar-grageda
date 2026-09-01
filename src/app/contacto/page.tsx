import React from "react";
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
  FaCalendarAlt
} from "react-icons/fa";

export const metadata = {
  title: `Ubicación del Consultorio y Citas | ${doctor.title} ${doctor.name}`,
  description: `Dirección del consultorio, mapa en vivo de Google Maps, teléfono de atención y WhatsApp del ${doctor.title} ${doctor.name} en Puebla (Torres Médicas Ramblas, Atlixcáyotl).`,
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

  // Google Maps Embed URL pointing to exact consultorio pin at Privada de las Ramblas 4, Puebla
  const exactPlaceMapEmbedUrl = "https://maps.google.com/maps?q=Privada+de+las+Ramblas+4,+Desarrollo+Atlixcayotl,+72197+Puebla,+Pue.&t=&z=16&ie=UTF8&iwloc=B&output=embed";

  return (
    <div className="min-h-screen bg-[#0B1B17] text-slate-100 py-10 px-6 relative overflow-hidden">
      <StructuredData data={schema} />

      {/* Glowing Emerald Highlights */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        
        {/* BREADCRUMBS WITH HIGH CONTRAST */}
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Ubicación & Citas" }]} isDark={true} />

        {/* ─── 1. TOP DISPATCH & EMERGENCY BANNER ─────────────────────────── */}
        <div className="bg-gradient-to-r from-[#112420] via-[#0E1F1B] to-[#0B1B17] border-2 border-emerald-500/40 rounded-[2.5rem] p-6 lg:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-black text-2xl flex-shrink-0">
              <FaPhoneAlt />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-block mb-1">
                Atención Médica & Urgencias Quirúrgicas
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Valoración Quirúrgica en Torres Médicas Ramblas, Puebla
              </h2>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                Atención directa para dolores agudos de vesícula, apendicitis y hernias de pared abdominal.
              </p>
            </div>
          </div>
          <a
            href={`tel:${doctor.phone}`}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-black text-xs uppercase tracking-wider hover:brightness-110 transition shadow-xl flex items-center gap-2 flex-shrink-0"
          >
            <FaPhoneAlt size={16} /> Llamar Directo: {doctor.phone}
          </a>
        </div>

        {/* ─── 2. ASYMMETRIC COMMAND CENTER GRID (5 / 7 SPLIT) ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT PANEL: CONSULTATION DOCK & PRICING (5 cols) */}
          <div className="lg:col-span-5 bg-[#112420] rounded-[2.5rem] p-8 border border-[#1F3D36] shadow-2xl space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#1F3D36] pb-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                    Consultorio Puebla (Zona Atlixcáyotl)
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    {doctor.title} {doctor.name}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xl">
                  <FaHospital />
                </div>
              </div>

              {/* Fee & Payment Card */}
              <div className="bg-[#0B1B17] p-6 rounded-2xl border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">Costo de Consulta:</span>
                  <span className="text-2xl font-black text-emerald-400">${doctor.consultationPrice} MXN</span>
                </div>
                <div className="pt-2 border-t border-[#1F3D36] space-y-2 text-xs font-semibold text-slate-300">
                  <p className="text-emerald-300 font-bold">✓ Hasta 12 Meses Sin Intereses con Tarjetas</p>
                  <p className="text-sky-300 font-bold">✓ Cobertura con Seguros de Gastos Médicos Mayores</p>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-[#0B1B17] border border-[#1F3D36] flex items-start gap-3">
                  <FaMapMarkerAlt className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-extrabold text-white">Dirección Exacta del Consultorio:</p>
                    <p className="text-emerald-400 font-black mt-0.5 leading-relaxed">{doctor.address}</p>
                    <p className="text-slate-400 text-[11px] mt-1">Entre Vía Atlixcáyotl y Calle María Morelos y Pavón</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1B17] border border-[#1F3D36] flex items-center gap-3">
                  <FaClock className="text-emerald-400 text-base flex-shrink-0" />
                  <div>
                    <p className="font-extrabold text-white">Horario de Atención:</p>
                    <p className="text-slate-300 mt-0.5">{doctor.schedule}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1B17] border border-[#1F3D36] flex items-center gap-3">
                  <FaCreditCard className="text-emerald-400 text-base flex-shrink-0" />
                  <div>
                    <p className="font-extrabold text-white">Formas de Pago Aceptadas:</p>
                    <p className="text-slate-300 mt-0.5">{doctor.paymentMethods.join(" • ")}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Action CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition shadow-xl"
              >
                <FaWhatsapp size={18} /> Confirmar Cita por WhatsApp: {doctor.whatsapp}
              </a>
              <a
                href={`tel:${doctor.phone}`}
                className="w-full py-3.5 rounded-xl bg-[#0B1B17] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-950 transition border border-[#1F3D36]"
              >
                <FaPhoneAlt size={14} className="text-emerald-400" /> Telefonía Directa: {doctor.phone}
              </a>
            </div>

          </div>

          {/* RIGHT PANEL: HD EMBEDDED GOOGLE MAPS PIN (EXACT MATCH FOR BOTÓN LINK) (7 cols) */}
          <div className="lg:col-span-7 bg-[#112420] rounded-[2.5rem] p-8 border border-[#1F3D36] shadow-2xl flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between border-b border-[#1F3D36] pb-4 mb-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/30">
                    Ficha del Consultorio en Mapa
                  </span>
                  <h3 className="text-2xl font-black text-white mt-2">
                    {doctor.title} {doctor.name}
                  </h3>
                </div>
                <FaMapMarkerAlt className="text-emerald-400 text-3xl" />
              </div>

              {/* ALWAYS VISIBLE LIVE EMBEDDED GOOGLE MAP MATCHING THE PIN OF THE BUTTON */}
              <div className="w-full h-[440px] rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl relative">
                <iframe
                  title="Ubicación Exacta Consultorio Dr. Edgar Grageda Flores"
                  src={exactPlaceMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* GPS Direct Route Button */}
            <a
              href={doctor.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition shadow-xl"
            >
              <FaDirections size={18} /> Abrir Ruta GPS en Google Maps App / Waze
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}
