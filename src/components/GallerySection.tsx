"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaExpand, 
  FaTimes, 
  FaPause, 
  FaPlay, 
  FaImages
} from "react-icons/fa";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/doctor/WhatsApp Image 2026-09-01 at 5.11.43 PM.jpeg",
    title: "Atención Quirúrgica Especializada",
    category: "Consultorio Hospital Puebla",
    description: "Valoración personalizada y examen clínico integral en el Consultorio 631 de Hospital Puebla."
  },
  {
    id: 2,
    src: "/images/doctor/WhatsApp Image 2026-09-01 at 5.11.43 PM (1).jpeg",
    title: "Cirugía Laparoscópica de Mínima Invasión",
    category: "Quirófano de Alta Especialidad",
    description: "Procedimientos guiados por cámara laparoscópica de alta definición para una recuperación rápida."
  },
  {
    id: 3,
    src: "/images/doctor/WhatsApp Image 2026-09-01 at 5.11.43 PM (2).jpeg",
    title: "Diagnóstico Clínico y Explicación al Paciente",
    category: "Consulta Externa",
    description: "Explicación detallada y clara sobre la patología abdominal y el plan de tratamiento recomendado."
  },
  {
    id: 4,
    src: "/images/doctor/WhatsApp Image 2026-09-01 at 5.11.43 PM (3).jpeg",
    title: "Equipo Quirúrgico Certificado",
    category: "Práctica Médica",
    description: "Coordinación precisa con personal de enfermería y anestesiología para la máxima seguridad."
  },
  {
    id: 5,
    src: "/images/doctor/WhatsApp Image 2026-09-01 at 5.11.43 PM (4).jpeg",
    title: "Evaluación Médica Meticulosa",
    category: "Atención al Paciente",
    description: "Revisión exhaustiva de estudios de laboratorio, tomografía y ultrasonido abdominal."
  },
  {
    id: 6,
    src: "/images/doctor/WhatsApp Image 2026-09-01 at 5.11.44 PM.jpeg",
    title: "Tecnología e Instrumental de Última Generación",
    category: "Procedimientos",
    description: "Uso de material quirúrgico estéril y mallas sintéticas biocompatibles de alta resistencia."
  },
  {
    id: 7,
    src: "/images/doctor/WhatsApp Image 2026-09-01 at 5.11.44 PM (1).jpeg",
    title: "Ambiente Clínico Seguro e Higiénico",
    category: "Instalaciones",
    description: "Instalaciones modernas que garantizan el cumplimiento de normativas de salud COFEPRIS."
  },
  {
    id: 8,
    src: "/images/doctor/WhatsApp Image 2026-09-01 at 5.11.44 PM (2).jpeg",
    title: "Compromiso y Humanismo Quirúrgico",
    category: "Valores Médicos",
    description: "Trato empático enfocado en minimizar el dolor y garantizar el confort del paciente."
  }
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  }, []);

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying || lightboxOpen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, lightboxOpen, nextSlide]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Decorative Blur Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30">
              <FaImages className="text-emerald-400" /> Galería de Práctica Clínica & Quirúrgica
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Galería Fotográfica del Dr. Edgar Grageda
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed font-medium">
              Conoce las instalaciones, el equipamiento de quirófano y la atención en consultorio del Dr. Edgar Grageda Flores en Puebla.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition border border-white/10 flex items-center gap-2"
              title={isAutoPlaying ? "Pausar carrusel automático" : "Reanudar carrusel automático"}
            >
              {isAutoPlaying ? <FaPause className="text-emerald-400" /> : <FaPlay className="text-emerald-400" />}
              <span className="hidden sm:inline">{isAutoPlaying ? "Pausar" : "Auto-reproducir"}</span>
            </button>
            
            <button
              onClick={() => openLightbox(currentIndex)}
              className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider transition shadow-lg flex items-center gap-2"
            >
              <FaExpand /> Ampliar Fotografía
            </button>
          </div>
        </div>

        {/* FEATURED MAIN CAROUSEL DISPLAY */}
        <div 
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] rounded-[2.5rem] overflow-hidden border-4 border-white/10 bg-slate-900 shadow-2xl group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Carousel Slide Overlay Info Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-auto max-w-2xl bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl text-white space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                {currentItem.category}
              </span>
              <span className="text-xs font-bold text-slate-400">
                {currentIndex + 1} / {galleryItems.length}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {currentItem.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium line-clamp-2">
              {currentItem.description}
            </p>
          </div>

          {/* Navigation Prev / Next Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-slate-900/70 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition shadow-lg hover:scale-110"
            aria-label="Fotografía anterior"
          >
            <FaChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-slate-900/70 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition shadow-lg hover:scale-110"
            aria-label="Fotografía siguiente"
          >
            <FaChevronRight size={18} />
          </button>

          {/* Indicator Dots */}
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            {galleryItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex 
                    ? "bg-emerald-400 w-7" 
                    : "bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Ir a foto ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* THUMBNAILS MASONRY GRID PREVIEW */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-emerald-400">
            Explora las {galleryItems.length} Fotografías Clínicas (Haz clic para ampliar)
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                  idx === currentIndex 
                    ? "border-emerald-400 scale-[1.03] shadow-lg shadow-emerald-500/20" 
                    : "border-white/10 hover:border-emerald-400/60 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-[10px] font-bold text-white line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/20 z-50"
              aria-label="Cerrar vista ampliada"
            >
              <FaTimes size={20} />
            </button>

            {/* Prev Button */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition border border-white/20 z-50 hover:scale-110"
              aria-label="Foto anterior"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev + 1) % galleryItems.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition border border-white/20 z-50 hover:scale-110"
              aria-label="Foto siguiente"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Lightbox Content Container */}
            <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-4">
              <div className="relative w-full aspect-[16/10] max-h-[75vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src={galleryItems[lightboxIndex].src}
                  alt={galleryItems[lightboxIndex].title}
                  fill
                  className="object-contain bg-black"
                />
              </div>

              {/* Lightbox Footer Caption */}
              <div className="text-center space-y-2 max-w-2xl">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30 inline-block">
                  {galleryItems[lightboxIndex].category} ({lightboxIndex + 1} / {galleryItems.length})
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  {galleryItems[lightboxIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {galleryItems[lightboxIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
