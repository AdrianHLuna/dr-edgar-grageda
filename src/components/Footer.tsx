import Link from "next/link";
import Image from "next/image";
import { doctor } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaFacebook, FaShieldAlt } from "react-icons/fa";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <footer className="bg-[#081412] text-slate-300 pt-16 pb-12 border-t border-[#1F3D36]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* PROMINENT CENTERED WHITE LOGO ON DARK BACKGROUND (RULE 5) */}
        <div className="flex flex-col items-center justify-center mb-12 border-b border-[#1F3D36]/60 pb-10">
          <div className="w-full max-w-[550px] h-32 sm:h-40 relative flex items-center justify-center mb-4">
            <Image
              src="/images/logo/LOGO-02.png"
              alt={`Logo Oficial ${doctor.title} ${doctor.name}`}
              width={550}
              height={160}
              className="h-32 sm:h-40 w-auto object-contain"
              priority
            />
          </div>
          <p className="text-emerald-400 font-extrabold text-xs uppercase tracking-widest text-center">
            {doctor.specialistTitle} • {doctor.subspecialty}
          </p>
          <p className="text-slate-400 text-xs mt-1 text-center font-medium">
            {doctor.address}
          </p>
        </div>

        {/* 4 COLUMNS CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-xs">
          
          {/* Col 1: Contacto y Pagos */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-black uppercase tracking-wider text-emerald-400 border-b border-[#1F3D36] pb-2">
              Atención & Citas
            </h3>
            <div className="space-y-3 font-semibold text-slate-300">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-emerald-400 transition">
                <FaWhatsapp className="text-emerald-400 text-base" /> WhatsApp: {doctor.whatsapp}
              </a>
              <a href={`tel:${doctor.phone}`} className="flex items-center gap-3 hover:text-emerald-400 transition">
                <FaPhone className="text-emerald-400 text-base" /> Teléfono: {doctor.phone}
              </a>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                <span>Torres Médicas Ramblas, Consultorio 631, Col. Desarrollo Atlixcáyotl, C.P. 72197, Puebla, Pue.</span>
              </div>
              <a href="https://www.facebook.com/dredgargrageda/?locale=es_LA" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-emerald-300 hover:text-white transition pt-1">
                <FaFacebook className="text-lg" /> Síguenos en Facebook
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 block mb-2">Formas de Pago:</span>
              <div className="flex flex-wrap gap-1.5">
                {doctor.paymentMethods.map(method => (
                  <span key={method} className="bg-[#112420] border border-[#1F3D36] text-[10px] px-2.5 py-1 rounded-md text-emerald-300 font-bold">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Padecimientos */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-black uppercase tracking-wider text-emerald-400 border-b border-[#1F3D36] pb-2">
              Padecimientos
            </h3>
            <ul className="space-y-2 font-medium">
              {diseases.slice(0, 6).map(d => (
                <li key={d.id}>
                  <Link href={`/enfermedades/${d.slug}`} className="hover:text-emerald-400 transition">
                    • {d.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/enfermedades" className="text-emerald-400 font-bold hover:underline">
                  Ver todos los padecimientos &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-black uppercase tracking-wider text-emerald-400 border-b border-[#1F3D36] pb-2">
              Cirugías & Servicios
            </h3>
            <ul className="space-y-2 font-medium">
              {services.slice(0, 6).map(s => (
                <li key={s.id}>
                  <Link href={`/servicios/${s.slug}`} className="hover:text-emerald-400 transition">
                    • {s.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/servicios" className="text-emerald-400 font-bold hover:underline">
                  Ver todas las cirugías &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Síntomas y Legal */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-black uppercase tracking-wider text-emerald-400 border-b border-[#1F3D36] pb-2">
              Orientación & Legal
            </h3>
            <ul className="space-y-2 font-medium">
              {symptoms.slice(0, 5).map(sym => (
                <li key={sym.id}>
                  <Link href={`/sintomas/${sym.slug}`} className="hover:text-emerald-400 transition">
                    • {sym.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-[#1F3D36]/60">
              <Link href="/aviso-de-privacidad" className="text-slate-400 hover:text-white transition font-bold block mb-1">
                Aviso de Privacidad
              </Link>
              <span className="text-[11px] text-slate-500 block">
                Cumplimiento COFEPRIS & Ley General de Salud.
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM CREDENTIALS BAR */}
        <div className="border-t border-[#1F3D36] pt-6 text-center text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            {doctor.title} {doctor.name} — Cédula Profesional: <strong>{doctor.cedula}</strong> (BUAP) | Cédula Especialidad: <strong>{doctor.cedulaEspecialidad}</strong> (BUAP) | CMCG: <strong>C17004017</strong>
          </p>
          <p>© {new Date().getFullYear()} Todos los derechos reservados. Arquitectura AISO v2.0.</p>
        </div>

      </div>
    </footer>
  );
}
