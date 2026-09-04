import { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Edgar Grageda Flores",
  title: "Dr.",
  specialty: "Cirugía General",
  specialistTitle: "Cirujano General y Laparoscopista",
  subspecialty: "Cirugía Abdominal y Mínimamente Invasiva",
  cedula: "7878147",
  cedulaEspecialidad: "10649245",
  cofepris: "En trámite",
  phone: "2225984210",
  whatsapp: "2225984210",
  email: "contacto@dredgargrageda.com",
  address: "Hospital Puebla, Privada de las Ramblas #4, Consultorio 631, Col. Desarrollo Atlixcáyotl, C.P. 72197, Puebla, Puebla",
  locations: [
    {
      id: "consultorio-hospital-puebla",
      name: "Consultorio Hospital Puebla",
      address: "Hospital Puebla, Privada de las Ramblas #4, Consultorio 631, entre Vía Atlixcáyotl y Calle María Morelos y Pavón, Col. Desarrollo Atlixcáyotl, C.P. 72197, Puebla, Puebla",
      city: "Puebla, Puebla",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hospital+Puebla+Privada+de+las+Ramblas+4+Consultorio+631+Desarrollo+Atlixcayotl+Puebla",
      mapEmbedUrl: "https://maps.google.com/maps?q=Hospital+Puebla,+Privada+de+las+Ramblas+4,+Desarrollo+Atlixcayotl,+72197+Puebla,+Pue.&t=&z=16&ie=UTF8&iwloc=&output=embed"
    }
  ],
  city: "Puebla",
  state: "Puebla",
  country: "México",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hospital+Puebla+Privada+de+las+Ramblas+4+Consultorio+631+Desarrollo+Atlixcayotl+Puebla",
  consultationPrice: 900,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de Débito", "Tarjeta de Crédito", "12 Meses Sin Intereses (MSI)"],
  insurances: ["AXA Seguros", "GNP Seguros", "MetLife", "Monterrey New York Life", "Mapfre", "Seguros Banorte", "Inbursa", "Allianz"],
  schedule: "Lunes a Viernes de 09:00 a 19:00 hrs. Sábados de 09:00 a 12:00 hrs.",
  photo: "/images/doctor/dr-edgar-grageda.jpg",
  logo: "/images/logo/LOGO-02.png",
  bio: "Soy el Dr. Edgar Grageda Flores, especialista en Cirugía General egresado de la Benemérita Universidad Autónoma de Puebla. Con más de 10 años de experiencia, +5,500 pacientes atendidos y más de 1,000 cirugías realizadas, estoy dedicado a la atención integral de patologías digestivas, hernias de pared abdominal y urgencias quirúrgicas mediante cirugía laparoscópica mínimamente invasiva.",
  philosophy: "Ofrecer atención quirúrgica de alta calidad y precisión clínica en Puebla, priorizando técnicas laparoscópicas mínimamente invasivas para garantizar un dolor postoperatorio mínimo y una rápida recuperación.",
  experience: [
    {
      year: "2016 - Presente",
      title: "Cirujano General y Laparoscopista Titular",
      description: "Más de 10 años de experiencia especializada en Puebla con +5,500 pacientes atendidos y +1,000 cirugías laparoscópicas realizadas.",
    },
    {
      year: "2012 - 2016",
      title: "Residencia Médica en Cirugía General",
      description: "Formación de posgrado y entrenamiento quirúrgico intensivo en la Benemérita Universidad Autónoma de Puebla (BUAP).",
    }
  ],
  certifications: [
    {
      name: "Especialista Certificado (Reg. C17004017)",
      institution: "Consejo Mexicano de Cirugía General (CMCG)",
    },
    {
      name: "Miembro Activo",
      institution: "Asociación Mexicana de Cirugía General (AMCG)",
    }
  ],
  education: [
    {
      degree: "Médico Cirujano y Partero",
      institution: "Benemérita Universidad Autónoma de Puebla • Céd. Prof. 7878147 (BUAP)",
      year: "2012",
    },
    {
      degree: "Especialidad en Cirugía General",
      institution: "Benemérita Universidad Autónoma de Puebla • Céd. Esp. 10649245 (BUAP)",
      year: "2016",
    }
  ],
  testimonials: [
    {
      id: "t1",
      patientName: "Lic. Roberto Morales S.",
      rating: 5,
      text: "El Dr. Edgar Grageda me operó de una hernia inguinal por laparoscopía en Puebla. La cirugía fue excelente, al día siguiente ya caminaba sin dolor molesto. Un cirujano sumamente profesional y atento.",
      date: "Hace 3 semanas",
      sourceUrl: "https://www.facebook.com/dredgargrageda/?locale=es_LA"
    },
    {
      id: "t2",
      patientName: "María Elena Gutiérrez",
      rating: 5,
      text: "Acudí de urgencia por un dolor fuerte de vesícula. El Dr. Grageda me realizó la colecistectomía por mínima invasión y la atención fue de primera. Lo recomiendo ampliamente.",
      date: "Hace 1 mes",
      sourceUrl: "https://www.facebook.com/dredgargrageda/?locale=es_LA"
    }
  ]
};
