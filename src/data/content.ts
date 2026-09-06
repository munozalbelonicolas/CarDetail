export const WHATSAPP_PHONE = '5491164265505';

export interface GoalItem {
  id: string;
  number: string;
  title: string;
  description: string;
  pack: string;
  packColor: 'diamante' | 'oro' | 'bronce';
}

export const GOALS: GoalItem[] = [
  {
    id: '01',
    number: '01',
    title: 'Que vuelva a parecer 0km',
    description: 'Ideal si querés una renovación completa y un acabado impecable.',
    pack: 'Pack Diamante',
    packColor: 'diamante'
  },
  {
    id: '02',
    number: '02',
    title: 'Recuperar el brillo',
    description: 'Para pinturas opacas o sin profundidad.',
    pack: 'Pack Oro',
    packColor: 'oro'
  },
  {
    id: '03',
    number: '03',
    title: 'Eliminar marcas y rayas',
    description: 'Para micro-rayas, hologramas y marcas de lavado.',
    pack: 'Pack Diamante',
    packColor: 'diamante'
  },
  {
    id: '04',
    number: '04',
    title: 'Tengo un auto nuevo',
    description: 'Protegelo antes de que aparezcan marcas o desgaste.',
    pack: 'Pack Diamante',
    packColor: 'diamante'
  },
  {
    id: '05',
    number: '05',
    title: 'Quiero vender mi auto',
    description: 'Dejalo impecable para valorizarlo y mostrarlo mejor.',
    pack: 'Pack Oro',
    packColor: 'oro'
  },
  {
    id: '06',
    number: '06',
    title: 'Quiero mantenerlo limpio',
    description: 'Ideal para mantenimiento y lavado completo.',
    pack: 'Pack Bronce',
    packColor: 'bronce'
  }
];

export interface PackItem {
  name: string;
  level: string;
  tagline: string;
  featured?: boolean;
  colorScheme: 'bronce' | 'oro' | 'diamante';
  features: { text: string; note?: string }[];
}

export const PACKS: PackItem[] = [
  {
    name: 'Lavado Bronce',
    level: 'Nivel 01',
    tagline: 'Mantenimiento básico para el día a día',
    colorScheme: 'bronce',
    features: [
      { text: 'Lavado exterior profundo' },
      { text: 'Limpieza y desengrase de llantas' },
      { text: 'Secado manual con microfibras' },
      { text: 'Brillo express y acabado de cubiertas' }
    ]
  },
  {
    name: 'Pack Oro',
    level: 'Nivel 02',
    tagline: 'Brillo y estética renovada',
    colorScheme: 'oro',
    features: [
      { text: 'Detallado profundo de interiores' },
      { text: 'Acondicionado y protección de plásticos' },
      { text: 'Detallado exhaustivo de llantas y pasos de rueda' },
      { text: 'Descontaminado mecánico y químico exterior' },
      { text: 'Abrillantado de carrocería', note: 'hasta 4 meses' },
      { text: 'Restauración y sellado de plásticos' }
    ]
  },
  {
    name: 'Pack Diamante',
    level: 'Nivel 03',
    tagline: 'Protección y corrección avanzada',
    featured: true,
    colorScheme: 'diamante',
    features: [
      { text: 'Detallado de interiores con desinfección' },
      { text: 'Protección UV en plásticos y cueros' },
      { text: 'Detallado exterior minucioso' },
      { text: 'Corrección de pintura en 2 pasos (corte y refino)' },
      { text: 'Coating Cerámico Flash Gyeon', note: 'hasta 10 años' },
      { text: 'Sellado cerámico en plásticos exteriores' }
    ]
  }
];

export const SPECIALISTS = [
  {
    name: 'Lucas Serrano',
    role: 'Master en corrección de laca y pulido',
    rating: '4.9',
    image: '/assets/images/specialist-1.jpg'
  },
  {
    name: 'Marcos Ríos',
    role: 'Especialista en coating cerámico y nano-sellado',
    rating: '4.9',
    image: '/assets/images/specialist-2.jpg'
  },
  {
    name: 'Franco Villa',
    role: 'Master en instalación de PPF y polarizados',
    rating: '4.9',
    image: '/assets/images/specialist-3.jpg'
  }
];

export const FAQS = [
  {
    question: '¿Cuál es la diferencia entre pulido y coating cerámico?',
    answer: 'El pulido es la eliminación de defectos en la pintura (rayones, hologramas, swirl marks). El coating cerámico/cuarzo es una capa protectora nanométrica que se aplica después del pulido, que retiene el brillo, repele agua y protege de la suciedad por años.'
  },
  {
    question: '¿El pulido se va a salir después de un tiempo?',
    answer: 'El pulido es un proceso de corrección física sobre la capa transparente del barniz, no un recubrimiento temporal. Los resultados son permanentes sobre los defectos corregidos. Para conservarlo en ese estado, se recomienda protegerlo con coating cerámico o cera premium.'
  },
  {
    question: '¿Cuánto dura el coating cerámico?',
    answer: 'Dependiendo del producto y el mantenimiento, un coating cerámico profesional puede durar entre 1 y 10 años (como el Flash Gyeon). Proporcionamos instrucciones de cuidado y recomendaciones de lavado para maximizar la durabilidad.'
  },
  {
    question: '¿Se puede pulir un auto nuevo?',
    answer: 'Sí, de hecho es lo más recomendable. Los autos nuevos suelen venir con micro-marcas de fábrica, transporte o lavados de concesionaria. Un pulido de refino seguido de un sellado cerámico es la mejor protección desde el día uno.'
  },
  {
    question: '¿Cómo funciona el servicio a domicilio?',
    answer: 'Nos acercamos a tu domicilio con todo el equipamiento profesional necesario. Solo requerimos acceso a una toma de agua, un enchufe eléctrico y un espacio techado o con sombra para trabajar de forma óptima.'
  },
  {
    question: '¿Cuánto tiempo demora el servicio?',
    answer: 'Depende del servicio contratado: un lavado detailing toma entre 2 y 4 horas; un pulido completo con coating cerámico puede llevar de 6 a 10 horas (pudiendo dividirse en dos jornadas si fuera necesario). Te damos el tiempo exacto al coordinar.'
  }
];
