import { Github, Mail, Phone, MapPin, Globe, Code, Palette, BookOpen, Briefcase, FileSearch, GraduationCap, Users } from 'lucide-react';
import { SiTiktok, SiInstagram, SiFacebook, SiWhatsapp } from 'react-icons/si';
import imagePP from './assets/image4.jpeg';
import imagePP2 from './assets/image5.png';
import imagePP3 from './assets/image8.jpg';
import imageUEAEP from './assets/image6.webp';
import imageUEAP from './assets/image7.png';
import imageSTEA from './assets/image9.jpg';
import imageSTEA2 from './assets/image10.jpg';
import imageMuncipalidad from './assets/image11.png';
import imageMOP from './assets/image12.jpg';
import imageEMUVISP from './assets/image13.jpg';
import imageEMUVISP2 from './assets/image14.jpg';
export const navigation = [
  { name: 'Inicio', href: '#home' },
  { name: 'Acerca de mí', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
  // { name: 'Blog', href: '#blog' },
];

export const social = [
  { name: 'Instagram', icon: SiInstagram, href: 'https://www.instagram.com/deysyortizd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'Facebook', icon: SiFacebook, href: 'https://www.facebook.com/share/1Aga9nq5N2/?mibextid=wwXIfr' },
  { name: 'WhatsApp', icon: SiWhatsapp, href: 'https://wa.me/593992989953' },
  // { name: 'TikTok', icon: SiTiktok, href: 'https://www.tiktok.com/@deysy.es.pastaza?is_from_webapp=1&sender_device=pc' },
];

export const roles = [
  {
    id: '01',
    title: 'Ingeniera Civil',
    description: 'Ingeniera Civil con experiencia en el ámbito público, privado y no gubernamental, graduada en la Universidad Técnica de Ambato (2005).',
  },
  {
    id: '02',
    title: 'Magíster en Gestión y Logística del Transporte Multimodal',
    description: 'Egresada de la Universidad Central del Ecuador (2011).',
  },
  {
    id: '03',
    title: 'Máster en tráfico, Transportes y Seguridad Vial',
    description: 'Estudios en la Universidad a distancia de Madrid UDIMA (2018).',
  },
  {
    id: '04',
    title: 'Consultora Especializada en Desarrollo Sostenible Amazónico',
    description: 'Planificación y gestión de proyectos con enfoque en desarrollo sostenible y transporte multimodal en la Amazonía.',
  },
];

export const stats = [
  { label: 'Años de experiencia', value: '21' },
  { label: 'Años educando', value: '4' },
  { label: 'Proyectos realizados', value: '20+' },
];

export const skills = [
  { name: 'Servicios Profesionales', icon: Briefcase },
  { name: 'Consultorias Especializadas', icon: FileSearch },
  { name: 'Capacitaciones Virtuales/Presenciales', icon: GraduationCap },
  { name: 'Seminarios y Talleres', icon: Users },
];

export const projects = [
  {
    title: 'Gerente General EMUVISP-EP',
    description: 'EMPRESA PÚBLICA MUNICIPAL DE URBANIZACIÓN Y VIVIENDA DE INTERÉS SOCIAL ​ DEL CANTÓN PASTAZA.',
    highlights: ['EMUVISP-EP es una empresa pública municipal del cantón Pastaza dedicada a planificar, desarrollar y ejecutar proyectos de urbanización y viviendas de interés social.',
      'Su objetivo principal es facilitar el acceso a viviendas dignas y servicios básicos para familias de escasos recursos económicos, contribuyendo al crecimiento ordenado de la ciudad de Puyo y al mejoramiento de la calidad de vida de sus habitantes.',
    ],
    image: imageEMUVISP2,
    moreImages: [imageEMUVISP],
    tags: ['Empresa Pública'],
    link: '#',

  },
  {
    title: 'Gerente General',
    description: 'Empresa Pública Pastaza Progresa EP, Julio 2023 - Agosto 2024',
    highlights: [
      'Eficaz gestión de recursos humanos y materiales, permitió la generación de utilidades por primera vez en la empresa.',
      'Negociaciones y cierre de contratos a favor de la empresa.',
      'Diseño, elaboración y gestión del Proyecto de Transporte aéreo subsidiado para la Amazonia.',
      'Liderazgo estratégico y gestión operativa de la Empresa Pública Pastaza Progresa EP.',
      'Responsable de la planificación, ejecución y supervisión de proyectos de desarrollo provincial.'
    ],
    image: imagePP3,
    moreImages: [imagePP2],
    tags: ['Empresa Pública'],
    link: '#',
  },
  {
    title: 'Directora de Planificación y Proyectos',
    description: 'Empresa Púbilca UEA EP, Octubre 2022 - Junio 2023',
    highlights: [
      'Seguimiento y evaluación a la planificación estratégica y Plan de Negocios de la empresa.', 'Administración de convenios, proyectos y contratos.',
    ],
    image: imageUEAEP,
    moreImages: [imageUEAP],
    tags: ['Empresa Pública'],
    link: '#',
  },
  {
    title: 'Directora de Inversión Pública',
    description: 'Secretaría Técnica de la Amazonía, Diciembre 2021 - Marzo 2022',
    highlights: ['Coordinación, supervisión y autorización de proyectos de inversión postulados .', 'Desarrollo de herramientas metodológicas para la aprobación de proyectos. '],
    image: imageSTEA,
    moreImages: [imageSTEA2],
    tags: ['Empresa Pública'],
    link: '#',
  },
  {
    title: 'Directora de Obras Públicas',
    description: 'Gobierno Municipal del Cantón Pastaza, Agosto 2022 - Octubre 2022',
    highlights: ['Supervisión y ejecución estricta del Plan Operativo Anual de la dirección.', 'Coordinacion y supervision de contratistas y proveedores para el cumplimientos de los proyectos.', 'Gestión de trámites técnicos y administrativos con el BDE y STCTEA.'],
    image: imageMuncipalidad,
    moreImages: [],
    tags: ['Empresa Pública'],
    link: '#',
  },
  {
    title: 'Directora Administrativa',
    description: 'Gobierno Municipal del Cantón Pastaza, Enero 2020 - Marzo 2020',
    highlights: ['Coordinación y supervisión de los Planes de Trabajo de las Unidades administrativas, tales como: Compras Públicas, Talento Humano, TICs.', 'Gestión eficiente y optimización de los recursos humanos, tecnológicos  y materiales.', 'Reportes internos y externos a la alcaldía.'],
    image: imageMuncipalidad,
    moreImages: [],
    tags: ['Empresa Pública'],
    link: '#',
  },
  {
    title: 'Directora de Servicios Municipales y Sociales',
    description: 'Gobierno Municipal del Cantón Pastaza, Septiembre 2019 - Enero 2020',
    highlights: ['Dirección de programas sociales y servicios básicos para la ciudadanía, enfocada en la atención a grupos vulnerables y la mejora de la calidad de vida en el cantón.'],
    image: imageMuncipalidad,
    moreImages: [],
    tags: ['Empresa Pública'],
    link: '#',
  },
  {
    title: 'Administradora de Talleres Municipales',
    description: 'Gobierno Municipal del Cantón Pastaza, Mayo 2019- Septiembre 2019',
    highlights: ['Control y mantenimiento de la flota de maquinaria pesada y vehículos municipales, garantizando la operatividad de los servicios públicos de infraestructura y saneamiento.'],
    image: imageMuncipalidad,
    moreImages: [],
    tags: ['Empresa Pública'],
    link: '#',
  },
  {
    title: 'SUBSECRETARIA ZONAL 3 DEL MTOP',
    description: 'Ministerio de Transporte y Obras Públicas, Febrero 2015 - Marzo 2016',
    highlights: ['Representación ministerial y coordinación técnica en las provincias de la Zona 3. Gestión de la red vial estatal, puentes y proyectos de conectividad de gran escala.'],
    image: imageMOP,
    moreImages: [],
    tags: ['Empresa Pública'],
    link: '#',
  },
];

export const modalProjects = {
  consultoria: [
    {
      title: 'PLAN DE MOVILIDAD Y ESTUDIOS DE TRANSPORTE',
      entity: 'Gad Municipal de Huamboya, 2019',
    },
    {
      title: 'PLAN DE MOVILIDAD Y ESTUDIOS DE TRANSPORTE',
      entity: 'Gad Municipal de Guaranda, 2017',
    },
    {
      title: 'ESTUDIOS TÉCNICOS DE TRANSPORTE',
      entity: 'Operadoras de Transporte Público, 2017',
    },
  ],
  construccion: [
    {
      title: 'REGENERACIÓN URBANA DE SHELL',
      entity: 'Gobierno Municipal de Mera',
    },
    {
      title: 'CONSTRUCCIÓN DE CANCHAS DE CÉSPED SINTÉTICO',
      entity: 'Gobierno Provincial de Pastaza',
    },
    {
      title: 'CONSTRUCCIÓN DE VIVIENDAS',
      entity: 'Contratos privados',
    },
  ],
};

export const contactInfo = {
  location: 'Puyo, Pastaza, Ecuador',
  email: 'deysyortizd@gmail.com',
  address: 'Deysy Ortiz',
  description: 'Estoy disponible para consultas, propuestas y contrataciones.',
  phone: '+593 99 298 9953',
  whatsappUrl: 'https://wa.me/593992989953',
};

export const solucionesReales = [
  {
    category: 'Movilidad y Logística Amazónica',
    items: [
      'Estudios de Transporte, tránsito y seguridad vial.',
      'Diseños de Infraestructura Terrestre, Aérea y Fluvial (Vías, Pistas, Muelles).',
      'Planes y proyectos de Movilidad Sostenible y Segura.'
    ]
  },
  {
    category: 'Diseño y Gestión de Proyectos Sociales',
    items: [
      'Proyectos productivos, turísticos y agroindustriales.',
      'Proyectos educativos.',
      'Proyectos medioambientales y de desarrollo comunitario.'
    ]
  },
  {
    category: 'Financiamiento de Proyectos',
    items: [
      'Estructuración de proyectos con formatos STCTEA, BDE, BID, BM',
      'Gestión de financiamiento público y privado.'
    ]
  }
];

export const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    category: 'ejemplo1',
    title: ' texto de prueba ',
    date: 'julio 28, 2022',
    link: '#'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
    category: 'ejemplo2',
    title: ' texto de prueba ',
    date: 'julio 28, 2022',
    link: '#'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop',
    category: 'ejemplo3',
    title: ' texto de prueba ',
    date: 'julio 28, 2022',
    link: '#'
  }
];
