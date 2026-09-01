"use client";

import Link from "next/link";
import Image from "next/image";
import { doctor } from "@/data/doctor";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B1B17]/95 backdrop-blur-md border-b border-[#1F3D36]">
      {/* Top Bar (Desktop) */}
      <div className="bg-[#081412] text-slate-300 text-xs py-2 hidden lg:block border-b border-[#1F3D36]/50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <span className="font-semibold tracking-wide text-emerald-300">
              Céd. Prof: <strong className="text-white">{doctor.cedula}</strong> (BUAP) | Céd. Esp: <strong className="text-white">{doctor.cedulaEspecialidad}</strong> (BUAP) | CMCG: <strong className="text-white">C17004017</strong>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${doctor.phone}`} className="flex items-center gap-2 hover:text-emerald-400 transition font-bold text-white">
              <FaPhone className="text-emerald-400" /> Atención Directa: <span>{doctor.phone}</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-auto aspect-square flex-shrink-0">
            <Image
              src="/images/logo/LOGO-02.png"
              alt={`Logo ${doctor.title} ${doctor.name}`}
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black text-white leading-tight tracking-tight group-hover:text-emerald-400 transition">
              {doctor.title} {doctor.name}
            </span>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              {doctor.specialty} • Laparoscopía
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-extrabold text-sm text-slate-200">
          <Link href="/" className="hover:text-emerald-400 transition">Inicio</Link>
          <Link href="/enfermedades" className="hover:text-emerald-400 transition">Enfermedades</Link>
          <Link href="/servicios" className="hover:text-emerald-400 transition">Servicios</Link>
          <Link href="/sintomas" className="hover:text-emerald-400 transition">Síntomas</Link>
          <Link href="/contacto" className="hover:text-emerald-400 transition">Contacto & Ubicación</Link>
        </nav>

        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider hover:brightness-110 transition shadow-lg shadow-emerald-950"
        >
          <FaWhatsapp size={16} /> Agendar Cita: $900
        </a>

        {/* Mobile Toggle */}
        <button 
          aria-label="Menu" 
          className="lg:hidden text-white p-2 rounded-xl bg-[#112420] border border-[#1F3D36]" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0B1B17] border-t border-[#1F3D36] p-6 flex flex-col gap-4 font-extrabold text-base text-slate-100 shadow-2xl absolute w-full left-0 z-50">
          <Link href="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-[#1F3D36]">Inicio</Link>
          <Link href="/enfermedades" onClick={() => setIsOpen(false)} className="py-2 border-b border-[#1F3D36]">Enfermedades</Link>
          <Link href="/servicios" onClick={() => setIsOpen(false)} className="py-2 border-b border-[#1F3D36]">Servicios</Link>
          <Link href="/sintomas" onClick={() => setIsOpen(false)} className="py-2 border-b border-[#1F3D36]">Síntomas</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)} className="py-2 border-b border-[#1F3D36]">Contacto & Ubicación</Link>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="mt-2 flex items-center justify-center gap-2 bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-xl"
          >
            <FaWhatsapp size={18} /> Agendar Cita: $900 MXN
          </a>
        </div>
      )}
    </header>
  );
}
