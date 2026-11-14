// =====================================================
//  PAK FIBER DOORS — SHARED SCRIPT (loaded on every page)
//  Change phone numbers in the SETTINGS block below.
// =====================================================

// ===== SETTINGS =====
const WA = "923271507347"; // business WhatsApp (orders, quotes, feedback)
const DEV_WA = "923049622076"; // developer WhatsApp (footer button)
const L = (msg, num = WA) => `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
const P = document.body.dataset.p; // current page id (from <body data-p="...">)
const LINKS = [
  ["index.html", "Home", "home"],
  ["fiber-doors.html", "Fiber Doors", "doors"],
  ["portfolio.html", "Portfolio", "portfolio"],
  ["feedback.html", "Feedback", "feedback"],
  ["disclaimer.html", "Disclaimer", "disclaimer"],
];
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

// ===== NAVBAR (same on every page) =====
$("#nav").innerHTML = `
  <div class="w nv">
    <a href="index.html"><img src="logo.png" alt="Pak Fiber Doors logo"></a>
    <button class="hb" aria-label="Open menu">☰</button>
    <ul class="nl">
      ${LINKS.map((l) => `<li><a href="${l[0]}" class="${l[2] == P ? "on" : ""}">${l[1]}</a></li>`).join("")}
      <li><a class="btn" data-wa="Hi! I want a quote from Pak Fiber Doors.">Get a Quote</a></li>
    </ul>
  </div>`;

// ===== FOOTER (same on every page) =====
$("#foot").innerHTML = `
  <div class="w">
    <div class="fg">

      <!-- Brand -->
      <div>
        <img src="logo.png" alt="Pak Fiber Doors" style="height:60px;background:#fff;border-radius:10px;padding:4px;margin-bottom:14px">
        <p>Fiber door manufacturer in Gujar Khan since 2016. Lifetime guarantee and delivery all over Pakistan.</p>
      </div>

      <!-- Quick links -->
      <div>
        <h4>Quick Links</h4>
        <ul>${LINKS.map((l) => `<li><a href="${l[0]}">${l[1]}</a></li>`).join("")}</ul>
      </div>

      <!-- Services -->
      <div>
        <h4>Services</h4>
        <ul>
          <li>Fiber Door Manufacturing</li>
          <li>Door Polish</li>
          <li>Door Fitting</li>
          <li>Fiber Frame Polish</li>
        </ul>
      </div>

      <!-- Contact + social icons -->
      <div>
        <h4>Contact Us</h4>
        <p><i class="fa-solid fa-location-dot"></i> Near Ajwa Restaurant, GT Road Gujar Khan, District Rawalpindi</p>
        <p><i class="fa-solid fa-phone"></i> <a href="tel:+923271507347">+92 327 1507347</a></p>
        <p><i class="fa-solid fa-envelope"></i> <a href="mailto:muhammad.khan8074@gmail.com">muhammad.khan8074@gmail.com</a></p>
        <div class="so">
          <a href="https://www.facebook.com/share/1GywPajAZC/" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.tiktok.com/@pak.fiber.door" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
          <a data-wa="Hi! I want to know more about Pak Fiber Doors." aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="mailto:muhammad.khan8074@gmail.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
          <a href="https://maps.app.goo.gl/4qoaEpdtwNsGnyup7" target="_blank" rel="noopener" aria-label="Google Maps"><i class="fa-solid fa-map-location-dot"></i></a>
        </div>
      </div>
    </div>

    <!-- Bottom bar: copyright + Contact Developer (last item) -->
    <div class="cp">
      <span>© ${new Date().getFullYear()} Pak Fiber Doors. All rights reserved.</span>

    </div>
  </div>`;

// ===== FLOATING BUTTONS + LIGHTBOX (added to every page) =====
document.body.insertAdjacentHTML(
  "beforeend",
  `
  <a class="wa" data-wa="Hi! I want to know more about Pak Fiber Doors." aria-label="Chat on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
  <button class="up2" aria-label="Back to top"><i class="fa-solid fa-chevron-up"></i></button>

  <div id="lb">
    <button class="lx" aria-label="Close">✕</button>
    <button class="lp" aria-label="Previous">‹</button>
    <img alt="">
    <b></b>
    <a class="btn b-g" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Order Now</a>
    <button class="ln" aria-label="Next">›</button>
  </div>`,
);

// ===== WHATSAPP LINKS — any element with data-wa="message" becomes a WhatsApp link =====
// Add data-to="number" to send to a different number (used by Contact Developer).
$$("[data-wa]").forEach((a) => {
  a.href = L(a.dataset.wa, a.dataset.to || WA);
  a.target = "_blank";
  a.rel = "noopener";
});

// ===== NAVBAR BEHAVIOUR (sticky shadow, mobile menu, back-to-top) =====
const nav = $("#nav"),
  hb = $(".hb"),
  nl = $(".nl"),
  up = $(".up2");
hb.onclick = () => {
  nl.classList.toggle("o");
  hb.classList.toggle("o");
  hb.textContent = nl.classList.contains("o") ? "✕" : "☰";
};
nl.onclick = (e) => {
  if (e.target.tagName == "A") {
    nl.classList.remove("o");
    hb.classList.remove("o");
    hb.textContent = "☰";
  }
};
const onScroll = () => {
  nav.classList.toggle("sc", scrollY > 40);
  up.classList.toggle("s", scrollY > 500);
};
onScroll();
addEventListener("scroll", onScroll);
up.onclick = () => scrollTo({ top: 0 });

// ===== SCROLL REVEAL + ANIMATED COUNTERS =====
// .rv elements fade in; elements with data-c="5000" data-s="+" count up.
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const t = e.target;
      t.classList.add("in");
      setTimeout(() => t.classList.add("done"), 1400); // frees hover speed after reveal
      if (t.dataset.c) {
        const n = +t.dataset.c,
          s = t.dataset.s || "",
          start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / 1800, 1);
          t.textContent = Math.floor(n * (1 - Math.pow(1 - p, 3))).toLocaleString() + s;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
      io.unobserve(t);
    });
  },
  { threshold: 0.2 },
);
$$(".rv,[data-c]").forEach((e) => io.observe(e));

// ===== CARD CLICK — green outline on the clicked card =====
document.addEventListener("click", (e) => {
  const c = e.target.closest(".cd");
  $$(".cd.sel").forEach((x) => x !== c && x.classList.remove("sel"));
  if (c) c.classList.add("sel");
});

// ===== LIGHTBOX — LB(items, index) opens a full-screen viewer =====
// items = [{ s: image, c: caption, w: whatsapp link or "" }]
const lb = $("#lb"),
  li = $("#lb img"),
  lc = $("#lb b"),
  lw = $("#lb .btn");
let it = [],
  ix = 0;
const show = () => {
  const x = it[ix];
  li.src = x.s;
  li.alt = x.c;
  lc.textContent = x.c;
  lw.href = x.w;
  lw.style.display = x.w ? "" : "none";
};
window.LB = (items, i) => {
  it = items;
  ix = i;
  show();
  lb.classList.add("o");
  document.body.style.overflow = "hidden";
};
const closeLB = () => {
  lb.classList.remove("o");
  document.body.style.overflow = "";
};
const move = (d) => {
  ix = (ix + d + it.length) % it.length;
  show();
};
$(".lx").onclick = closeLB;
$(".lp").onclick = () => move(-1);
$(".ln").onclick = () => move(1);
lb.onclick = (e) => {
  if (e.target == lb) closeLB();
};
addEventListener("keydown", (e) => {
  if (!lb.classList.contains("o")) return;
  if (e.key == "Escape") closeLB();
  if (e.key == "ArrowLeft") move(-1);
  if (e.key == "ArrowRight") move(1);
});
