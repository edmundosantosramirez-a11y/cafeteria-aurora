const T = {
  es: {
    t_index: "Café Aurora | Inicio",
    t_serv: "Café Aurora | Servicios",
    t_cont: "Café Aurora | Contacto",
    skip: "Saltar al contenido",
    nav_home: "Inicio",
    nav_serv: "Servicios",
    nav_cont: "Contacto",
    lang_btn: "Cambiar idioma a inglés",
    h1_home: "Café de especialidad, hecho con calma",
    lead: "Granos de pequeños productores mexicanos, repostería del día y un lugar tranquilo para estudiar o platicar.",
    cta: "Ver el menú",
    alt_cup: "Taza de café humeante",
    about_h: "Quiénes somos",
    about_p: "Somos una cafetería familiar en Monterrey. Tostamos en lotes pequeños y horneamos cada mañana.",
    hours_h: "Horario",
    hours_p: "Lunes a sábado de 7:00 a 21:00. Domingo de 8:00 a 15:00.",
    foot: "© 2026 Café Aurora. Sitio de práctica universitaria.",
    h1_serv: "Nuestros servicios",
    intro_serv: "Todo lo que ofrecemos, desde la barra hasta eventos privados.",
    s1_h: "Café de especialidad",
    s1_p: "Espresso, filtrados y bebidas frías preparadas al momento.",
    s2_h: "Repostería artesanal",
    s2_p: "Pan dulce, galletas y pasteles horneados cada día.",
    s3_h: "Zona de estudio",
    s3_p: "Wi-Fi gratis, enchufes en cada mesa y ambiente tranquilo.",
    s4_h: "Eventos privados",
    s4_p: "Reserva el local para cumpleaños, reuniones o talleres.",
    h1_cont: "Contáctanos",
    label_name: "Nombre",
    label_email: "Correo electrónico",
    label_msg: "Mensaje",
    ph_name: "Tu nombre",
    ph_msg: "Escribe tu mensaje",
    send: "Enviar",
    ok: "¡Gracias! Recibimos tu mensaje.",
    addr_h: "Visítanos",
    addr_p: "Av. Universidad 100, Monterrey, N. L."
  },
  en: {
    t_index: "Café Aurora | Home",
    t_serv: "Café Aurora | Services",
    t_cont: "Café Aurora | Contact",
    skip: "Skip to content",
    nav_home: "Home",
    nav_serv: "Services",
    nav_cont: "Contact",
    lang_btn: "Switch language to Spanish",
    h1_home: "Specialty coffee, made unhurried",
    lead: "Beans from small Mexican growers, daily pastries and a calm spot to study or chat.",
    cta: "See the menu",
    alt_cup: "Steaming cup of coffee",
    about_h: "About us",
    about_p: "We are a family-run café in Monterrey. We roast in small batches and bake every morning.",
    hours_h: "Opening hours",
    hours_p: "Monday to Saturday 7:00 am to 9:00 pm. Sunday 8:00 am to 3:00 pm.",
    foot: "© 2026 Café Aurora. University practice site.",
    h1_serv: "Our services",
    intro_serv: "Everything we offer, from the coffee bar to private events.",
    s1_h: "Specialty coffee",
    s1_p: "Espresso, filtered coffee and cold drinks made to order.",
    s2_h: "Artisan pastries",
    s2_p: "Sweet bread, cookies and cakes baked daily.",
    s3_h: "Study area",
    s3_p: "Free Wi-Fi, outlets at every table and a quiet atmosphere.",
    s4_h: "Private events",
    s4_p: "Book the café for birthdays, meetings or workshops.",
    h1_cont: "Contact us",
    label_name: "Name",
    label_email: "Email",
    label_msg: "Message",
    ph_name: "Your name",
    ph_msg: "Write your message",
    send: "Send",
    ok: "Thank you! We received your message.",
    addr_h: "Visit us",
    addr_p: "100 Universidad Ave., Monterrey, N.L."
  }
};

function aplicar(l) {
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(e => { e.textContent = T[l][e.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-alt]").forEach(e => { e.alt = T[l][e.dataset.i18nAlt]; });
  document.querySelectorAll("[data-i18n-ph]").forEach(e => { e.placeholder = T[l][e.dataset.i18nPh]; });
  document.title = T[l][document.body.dataset.title];
  const b = document.getElementById("btn-lang");
  b.textContent = l === "es" ? "EN" : "ES";
  b.setAttribute("aria-label", T[l].lang_btn);
  try { localStorage.setItem("lang", l); } catch (e) {}
}

let actual = "es";
try { actual = localStorage.getItem("lang") || "es"; } catch (e) {}

aplicar(actual);

document.getElementById("btn-lang").addEventListener("click", () => {
  aplicar(document.documentElement.lang === "es" ? "en" : "es");
});

const f = document.getElementById("form");
if (f) {
  f.addEventListener("submit", ev => {
    ev.preventDefault();
    document.getElementById("msg").textContent = T[document.documentElement.lang].ok;
    f.reset();
  });
}
