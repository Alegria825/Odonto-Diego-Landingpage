// Acordeón de preguntas frecuentes
document.querySelectorAll<HTMLButtonElement>('.q').forEach((b) =>
  b.addEventListener('click', () => {
    const abierto = b.parentElement!.classList.toggle('o');
    b.setAttribute('aria-expanded', String(abierto));
  }),
);

// Sombra del header al hacer scroll
const hd = document.getElementById('hd');
addEventListener('scroll', () => hd?.classList.toggle('sc', scrollY > 8), { passive: true });

// Aparición escalonada de tarjetas y pasos
const io = new IntersectionObserver(
  (entradas) =>
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      const i = Array.from(el.parentElement!.children).indexOf(el);
      setTimeout(() => el.classList.add('in'), (i % 3) * 80);
      io.unobserve(el);
    }),
  { threshold: 0.15 },
);
document.querySelectorAll('.rv').forEach((el) => io.observe(el));

// Medición de clics en WhatsApp (se activa sola si instalas Plausible o Google Analytics)
document.querySelectorAll<HTMLAnchorElement>('a[data-wa]').forEach((a) =>
  a.addEventListener('click', () => {
    const w = window as any;
    w.plausible?.('WhatsApp', { props: { tema: a.dataset.wa } });
    w.gtag?.('event', 'whatsapp_click', { tema: a.dataset.wa });
  }),
);

// Selector de paleta (solo prototipo): alterna entre los dos temas y recuerda la elección
const botonesPaleta = document.querySelectorAll<HTMLButtonElement>('[data-paleta]');
const marcarPaleta = () =>
  botonesPaleta.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.paleta === document.documentElement.dataset.theme)));
botonesPaleta.forEach((b) =>
  b.addEventListener('click', () => {
    document.documentElement.dataset.theme = b.dataset.paleta!;
    try { localStorage.setItem('diego-paleta', b.dataset.paleta!); } catch {}
    marcarPaleta();
  }),
);
marcarPaleta();
