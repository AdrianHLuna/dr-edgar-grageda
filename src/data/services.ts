import { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "colecistectomia-laparoscopica-vesicula",
    slug: "colecistectomia-laparoscopica-vesicula",
    name: "Colecistectomía Laparoscópica (Cirugía de Vesícula)",
    description: "Extirpación quirúrgica de la vesícula biliar inflamada o con cálculos mediante técnica de mínima invasión a través de microincisiones.",
    longDescription: "La colecistectomía laparoscópica es el procedimiento de elección para el tratamiento definitivo de piedras en la vesícula (colelitiasis) y colecistitis. Utilizando una cámara de alta definición de 5 a 10 mm e instrumentos quirúrgicos especializados, se libera y retira la vesícula biliar de forma segura sin realizar cortes grandes en el abdomen.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "45 a 75 minutos",
    recoveryTime: "Estancia hospitalaria de 24 horas / Retorno laboral en 7 a 10 días",
    isPainful: false,
    benefits: [
      "Incisiones estéticas milimétricas (5 a 10 mm) casi imperceptibles",
      "Dolor postoperatorio reducido drásticamente comparado con cirugía abierta",
      "Alta hospitalaria en 24 horas",
      "Rápida incorporación a las actividades cotidianas y trabajo",
      "Prevención definitiva de complicaciones graves como pancreatitis biliar"
    ],
    postOpRecommendations: [
      "Dieta blanda baja en grasas y colecistoquinéticos durante las primeras 2 a 3 semanas",
      "Caminata suave progresiva desde las primeras 6 horas post-cirugía",
      "Curación diaria de heridas pequeñas y retiro de puntos en 7 a 10 días",
      "Evitar levantar objetos pesados mayores a 5 kg durante 3 semanas"
    ],
    priceRange: "Sujeto a valoración / Cobertura con Seguros Médicos por Reembolso",
    technicalSpecs: {
      "Técnica Utilizada": "Laparoscopía de 4 puertos (10mm umbilical + 3 de 5mm)",
      "Instrumental": "Cámara HD 30°, grapas de titanio o hem-o-lok para cístico y arteria",
      "Anestesia": "Anestesia General con intubación endotraqueal"
    },
    image: "/images/services/colecistectomia.webp",
    seo: {
      title: "Colecistectomía Laparoscópica en Puebla | Dr. Edgar Grageda",
      description: "Cirugía laparoscópica de vesícula en Puebla. Retiro seguro de piedras en la vesícula con cirujano especialista en mínima invasión.",
      keywords: ["colecistectomia laparoscopica puebla", "cirugia de vesicula minima invasion", "retirar vesicula puebla", "cirujano laparoscopista atlixcayotl"]
    }
  },
  {
    id: "plastia-inguinal-laparoscopica-malla",
    slug: "plastia-inguinal-laparoscopica-malla",
    name: "Plastía Inguinal Laparoscópica con Malla (TAPP / TEP)",
    description: "Reparación quirúrgica mínimamente invasiva de hernia inguinal colocando una malla de refuerzo sin tensión desde el interior del abdomen.",
    longDescription: "La hernia inguinal laparoscópica (técnica TAPP o TEP) permite visualizar el orificio miopectíneo completo y colocar una malla tridimensional de polipropileno de alta resistencia que cubre todos los sitios potenciales de herniación. Evita grandes cortes en la ingle, reduciendo al mínimo el riesgo de dolor crónico postoperatorio.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General o Bloqueo Espinal",
    duration: "60 a 90 minutos",
    recoveryTime: "Alta hospitalaria en 24 horas / Recuperación laboral en 5 a 7 días",
    isPainful: false,
    benefits: [
      "Sin cortes dolorosos en la región inguinal ni cicatrices prominentes",
      "Colocación de malla biocompatible libre de tensión",
      "Ideal para hernias bilaterales (ambas ingles en la misma sesión) o recidivantes",
      "Mínimo dolor postoperatorio con deambulación inmediata",
      "Tasa de reaparición (recidiva) menor al 1%"
    ],
    postOpRecommendations: [
      "Uso de suspensorio o prenda compresiva suave durante 1 semana si se requiere",
      "Evitar esfuerzo de carga pesada por 4 semanas",
      "Reincorporación a caminata habitual al 2do día post-quirúrgico"
    ],
    priceRange: "Acepta Seguros Médicos y Facilidad a 12 MSI",
    technicalSpecs: {
      "Abordaje": "Laparoscópico Transabdominal Preperitoneal (TAPP) o Total Extraperitoneal (TEP)",
      "Malla Utilizada": "Malla de Polipropileno macroporoso tridimensional autofijable / fijación sintética"
    },
    image: "/images/services/plastia-inguinal.webp",
    seo: {
      title: "Cirugía Laparoscópica de Hernia Inguinal en Puebla | Dr. Edgar Grageda",
      description: "Reparación de hernia inguinal por laparoscopía con malla en Puebla. Cirugía mínimamente invasiva TAPP con cirujano certificado.",
      keywords: ["hernia inguinal laparoscopica puebla", "plastica inguinal con malla", "cirujano hernia inguinal atlixcayotl", "cirugia minima invasion puebla"]
    }
  },
  {
    id: "apendicectomia-laparoscopica-urgencias",
    slug: "apendicectomia-laparoscopica-urgencias",
    name: "Apendicectomía Laparoscópica de Urgencia 24/7",
    description: "Extirpación de urgencia del apéndice inflamado o perforado mediante abordaje laparoscópico de rápida recuperación.",
    longDescription: "Ante un cuadro de apendicitis aguda, la apendicectomía laparoscópica permite diagnosticar, extirpar el apéndice inflamado y realizar un lavado peritoneal exhaustivo a través de 3 incisiones milimétricas, reduciendo dramáticamente las complicaciones infecciosas en comparación con la cirugía abierta.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "45 a 60 minutos",
    recoveryTime: "24 horas de hospitalización / Recuperación completa en 7 días",
    isPainful: false,
    benefits: [
      "Exploración completa y revisión de toda la cavidad abdominal",
      "Menor tasa de infección del sitio quirúrgico",
      "Recuperación del tránsito intestinal más rápida",
      "Cicatrices cosméticas mínimas en abdomen inferior",
      "Atención quirúrgica inmediata de urgencia las 24 horas"
    ],
    postOpRecommendations: [
      "Dieta progresiva según tolerancia intestinal",
      "Cuidado diario de las 3 pequeñas heridas quirúrgicas",
      "Cumplir esquema antibiótico profiláctico o terapéutico agendado"
    ],
    priceRange: "Atención de Urgencia / Cobro con Seguros de Gastos Médicos",
    technicalSpecs: {
      "Técnica": "Apendicectomía laparoscópica de 3 puertos (10mm umbilical, 5mm suprapúbico e ilíaco)",
      "Ligadura": "Endoloop / Clips de polímero Hem-o-lok en la base apendicular"
    },
    image: "/images/services/apendicectomia.webp",
    seo: {
      title: "Apendicectomía Laparoscópica de Urgencia en Puebla | Dr. Edgar Grageda",
      description: "Cirugía de apendicitis aguda de urgencia en Puebla. Atención rápida 24/7 y apendicectomía laparoscópica por especialista.",
      keywords: ["apendicectomia laparoscopica puebla", "cirugia apendicitis urgencias", "operacion apendice puebla", "cirujano general urgencias 24/7"]
    }
  },
  {
    id: "plastia-umbilical-epigastrica",
    slug: "plastia-umbilical-epigastrica",
    name: "Plastía Umbilical y Epigástrica con Malla",
    description: "Reparación quirúrgica de hernias umbilicales y del abdomen superior reforzada con malla sintética biocompatible.",
    longDescription: "La corrección de hernias umbilicales y epigástricas mediante técnica laparoscópica o abierta libre de tensión consiste en reducir la grasa o viscera sobresaliente y reforzar el defecto aponeurótico con una malla quirúrgica de alta durabilidad, devolviendo la firmeza original a la pared abdominal.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General o Regional",
    duration: "45 a 75 minutos",
    recoveryTime: "24 horas de estancia / Actividad normal en 5 días",
    isPainful: false,
    benefits: [
      "Reforzamiento permanente del anillo umbilical debilitado",
      "Malla libre de tensión que minimiza el dolor al estirarse o toser",
      "Preservación y reconstrucción estética de la forma natural del ombligo",
      "Excelente resultado funcional y estético"
    ],
    postOpRecommendations: [
      "Evitar esfuerzo físico pesado por 4 semanas",
      "Mantener limpia y seca la región umbilical",
      "Uso de faja abdominal de contención suave durante 2 semanas si se indica"
    ],
    priceRange: "Sujeto a valoración / MSI disponibles",
    technicalSpecs: {
      "Malla": "Malla bicapa intraperitoneal de polipropileno con barrera antiadherente de colágeno/PTFE",
      "Fijación": "Tackers absorbibles o puntos transfictivos de monofilamento"
    },
    image: "/images/services/plastia-umbilical.webp",
    seo: {
      title: "Cirugía de Hernia Umbilical en Puebla | Dr. Edgar Grageda",
      description: "Plastía umbilical con malla en Puebla. Reparación de hernia en ombligo por laparoscopía con cirujano certificado.",
      keywords: ["plastica umbilical puebla", "hernia umbilical con malla", "cirugia hernia epigastrica", "cirujano de hernias puebla"]
    }
  },
  {
    id: "reconstruccion-hernia-incisional-eventracion",
    slug: "reconstruccion-hernia-incisional-eventracion",
    name: "Reconstrucción de Hernia Incisional (Eventración)",
    description: "Tratamiento quirúrgico complejo para reparar hernias formadas en cicatrices de operaciones previas.",
    longDescription: "La reconstrucción de la pared abdominal en hernias incisionales (eventraciones) se realiza mediante laparoscopía o técnicas de separación de componentes musculares. Permite liberar las adherencias intestinales a la cicatriz antigua y colocar una malla de gran extensión para cerrar el defecto y restaurar la dinámica muscular del tronco.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "90 a 180 minutos",
    recoveryTime: "2 a 3 días de hospitalización / Recuperación progresiva en 2 a 3 semanas",
    isPainful: false,
    benefits: [
      "Restauración completa de la cinemática de la pared abdominal",
      "Abordaje laparoscópico que evita abrir de nuevo la cicatriz enferma",
      "Colocación de mallas gigantes antiadherentes con cobertura amplia",
      "Reducción del dolor de espalda secundario al fallo de pared"
    ],
    postOpRecommendations: [
      "Uso de faja abdominal graduada por 4 a 6 semanas",
      "Fisioterapia respiratoria y deambulación asistida temprana",
      "Cuidado riguroso de drens o incisiones"
    ],
    priceRange: "Cubierto por Seguros de Gastos Médicos Mayores",
    technicalSpecs: {
      "Técnica": "Laparoscopía IPOM (Intraperitoneal Onlay Mesh) o Abordaje Rives-Stoppa / TAR",
      "Material": "Malla compuesta antiadherente de gran superficie"
    },
    image: "/images/services/hernia-incisional-cirugia.webp",
    seo: {
      title: "Reconstrucción de Hernia Incisional en Puebla | Dr. Edgar Grageda",
      description: "Cirugía de hernia sobre cicatriz previa en Puebla. Reparación laparoscópica de eventración con malla por especialista.",
      keywords: ["hernia incisional cirugia puebla", "eventracion laparoscopica", "reconstruccion pared abdominal puebla", "malla ipom cirujano"]
    }
  },
  {
    id: "extirpacion-ambulatoria-lipomas-quistes",
    slug: "extirpacion-ambulatoria-lipomas-quistes",
    name: "Extirpación Ambulatoria de Lipomas y Quistes",
    description: "Procedimiento menor en consultorio o quirófano ambulatorio para remover bultos de grasa, lipomas y quistes epidérmicos debajo de la piel.",
    longDescription: "La resección de lipomas y quistes sebáceos es un procedimiento rápido y seguro que se realiza bajo anestesia local en consultorio equipado o quirófano ambulatorio. Consiste en la disección meticulosa de la cápsula completa de la lesión para evitar que vuelva a salir, cerrada con sutura intradérmica cosmética.",
    type: "consultorio",
    anesthesiaType: "Anestesia Local",
    duration: "20 a 40 minutos",
    recoveryTime: "Procedimiento ambulatorio sin hospitalización / Vida normal de inmediato",
    isPainful: false,
    benefits: [
      "Realizado cómodamente en consultorio con anestesia local",
      "Sin necesidad de hospitalización ni tiempos largos de espera",
      "Cierre con sutura plástica intradérmica para cicatriz mínima",
      "Estudio de patología incluido para certeza de benignidad"
    ],
    postOpRecommendations: [
      "Mantener vendaje seco por 48 horas",
      "Aseo diario con agua y jabón neutro",
      "Retiro de puntos cosméticos en 7 a 10 días"
    ],
    priceRange: "Consulta de costo accesible en consultorio / Pagos en Efectivo o Tarjeta",
    technicalSpecs: {
      "Anestesia": "Infiltración local con Lidocaína al 2% con/sin epinefrina",
      "Sutura": "Sutura subscuticular monofilamento absorbible o nylon cosmético 4-0/5-0"
    },
    image: "/images/services/extirpacion-lipomas.webp",
    seo: {
      title: "Quitar Lipomas y Quistes en Puebla | Dr. Edgar Grageda",
      description: "Extirpación ambulatoria de lipomas y quistes sebáceos en Puebla. Procedimiento con anestesia local en consultorio por cirujano.",
      keywords: ["quitar lipomas puebla", "extirpacion quiste sebaceo", "cirugia ambulatoria bultos piel", "cirujano general consultorio puebla"]
    }
  },
  {
    id: "funduplicatura-laparoscopica-reflujo",
    slug: "funduplicatura-laparoscopica-reflujo",
    name: "Funduplicatura Laparoscópica (Reflujo y Hernia Hiatal)",
    description: "Cirugía mínimamente invasiva para la corrección definitiva de la hernia hiatal y la enfermedad por reflujo gastroesofágico (ERGE).",
    longDescription: "La funduplicatura laparoscópica (tipo Nissen o Toupet) repara el hiato diafragmático agrandado y confecciona una válvula con el fondo gástrico alrededor del esófago distal, impidiendo mecánicamente el regreso de ácido gástrico hacia la garganta y curando los síntomas de ardor y regurgitación.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "90 a 120 minutos",
    recoveryTime: "24 a 48 horas de hospitalización / Dieta blanda adaptativa en 2 semanas",
    isPainful: false,
    benefits: [
      "Eliminación definitiva del ardor nocturno y la regurgitación ácida",
      "Suspensión permanente del uso continuo de medicamentos antidescargas",
      "Cierre seguro del defecto del hiato diafragmático",
      "Procedimiento laparoscópico de rápida recuperación"
    ],
    postOpRecommendations: [
      "Dieta licuada/blanda progresiva según esquema nutricional post-funduplicatura por 2 semanas",
      "Masticación lenta y pausada de alimentos",
      "Evitar bebidas carbonatadas y refrescos durante 1 mes"
    ],
    priceRange: "Cubierto por Seguros de Gastos Médicos Mayores",
    technicalSpecs: {
      "Abordaje": "Laparoscópico 5 puertos",
      "Confección": "Hiatoplastía con puntos en X de poliéster + Funduplicatura Nissen 360° floja o Toupet 270°"
    },
    image: "/images/services/funduplicatura.webp",
    seo: {
      title: "Cirugía de Reflujo y Hernia Hiatal en Puebla | Dr. Edgar Grageda",
      description: "Funduplicatura laparoscópica para reflujo gástrico y hernia hiatal en Puebla. Cura definitiva por cirujano especialista en laparoscopía.",
      keywords: ["funduplicatura laparoscopica puebla", "cirugia de reflujo gastroesofagico", "hernia hiatal operacion puebla", "cirujano digestivo atlixcayotl"]
    }
  },
  {
    id: "laparoscopia-diagnostica-exploradora",
    slug: "laparoscopia-diagnostica-exploradora",
    name: "Laparoscopía Diagnóstica y Exploradora Abdominal",
    description: "Evaluación visual directa de la cavidad abdominal mediante cámara laparoscópica para el diagnóstico de dolor abdominal complejo de causa no determinada.",
    longDescription: "Cuando los estudios de ultrasonido o tomografía no son conclusivos en casos de dolor abdominal persistente, masa de origen incierto o sospecha de patología ginecológica-digestiva concomitante, la laparoscopía exploradora permite visualizar directamente los órganos intraabdominales y tomar biopsias o resolver el problema en el mismo acto.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "45 a 60 minutos",
    recoveryTime: "24 horas de observación hospitalaria",
    isPainful: false,
    benefits: [
      "Visualización directa en alta definición de hígado, intestino, apéndice y pelvis",
      "Capacidad de convertir la exploración en tratamiento resolutivo inmediato",
      "Incisiones milimétricas de 5 mm",
      "Diagnóstico certero en casos complejos"
    ],
    postOpRecommendations: [
      "Reposo relativo por 3 a 5 días",
      "Seguimiento de resultados de histopatología si se tomaron biopsias",
      "Revisión en consultorio en 7 días"
    ],
    priceRange: "Acepta Seguros Médicos por Reembolso",
    technicalSpecs: {
      "Óptica": "Toracoscopio/Laparoscopio HD de 5mm 30°",
      "Neumoperitoneo": "Insuflación controlada de CO2 a 12 mmHg"
    },
    image: "/images/services/laparoscopia-diagnostica.webp",
    seo: {
      title: "Laparoscopía Diagnóstica en Puebla | Dr. Edgar Grageda",
      description: "Exploración laparoscópica de cavidad abdominal en Puebla. Diagnóstico certero para dolor abdominal oscuro por cirujano especialista.",
      keywords: ["laparoscopia diagnostica puebla", "exploracion abdominal minima invasion", "cirujano laparoscopista puebla", "dolor abdominal oscuro"]
    }
  }
];
