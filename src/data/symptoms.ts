import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "dolor-de-vesicula-biliar",
    slug: "dolor-de-vesicula-biliar",
    name: "Dolor de Vesícula Biliar (Cólico Biliar)",
    description: "Dolor intenso, sordo u opresivo en el cuadrante superior derecho del abdomen o boca del estómago que se desencadena tras comer alimentos grasos.",
    causes: [
      "Obstrucción del conducto cístico por cálculos (piedras) en la vesícula",
      "Inflamación aguda o crónica de la pared vesicular (colecistitis)",
      "Espasmo muscular de la vesícula biliar al intentar expulsar la bilis"
    ],
    whyConsult: "Un dolor de vesícula biliar repetitivo o intenso no debe tratarse solo con analgésicos o remedios caseros. Requiere un ultrasonido hepático y valoración por el cirujano general para planear la colecistectomía laparoscópica antes de que ocurra una pancreatitis biliar o piocolecisto.",
    relatedConditions: ["colelitiasis-patologia-vesicula-biliar", "pancreatitis-aguda"],
    image: "/images/sintomas/dolor-vesicula.jpg",
    seo: {
      title: "Dolor de Vesícula y Cólico Biliar en Puebla | Dr. Edgar Grageda",
      description: "Evaluación médica especializada para dolor de vesícula en Puebla. Diagnóstico por ultrasonido y cirugía laparoscópica por especialista.",
      keywords: ["dolor de vesicula puebla", "colico biliar tratamiento", "dolor despues de comer grasa", "cirujano vesicula atlixcayotl"]
    }
  },
  {
    id: "dolor-abdominal-agudo-apendicitis",
    slug: "dolor-abdominal-agudo-apendicitis",
    name: "Dolor Abdominal Agudo por Apendicitis",
    description: "Dolor repentino que inicia alrededor del ombligo y se mueve progresivamente hacia el costado inferior derecho del abdomen, volviéndose muy punzante.",
    causes: [
      "Inflamación e infección aguda del apéndice cecal por fecalito o hiperplasia linfoidea",
      "Proceso infeccioso intraabdominal incipiente"
    ],
    whyConsult: "El dolor de apendicitis se intensifica rápidamente en 24 a 36 horas. Si no se opera a tiempo, el apéndice puede perforarse y causar peritonitis. Se requiere acudir de inmediato a valoración quirúrgica de urgencia.",
    relatedConditions: ["apendicitis-aguda"],
    image: "/images/sintomas/dolor-abdominal.jpg",
    seo: {
      title: "Dolor Abdominal Agudo por Apendicitis | Dr. Edgar Grageda",
      description: "Diagnóstico y cirugía de urgencia para dolor en fosa ilíaca derecha y apendicitis en Puebla. Atención quirúrgica 24/7.",
      keywords: ["dolor apendicitis puebla", "dolor ombligo lado derecho", "cirujano apendicitis urgencias", "apendicectomia laparoscopica"]
    }
  },
  {
    id: "dolor-abdominal-gastritis-ulcera",
    slug: "dolor-abdominal-gastritis-ulcera",
    name: "Dolor Abdominal por Gastritis y Úlcera Péptica",
    description: "Sensación de ardor, quemazón o vacío doloroso en la boca del estómago (epigastrio) que empeora en ayunas o con alimentos irritantes.",
    causes: [
      "Erosión de la mucosa gástrica por secreción excesiva de ácido clorhídrico",
      "Infección digestiva por Helicobacter pylori",
      "Consumo continuado de antiinflamatorios, aspirina o bebidas irritantes"
    ],
    whyConsult: "La gastritis severa o úlcera péptica desatendida puede sangrar o perforarse hacia la cavidad abdominal. Una valoración clínica por el especialista permite confirmar la causa y descartar complicaciones quirúrgicas.",
    relatedConditions: ["gastritis-ulcera-peptica"],
    image: "/images/sintomas/dolor-abdominal-gastristis.jpg",
    seo: {
      title: "Dolor Abdominal por Gastritis y Úlcera en Puebla | Dr. Edgar Grageda",
      description: "Tratamiento especializado para ardor en la boca del estómago y gastritis en Puebla. Evaluación integral por cirujano digestivo.",
      keywords: ["dolor gastritis puebla", "ardor boca del estomago", "ulcera gástrica tratamiento", "cirujano digestivo atlixcayotl"]
    }
  },
  {
    id: "inflamacion-abdominal-colitis",
    slug: "inflamacion-abdominal-colitis",
    name: "Inflamación Abdominal y Cólicos por Colitis",
    description: "Sensación de abdomen hinchado o distendido acompañada de retortijones, gases y cambios en el hábito de ir al baño (diarrea o estreñimiento).",
    causes: [
      "Espasmo e inflamación del colon por síndrome de intestino irritable",
      "Disbiosis de la microbiota bacteriana e intolerancia a alimentos procesados",
      "Estrés y tensión emocional acumulada"
    ],
    whyConsult: "La inflamación abdominal persistente puede confundirse con patologías quirúrgicas como hernias o cuadros biliares. El cirujano general descarta enfermedades orgánicas de mayor gravedad y establece el tratamiento adecuado.",
    relatedConditions: ["colitis-sindrome-intestino-irritable"],
    image: "/images/sintomas/inflamacion-abdominal.jpg",
    seo: {
      title: "Inflamación Abdominal y Colitis en Puebla | Dr. Edgar Grageda",
      description: "Diagnóstico especializado para distensión, gases y dolor por colitis en Puebla. Atención integral por médico cirujano.",
      keywords: ["inflamacion abdominal puebla", "colitis retortijones tratamiento", "distension abdominal cirujano", "digestivo puebla"]
    }
  },
  {
    id: "dolor-abultamiento-hernia",
    slug: "dolor-abultamiento-hernia",
    name: "Dolor y Abultamiento por Hernia Abdominal",
    description: "Salida de un bulto o bola en la ingle, el ombligo o la pared del abdomen que genera molestia o punzadas al levantarse o hacer esfuerzo.",
    causes: [
      "Protrusión de grasa o intestino a través de un orificio aponeurótico debilitado (hernia inguinal, umbilical, epigástrica o incisional)",
      "Pellizcamiento temporal del tejido atrapado durante la contracción muscular"
    ],
    whyConsult: "Toda hernia de pared abdominal tiende a crecer con el tiempo y nunca se cura sola. La valoración por el cirujano de hernias permite planear la reparación laparoscópica preventiva antes de que se incarcere.",
    relatedConditions: ["hernia-inguinal", "hernia-umbilical", "hernia-epigastrica", "hernia-incisional-eventracion"],
    image: "/images/sintomas/dolor-abultamiento.jpg",
    seo: {
      title: "Dolor y Bulto por Hernia Abdominal en Puebla | Dr. Edgar Grageda",
      description: "Evaluación de bultos y hernias en ombligo, ingle y abdomen en Puebla. Diagnóstico preciso por especialista en hernias.",
      keywords: ["bulto en la ingle puebla", "bola en el ombligo hernia", "dolor hernia abdominal", "cirujano de hernias atlixcayotl"]
    }
  },
  {
    id: "ardor-pecho-regurgitacion-reflujo",
    slug: "ardor-pecho-regurgitacion-reflujo",
    name: "Ardor en el Pecho y Regurgitación (Reflujo)",
    description: "Sensación de quemazón retroesternal que sube del estómago hacia la garganta, acompañada de sabor amargo o agrio en la boca.",
    causes: [
      "Incompetencia del esfínter esofágico inferior y hernia hiatal",
      "Retorno de ácido gástrico y bilis hacia la mucosa del esófago (ERGE)"
    ],
    whyConsult: "El reflujo crónico no tratado destruye la mucosa del esófago pudiendo causar esofagitis, estenosis o Esófago de Barrett. La evaluación quirúrgica determina si el paciente es candidato a funduplicatura laparoscópica.",
    relatedConditions: ["funduplicatura-laparoscopica-reflujo", "gastritis-ulcera-peptica"],
    image: "/images/sintomas/ardor-pecho.jpg",
    seo: {
      title: "Ardor en el Pecho y Reflujo Gástrico en Puebla | Dr. Edgar Grageda",
      description: "Evaluación y tratamiento para agrujeras, ardor de pecho y reflujo gástrico en Puebla. Cirugía de hernia hiatal por laparoscopía.",
      keywords: ["ardor en el pecho reflujo puebla", "agrujeras garganta tratamiento", "hernia hiatal cirujano", "funduplicatura laparoscopica"]
    }
  },
  {
    id: "bultos-bolas-subcutaneas-lipomas",
    slug: "bultos-bolas-subcutaneas-lipomas",
    name: "Presencia de Bultos o Bolas en la Piel (Lipomas y Quistes)",
    description: "Aparición de pequeñas masas o protuberancias móviles y suaves debajo de la piel en la espalda, brazos, cuello o abdomen.",
    causes: [
      "Acumulación encapsulada de tejido graso no maligno (lipoma subcutáneo)",
      "Obstrucción de folículos sebáceos con retención de queratina (quiste epidérmico)"
    ],
    whyConsult: "Los lipomas y quistes pueden crecer, infectarse o volverse dolorosos por presión de estructuras vecinas. La extirpación ambulatoria en consultorio resuelve el problema en 20 minutos con anestesia local.",
    relatedConditions: ["lipomas-tumores-tejidos-blandos"],
    image: "/images/sintomas/bultos-bolas.jpg",
    seo: {
      title: "Extirpación de Bolas en la Piel y Lipomas en Puebla | Dr. Edgar Grageda",
      description: "Diagnóstico y retiro de lipomas y quistes subcutáneos en Puebla. Procedimiento ambulatorio sin dolor en consultorio médico.",
      keywords: ["bolas en la piel quitar puebla", "lipomas extirpacion ambulatoria", "quiste sebaceo cirujano", "cirugia menor en consultorio puebla"]
    }
  },
  {
    id: "nauseas-vomito-intolerancia-grasas",
    slug: "nauseas-vomito-intolerancia-grasas",
    name: "Náuseas, Vómito e Intolerancia a Alimentos Grasos",
    description: "Sensación continua de asco, mareo digestivo y ganas de vomitar inmediatamente después de comer alimentos ricos en grasa o condimentos.",
    causes: [
      "Vaciado vesicular deficiente por cálculos en la vesícula (colelitiasis)",
      "Gastritis aguda o retardo en el vaciamiento gástrico",
      "Inflamación del páncreas o vía biliar"
    ],
    whyConsult: "La intolerancia marcada a los alimentos grasos asociada a náuseas es el síntoma clásico de disfunción vesicular. Un ultrasonido abdominal rápido en consulta permite confirmar la presencia de piedras.",
    relatedConditions: ["colelitiasis-patologia-vesicula-biliar", "gastritis-ulcera-peptica", "pancreatitis-aguda"],
    image: "/images/sintomas/nauseas-vomitos.jpg",
    seo: {
      title: "Náuseas e Intolerancia a Grasas en Puebla | Dr. Edgar Grageda",
      description: "Evaluación médica para náuseas y pesadez por comida grasa en Puebla. Diagnóstico de vesícula por cirujano especialista.",
      keywords: ["nauseas despues de comer grasa", "intolerancia a grasas vesicula", "vomito biliar tratamiento puebla", "cirujano digestivo atlixcayotl"]
    }
  }
];
