export interface Tool {
  id: number;
  name: string;
  description: string;
  users: string;
  purpose: string;
  image: string;
}

export const tools: Tool[] = [
  {
    id: 1,
    name: 'MidJourney',
    description: 'Explora nuevas formas de arte visual con esta potente herramienta de IA que transforma texto en imágenes sorprendentes y creativas.',
    users: '17.2M',
    purpose: 'Ideal para artistas, diseñadores y visionarios que buscan inspiración única.',
    image: 'https://images.unsplash.com/photo-1700516598140-c4d7a1316429?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'DALL·E',
    description: 'Genera ilustraciones y gráficos profesionales a partir de simples descripciones textuales, perfectas para proyectos creativos.',
    users: '20M',
    purpose: 'Diseñadores y creativos que buscan contenido visual de alta calidad.',
    image: 'https://images.unsplash.com/photo-1699894615708-5c28cf03d14c?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Canva AI',
    description: 'Crea presentaciones, imágenes y gráficos personalizados con asistencia de IA, optimizando tiempo y calidad.',
    users: '35M',
    purpose: 'Marketing y diseño gráfico accesible para principiantes y expertos.',
    image: 'https://images.unsplash.com/photo-1700408719376-b0f444b2f05c?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Stable Diffusion',
    description: 'Transforma tus ideas en imágenes detalladas con esta herramienta avanzada de generación visual por IA.',
    users: '18.5M',
    purpose: 'Creadores que necesitan imágenes de alta resolución en poco tiempo.',
    image: 'https://images.unsplash.com/photo-1699894615708-5c28cf03d14c?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Runway ML',
    description: 'Edita videos e imágenes fácilmente con herramientas impulsadas por IA, ideal para proyectos creativos.',
    users: '12M',
    purpose: 'Cineastas y creadores de contenido multimedia.',
    image: 'https://images.unsplash.com/photo-1700516598140-c4d7a1316429?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Figma AI',
    description: 'Optimiza tu diseño UI/UX con funciones impulsadas por IA que generan prototipos automáticamente.',
    users: '15M',
    purpose: 'Diseñadores de interfaces de usuario y experiencia de usuario.',
    image: 'https://images.unsplash.com/photo-1700408719376-b0f444b2f05c?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Artbreeder',
    description: 'Crea retratos, paisajes y arte conceptual modificando parámetros visuales con IA.',
    users: '9M',
    purpose: 'Artistas conceptuales y creadores de personajes.',
    image: 'https://images.unsplash.com/photo-1699894615708-5c28cf03d14c?q=80&w=2940&auto=format&fit=crop'
  },
    {
    id: 8,
    name: 'Artbreeder',
    description: 'Crea retratos, paisajes y arte conceptual modificando parámetros visuales con IA.',
    users: '900M',
    purpose: 'Artistas conceptuales y creadores de personajes.',
    image: 'https://images.unsplash.com/photo-1699894615708-5c28cf03d14c?q=80&w=2940&auto=format&fit=crop'
  }
];