/* ============================================================
   DATA
============================================================ */
const PRODUCTS = [
  { id:'silk-blouse', brand:'Vince', name:'Silk Charmeuse Blouse', price:285, cat:'tops', tags:['new'],
    imgA:'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=900&q=80',
    imgB:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
    desc:'A weightless charmeuse blouse with a fluid drape and a softly rounded collar. Cut to skim rather than cling, with a covered placket and mother-of-pearl buttons.' },

  { id:'column-dress', brand:'Ulla Johnson', name:'Column Midi Dress', price:428, cat:'dresses', tags:['new'],
    imgA:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    imgB:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=80',
    desc:'A bias-cut column in washed silk with a subtle sheen. Falls just below the calf with a hidden side zip and a gently gathered waist.' },

  { id:'wool-wrap-coat', brand:'Veronica Beard', name:'Wool Blend Wrap Coat', price:695, cat:'outerwear', tags:['new'],
    imgA:'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=900&q=80',
    imgB:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
    desc:'An unstructured wrap coat in an Italian wool blend. Belted at the waist, dropped shoulder, fully lined in cupro. The one you will wear for a decade.' },

  { id:'pleated-skirt', brand:'Velvet', name:'Pleated Satin Skirt', price:198, cat:'skirts', tags:['new'],
    imgA:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    imgB:'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=900&q=80',
    desc:'Knife pleats in a matte satin that moves beautifully. Elasticated back waist for comfort, midi length, fully lined.' },

  { id:'poplin-shirt', brand:'Rails', name:'Cotton Poplin Oversized Shirt', price:168, cat:'tops', tags:['new'],
    imgA:'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80',
    imgB:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    desc:'A crisp cotton poplin shirt cut generously through the body with a dropped shoulder and a longer curved hem. Our most repurchased item.' },

  { id:'cleo-blazer', brand:'Veronica Beard', name:'The Cleo Dickey Blazer', price:598, cat:'outerwear', tags:['bestseller'],
    imgA:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80',
    imgB:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
    desc:'Our namesake jacket. Structured shoulder, nipped waist and a removable knit dickey so it works as a blazer or a layer. Stretch wool blend.' },

  { id:'cashmere-crew', brand:'Vince', name:'Boiled Cashmere Crewneck', price:325, cat:'tops', tags:['bestseller'],
    imgA:'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=900&q=80',
    imgB:'https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=900&q=80',
    desc:'Boiled cashmere with a dense, slightly felted hand that holds its shape. Relaxed body, ribbed cuffs and hem. Gets softer every wash.' },

  { id:'wide-trouser', brand:'Rails', name:'Wide Leg Tailored Trouser', price:228, cat:'bottoms', tags:['bestseller'],
    imgA:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    imgB:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    desc:'A high-rise wide leg in a fluid wool blend. Pressed crease, hook-and-bar closure, side pockets. Hemmed to wear with a heel or a flat.' },

  { id:'ruffle-dress', brand:'Ulla Johnson', name:'Ruffle Silk Wrap Dress', price:372, compareAt:495, cat:'dresses', tags:['bestseller','sale'],
    imgA:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    imgB:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    desc:'A true wrap dress in printed silk with a ruffled hem and a self-tie waist. Flattering on every shape we have tried it on.' },

  { id:'denim-jacket', brand:'Free People', name:'Cropped Denim Jacket', price:148, compareAt:210, cat:'outerwear', tags:['sale'],
    imgA:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
    imgB:'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80',
    desc:'A cropped, boxy trucker jacket in rigid non-stretch denim. Will break in beautifully and mould to you over the first month.' },

  { id:'ribbed-dress', brand:'Velvet', name:'Ribbed Knit Midi Dress', price:218, cat:'dresses', tags:[],
    imgA:'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    imgB:'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=900&q=80',
    desc:'A fine rib knit that skims the body without clinging. Scoop neck, long sleeve, midi length. Easy to dress up or down.' },

  { id:'silk-pant', brand:'Vince', name:'Silk Wide-Leg Pant', price:345, cat:'bottoms', tags:[],
    imgA:'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=900&q=80',
    imgB:'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=900&q=80',
    desc:'Pull-on silk trousers with an elasticated waist and a fluid wide leg. The most comfortable thing in the shop, honestly.' }
];

const BRAND_NAMES = ['Vince','Velvet','Ulla Johnson','Free People','Veronica Beard','Rails'];

/* ============================================================
   HELPERS
============================================================ */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const money = n => '$' + Number(n).toFixed(2);

function productCard(p) {
  const badge = p.tags.includes('bestseller')
    ? '<span class="badge badge-terra">Bestseller</span>'
    : p.tags.includes('sale')
      ? '<span class="badge">Sale</span>'
      : p.tags.includes('new')
        ? '<span class="badge badge-sand">New</span>'
        : '';

  const priceHtml = p.compareAt
    ? `<s>${money(p.compareAt)}</s> <span class="now">${money(p.price)}</span>`
    : money(p.price);

  return `
  <article class="product-card" data-card>
    <a class="card-media" href="#/product/${p.id}" aria-label="${p.name}">
      <img class="img-a" src="${p.imgA}" alt="${p.name}" data-w="800" data-h="1000" loading="lazy">
      <img class="img-b" src="${p.imgB}" alt="${p.name}, alternate view" data-w="800" data-h="1000" loading="lazy">
      ${badge}
    </a>
    <button class="wish" aria-label="Add ${p.name} to wishlist">
      <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.6-7-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.5C19 15.4 12 20 12 20z"/></svg>
    </button>
    <div class="card-info">
      <p class="card-brand">${p.brand}</p>
      <h3 class="card-name"><a href="#/product/${p.id}">${p.name}</a></h3>
      <p class="card-price price">${priceHtml}</p>
    </div>
  </article>`;
}

function selectProducts(mode, limit) {
  let list = PRODUCTS.slice();
  if (mode === 'new')        list = list.filter(p => p.tags.includes('new'));
  if (mode === 'bestseller') list = list.filter(p => p.tags.includes('bestseller'));
  if (mode === 'sale')       list = list.filter(p => p.tags.includes('sale'));
  if (mode === 'related')    list = list.sort(() => 0.5 - Math.random());
  if (limit) list = list.slice(0, Number(limit));
  return list;
}

/* ============================================================
   LENIS SMOOTH SCROLL
============================================================ */
let lenis = null;

function initLenis() {
  lenis = new Lenis({
    duration: 1.15,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.6,
    lerp: 0.09
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Anchor links inside pages
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href === '#' || href.startsWith('#/')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target, { offset: -80, duration: 1.3 });
  });
}

/* ============================================================
   MARQUEE
============================================================ */
function initMarquee(scope) {
  $$('[data-marquee]', scope).forEach(m => {
    const track = $('.marquee-track', m);
    if (!track || track.dataset.ready) return;
    track.dataset.ready = '1';
    const half = track.scrollWidth / 2;
    gsap.set(track, { x: 0 });
    gsap.to(track, {
      x: -half,
      duration: 26,
      ease: 'none',
      repeat: -1,
      modifiers: { x: gsap.utils.unitize(x => parseFloat(x) % half) }
    });
  });
}

/* ============================================================
   PAGE ANIMATIONS
============================================================ */

/* Generic scroll reveals */
function initReveals(scope) {
  $$('[data-reveal]', scope).forEach(el => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 1.05,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });

  $$('[data-reveal-stagger]', scope).forEach(el => {
    gsap.from(el.children, {
      y: 34,
      opacity: 0,
      duration: .9,
      ease: 'power3.out',
      stagger: .1,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });

  /* Generic grid stagger (product grids) */
  $$('[data-stagger]', scope).forEach(el => {
    const kids = el.querySelectorAll('[data-card], .review, .ig-item');
    if (!kids.length) return;
    gsap.from(kids, {
      y: 46,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: { each: .08, from: 'start' },
      scrollTrigger: { trigger: el, start: 'top 86%', once: true }
    });
  });
}

/* Parallax images */
function initParallax(scope) {
  $$('[data-parallax]', scope).forEach(img => {
    const wrap = img.closest('[data-parallax-wrap]') || img.parentElement;
    gsap.fromTo(img,
      { yPercent: -7, scale: 1.14 },
      {
        yPercent: 7,
        scale: 1.14,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  });
}

/* Marquee */
function initMarquees(scope) { initMarquee(scope); }

/* HOME hero */
function initHome(scope) {
  const heroImg = $('#heroImg', scope);
  if (heroImg) {
    gsap.fromTo(heroImg,
      { scale: 1, xPercent: 0, yPercent: 0 },
      { scale: 1.18, xPercent: -1.6, yPercent: -1.4, duration: 14, ease: 'none', repeat: -1, yoyo: true }
    );
  }

  /* Intro timeline */
  const tl = gsap.timeline({ delay: .15 });
  tl.from('[data-hero="eyebrow"]', { y: 24, opacity: 0, duration: .9, ease: 'power3.out' })
    .from('[data-hero="line"]', { yPercent: 115, duration: 1.15, ease: 'power4.out', stagger: .1 }, '-=.6')
    .from('[data-hero="sub"]', { y: 26, opacity: 0, duration: .9, ease: 'power3.out' }, '-=.7')
    .from('[data-hero="ctaItem"]', { y: 22, opacity: 0, duration: .8, ease: 'power3.out', stagger: .1 }, '-=.55')
    .from('[data-hero="meta"]', { opacity: 0, duration: .9, ease: 'power2.out', stagger: .12 }, '-=.6');

  /* Hero content parallax on scroll */
  gsap.to('.hero-content', {
    yPercent: 22,
    opacity: .25,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  gsap.to('.hero-media img', {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* Category blocks reveal */
  $$('.cat', scope).forEach((cat, i) => {
    gsap.from(cat.querySelector('.cat-inner'), {
      y: 40, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: cat, start: 'top 80%', once: true }
    });
    gsap.from(cat.querySelector('img'), {
      scale: 1.14, duration: 1.5, ease: 'power3.out',
      scrollTrigger: { trigger: cat, start: 'top 90%', once: true }
    });
  });

  /* Lookbook rows */
  $$('[data-look]', scope).forEach(look => {
    const img = look.querySelector('img');
    gsap.from(img, {
      scale: 1.18, duration: 1.6, ease: 'power3.out',
      scrollTrigger: { trigger: look, start: 'top 82%', once: true }
    });
  });

  /* Rail reveal */
  const rail = $('#newRail', scope);
  if (rail) {
    gsap.from(rail.querySelectorAll('[data-card]'), {
      x: 60, opacity: 0, duration: 1, ease: 'power3.out', stagger: .09,
      scrollTrigger: { trigger: rail, start: 'top 85%', once: true }
    });
  }
}

/* SHOP filters */
function initShop(scope) {
  const filters = $('[data-filters]', scope);
  const grid = $('.product-grid', scope);
  if (!filters || !grid) return;

  const countEl = $('[data-result-count]', scope);
  if (countEl) countEl.textContent = grid.children.length;

  filters.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $$('.chip', filters).forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const f = chip.dataset.filter;
    const cards = $$('[data-card]', grid);

    cards.forEach(card => {
      const id = card.querySelector('a').getAttribute('href').split('/').pop();
      const p = PRODUCTS.find(x => x.id === id);
      const show = f === 'all' || (p && p.cat === f);
      card.style.display = show ? '' : 'none';
    });

    const visible = cards.filter(c => c.style.display !== 'none');
    if (countEl) countEl.textContent = visible.length;

    gsap.fromTo(visible,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: .6, ease: 'power3.out', stagger: .05, overwrite: true }
    );

    ScrollTrigger.refresh();
  });
}

/* PRODUCT detail */
function initProduct(scope, param) {
  const root = $('#pdpRoot', scope);
  if (!root) return;

  const p = PRODUCTS.find(x => x.id === param) || PRODUCTS[0];
  const gallery = [p.imgA, p.imgB, p.imgA, p.imgB];

  root.innerHTML = `
    <div class="pdp-gallery">
      <div class="pdp-thumbs">
        ${gallery.map((src, i) => `
          <button class="pdp-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}" aria-label="View image ${i + 1}">
            <img src="${src}" alt="" data-w="200" data-h="260">
          </button>`).join('')}
      </div>
      <div class="pdp-main">
        ${gallery.map((src, i) => `
          <img class="${i === 0 ? 'active' : ''}" data-idx="${i}" src="${src}" alt="${p.name}" data-w="900" data-h="1200">`).join('')}
      </div>
    </div>

    <div class="pdp-info">
      <nav class="breadcrumb">
        <a href="#/">Home</a><span class="sep">/</span>
        <a href="#/shop">Shop</a><span class="sep">/</span>
        <span>${p.brand}</span>
      </nav>
      <p class="pdp-brand">${p.brand}</p>
      <h1>${p.name}</h1>
      <p class="pdp-price">
        ${p.compareAt ? `<s>${money(p.compareAt)}</s>` : ''}
        <span>${money(p.price)}</span>
      </p>
      <p class="pdp-desc">${p.desc}</p>

      <div class="opt-group">
        <span class="label">Size</span>
        <div class="opt-row" data-opts="size">
          ${['XS','S','M','L','XL'].map((s, i) => `<button class="opt ${i === 1 ? 'active' : ''}">${s}</button>`).join('')}
        </div>
      </div>

      <div class="opt-group">
        <span class="label">Colour</span>
        <div class="opt-row" data-opts="colour">
          ${['Ivory','Camel','Rust'].map((c, i) => `<button class="opt ${i === 0 ? 'active' : ''}">${c}</button>`).join('')}
        </div>
      </div>

      <div class="pdp-actions">
        <button class="btn btn-terra" id="addToBag">Add to Bag — ${money(p.price)}</button>
        <button class="btn btn-outline" id="pdpWish" style="flex:0 0 auto">♡</button>
      </div>

      <p style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)">
        Free shipping over $150 · 14-day returns on full price
      </p>

      <div class="pdp-meta">
        <div class="acc">
          <button class="acc-head">Details &amp; Care <span class="pm">+</span></button>
          <div class="acc-body"><p>Dry clean recommended, or hand wash cold and lay flat to dry. Do not tumble dry. Cool iron on reverse if needed.</p></div>
        </div>
        <div class="acc">
          <button class="acc-head">Shipping <span class="pm">+</span></button>
          <div class="acc-body"><p>Orders placed before 2pm CT ship the same business day from Nashville. Standard delivery 2–5 business days. Express available at checkout.</p></div>
        </div>
        <div class="acc">
          <button class="acc-head">Returns <span class="pm">+</span></button>
          <div class="acc-body"><p>Full-price items may be returned within 14 days of delivery, unworn and with tags attached. Sale items are final sale. In-store returns always welcome.</p></div>
        </div>
        <div class="acc">
          <button class="acc-head">Need Help? <span class="pm">+</span></button>
          <div class="acc-body"><p>Call the boutique on (615) 555-0142, Mon–Sat 10–6 CT, or send us a note through the contact page — a real person will reply.</p></div>
        </div>
      </div>
    </div>
  `;

  /* Gallery switching */
  const mainImgs = $$('.pdp-main img', root);
  $$('.pdp-thumb', root).forEach(btn => {
    btn.addEventListener('click', () => {
      const i = btn.dataset.idx;
      $$('.pdp-thumb', root).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      mainImgs.forEach(img => img.classList.toggle('active', img.dataset.idx === i));
      gsap.fromTo(mainImgs[i], { scale: 1.06 }, { scale: 1, duration: .9, ease: 'power3.out' });
    });
  });

  /* Option selection */
  $$('[data-opts]', root).forEach(group => {
    group.addEventListener('click', e => {
      const opt = e.target.closest('.opt');
      if (!opt) return;
      $$('.opt', group).forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });

  /* Accordion */
  $$('.acc', root).forEach(acc => {
    const head = $('.acc-head', acc);
    const body = $('.acc-body', acc);
    head.addEventListener('click', () => {
      const open = acc.classList.toggle('open');
      gsap.to(body, { maxHeight: open ? body.scrollHeight + 20 : 0, duration: .45, ease: 'power2.out' });
    });
  });

  /* Add to bag */
  $('#addToBag', root).addEventListener('click', () => {
    addToCart(p);
  });

  $('#pdpWish', root).addEventListener('click', function () {
    this.classList.toggle('active');
    toggleWish(this.classList.contains('active') ? 1 : -1);
  });

  /* Intro animation */
  gsap.from('.pdp-gallery', { x: -40, opacity: 0, duration: 1, ease: 'power3.out' });
  gsap.from('.pdp-info > *', { y: 26, opacity: 0, duration: .9, ease: 'power3.out', stagger: .07, delay: .1 });
}

/* Contact form */
function initContact(scope) {
  const form = $('#contactForm', scope);
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#cName', form).value.trim();
    const email = $('#cEmail', form).value.trim();
    const msg = $('#cMessage', form).value.trim();
    const note = $('#contactNote', scope);
    const ok = name && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && msg;

    note.textContent = ok ? 'Thank you — we will reply within one business day.' : 'Please complete all required fields.';
    note.style.color = ok ? '' : '#C4622D';
    note.classList.add('show');

    if (ok) {
      form.reset();
      showToast('Message sent');
      setTimeout(() => note.classList.remove('show'), 5000);
    }
  });
}

/* Map of route → page init */
const PAGE_INITS = {
  home: initHome,
  shop: initShop,
  'new-arrivals': null,
  brands: null,
  sale: null,
  about: null,
  contact: initContact,
  product: initProduct
};

/* ============================================================
   HYDRATION (product grids, marquees, etc.)
============================================================ */
function hydrate(scope, route, param) {
  /* Product containers */
  $$('[data-products]', scope).forEach(el => {
    const mode = el.dataset.products;
    const limit = el.dataset.limit;
    const items = selectProducts(mode, limit);
    el.innerHTML = items.map(productCard).join('');
  });

  /* Result counts */
  $$('[data-result-count]', scope).forEach(el => {
    const grid = el.closest('header')?.parentElement?.querySelector('.product-grid');
    if (grid) el.textContent = grid.children.length;
  });

  /* Wishlist buttons inside freshly injected cards */
  $$('.wish', scope).forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const active = btn.classList.toggle('active');
      toggleWish(active ? 1 : -1);
      showToast(active ? 'Saved to wishlist' : 'Removed from wishlist');
    });
  });
}

/* ============================================================
   CART
============================================================ */
const cart = [
  { id:'cleo-blazer', qty:1 },
  { id:'cashmere-crew', qty:1 }
];

function cartProduct(id) { return PRODUCTS.find(p => p.id === id); }

function renderCart() {
  const wrap = $('#cartItems');
  const totalEl = $('#cartTotal');
  const countEl = $('#cartCount');
  const floatEl = $('#floatCartCount');

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  countEl.textContent = totalQty;
  if (floatEl) floatEl.textContent = totalQty;

  if (!cart.length) {
    wrap.innerHTML = '<div class="cart-empty">Your bag is empty.<br>Time to find something good.</div>';
    totalEl.textContent = money(0);
    return;
  }

  wrap.innerHTML = cart.map(item => {
    const p = cartProduct(item.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <img src="${p.imgA}" alt="${p.name}" data-w="160" data-h="200">
        <div>
          <p class="ci-brand">${p.brand}</p>
          <p class="ci-name">${p.name}</p>
          <p class="price" style="color:var(--muted)">${money(p.price)}</p>
          <div class="ci-row">
            <div class="qty">
              <button data-qty="-1" data-id="${p.id}" aria-label="Decrease quantity">−</button>
              <span>${item.qty}</span>
              <button data-qty="1" data-id="${p.id}" aria-label="Increase quantity">+</button>
            </div>
            <button class="ci-remove" data-remove="${p.id}">Remove</button>
          </div>
        </div>
      </div>`;
  }).join('');

  const total = cart.reduce((s, i) => {
    const p = cartProduct(i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
  totalEl.textContent = money(total);

  /* Wire quantity + remove */
  $$('[data-qty]', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const delta = Number(btn.dataset.qty);
      const item = cart.find(i => i.id === id);
      if (!item) return;
      item.qty += delta;
      if (item.qty <= 0) cart.splice(cart.indexOf(item), 1);
      renderCart();
    });
  });

  $$('[data-remove]', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = cart.findIndex(i => i.id === btn.dataset.remove);
      if (idx > -1) cart.splice(idx, 1);
      renderCart();
      showToast('Removed from bag');
    });
  });
}

function addToCart(p) {
  const existing = cart.find(i => i.id === p.id);
  if (existing) existing.qty += 1;
  else cart.push({ id: p.id, qty: 1 });
  renderCart();
  openCart();
  showToast('Added to bag');
}

function openCart() {
  document.body.classList.add('cart-open', 'no-scroll');
  if (lenis) lenis.stop();
  $('#cartDrawer').setAttribute('aria-hidden', 'false');
}
function closeCart() {
  document.body.classList.remove('cart-open', 'no-scroll');
  if (lenis) lenis.start();
  $('#cartDrawer').setAttribute('aria-hidden', 'true');
}

/* ============================================================
   WISHLIST
============================================================ */
let wishTotal = 0;
function toggleWish(delta) {
  wishTotal = Math.max(0, wishTotal + delta);
  const el = $('#wishCount');
  el.textContent = wishTotal;
  el.style.display = wishTotal > 0 ? '' : 'none';
}

/* ============================================================
   TOAST
============================================================ */
let toastTl = null;
function showToast(text) {
  const toast = $('#toast');
  $('#toastText').textContent = text;
  if (toastTl) toastTl.kill();
  toastTl = gsap.timeline()
    .to(toast, { y: 0, duration: .5, ease: 'power3.out' })
    .to(toast, { y: '140%', duration: .45, ease: 'power3.in' }, '+=2');
}
/* Set toast base transform */
gsap.set('#toast', { y: '140%', xPercent: -50 });

/* ============================================================
   ROUTER + PAGE TRANSITIONS
============================================================ */
const app = document.getElementById('app');
const transitionEl = document.getElementById('transition');
const panels = $$('#transition span');
const tMark = $('.t-mark');

let isTransitioning = false;
let currentRoute = null;

function parseHash() {
  const h = location.hash || '#/';
  if (!h.startsWith('#/')) return null;
  const parts = h.slice(2).split('/').filter(Boolean);
  return { route: parts[0] || 'home', param: parts[1] || null };
}

function updateNavActive(route) {
  $$('.nav-left a').forEach(a => {
    a.classList.toggle('active', a.dataset.route === route);
  });
  $$('.drawer-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.route === route);
  });
}

function renderPage(route, param) {
  const tpl = document.getElementById('page-' + route) || document.getElementById('page-home');
  app.innerHTML = '';
  app.appendChild(tpl.content.cloneNode(true));

  /* Scroll to top instantly */
  window.scrollTo(0, 0);
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });

  /* Kill old scroll triggers */
  ScrollTrigger.getAll().forEach(t => t.kill());

  /* Hydrate dynamic content */
  hydrate(app, route, param);

  /* Page-specific init */
  const init = PAGE_INITS[route];
  if (typeof init === 'function') init(app, param);

  /* Global page animations */
  initReveals(app);
  initParallax(app);
  initMarquees(app);

  /* Refresh after paint + image loads */
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
    setTimeout(ScrollTrigger.refresh, 320);
    setTimeout(ScrollTrigger.refresh, 900);
  });

  updateNavActive(route);
  document.title = pageTitle(route, param);
  currentRoute = route;
}

function pageTitle(route, param) {
  const base = 'Maison Cleo';
  if (route === 'home') return `${base} — Curated Women's Fashion | Nashville, TN`;
  if (route === 'product') {
    const p = PRODUCTS.find(x => x.id === param);
    return p ? `${p.name} — ${p.brand} | ${base}` : `Product | ${base}`;
  }
  const names = {
    shop: 'Shop All',
    'new-arrivals': 'New Arrivals',
    brands: 'Curated Brands',
    sale: 'Sale',
    about: 'Our Story',
    contact: 'Contact'
  };
  return `${names[route] || 'Maison Cleo'} — ${base}`;
}

/* ---- Transition animation ---- */
function transitionTo(route, param, isFirst) {
  if (isTransitioning) return;
  isTransitioning = true;

  if (lenis) lenis.stop();

  const tl = gsap.timeline({
    onComplete() {
      isTransitioning = false;
      if (lenis) lenis.start();
    }
  });

  tl.set(transitionEl, { pointerEvents: 'auto' })
    .set(panels, { yPercent: 101 })
    .to(tMark, { opacity: 1, duration: .35, ease: 'power2.out' }, 0.1)
    .to(panels, {
      yPercent: 0,
      duration: .62,
      ease: 'power4.inOut',
      stagger: { each: .055 }
    }, 0)
    .add(() => {
      renderPage(route, param);
    }, '-=0.12')
    .to(tMark, { opacity: 0, duration: .3, ease: 'power2.in' }, '+=0.12')
    .to(panels, {
      yPercent: -101,
      duration: .66,
      ease: 'power4.inOut',
      stagger: { each: .055 }
    }, '-=0.18')
    .set(panels, { yPercent: 101 })
    .set(transitionEl, { pointerEvents: 'none' });
}

/* ---- Router handler ---- */
function handleRoute(isFirst) {
  const parsed = parseHash();

  if (!parsed) {
    /* In-page anchor — let Lenis handle it */
    return;
  }

  const { route, param } = parsed;
  if (!isFirst && route === currentRoute && route !== 'product') {
    if (lenis) lenis.scrollTo(0, { duration: 1 });
    return;
  }

  transitionTo(route, param, isFirst);
}

/* ---- Intro (first load) ---- */
function playIntro() {
  const tl = gsap.timeline({
    onComplete() {
      ScrollTrigger.refresh();
    }
  });

  tl.set(transitionEl, { pointerEvents: 'auto' })
    .to(tMark, { opacity: 1, duration: .4, ease: 'power2.out' }, 0)
    .to(panels, {
      yPercent: -101,
      duration: .85,
      ease: 'power4.inOut',
      stagger: { each: .06 }
    }, 0.45)
    .to(tMark, { opacity: 0, duration: .3 }, 0.5)
    .set(panels, { yPercent: 101 })
    .set(transitionEl, { pointerEvents: 'none' });

  /* Animate the home page in behind the curtain */
  renderPage('home', null);
  currentRoute = 'home';
  document.title = pageTitle('home');
}

/* ============================================================
   HEADER HIDE ON SCROLL
============================================================ */
function initHeaderBehaviour() {
  const header = $('#siteHeader');
  let lastY = window.scrollY;

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('solid', y > 20);
    if (y > 220 && y > lastY + 4) header.classList.add('hide');
    else if (y < lastY - 4) header.classList.remove('hide');
    lastY = y;
  };

  if (lenis) lenis.on('scroll', ({ scroll }) => {
    header.classList.toggle('solid', scroll > 20);
    if (scroll > 240 && scroll > lastY + 4) header.classList.add('hide');
    else if (scroll < lastY - 4) header.classList.remove('hide');
    lastY = scroll;
  });
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ============================================================
   UI WIRING
============================================================ */
function initUI() {
  /* Mobile menu */
  const burger = $('.hamburger');
  const closeBtn = $('.drawer-close');
  const drawer = $('#mobileMenu');

  burger.addEventListener('click', () => {
    document.body.classList.add('menu-open', 'no-scroll');
    if (lenis) lenis.stop();
    burger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
  });

  function closeMenu() {
    document.body.classList.remove('menu-open', 'no-scroll');
    if (lenis) lenis.start();
    burger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }
  closeBtn.addEventListener('click', closeMenu);
  $$('.drawer-links a', drawer).forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  /* Cart drawer */
  $('#cartBtn').addEventListener('click', openCart);
  $('#floatCart').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  $('#cartScrim').addEventListener('click', closeCart);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

  $('#checkoutBtn').addEventListener('click', () => {
    if (!cart.length) { showToast('Your bag is empty'); return; }
    showToast('Checkout coming soon');
  });

  /* Newsletter forms (global — re-wired after each page render) */
  document.addEventListener('submit', e => {
    const form = e.target.closest('[data-newsform], #footerForm');
    if (!form) return;
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const note = form.parentElement.querySelector('.form-note');
    const value = (input.value || '').trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

    if (note) {
      note.textContent = valid ? 'Thank you — you are on the list.' : 'Please enter a valid email address.';
      note.style.color = valid ? '' : '#C4622D';
      note.classList.add('show');
    }
    if (valid) {
      form.reset();
      showToast('Subscribed');
      setTimeout(() => note && note.classList.remove('show'), 5000);
    }
  });

  /* Search button */
  $('#searchBtn').addEventListener('click', () => {
    showToast('Search coming soon');
  });

  /* Route links — let the hashchange handler do the work */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#/"]');
    if (!a) return;
    /* If already on the same hash, force a scroll-to-top */
    if (a.getAttribute('href') === location.hash) {
      e.preventDefault();
      if (lenis) lenis.scrollTo(0, { duration: 1 });
    }
  });
}

/* ============================================================
   BOOT
============================================================ */
function boot() {
  gsap.registerPlugin(ScrollTrigger);
  initLenis();
  initHeaderBehaviour();
  initUI();
  renderCart();

  /* First paint: run intro */
  playIntro();

  /* Route changes */
  window.addEventListener('hashchange', () => handleRoute(false));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

/* Refresh triggers when images finish loading */
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
  setTimeout(ScrollTrigger.refresh, 400);
});