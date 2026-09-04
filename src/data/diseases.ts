import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "hernia-inguinal",
    slug: "hernia-inguinal",
    name: "Hernia Inguinal",
    technicalName: "Hernia Inguinal Directa / Indirecta",
    description: "Protrusión de tejido intraabdominal o asa de intestino a través de un defecto o debilidad en el conducto inguinal de la pared abdominal inferior.",
    symptoms: [
      "Abultamiento visible en la ingle o escroto que aumenta al toser, levantarse o hacer esfuerzo",
      "Sensación de pesadez, ardor o malestar constante en la región inguinal",
      "Dolor agudo punzante al realizar actividad física, cargar objetos pesados o permanecer de pie",
      "Dificultad o dolor local al agacharse o caminar trayectos largos"
    ],
    causes: [
      "Debilidad congénita del anillo inguinal o del fascia transversalis",
      "Aumento crónico de la presión intraabdominal por esfuerzo físico, tos persistente o estreñimiento",
      "Degeneración progresiva del colágeno y tejidos de sostén con la edad"
    ],
    riskFactors: [
      "Sexo masculino (incidencia significativamente mayor)",
      "Antecedentes familiares directos de hernias inguinales",
      "Trabajos de carga pesada, tabaquismo crónico y sobrepeso"
    ],
    mexicoStats: "La hernioplastía inguinal es uno de los procedimientos quirúrgicos más frecuentes en cirugía general en México.",
    complications: [
      "Encarcelamiento herniario (imposibilidad de reintroducir el contenido al abdomen)",
      "Estrangulamiento herniario con isquemia y necrosis intestinal (emergencia quirúrgica)",
      "Obstrucción intestinal mecánica secundaria"
    ],
    treatments: [
      "Plastía inguinal laparoscópica de mínima invasión (TAPP / TEP) con colocación de malla de polipropileno",
      "Reparación quirúrgica libre de tensión mediante malla anatómica de última generación",
      "Reducción herniaria asistida y reforzamiento del plano aponeurótico"
    ],
    faqs: [
      {
        question: "¿Una hernia inguinal se puede curar con medicamentos o fajas?",
        answer: "No. Las hernias anatómicas de la pared abdominal son defectos físicos del tejido que únicamente se corrigen mediante intervención quirúrgica. Las fajas solo enmascaran el problema y pueden debilitar más la pared."
      },
      {
        question: "¿Qué ventajas ofrece la cirugía laparoscópica de hernia inguinal?",
        answer: "Permite reparar el defecto desde el interior mediante incisiones milimétricas, reduciendo sustancialmente el dolor postoperatorio, acortando la recuperación a pocos días y minimizando el riesgo de recaída."
      }
    ],
    image: "/enfermedades/hernia-inguinal.jpg",
    seo: {
      title: "Cirugía de Hernia Inguinal en Puebla | Dr. Edgar Grageda",
      description: "Especialista en reparación de hernia inguinal por laparoscopía con malla en Puebla. Cirugía de mínima invasión y rápida recuperación.",
      keywords: ["hernia inguinal puebla", "cirujano hernia inguinal atlixcayotl", "operacion hernia laparoscopica puebla", "malla inguinal cirujano"]
    }
  },
  {
    id: "hernia-umbilical",
    slug: "hernia-umbilical",
    name: "Hernia Umbilical",
    technicalName: "Hernia del Anillo Umbilical",
    description: "Defecto de la pared abdominal localizado en el ombligo que permite la salida de grasa o contenido intestinal, formando un abultamiento blando reducible o fijo.",
    symptoms: [
      "Abultamiento visible u ombligo saliente que incrementa de tamaño al pujar o estornudar",
      "Dolor, sensibilidad o molestias alrededor del área umbilical",
      "Cambios de coloración o dolor punzante local tras comidas copiosas o esfuerzo",
      "Sensación de tirantez dolorosa en la pared abdominal central"
    ],
    causes: [
      "Cierre incompleto o debilidad persistente del anillo umbilical",
      "Presión intraabdominal elevada por embarazos múltiples, ascitis o sobrepeso",
      "Cirugías previas con incisión laparoscópica umbilical"
    ],
    riskFactors: [
      "Embarazo y multiparidad",
      "Obesidad mórbida o incremento rápido de peso corporal",
      "Tos crónica y estreñimiento recurrente"
    ],
    mexicoStats: "Muy frecuente en adultos en México, requiriendo plastía umbilical con malla para prevenir complicaciones de encarcelamiento.",
    complications: [
      "Incarcelación y atrapamiento de epiplón o intestino",
      "Isquemia de piel umbilical y necrosis de tejido invaginado",
      "Peritonitis por perforación de asa atrapada"
    ],
    treatments: [
      "Plastía umbilical laparoscópica de mínima invasión con colocación de malla intraperitoneal",
      "Hernioplastía umbilical abierta sin tensión para defectos seleccionados",
      "Reconstrucción estética del complejo areolo-umbilical"
    ],
    faqs: [
      {
        question: "¿Cuándo es necesario colocar malla en una hernia umbilical?",
        answer: "Se recomienda el uso de malla en la gran mayoría de las hernias umbilicales en adultos (especialmente mayores a 1-2 cm) para reducir el riesgo de reaparición a menos del 1%."
      },
      {
        question: "¿Cuánto tiempo dura la recuperación tras la cirugía?",
        answer: "Con la técnica de mínima invasión, la mayoría de los pacientes regresan a sus actividades sedentarias o de oficina en 3 a 5 días, restringiendo cargas pesadas por 3 a 4 semanas."
      }
    ],
    image: "/enfermedades/hernia-umbilical.jpg",
    seo: {
      title: "Cirugía de Hernia Umbilical en Puebla | Dr. Edgar Grageda",
      description: "Tratamiento y reparación de hernia umbilical en Puebla. Cirugía laparoscópica con malla, atención experta en Angelópolis.",
      keywords: ["hernia umbilical puebla", "cirugia de hernia umbilical", "reparacion hernia ombligo puebla", "cirujano general atlixcayotl"]
    }
  },
  {
    id: "hernia-epigastrica",
    slug: "hernia-epigastrica",
    name: "Hernia Epigástrica",
    technicalName: "Hernia de la Línea Alba Epigástrica",
    description: "Protrusión de grasa preperitoneal o tejido abdominal a través de un pequeño defecto en la línea alba, ubicada entre el ombligo y el esternón.",
    symptoms: [
      "Bulto pequeño y duro localizado en la línea media del epigastrio (boca del estómago)",
      "Dolor sordo o punzante persistente al erguirse o realizar ejercicios abdominales",
      "Sensación de quemazón o molestia a la palpación directa",
      "Nivel variable de incomodidad digestiva asociada"
    ],
    causes: [
      "Fallo o dehiscencia en las fibras entrelazadas de la aponeurosis de la línea alba",
      "Tensión repetida del músculo recto abdominal por esfuerzo o deporte"
    ],
    riskFactors: [
      "Esfuerzo físico intenso y levantamiento continuo de cargas pesadas",
      "Sedentarismo combinado con episodios repentinos de gran esfuerzo abdominal",
      "Diástasis de rectos concomitante"
    ],
    mexicoStats: "Frecuentemente diagnosticada de forma fortuita o por dolor localizado en epigastrio confundido con gastritis.",
    complications: [
      "Estrangulamiento del lóbulo de grasa preperitoneal con dolor agudo e inflamación local",
      "Aumento paulatino del diámetro del defecto aponeurótico"
    ],
    treatments: [
      "Hernioplastía epigástrica laparoscópica con refuerzo sintético",
      "Reparación aponeurótica directa y colocación de malla de alta tecnología",
      "Evaluación y corrección conjunta de diástasis de rectos"
    ],
    faqs: [
      {
        question: "¿Por qué duele una hernia epigástrica si es pequeña?",
        answer: "El dolor suele ser intenso porque la grasa atrapada en el pequeño orificio aponeurótico sufre isquemia o pellizcamiento por la contracción muscular de los abdominales."
      }
    ],
    image: "/enfermedades/hernia-epigastrica.jpg",
    seo: {
      title: "Cirugía de Hernia Epigástrica en Puebla | Dr. Edgar Grageda",
      description: "Diagnóstico y cirugía laparoscópica para hernia epigástrica en Puebla. Reparación eficaz de la línea alba con cirujano especialista.",
      keywords: ["hernia epigastrica puebla", "bolita en boca del estomago", "cirugia linea alba puebla", "hernioplastia epigastrica"]
    }
  },
  {
    id: "hernia-incisional-eventracion",
    slug: "hernia-incisional-eventracion",
    name: "Hernia Incisional (Eventración)",
    technicalName: "Hernia Ventral Incisional Postquirúrgica",
    description: "Defecto o abertura en la pared abdominal que aparece en el sitio de una cicatriz quirúrgica previa, permitiendo la salida de vísceras abdominales.",
    symptoms: [
      "Deformidad o bulto prominente sobre o junto a una cicatriz de operación antigua",
      "Molestia o dolor que se intensifica hacia el final del día o tras estar de pie",
      "Transtornos del tránsito intestinal o episodios fluctuantes de distensión",
      "Sensación de pérdida de fuerza o sostén de la pared abdominal"
    ],
    causes: [
      "Falta de consolidación o mala cicatrización de la fascia muscular tras cirugía abdominal previa",
      "Infección previa del sitio quirúrgico, seromas o hematomas postoperatorios",
      "Tensión excesiva en los puntos de sutura durante la cirugía inicial"
    ],
    riskFactors: [
      "Diabetes mellitus no controlada y tabaquismo",
      "Uso crónico de esteroides o inmunosupresores",
      "Infección previa de la herida quirúrgica u obesidad"
    ],
    mexicoStats: "Afecta hasta al 15% de los pacientes sometidos a laparotomías previas, requiriendo reconstrucción de pared por especialista.",
    complications: [
      "Pérdida de domicilio abdominal en eventraciones gigantes",
      "Encarcelamiento u obstrucción intestinal recurrente",
      "Atrofia muscular e inestabilidad de la columna lumbar"
    ],
    treatments: [
      "Reconstrucción laparoscópica de pared abdominal (IPOM / TAR) con malla biosintética",
      "Plastía incisional de mínima invasión con separación de componentes muscular",
      "Cuidado integral del sitio quirúrgico y optimización metabólica previa"
    ],
    faqs: [
      {
        question: "¿Se puede volver a operar una hernia sobre una cicatriz viejita?",
        answer: "Sí. La cirugía laparoscópica moderna permite abordar la eventración por incisiones sanas alejadas de la cicatriz previa, colocando una malla que cubre ampliamente todo el defecto."
      }
    ],
    image: "/enfermedades/hernia-insicional.jpg",
    seo: {
      title: "Hernia Incisional y Reconstrucción de Pared en Puebla | Dr. Edgar Grageda",
      description: "Tratamiento de hernia en cicatriz previa (eventración) en Puebla. Cirugía laparoscópica con malla de alta definición.",
      keywords: ["hernia incisional puebla", "eventracion abdominal cirugia", "reconstruccion pared abdominal", "malla ventral puebla"]
    }
  },
  {
    id: "apendicitis-aguda",
    slug: "apendicitis-aguda",
    name: "Apendicitis Aguda",
    technicalName: "Apendicitis Aguda Flemosa / Gangrenosa / Perforada",
    description: "Inflamación aguda e Infección del apéndice cecal. Es la causa quirúrgica de urgencia más frecuente de dolor abdominal súbito en adultos.",
    symptoms: [
      "Dolor abdominal que inicia en la zona del ombligo y se desplaza hacia la fosa ilíaca derecha",
      "Náuseas, vómitos, anorexia (pérdida total del apetito) y fiebre leve a moderada",
      "Dolor punzante e intolerancia a la presión en el abdomen inferior derecho (signo de McBurney positivo)",
      "Malestar general severo, distensión e incapacidad para mantenerse erguido"
    ],
    causes: [
      "Obstrucción de la luz apendicular por fecolito (materia fecal calcificada)",
      "Hiperplasia de folículos linfoideos submucosos por procesos infecciosos previo",
      "Cuerpos extraños u parásitos cecales"
    ],
    riskFactors: [
      "Edad entre los 10 y 30 años (aunque puede presentarse a cualquier edad)",
      "Dieta baja en fibra y estreñimiento crónico"
    ],
    mexicoStats: "Constituye la principal causa de laparotomía/laparoscopía de urgencia en los servicios de cirugía general en México.",
    complications: [
      "Perforación apendicular con plastrón o absceso intraabdominal",
      "Peritonitis purulenta generalizada de alto riesgo",
      "Sepsis de origen abdominal y choque séptico"
    ],
    treatments: [
      "Apendicectomía laparoscópica de urgencia (cirugía por 3 microincisiones mínimamente invasiva)",
      "Lavado y drenaje de la cavidad peritoneal bajo laparoscopía en casos perforados",
      "Protocolo de antibioticoterapia parenteral y manejo postoperatorio agudo"
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo hay antes de que el apéndice se perfore?",
        answer: "La perforación apendicular puede ocurrir entre las 24 y 36 horas tras el inicio del dolor. Por ello, ante un dolor abdominal sospechoso se debe acudir de inmediato a valoración quirúrgica."
      },
      {
        question: "¿Qué ventajas ofrece la apendicectomía laparoscópica?",
        answer: "Permite explorar toda la cavidad abdominal, causa drásticamente menos dolor, deja cicatrices de 5 milímetros y permite el alta hospitalaria en 24 horas."
      }
    ],
    image: "/enfermedades/Apendicitis-Aguda.jpg",
    seo: {
      title: "Cirugía de Urgencia por Apendicitis Aguda en Puebla | Dr. Edgar Grageda",
      description: "Apendicectomía laparoscópica de urgencia en Puebla. Atención rápida 24/7 y cirugía mínimamente invasiva por especialista.",
      keywords: ["apendicitis aguda puebla", "cirujano apendicitis urgencias", "apendicectomia laparoscopica puebla", "dolor fosa iliaca derecha"]
    }
  },
  {
    id: "colelitiasis-patologia-vesicula-biliar",
    slug: "colelitiasis-patologia-vesicula-biliar",
    name: "Patología de la Vesícula Biliar y Colelitiasis",
    technicalName: "Colelitiasis / Colecistitis Aguda y Crónica Litiásica",
    description: "Presencia de cálculos (piedras) o lodo biliar en la vesícula que inflaman la pared vesicular y bloquean el drenaje de bilis hacia el intestino.",
    symptoms: [
      "Cólico biliar: dolor intenso en el abdomen superior derecho o boca del estómago que se irradia a la espalda o hombro",
      "Náuseas, vómitos e indigestión severa tras consumir alimentos grasos o irritantes (colecistoquinéticos)",
      "Fiebre, escalofríos e ictericia (coloración amarilla en ojos y piel) en colecistitis o coledocolitiasis",
      "Distensión abdominal intensa, pesadez y eructos frecuentes"
    ],
    causes: [
      "Desequilibrio químico en la bilis (exceso de colesterol o bilirrubina)",
      "Vaciado incompleto o lento de la vesícula biliar",
      "Cristalización progresiva de microcálculos en lodo biliar"
    ],
    riskFactors: [
      "Regla de las 4 Fs en medicina (Female, Forty, Fat, Fertile)",
      "Pérdida rápida de peso o ayunos prolongados",
      "Antecedentes familiares de cálculos biliares"
    ],
    mexicoStats: "La colecistitis por piedras en la vesícula es la principal causa de cirugía electiva y de urgencia en Puebla y todo México.",
    complications: [
      "Colecistitis gangrenosa o piocolecisto (vesícula llena de pus)",
      "Coledocolitiasis (migración de piedras a la vía biliar principal)",
      "Pancreatitis aguda de origen biliar (complicación grave)"
    ],
    treatments: [
      "Colecistectomía laparoscópica (extirpación segura de la vesícula por mínima invasión)",
      "Exploración de vía biliar o derivación en casos complejos",
      "Manejo de urgencia para colecistitis aguda y piocolecisto"
    ],
    faqs: [
      {
        question: "¿Se pueden disolver las piedras de la vesícula con remedios o medicamentos?",
        answer: "No. Los cálculos biliares formados no se disuelven de forma segura con medicamentos ni tés. Intentar expulsarlos puede provocar que una piedra tape el conducto del páncreas causando pancreatitis grave. La cirugía es el único tratamiento definitivo."
      },
      {
        question: "¿Cómo es la vida sin vesícula biliar?",
        answer: "Excelente. El hígado sigue produciendo bilis normalmente y la envía directo al intestino. Tras un breve periodo de adaptación alimenticia de 2 a 3 semanas, la digestión se normaliza por completo."
      }
    ],
    image: "/enfermedades/coleliatiasis.jpg",
    seo: {
      title: "Cirugía de Vesícula Biliar (Colecistectomía) en Puebla | Dr. Edgar Grageda",
      description: "Cirugía laparoscópica de vesícula en Puebla. Tratamiento para piedras en vesícula y colecistitis por especialista en mínima invasión.",
      keywords: ["colecistectomia laparoscopica puebla", "cirujano de vesicula puebla", "piedras en la vesicula tratamiento", "colico biliar urgenicas"]
    }
  },
  {
    id: "pancreatitis-aguda",
    slug: "pancreatitis-aguda",
    name: "Pancreatitis Aguda Biliar y Metabólica",
    technicalName: "Pancreatitis Aguda Edematosa Intersticial / Necrosante",
    description: "Inflamación súbita del páncreas desencadenada frecuentemente por la migración de un cálculo biliar que obstruye el conducto pancreático.",
    symptoms: [
      "Dolor agudo de intensidad extrema en cinturón en el abdomen alto que se irradia hacia la espalda",
      "Náuseas e incesante vómito biliar que no alivia el dolor",
      "Distensión abdominal severa, sensibilidad a la palpación y fiebre",
      "Taquicardia, deshidratación rápida y dificultad respiratoria"
    ],
    causes: [
      "Cálculos biliares pequeños (microcálculos) que pasan al colédoco distal (origen biliar 70%)",
      "Hipertriglicliceridemia severa o ingesta copiosa de alcohol",
      "Trauma abdominal o procedimientos endoscópicos previo (CPRE)"
    ],
    riskFactors: [
      "Presencia conocida de cálculos biliares no operados",
      "Niveles de triglicéridos en sangre mayores a 1000 mg/dL",
      "Consumo de bebidas alcohólicas de alto volumen"
    ],
    mexicoStats: "La pancreatitis de origen biliar es una de las complicaciones más serias de la colelitiasis no tratada en México.",
    complications: [
      "Necrosis pancreática infectada y pseudoquistes pancreáticos",
      "Síndrome de respuesta inflamatoria sistémica y falla multiorgánica",
      "Colecciones fluidas agudas peripancreáticas"
    ],
    treatments: [
      "Hospitalización e internamiento con rehidratación intravenosa intensiva y soporte metabólico",
      "Colecistectomía laparoscópica en la misma hospitalización una vez resuelta la fase aguda",
      "Nefro y pancreatoprotección, debridación laparoscópica o necrosectomía en casos indicados"
    ],
    faqs: [
      {
        question: "¿Por qué se debe operar la vesícula tras recuperarse de una pancreatitis biliar?",
        answer: "Porque si los cálculos biliares permanecen en la vesícula, el riesgo de sufrir un segundo episodio de pancreatitis (frecuentemente más grave) supera el 50% en los primeros meses."
      }
    ],
    image: "/enfermedades/pancreatitis-aguda.jpg",
    seo: {
      title: "Tratamiento de Pancreatitis Aguda en Puebla | Dr. Edgar Grageda",
      description: "Manejo médico y quirúrgico de pancreatitis aguda biliar en Puebla. Evaluación experta y colecistectomía por cirujano general.",
      keywords: ["pancreatitis aguda puebla", "pancreatitis biliar tratamiento", "cirujano pancreas vesicula puebla", "dolor en cinturon abdomen"]
    }
  },
  {
    id: "colitis-sindrome-intestino-irritable",
    slug: "colitis-sindrome-intestino-irritable",
    name: "Colitis y Síndrome de Intestino Irritable",
    technicalName: "Síndrome de Intestino Irritable / Colitis Funcional y Criptogénica",
    description: "Trastorno gastrointestinal inflamatorio o funcional caracterizado por alteración en la motilidad del colon, distensión y cambios en el hábito intestinal.",
    symptoms: [
      "Distensión y gas abdominal persistente (sensación de abdomen inflamado)",
      "Dolor o cólicos abdominales tipo retortijón que mejoran tras evacuar",
      "Alternancia entre episodios de diarrea y estreñimiento con moco",
      "Sensación de evacuación incompleta y pesadez posprandial"
    ],
    causes: [
      "Hipersensibilidad visceral y trastornos en el eje cerebro-intestino",
      "Disbiosis de la microbiota intestinal e inflamación de bajo grado",
      "Estrés emocional, ansiedad y consumo de alimentos irritantes o ricos en FODMAPs"
    ],
    riskFactors: [
      "Estrés laboral o personal crónico",
      "Antecedente de infecciones gastrointestinales bacterianas severas previa",
      "Dieta procesada baja en fibra dietética natural"
    ],
    mexicoStats: "Afecta a más del 20% de la población adulta en México, siendo motivo frecuente de consulta para descartar patología quirúrgica.",
    complications: [
      "Diverticulosis colónica secundaria por aumento de presión intraluminal",
      "Dermatitis perianal y hemorroides por alteración del tránsito",
      "Deterioro en la calidad de vida y restricciones nutricionales excesivas"
    ],
    treatments: [
      "Diagnóstico diferencial certero para descartar patologías quirúrgicas (apendicitis, diverticulitis o neoplasias)",
      "Plan terapéutico nutricional y modulación de microbiota digestiva",
      "Manejo farmacológico especializado no sistémico para regulación de motilidad"
    ],
    faqs: [
      {
        question: "¿Cómo saber si mi dolor es por colitis o por apendicitis/vesícula?",
        answer: "El dolor de colitis suele ser difuso, cambiante de lugar y mejora tras expulsar gases o evacuar. El dolor de vesícula o apendicitis es localizado, continuo, progresivo y no se quita al ir al baño. Requiere valoración médica."
      }
    ],
    image: "/enfermedades/sindrome-intestino-irritable.jpg",
    seo: {
      title: "Tratamiento de Colitis e Inflamación Abdominal en Puebla | Dr. Edgar Grageda",
      description: "Diagnóstico especializado para colitis y síndrome de intestino irritable en Puebla. Evaluación integral por especialista en aparato digestivo.",
      keywords: ["colitis tratamiento puebla", "inflamacion abdominal gastroenterologia", "dolor por colitis puebla", "cirujano general digestivo"]
    }
  },
  {
    id: "gastritis-ulcera-peptica",
    slug: "gastritis-ulcera-peptica",
    name: "Gastritis y Úlcera Péptica",
    technicalName: "Gastritis Erosiva / Úlcera Gástrica o Duodenal",
    description: "Inflamación o lesión erosiva de la mucosa del estómago o primera porción del intestino delgado producida por desequilibrio en el ácido gástrico.",
    symptoms: [
      "Ardor intenso o sensación de fuego en la boca del estómago (epigastralgia)",
      "Nausea, eructos ácidos y saciedad precoz al comer",
      "Sensación de vacío doloroso que empeora con el ayuno o irritantes",
      "Vómito oscuro (en borra de café) o heces negras (melena) en úlceras sangrantes"
    ],
    causes: [
      "Infección crónica por la bacteria Helicobacter pylori",
      "Uso frecuente de antiinflamatorios no esteroideos (AINES) o aspirina",
      "Consumo de alcohol, tabaquismo y estrés fisiológico severo"
    ],
    riskFactors: [
      "Infección digestiva no tratada por H. pylori",
      "Automedicación frecuente para dolores articulares o de cabeza",
      "Malos hábitos de alimentación y ayunos prolongados"
    ],
    mexicoStats: "Altísima prevalencia por patrones dietéticos y elevada tasa de infección por H. pylori en la población mexicana.",
    complications: [
      "Hemorragia digestiva alta por erosión de vasos en el lecho ulceroso",
      "Perforación gástrica o duodenal libre a cavidad (urgencia quirúrgica)",
      "Estenosis pilórica cicatricial con obstrucción al vaciamiento gástrico"
    ],
    treatments: [
      "Evaluación clínica y protocolo para erradicación de Helicobacter pylori",
      "Manejo protector de la mucosa y bloqueo de secreción ácida",
      "Cierre quirúrgico laparoscópico (parche de Omentoplastía) en perforación ulcerosa"
    ],
    faqs: [
      {
        question: "¿Una úlcera en el estómago se puede perforar?",
        answer: "Sí. Si una úlcera profunda no recibe tratamiento, puede corroer toda la pared del estómago o duodeno produciendo una perforación. Esto causa dolor súbito insoportable y requiere cirugía de urgencia."
      }
    ],
    image: "/enfermedades/ulcera-peptica.jpg",
    seo: {
      title: "Gastritis y Úlcera Péptica en Puebla | Dr. Edgar Grageda",
      description: "Diagnóstico y tratamiento para gastritis aguda y úlceras digestivas en Puebla. Manejo médico y quirúrgico por especialista.",
      keywords: ["gastritis tratamiento puebla", "ulcera peptica cirujano", "ardor boca del estomago puebla", "helicobacter pylori tratamiento"]
    }
  },
  {
    id: "lipomas-tumores-tejidos-blandos",
    slug: "lipomas-tumores-tejidos-blandos",
    name: "Lipomas y Tumores de Tejidos Blandos",
    technicalName: "Lipomatosis Subcutánea / Quistes Epidérmicos y Neoplasias de Tejidos Blandos",
    description: "Crecimiento benigno de células de tejido adiposo (grasa) o quistes foliculares debajo de la piel que forman bultos móviles suaves en diversas partes del cuerpo.",
    symptoms: [
      "Bulto redondeado, blando o gomoso debajo de la piel que se mueve fácilmente al presionarlo",
      "Crecimiento lento e indoloro en espalda, brazos, cuello, abdomen o muslos",
      "Dolor o molestia cuando el lipoma comprime un nervio o vaso sanguíneo cercano",
      "Enrojecimiento, inflamación o drenaje en quistes epidérmicos infectados"
    ],
    causes: [
      "Proliferación no maligna de adipocitos encapsulados",
      "Obstrucción de glándulas sebáceas en quistes epidérmicos",
      "Factores genéticos y predisposición a lipomatosis múltiple"
    ],
    riskFactors: [
      "Edad entre 30 y 60 años",
      "Antecedentes familiares de lipomas múltiples o quistes sebáceos"
    ],
    mexicoStats: "Frecuentísima causa de consulta menor y resección quirúrgica ambulatoria en consultorio de cirugía general.",
    complications: [
      "Infección, formación de absceso y rotura subcutánea en quistes",
      "Compresión nerviosa local con parestesias",
      "Transformación liposarcomatosa (extremadamente rara pero requiere biopsia ante rápido crecimiento)"
    ],
    treatments: [
      "Resección quirúrgica ambulatoria con anestesia local (exéresis completa de la cápsula)",
      "Extirpación estética con incisiones ocultas y sutura intradérmica",
      "Estudio histopatológico de confirmación de toda pieza extirpada"
    ],
    faqs: [
      {
        question: "¿Los lipomas se pueden quitar en el consultorio?",
        answer: "Sí. La mayoría de los lipomas y quistes sebáceos de tamaño pequeño a moderado se extirpan mediante un procedimiento ambulatorio sencillo bajo anestesia local en el consultorio, permitiendo regresar a casa de inmediato."
      }
    ],
    image: "/enfermedades/lipomas.jpg",
    seo: {
      title: "Eliminación de Lipomas y Quistes en Puebla | Dr. Edgar Grageda",
      description: "Cirugía ambulatoria para extirpación de lipomas y quistes sebáceos en Puebla. Incisión estética y retiro completo con anestesia local.",
      keywords: ["quitar lipomas puebla", "cirugia quistes sebaceos", "extirpacion de bolitas piel", "cirujano ambulatorio atlixcayotl"]
    }
  }
];
