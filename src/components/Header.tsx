"use client";

import Link from "next/link";
import Image from "next/image";
import { doctor } from "@/data/doctor";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaPhone, FaShieldAlt } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Bar (Desktop) */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-2 hidden lg:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <span className="font-semibold tracking-wide text-slate-200 flex items-center gap-2">
              <FaShieldAlt className="text-emerald-400" /> Céd. Prof: <strong className="text-white">{doctor.cedula}</strong> (BUAP) | Céd. Esp: <strong className="text-white">{doctor.cedulaEspecialidad}</strong> (BUAP) | CMCG: <strong className="text-emerald-400">C17004017</strong>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${doctor.phone}`} className="flex items-center gap-2 hover:text-emerald-400 transition font-bold text-white">
              <FaPhone className="text-emerald-400" /> Urgencias & Citas: <span>{doctor.phone}</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group py-1">
          <div className="relative h-14 sm:h-16 w-auto flex items-center">
            <Image
              src="/images/logo/LOGO-01.png"
              alt={`Logo ${doctor.title} ${doctor.name}`}
              width={400}
              height={81}
              className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-extrabold text-sm text-slate-700">
          <Link href="/" className="hover:text-emerald-600 transition">Inicio</Link>
          <Link href="/enfermedades" className="hover:text-emerald-600 transition">Enfermedades</Link>
          <Link href="/servicios" className="hover:text-emerald-600 transition">Servicios</Link>
          <Link href="/sintomas" className="hover:text-emerald-600 transition">Síntomas</Link>
          <Link href="/contacto" className="hover:text-emerald-600 transition">Contacto & Ubicación</Link>
        </nav>

        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="hidden lg:flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-wider hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20"
        >
          <FaWhatsapp size={16} /> Agendar Cita: $900
        </a>

        {/* Mobile Toggle */}
        <button 
          aria-label="Menu" 
          className="lg:hidden text-slate-900 p-2 rounded-xl bg-slate-100 border border-slate-200" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 p-6 flex flex-col gap-4 font-extrabold text-base text-slate-800 shadow-2xl absolute w-full left-0 z-50">
          <Link href="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100">Inicio</Link>
          <Link href="/enfermedades" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100">Enfermedades</Link>
          <Link href="/servicios" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100">Servicios</Link>
          <Link href="/sintomas" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100">Síntomas</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100">Contacto & Ubicación</Link>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="mt-2 flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-xl"
          >
            <FaWhatsapp size={18} /> Agendar Cita: $900 MXN
          </a>
        </div>
      )}
    </header>
  );
}
