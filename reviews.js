// =====================================================
//  REVIEWS DATA — used by index.html and feedback.html
//  !! SAMPLE REVIEWS (placeholders). Before launch, replace
//  these with real customer messages (from WhatsApp/feedback).
//  Fields: n = name, c = city, r = stars (1-5), t = text
//  Avoid double quotes inside the text.
// =====================================================

// ===== HOME PAGE REVIEWS =====
const HOME_REVIEWS = [
  {
    n: "Ahmed Raza",
    c: "Rawalpindi",
    r: 5,
    t: "Quality bohat zabardast hai. Paani lagne ke baad bhi door bilkul theek hai. Fitting bhi time par ho gayi.",
  },
  {
    n: "Sarah Williams",
    c: "Manchester, UK",
    r: 5,
    t: "Ordered doors for our family home in Pakistan. Beautiful finish and the team replied quickly on WhatsApp.",
  },
  {
    n: "Hamza Malik",
    c: "Islamabad",
    r: 5,
    t: "Wooden door se fiber par aaya hun aur ab koi tension nahi. Deemak ka masla hi khatam ho gaya.",
  },
  {
    n: "Arjun Mehta",
    c: "Dubai, UAE",
    r: 4,
    t: "Solid build quality and smooth delivery. A good option if you want doors that last without upkeep.",
  },
  {
    n: "Ayesha Khan",
    c: "Lahore",
    r: 5,
    t: "Polish ke baad door bilkul naya lag raha hai. Shukriya Pak Fiber Doors!",
  },
  {
    n: "Daniel Brooks",
    c: "London, UK",
    r: 5,
    t: "Professional service from the first message to delivery. The doors look great and feel very sturdy.",
  },
];

// ===== FEEDBACK PAGE REVIEWS (different set) =====
const FEEDBACK_REVIEWS = [
  {
    n: "Usman Ali",
    c: "Gujar Khan",
    r: 5,
    t: "Doors time par mil gaye aur fitting ka kaam saaf suthra tha. Mazeed orders bhi yahin se karun ga.",
  },
  {
    n: "Fatima Noor",
    c: "Karachi",
    r: 5,
    t: "Bathroom ke liye fiber door liya tha. Paani ka koi asar nahi, bilkul perfect.",
  },
  {
    n: "Kevin Anderson",
    c: "Birmingham, UK",
    r: 4,
    t: "Good quality doors at a fair price. Communication was clear and delivery was on schedule.",
  },
  {
    n: "Priya Nair",
    c: "Sharjah, UAE",
    r: 5,
    t: "Lovely designs to choose from. Ordering on WhatsApp was quick and easy.",
  },
  {
    n: "Bilal Ahmed",
    c: "Jhelum",
    r: 5,
    t: "Bohat achi quality aur lifetime guarantee ka sun kar tasalli hui. Recommend karta hun.",
  },
  {
    n: "Zainab Iqbal",
    c: "Peshawar",
    r: 4,
    t: "Door ka polish bohat shandar hai. Delivery mein thora time laga lekin result kamaal ka tha.",
  },
];

// ===== REVIEW CARD TEMPLATE (x = one review, i = position) =====
const RC = (x, i) => `
  <div class="cd rc rv" style="--d:${i * 0.1}s">
    <i class="fa-solid fa-quote-right q"></i>
    <div class="s">${'<i class="fa-solid fa-star"></i>'.repeat(x.r)}${'<i class="fa-regular fa-star"></i>'.repeat(5 - x.r)}</div>
    <p>${x.t}</p>
    <div class="u">
      <span>${x.n[0]}</span>
      <div><b>${x.n}</b><small>${x.c}</small></div>
    </div>
  </div>`;
