/* =========================
   UD JatiPradana - main.js
   ========================= */

/** =========================
 * 1) CONFIG (EmailJS)
 * =========================
 * Cara isi:
 * - Buat akun EmailJS
 * - Add Email Service (Gmail/Outlook)
 * - Buat Email Template
 * - Isi:
 *   EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID
 */
const EMAILJS_PUBLIC_KEY = "c0lIWloLsU5O3fzhL";
const EMAILJS_SERVICE_ID = "service_e1y7wiw";
const EMAILJS_TEMPLATE_ID = "template_368amrx";

/** =========================
 * 2) DATA PORTFOLIO (12 item)
 * =========================
 * - Default pakai URL Unsplash (cepat dipakai)
 * - Kalau mau pakai gambar lokal:
 *   ganti src jadi: "assets/img/portfolio/p01.jpg" dst.
 */
const portfolioData = [
  {
  id: 1,
  title: "Meja Kayu Jati Solid Utuh (Natural Slab)",
  cat: "indoor",
  tag: "Indoor",
  size: "± 200–240 × 80–90 × 75 cm (custom)",
  material: "Kayu Jati Utuh Solid + Finishing Natural Clear",
  price: "Rp 45-50 juta",
  desc: "Meja kayu jati solid dari batang utuh dengan serat alami yang tegas dan unik pada setiap sisi. Menampilkan karakter natural khas jati dengan ketebalan ekstra, kuat, kokoh, dan tahan lama. Cocok untuk meja makan, meja meeting, atau meja utama bergaya rustic dan industrial.",
  src: "assets/img/portfolio/kursi kayu.jpeg",
},
  {
  id: 2,
  title: "Meja Kayu Jati Minimalis Rak Bawah",
  cat: "indoor",
  tag: "Indoor",
  size: "120 × 50 × 45 cm (custom tersedia)",
  material: "Kayu Jati Solid + Finishing Natural Glossy",
  price: "Rp 2-3 juta",
  desc: "Meja kayu jati solid dengan desain minimalis dan rak bawah fungsional. Menampilkan serat jati alami yang halus dengan finishing natural glossy, kokoh, rapi, dan tahan lama. Cocok digunakan sebagai meja TV, meja tamu, atau meja penyimpanan multifungsi untuk ruang keluarga.",
  src: "assets/img/portfolio/meja.jpeg",
},
  {
  id: 3,
  title: "Kursi Single Jati Minimalis",
  cat: "indoor",
  tag: "Indoor",
  size: "75 × 80 × 90 cm (custom tersedia)",
  material: "Kayu Jati Solid + Finishing Natural Glossy",
  price: "Rp 1-2 juta",
  desc: "Kursi single dari kayu jati solid dengan desain minimalis dan dudukan lebar yang nyaman. Memiliki sandaran kokoh dan armrest tebal dengan finishing natural glossy yang menonjolkan serat jati alami. Cocok digunakan sebagai kursi tamu, kursi teras indoor, atau kursi aksen pada ruang keluarga.",
  src: "assets/img/portfolio/kursi single.jpeg",
},
//   {
//   id: 4,
//   title: "Lemari Jati 1 Pintu Kaca Minimalis",
//   cat: "indoor",
//   tag: "Indoor",
//   size: "60 × 45 × 200 cm (custom tersedia)",
//   material: "Kayu Jati Solid + Kaca Bening + Finishing Natural Glossy",
//   price: "Rp 6–8,5 juta",
//   desc: "Lemari satu pintu dari kayu jati solid dengan kombinasi panel kaca bening pada bagian atas. Desain minimalis dengan proporsi tinggi ramping, menampilkan serat jati alami yang elegan. Cocok digunakan sebagai lemari pajangan, lemari buku, atau lemari penyimpanan indoor dengan kesan rapi dan premium.",
//   src: "assets/img/portfolio/lemari 1 pintu.jpeg",
// },
  {
  id: 5,
  title: "Lemari Pakaian Jati 2 Pintu Minimalis",
  cat: "indoor",
  tag: "Indoor",
  size: "120 × 55 × 200 cm (custom tersedia)",
  material: "Kayu Jati Solid + Finishing Natural Glossy",
  price: "Rp 4-5 juta",
  desc: "Lemari pakaian dua pintu dari kayu jati solid dengan desain minimalis elegan. Menampilkan serat kayu jati alami yang indah dengan finishing natural glossy. Konstruksi kokoh, pintu presisi, dan kapasitas penyimpanan luas, cocok untuk kamar tidur atau ruang penyimpanan indoor dengan tampilan rapi dan berkelas.",
  src: "assets/img/portfolio/lemari 2 pintu.jpeg",
},
  {
  id: 6,
  title: "Kursi Tamu Jati 2 Dudukan Minimalis",
  cat: "indoor",
  tag: "Indoor",
  size: "160 × 75 × 90 cm (custom tersedia)",
  material: "Kayu Jati Solid + Finishing Natural Glossy",
  price: "Rp 2-3 juta",
  desc: "Kursi tamu dua dudukan dari kayu jati solid dengan desain minimalis dan rangka tebal yang kokoh. Memiliki sandaran lebar dan armrest solid dengan finishing natural glossy yang menonjolkan serat jati alami. Nyaman digunakan untuk ruang tamu atau ruang keluarga dengan tampilan elegan dan tahan lama.",
  src: "assets/img/portfolio/kursi double.jpeg",
},
  {
  id: 7,
  title: "Lemari Pakaian Jati 3 Pintu Kaca Minimalis",
  cat: "indoor",
  tag: "Indoor",
  size: "180 × 55 × 200 cm (custom tersedia)",
  material: "Kayu Jati Solid + Kaca Bening + Finishing Natural Glossy",
  price: "Rp 5-6 juta",
  desc: "Lemari pakaian tiga pintu dari kayu jati solid dengan desain minimalis elegan, dilengkapi panel kaca bening pada bagian atas untuk tampilan rapi dan modern. Menampilkan serat jati alami yang indah dengan finishing natural glossy. Konstruksi kokoh, kapasitas penyimpanan luas, dan pintu presisi, cocok untuk kamar tidur utama, villa, atau hunian premium.",
  src: "assets/img/portfolio/lemari 3 pintu.jpeg",
},
];

/** =========================
 * 3) INIT
 * ========================= */
document.addEventListener("DOMContentLoaded", () => {
  // Year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const menuPanel = document.getElementById("menuPanel");
  if (menuBtn && menuPanel) {
    menuBtn.addEventListener("click", () => menuPanel.classList.toggle("open"));
    menuPanel
      .querySelectorAll("a")
      .forEach((a) =>
        a.addEventListener("click", () => menuPanel.classList.remove("open"))
      );
  }

  // Reveal on scroll
  initReveal();

  // Hero parallax
  initParallax();

  // Particles subtle (serutan kayu vibes)
  initParticles();

  // Portfolio render + filter + mini-carousel control
  initPortfolio();

  // Testimonials slider
  initTestimonials();

  // Modal close handlers
  initModal();

  // EmailJS form
  initEmailJS();
});

/** =========================
 * Reveal
 * ========================= */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("show");
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => io.observe(el));
}

/** =========================
 * Parallax Hero
 * ========================= */
function initParallax() {
  const bg = document.getElementById("heroBg");
  if (!bg) return;

  window.addEventListener(
    "scroll",
    () => {
      const sc = window.scrollY || 0;
      // subtle
      bg.style.transform = `translate3d(0, ${sc * 0.18}px, 0)`;
    },
    { passive: true }
  );
}

/** =========================
 * Particles
 * ========================= */
function initParticles() {
  const el = document.getElementById("particles-js");
  if (!el || typeof particlesJS === "undefined") return;

  particlesJS("particles-js", {
    particles: {
      number: { value: 42, density: { enable: true, value_area: 900 } },
      color: { value: "#F5F5DC" },
      shape: { type: "circle" },
      opacity: { value: 0.25, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 1.1,
        direction: "none",
        random: true,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false },
        onclick: { enable: false },
        resize: true,
      },
    },
    retina_detect: true,
  });
}

/** =========================
 * Portfolio
 * ========================= */
let currentFilter = "all";
let viewStart = 0; // for "carousel-like" paging
let pageSize = 9; // show up to 9 in view for desktop; will adjust for mobile

function initPortfolio() {
  const masonry = document.getElementById("masonry");
  if (!masonry) return;

  // Adjust pageSize by viewport
  const setPageSize = () => {
    const w = window.innerWidth;
    if (w < 720) pageSize = 6;
    else if (w < 980) pageSize = 8;
    else pageSize = 9;
  };
  setPageSize();
  window.addEventListener("resize", () => {
    const old = pageSize;
    setPageSize();
    if (old !== pageSize) {
      viewStart = 0;
      renderPortfolio();
    }
  });

  // Filters
  const filters = document.getElementById("filters");
  if (filters) {
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-filter]");
      if (!btn) return;
      currentFilter = btn.dataset.filter;
      viewStart = 0;

      filters
        .querySelectorAll("button")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      renderPortfolio();
    });
  }

  // Prev/Next controls (mini carousel)
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  prevBtn?.addEventListener("click", () => {
    viewStart = Math.max(0, viewStart - pageSize);
    renderPortfolio();
  });
  nextBtn?.addEventListener("click", () => {
    const list = getFilteredData();
    viewStart = Math.min(
      Math.max(0, list.length - pageSize),
      viewStart + pageSize
    );
    renderPortfolio();
  });

  // Initial render
  renderPortfolio();
}

function getFilteredData() {
  if (currentFilter === "all") return portfolioData;
  return portfolioData.filter((x) => x.cat === currentFilter);
}

function renderPortfolio() {
  const masonry = document.getElementById("masonry");
  if (!masonry) return;

  const list = getFilteredData();
  const slice = list.slice(viewStart, viewStart + pageSize);

  masonry.innerHTML = slice
    .map(
      (item) => `
    <article class="work" data-id="${
      item.id
    }" role="button" tabindex="0" aria-label="Lihat detail ${escapeHtml(
        item.title
      )}">
      <img loading="lazy" src="${item.src}" alt="${escapeHtml(
        item.title
      )} - UD JatiPradana, furniture ${item.tag}">
      <div class="caption">
        <div>
          <h4>${escapeHtml(item.title)}</h4>
          <small>${escapeHtml(item.material)}</small>
        </div>
        <div class="tag">${escapeHtml(item.tag)}</div>
      </div>
    </article>
  `
    )
    .join("");

  // Click / keyboard open modal
  masonry.querySelectorAll(".work").forEach((card) => {
    card.addEventListener("click", () =>
      openModalById(Number(card.dataset.id))
    );
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ")
        openModalById(Number(card.dataset.id));
    });
  });
}

/** =========================
 * Modal
 * ========================= */
function initModal() {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeModal");
  if (!modal) return;

  closeBtn?.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function openModalById(id) {
  const item = portfolioData.find((x) => x.id === id);
  if (!item) return;

  const modal = document.getElementById("modal");
  const img = document.getElementById("modalImg");
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalDesc");
  const size = document.getElementById("modalSize");
  const material = document.getElementById("modalMaterial");
  const cat = document.getElementById("modalCat");
  const price = document.getElementById("modalPrice");
  const wa = document.getElementById("modalWA");

  img.src = item.src;
  img.alt = `${item.title} - UD JatiPradana`;
  title.textContent = item.title;
  desc.textContent = item.desc;
  size.textContent = item.size;
  material.textContent = item.material;
  cat.textContent = item.tag;
  price.textContent = item.price;

  // Prefill WA message
  const msg = encodeURIComponent(
    `Halo UD JatiPradana, saya tertarik dengan: "${item.title}".\n` +
      `Kategori: ${item.tag}\nUkuran: ${item.size}\nMaterial: ${item.material}\n` +
      `Boleh minta estimasi harga final & waktu pengerjaan?`
  );
  wa.href = `https://wa.me/6285859770804?text=${msg}`;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

/** =========================
 * Testimonials slider
 * ========================= */
function initTestimonials() {
  const slides = Array.from(document.querySelectorAll(".slide"));
  if (!slides.length) return;

  let idx = 0;
  const show = (i) => {
    slides.forEach((s) => s.classList.remove("active"));
    slides[i].classList.add("active");
  };

  const prev = document.getElementById("tPrev");
  const next = document.getElementById("tNext");

  prev?.addEventListener("click", () => {
    idx = (idx - 1 + slides.length) % slides.length;
    show(idx);
  });
  next?.addEventListener("click", () => {
    idx = (idx + 1) % slides.length;
    show(idx);
  });

  // auto-rotate subtle
  setInterval(() => {
    idx = (idx + 1) % slides.length;
    show(idx);
  }, 6500);
}

/** =========================
 * EmailJS Form Submission (with optional image base64)
 * ========================= */
function initEmailJS() {
  if (typeof emailjs === "undefined") return;

  // Init EmailJS (safe try)
  try {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  } catch (e) {}

  const form = document.getElementById("inquiryForm");
  const status = document.getElementById("formStatus");
  const sendBtn = document.getElementById("sendBtn");
  const fileInput = document.getElementById("inspiration");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "status";
    status.textContent = "";
    sendBtn.disabled = true;
    sendBtn.style.opacity = "0.85";

    try {
      // Build params for template
      const waRaw = form.wa.value;

      const waE164 = toE164ID(waRaw);
      const replyText = encodeURIComponent(
        `Halo ${form.name.value}, terima kasih sudah menghubungi UD JatiPradana.\n` +
          `Kami sudah menerima inquiry Anda:\n\n` +
          `${form.message.value}\n\n` +
          `Boleh info lokasi pengiriman & ukuran detailnya?`
      );

      const params = {
        from_name: form.name.value,
        from_email: form.email.value,
        from_wa: waRaw,
        wa_e164: waE164,
        wa_reply_text: replyText,
        project_type: "Furniture Custom / Konsultasi", // bisa kamu ubah atau jadikan dropdown
        message: form.message.value,
        wa: "085859770804",
        address: "Jalan Teratai RT 08 RW 02, Munggut, Kab. Madiun, Jawa Timur",
        inspiration_base64: "",
      };

      // Convert image to base64 if exists (keep small!)
      const file = fileInput?.files?.[0];
      if (file) {
        // recommended max 2MB
        if (file.size > 2 * 1024 * 1024) {
          throw new Error("Ukuran gambar terlalu besar. Disarankan max 2 MB.");
        }
        params.inspiration_base64 = await fileToBase64(file);
      }

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);

      status.className = "status ok";
      status.textContent = "Berhasil terkirim! Kami akan membalas secepatnya.";
      form.reset();
    } catch (err) {
      status.className = "status err";
      status.textContent = `Gagal mengirim. ${
        err?.message ? err.message : "Coba lagi atau hubungi via WhatsApp."
      }`;
    } finally {
      sendBtn.disabled = false;
      sendBtn.style.opacity = "1";
    }
  });
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/** =========================
 * Helpers
 * ========================= */
function escapeHtml(str) {
  return String(str).replace(
    /[&<>"']/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      }[m])
  );
}

function toE164ID(phoneRaw) {
  // ubah "0858..." -> "62858..."
  const digits = String(phoneRaw).replace(/[^\d]/g, "");
  if (!digits) return "";
  if (digits.startsWith("62")) return digits;
  if (digits.startsWith("0")) return "62" + digits.slice(1);
  // kalau user sudah isi tanpa 0 tapi tidak pakai 62
  return "62" + digits;
}
