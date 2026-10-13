// ─────────────────────────────────────────────────────────────
// Todo el contenido editable de la página vive aquí.
// Los textos entre [corchetes] son datos pendientes de confirmar con Diego
// (se muestran en cursiva para no olvidarlos).
// ─────────────────────────────────────────────────────────────

export type ThemeId = 'marino-champan' | 'cielo-menta';

/** Tema activo. Para probar el otro sin editar código: agrega ?theme=cielo-menta al link. */
export const THEME: ThemeId = 'marino-champan';

/**
 * Variante de color:
 *  'azul'  → azul profundo (el diseño principal)
 *  'claro' → versión clara (marfil / cielo)
 *  'auto'  → azul si el dispositivo está en modo oscuro; claro si no
 * Para probar sin editar: agrega ?mode=azul o ?mode=claro al link.
 */
export type ModeId = 'auto' | 'azul' | 'claro';
export const MODE: ModeId = 'azul';

/** Botón flotante para alternar entre las dos paletas (solo para revisión). Ponlo en false en la versión final. */
export const SELECTOR_PALETAS = true;

export const site = {
  nombre: 'Diego Alejandro',
  especialidad: 'Odontología',
  ciudad: 'Tuxtla Gutiérrez', // confirmar ciudad de atención
  // Número de WhatsApp: código de país + número, sin "+" ni espacios (ej. 52 + 10 dígitos).
  whatsapp: '520000000000',
  mensajeBase:
    'Hola Diego, vi tu página y me gustaría agendar una cita de valoración dental. ¿Qué horarios tienes disponibles?',

  seo: {
    titulo: 'Dentista en Tuxtla Gutiérrez | Valoración dental | Diego Alejandro',
    descripcion:
      'Valoración dental, limpieza, resinas y tratamiento de caries con atención dedicada y supervisada. Agenda tu cita por WhatsApp.',
  },

  hero: {
    titulo: 'Odontología cuidadosa y accesible: tu sonrisa en manos dedicadas y supervisadas.',
    confianza: 'Atención de calidad y supervisada',
    cta: 'Agenda tu valoración por WhatsApp',
    micro: 'Respondemos tus dudas antes de tu cita.',
  },

  problema: {
    titulo: 'Cuidar tu sonrisa no debería ser incómodo ni confuso.',
    dolorTitulo: 'Lo que muchos pacientes sienten',
    dolores: [
      'Citas rápidas donde no te explican qué tienes.',
      'No saber qué tratamiento necesitas ni cuánto tomará.',
      'Posponer la visita por miedo, tiempo o presupuesto.',
    ],
    solucionTitulo: 'Así lo hacemos diferente',
    soluciones: [
      'Una valoración completa, con tiempo para escucharte.',
      'Te explicamos tu diagnóstico en palabras claras.',
      'Tu plan se ajusta a tu ritmo y tus posibilidades.',
    ],
    cierre: 'Empieza por entender el estado real de tu salud bucal. Lo demás se decide juntos.',
    cta: 'Quiero mi valoración',
  },

  // icono: search | tooth | shield | drop
  pilares: {
    titulo: 'Lo que encontrarás en tu atención',
    items: [
      { icono: 'search', titulo: 'Sabrás qué tienes y qué necesitas', texto: 'Diagnóstico claro y un plan explicado paso a paso.' },
      { icono: 'tooth', titulo: 'Salud y estética en tu sonrisa', texto: 'Tratamientos para cuidar tus dientes y mejorar su apariencia de forma natural.' },
      { icono: 'shield', titulo: 'Atención cercana y respaldada', texto: 'Trato humano, sin prisas y con supervisión profesional en cada procedimiento.' },
    ],
  },

  // "id" = nombre del archivo en src/assets/images/tratamientos/ (sin extensión)
  tratamientos: {
    titulo: 'Tratamientos para cuidar y restaurar tu sonrisa',
    intro: 'Cada tratamiento comienza con una valoración para recomendarte lo que realmente necesitas.',
    items: [
      { id: 'resinas', nombre: 'Resinas', texto: 'Restauran dientes con caries, fracturas o desgaste usando material del color de tu diente.' },
      { id: 'incrustaciones', nombre: 'Incrustaciones', texto: 'Restauraciones hechas a medida para daño más amplio, cuando una resina no es suficiente.' },
      { id: 'caries', nombre: 'Tratamiento de caries', texto: 'Detectamos y atendemos la caries a tiempo para proteger tu diente y evitar complicaciones.' },
      { id: 'diagnostico', nombre: 'Diagnóstico', texto: 'Revisión completa y plan de tratamiento claro. Es el primer paso para cualquier cuidado.' },
      { id: 'limpieza', nombre: 'Limpieza dental', texto: 'Elimina sarro y placa para cuidar tus encías y refrescar tu sonrisa.' },
      { id: 'encias', nombre: 'Cuidado de encías', texto: 'Atención para encías inflamadas y recorte de encía cuando se requiere.' },
    ],
    cta: 'Consultar por WhatsApp',
    ctaTema: 'los tratamientos dentales',
    cond: {
      titulo: 'Casos específicos, según valoración',
      intro: 'Algunos tratamientos requieren una revisión previa para determinar si son lo adecuado para ti.',
      items: [
        { id: 'endodoncia', nombre: 'Endodoncia', texto: 'Tratamiento del interior del diente cuando el nervio está afectado.' },
        { id: 'frenillo', nombre: 'Frenillo', texto: 'Valoración de frenillo lingual o labial cuando afecta la función o la estética.' },
      ],
      ctaTema: 'endodoncia o frenillo',
    },
  },

  proceso: {
    titulo: 'Así es tu primera visita, paso a paso',
    pasos: [
      { titulo: 'Escríbenos por WhatsApp', texto: 'Cuéntanos qué necesitas o qué te preocupa.' },
      { titulo: 'Agendamos tu valoración', texto: 'Elegimos el día y la hora que mejor te acomode.' },
      { titulo: 'Recibes tu diagnóstico', texto: 'Te explicamos qué encontramos y qué opciones tienes.' },
      { titulo: 'Inicias tu tratamiento', texto: 'A tu ritmo, con seguimiento en cada etapa.' },
    ],
  },

  confianza: {
    titulo: 'Atención en la que puedes confiar',
    items: [
      { icono: 'tooth', titulo: 'Formación universitaria', texto: 'Diego cursa Odontología en UNICACH. [Redacción final por confirmar]' },
      { icono: 'shield', titulo: 'Supervisión profesional', texto: 'Los procedimientos se realizan [bajo supervisión de docentes / según corresponda].' },
      { icono: 'drop', titulo: 'Bioseguridad', texto: 'Instrumental esterilizado y protocolos de higiene en cada consulta. [Por confirmar]' },
    ],
    diego: {
      iniciales: 'DA',
      titulo: 'Conoce a Diego',
      texto: '[Bio de 3 a 4 líneas: su motivación por la odontología y su forma de atender. Incluir una frase personal.]',
    },
  },

  faq: {
    titulo: 'Preguntas frecuentes',
    items: [
      { p: '¿Quién me atenderá y quién supervisa los tratamientos?', r: 'Te atiende Diego Alejandro, [estudiante de Odontología / Cirujano Dentista], con supervisión de [docentes / especialistas]. Esto nos permite cuidar cada detalle de tu atención.' },
      { p: '¿Cuánto cuesta la valoración?', r: '[Costo o "Escríbenos y te lo confirmamos"]. Te indicamos el costo antes de agendar, sin sorpresas.' },
      { p: '¿Duele una limpieza dental?', r: 'Normalmente se tolera bien. Si tienes sensibilidad, avísanos y ajustamos el procedimiento para que estés cómodo.' },
      { p: '¿Cuánto dura una cita?', r: 'La valoración suele tomar [tiempo estimado]. En otros tratamientos te informamos la duración antes de iniciar.' },
      { p: '¿Atienden urgencias?', r: 'Si tienes dolor o una molestia fuerte, escríbenos por WhatsApp y valoramos tu caso lo antes posible.' },
      { p: '¿Qué pasa si necesito un tratamiento más complejo?', r: 'Te lo explicamos con claridad. Si requiere un especialista, te orientamos y te derivamos con quien corresponda. Tu salud va primero.' },
    ],
  },

  cierre: {
    titulo: 'Tu sonrisa merece atención sin prisas.',
    texto: 'Agenda tu valoración y conoce el estado real de tu salud bucal. Sin compromiso y con todas tus dudas resueltas.',
    cta: 'Agenda tu valoración por WhatsApp',
    contacto: '[Horarios] · [Ubicación / mapa] · [Instagram / Facebook]',
  },

  footer: '© 2026 Diego Alejandro · Odontología. Los tratamientos se realizan previa valoración clínica.',
};

/** Enlace de WhatsApp con mensaje prellenado (con "tema" pregunta por un tratamiento). */
export const waLink = (tema?: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    tema
      ? `Hola Diego, vi tu página y me gustaría consultar sobre ${tema}. ¿Qué horarios tienes disponibles?`
      : site.mensajeBase,
  )}`;

/** Resalta en cursiva los datos pendientes escritos entre [corchetes]. */
export const marcarPendientes = (t: string) => t.replace(/\[[^\]]+\]/g, (m) => `<span class="todo">${m}</span>`);
