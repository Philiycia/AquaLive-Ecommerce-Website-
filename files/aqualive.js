/* ============================================================
   AquaLive – Shared Data & Utilities
   Educational Demo Website
   ============================================================ */

/* ── PRODUCT DATABASE ─────────────────────────────────────── */
const PRODUCTS = [
  // BETTA
  { id:"b1", name:"Betta – Red Halfmoon",    category:"Betta Fish",      price:25, tag:"Popular",  care:"Easy",       temp:"24–28°C", size:"5–7 cm",  desc:"A stunning red halfmoon betta known for its vibrant fins. Best kept alone in a 10L+ tank.", image:"images/betta.jpg" },
  { id:"b2", name:"Betta – Blue Crowntail",  category:"Betta Fish",      price:30, tag:"Premium",  care:"Easy",       temp:"24–28°C", size:"5–7 cm",  desc:"Striking blue crowntail with elaborate fin edges. A showstopper in any planted tank.", image:"images/betta2.jpg" },
  { id:"b3", name:"Betta – Purple Galaxy",   category:"Betta Fish",      price:45, tag:"Rare",     care:"Moderate",   temp:"25–28°C", size:"5–7 cm",  desc:"Rare galaxy pattern betta with iridescent purple scales. Limited stock.", image:"images/betta-purple.jpg" },
  // GOLDFISH
  { id:"g1", name:"Goldfish – Fantail",      category:"Goldfish",        price:18, tag:"Beginner", care:"Easy",       temp:"18–22°C", size:"15–20 cm",desc:"Hardy fantail goldfish perfect for beginners. Thrives in a 60L+ tank.", image:"images/goldfish.jpg" },
  { id:"g2", name:"Goldfish – Oranda",       category:"Goldfish",        price:35, tag:"Premium",  care:"Moderate",   temp:"18–22°C", size:"20–30 cm",desc:"Elegant oranda with a distinctive head growth (wen). A prized collector fish.", image:"images/goldfish-oranda.jpg" },
  // FRESHWATER
  { id:"f1", name:"Neon Tetra (10 pack)",    category:"Freshwater Fish", price:20, tag:"Beginner", care:"Easy",       temp:"22–26°C", size:"3–4 cm",  desc:"Iconic schooling fish with electric blue and red stripes. Great in groups of 10+.", image:"images/neon-tetra.jpg" },
  { id:"f2", name:"Angelfish",               category:"Freshwater Fish", price:30, tag:"Popular",  care:"Moderate",   temp:"24–28°C", size:"15 cm",   desc:"Majestic and elegant, angelfish add grace to any community tank of 100L+.", image:"images/angelfish1.jpg" },
  { id:"f3", name:"Corydoras (3 pack)",      category:"Freshwater Fish", price:15, tag:"Beginner", care:"Easy",       temp:"22–26°C", size:"5–7 cm",  desc:"Peaceful bottom-dwellers that clean up leftover food. Best kept in groups.", image:"images/corydora.jpg" },
  { id:"f4", name:"Discus – Cobalt Blue",    category:"Freshwater Fish", price:85, tag:"Expert",   care:"Advanced",   temp:"28–30°C", size:"15–25 cm",desc:"The king of freshwater fish. Demands pristine water quality and dedicated care.", image:"images/discus.jpeg" },
  { id:"f5", name:"Guppy (5 pack)",          category:"Freshwater Fish", price:10, tag:"Beginner", care:"Easy",       temp:"22–28°C", size:"3–6 cm",  desc:"Colourful livebearers that are nearly impossible to kill. Perfect first fish.", image:"images/guppy.jpg" },
  { id:"f6", name:"Molly (3 pack)",          category:"Freshwater Fish", price: 9, tag:"Beginner", care:"Easy",       temp:"24–28°C", size:"6–12 cm", desc:"Adaptable and colourful livebearers. Available in black, dalmatian, and balloon varieties.", image:"images/molly.png" },
  { id:"f7", name:"Zebra Danio (5 pack)",    category:"Freshwater Fish", price:10, tag:"Beginner", care:"Easy",       temp:"18–24°C", size:"4–5 cm",  desc:"Hardy and energetic schooling fish. Ideal for cycling a new aquarium.", image:"images/danio.jpg" },
  // KITS
  { id:"k1", name:"Nano Tank 5L Kit",        category:"Aquarium Kits",   price:45, tag:"Starter",  care:"",           temp:"",        size:"5 L",     desc:"Complete nano kit: tank, mini filter, LED light, substrate. Perfect for a single betta.", image:"images/tanknano.jpg" },
  { id:"k2", name:"Beginner Kit 10L",        category:"Aquarium Kits",   price:89, tag:"Popular",  care:"",           temp:"",        size:"10 L",    desc:"Everything to start: tank, filter, heater, thermometer, net, dechlorinator, guide.", image:"images/tank10.jpg" },
  { id:"k3", name:"Starter Kit 20L",         category:"Aquarium Kits",   price:120,tag:"Popular",  care:"",           temp:"",        size:"20 L",    desc:"20L glass tank with silent filter, adjustable heater, full spectrum LED, and substrate.", image:"images/tank30.jpg" },
  { id:"k4", name:"Complete Kit 30L",        category:"Aquarium Kits",   price:159,tag:"Best Value",care:"",          temp:"",        size:"30 L",    desc:"Best value 30L setup with everything including gravel, plants, and water conditioner.", image:"images/tank20.jpg" },
  { id:"k5", name:"Community Tank 60L",      category:"Aquarium Kits",   price:250,tag:"Premium",  care:"",           temp:"",        size:"60 L",    desc:"Large 60L kit for community fish. Includes canister filter, LED hood, heater, and stand.", image:"images/tank60.jpg" },
  // FOOD
  { id:"fd1",name:"Tropical Fish Flakes",    category:"Food & Accessories",price:12,tag:"",         care:"",           temp:"",        size:"",        desc:"Premium multi-ingredient flake food for tropical community fish. 100g resealable pouch.", image:"images/flakes.jpg" },
  { id:"fd2",name:"Betta Pellet Food",       category:"Food & Accessories",price:15,tag:"",         care:"",           temp:"",        size:"",        desc:"High-protein betta-specific pellets. Enhances colour and promotes fin health. 50g.", image:"images/pellet.jpg" },
  { id:"fd3",name:"Frozen Bloodworm Pack",   category:"Food & Accessories",price:15,tag:"Popular",  care:"",           temp:"",        size:"",        desc:"High-protein frozen bloodworms loved by betta, angelfish, and discus. 100g cube pack.", image:"images/bloodworm.jpg" },
  { id:"fd4",name:"Dechlorinator 250ml",     category:"Food & Accessories",price:15,tag:"Essential",care:"",          temp:"",        size:"",        desc:"Neutralises chlorine and chloramines instantly. Treats up to 2,500L. Essential for all tanks.", image:"images/chlorine.jpg" },
  { id:"fd5",name:"Stress Coat Conditioner", category:"Food & Accessories",price:18,tag:"",         care:"",           temp:"",        size:"",        desc:"Reduces fish stress during transport and water changes. Repairs damaged fins and slime coat.", image:"images/conditioner.jpg" },
  { id:"fd6",name:"Ammonia Detox 250ml",     category:"Food & Accessories",price:20,tag:"Essential",care:"",          temp:"",        size:"",        desc:"Emergency ammonia detoxifier. Protects fish during cycling and water quality spikes.", image:"images/ammo.jpg" },
];

/* ── CART UTILITIES ───────────────────────────────────────── */
const Cart = {
  get() { return JSON.parse(localStorage.getItem("aqualive_cart") || "[]"); },
  save(cart) { localStorage.setItem("aqualive_cart", JSON.stringify(cart)); },
  count() { return Cart.get().reduce((s, i) => s + i.qty, 0); },
  add(product) {
    let cart = Cart.get();
    let ex = cart.find(i => i.id === product.id);
    if (ex) ex.qty++;
    else cart.push({ ...product, qty: 1 });
    Cart.save(cart);
    Cart.updateBadge();
    Cart.toast(product.name);
  },
  remove(id) {
    let cart = Cart.get().filter(i => i.id !== id);
    Cart.save(cart); Cart.updateBadge();
  },
  changeQty(id, delta) {
    let cart = Cart.get();
    let item = cart.find(i => i.id === id);
    if (item) { item.qty += delta; if (item.qty <= 0) cart = cart.filter(i => i.id !== id); }
    Cart.save(cart); Cart.updateBadge();
  },
  clear() { localStorage.removeItem("aqualive_cart"); Cart.updateBadge(); },
  updateBadge() {
    document.querySelectorAll(".cart-count").forEach(el => el.textContent = Cart.count());
  },
  toast(name) {
    const t = document.getElementById("cart-toast");
    if (!t) return;
    t.textContent = `✓ ${name} added to cart`;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2500);
  }
};

/* ── AUTH UTILITIES ───────────────────────────────────────── */
const Auth = {
  get() { return JSON.parse(localStorage.getItem("aqualive_user") || "null"); },
  save(user) { localStorage.setItem("aqualive_user", JSON.stringify(user)); },
  login(name, email) { Auth.save({ name, email, joined: new Date().toLocaleDateString() }); },
  logout() { localStorage.removeItem("aqualive_user"); },
  isLoggedIn() { return Auth.get() !== null; }
};

/* ── ORDER UTILITIES ──────────────────────────────────────── */
const Orders = {
  get() { return JSON.parse(localStorage.getItem("aqualive_orders") || "[]"); },
  add(order) {
    let orders = Orders.get();
    orders.unshift(order);
    localStorage.setItem("aqualive_orders", JSON.stringify(orders));
  }
};

/* ── DISCLAIMER BANNER ────────────────────────────────────── */
function injectDisclaimer() {
  const d = document.createElement("div");
  d.id = "edu-disclaimer";
  d.innerHTML = `⚠️ <strong>Educational Demo Website</strong> — AquaLive is a student project. No real transactions are processed. All orders, payments, and accounts are simulated. <button onclick="this.parentElement.style.display='none'">✕</button>`;
  document.body.insertBefore(d, document.body.firstChild);
}

/* ── NAVBAR INJECT ────────────────────────────────────────── */
function injectNavbar(activePage) {
  const pages = [
    { href:"Main.html",    label:"Home" },
    { href:"Shop.html",    label:"Shop" },
    { href:"Guide.html",   label:"Fish Care Guide" },
    { href:"About.html",   label:"About" },
    { href:"Contact.html", label:"Contact" },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.label === activePage ? 'active' : ''}">${p.label}</a>`
  ).join("");

  const nav = document.getElementById("main-navbar");
  if (!nav) return;
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="Main.html" class="nav-logo">🐟 AquaLive</a>
      <nav class="nav-links" id="navLinks">${links}</nav>
      <div class="nav-actions">
        <a href="cart.html" class="nav-cart">🛒 <span class="cart-count">0</span></a>
        <a href="Profile.html" class="nav-profile">👤</a>
        <button class="burger" onclick="document.getElementById('navLinks').classList.toggle('open')">☰</button>
      </div>
    </div>
  `;
  Cart.updateBadge();
}

/* ── TOAST INJECT ─────────────────────────────────────────── */
function injectToast() {
  if (document.getElementById("cart-toast")) return;
  const t = document.createElement("div");
  t.id = "cart-toast";
  document.body.appendChild(t);
}

window.addEventListener("DOMContentLoaded", () => {
  injectDisclaimer();
  injectToast();
});
