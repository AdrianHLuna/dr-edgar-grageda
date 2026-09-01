"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStethoscope, FaBriefcaseMedical, FaNotesMedical } from "react-icons/fa";

interface CardImageHeaderProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  category?: "service" | "disease" | "symptom";
}

export default function CardImageHeader({
  src,
  alt,
  aspectRatio = "aspect-video",
  category = "service"
}: CardImageHeaderProps) {
  const [imageError, setImageError] = useState(false);

  const getIcon = () => {
    switch (category) {
      case "service":
        return <FaBriefcaseMedical className="text-3xl text-emerald-400 opacity-80" />;
      case "disease":
        return <FaNotesMedical className="text-3xl text-teal-400 opacity-80" />;
      case "symptom":
        return <FaStethoscope className="text-3xl text-emerald-400 opacity-80" />;
      default:
        return <FaBriefcaseMedical className="text-3xl text-emerald-400 opacity-80" />;
    }
  };

  return (
    <div className={`w-full ${aspectRatio} relative overflow-hidden rounded-t-[2.5rem] bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0D253A] group-hover:shadow-lg transition-all duration-500`}>
      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          onError={() => setImageError(true)}
        />
      ) : null}

      {/* Styled Clinical Fallback Overlay when image loads or as structured overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent flex flex-col items-center justify-center p-4 text-center ${!imageError ? "opacity-30 group-hover:opacity-10 transition-opacity duration-500" : "opacity-100"}`}>
        {imageError && (
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-1">
              {getIcon()}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
              Ilustración Clínica Laparoscópica
            </span>
          </div>
        )}
      </div>

      {/* Subtle Glowing Gradient Line at bottom of image */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />
    </div>
  );
}
