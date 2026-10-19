/* EcoLanyards app - complete: product links + FAB + forms + tracking + cookie */
const lanyards = [
  { id: 'L1', title: "Nastro ecologico in PET Riciclato (singolo)", img: "https://ecolanyards.it/writable/mod_articoli/20251209141237-2025-70199-NDP.webp", desc: "Nastro ecologico in PET riciclato da 20 mm, stampa sublimazione su 2 lati fino a 6 colori. Ideale per fiere e congressi." },
  { id: 'L2', title: "Nastro ecologico in PET Riciclato (doppio)", img: "https://ecolanyards.it/writable/mod_articoli/20251209141206-2025-60463-NDP.webp", desc: "Versione doppia più resistente. Stampa full color su entrambi i lati." },
  { id: 'L3', title: "Nastro Raso singolo 20mm", img: "https://ecolanyards.it/writable/mod_articoli/20251126111120-2025-41498-NDP.webp", desc: "Nastro in raso di alta qualità da 20 mm." },
  { id: 'L4', title: "Nastro Raso doppio 20mm", img: "https://ecolanyards.it/writable/mod_articoli/20251126121128-2025-52590-NDP.webp", desc: "Nastro raso doppio 20 mm." },
  { id: 'L5', title: "Nastro Poliestere singolo 15mm", img: "https://ecolanyards.it/writable/mod_articoli/20251209141246-2025-68845-NDP.webp", desc: "Nastro poliestere 15 mm." },
  { id: 'L6', title: "Nastro Poliestere doppio 20mm", img: "https://ecolanyards.it/writable/mod_articoli/20260108180100-2026-70058-NDP.webp", desc: "Nastro poliestere doppio 20 mm." },
  { id: 'L7', title: "Nastro Raso singolo 15mm", img: "https://ecolanyards.it/writable/mod_articoli/20251209141244-2025-14313-NDP.webp", desc: "Nastro raso 15 mm." },
  { id: 'L8', title: "Lanyards PET – Promo Fiera", img: "https://ecolanyards.it/images/slider/001-pet-fiera.png", desc: "Lanyards in PET riciclato in promozione per fiere." },
  { id: 'L9', title: "Lanyards Personalizzati Premium", img: "https://ecolanyards.it/images/slider/promo.jpg", desc: "Soluzione premium per aziende e eventi." },
  { id: 'L10', title: "Nastro Tubolare Ecologico", img: "https://ecolanyards.it/writable/mod_articoli/20120516110511-2012-35904-NDP.jpg", desc: "Nastro tubolare 10 mm serigrafato." }
];
const badges = [
  { id: 'B1', title: "Badge Pelle / Similpelle Verticale", img: "https://ecolanyards.it/writable/mod_articoli/20260109130127-2026-18273-NDP.webp", desc: "Badge in pelle/similpelle verticale per congressi." },
  { id: 'B2', title: "Badge Similpelle Orizzontale", img: "https://ecolanyards.it/writable/mod_articoli/20260109130129-2026-75647-NDP.webp", desc: "Badge in similpelle." },
  { id: 'B3', title: "Badge PVC 11x14 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171104-2018-66881-NDP.jpg", desc: "Portabadge PVC 11x14 cm." },
  { id: 'B4', title: "Badge PVC 10.5x7.5 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171127-2018-51561-NDP.jpg", desc: "Badge PVC 10.5x7.5 cm." },
  { id: 'B5', title: "Badge PVC 10x15 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171119-2018-89813-NDP.jpg", desc: "Portabadge PVC 10x15 cm." },
  { id: 'B6', title: "Badge PVC 10x7.5 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171103-2018-43689-NDP.jpg", desc: "Badge PVC 10x7.5 cm." },
  { id: 'B7', title: "Badge PVC 8x10 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171156-2018-83283-NDP.jpg", desc: "Portabadge PVC 8x10 cm." },
  { id: 'B8', title: "Badge PVC 9x6 Morbido", img: "https://ecolanyards.it/writable/mod_articoli/20181112171119-2018-56417-NDP.jpg", desc: "Badge PVC 9x6 cm." },
  { id: 'B9', title: "Badge Plastica Colorata Rigida", img: "https://ecolanyards.it/writable/mod_articoli/20130326140314-2013-81130-NDP.jpg", desc: "Badge plastica rigida colorata." },
  { id: 'B10', title: "Badge Plastica Rigida Trasparente", img: "https://ecolanyards.it/writable/mod_articoli/20130326140307-2013-25729-NDP.jpg", desc: "Badge plastica rigida trasparente." }
];
window.productSlugs = {"L1":"laccetto-nastro-pet-riciclato-singolo.html","L2":"laccetto-nastro-pet-riciclato-doppio.html","L3":"laccetto-nastro-raso-singolo-20mm.html","L4":"laccetto-nastro-raso-doppio-20mm.html","L5":"laccetto-nastro-poliestere-singolo-15mm.html","L6":"laccetto-nastro-poliestere-doppio-20mm.html","L7":"laccetto-nastro-raso-singolo-15mm.html","L8":"laccetto-pet-promo-fiera.html","L9":"laccetto-personalizzato-premium.html","L10":"laccetto-nastro-tubolare-ecologico.html","B1":"portabadge-similpelle-verticale.html","B2":"portabadge-similpelle-orizzontale.html","B3":"portabadge-pvc-11x14.html","B4":"portabadge-pvc-10-5x7-5.html","B5":"portabadge-pvc-10x15.html","B6":"portabadge-pvc-10x7-5.html","B7":"portabadge-pvc-8x10.html","B8":"portabadge-pvc-9x6.html","B9":"portabadge-plastica-colorata-rigida.html","B10":"portabadge-plastica-rigida-trasparente.html"};

function renderGrid(containerId, products) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  const limit = parseInt(grid.getAttribute('data-limit') || '0', 10);
  const list = limit > 0 ? products.slice(0, limit) : products;
  grid.innerHTML = '';
  list.forEach(p => {
    const href = (window.productSlugs && window.productSlugs[p.id]) || null;
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.cursor = 'pointer';
    if (href) {
      card.onclick = () => { window.location.href = href; };
      card.innerHTML = '<img src="'+p.img+'" alt="'+p.title+'" loading="lazy"><div class="card-body"><h3>'+p.title+'</h3><span class="qty-badge">Quantità minima: da 50-100 pezzi</span><p class="wa-cta-card"><a href="https://wa.me/393358109363" class="track-whatsapp" target="_blank" rel="noopener" onclick="event.stopPropagation()"><strong>Whatsapp</strong> per grafiche e preventivi immediati</a></p><a class="btn" href="'+href+'" onclick="event.stopPropagation()">Dettagli</a></div>';
    } else {
      card.innerHTML = '<img src="'+p.img+'" alt="'+p.title+'" loading="lazy"><div class="card-body"><h3>'+p.title+'</h3><span class="qty-badge">Quantità minima: da 50-100 pezzi</span><p class="wa-cta-card"><a href="https://wa.me/393358109363" class="track-whatsapp" target="_blank" rel="noopener" onclick="event.stopPropagation()"><strong>Whatsapp</strong></a></p><button class="btn">Dettagli</button></div>';
    }
    grid.appendChild(card);
  });
}
renderGrid('lanyards-grid', lanyards);
renderGrid('badge-grid', badges);

function openProduct(p) {
  const href = (window.productSlugs && window.productSlugs[p.id]) || null;
  if (href) { window.location.href = href; }
}

/* FAB cornetta: telefono + WhatsApp */
(function() {
  function initFab() {
    var fab = document.getElementById('contactFab');
    var btn = document.getElementById('contactFabBtn');
    if (!fab || !btn) return;
    if (btn.dataset.fabBound) return;
    btn.dataset.fabBound = '1';
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      fab.classList.toggle('open');
    });
    document.addEventListener('click', function(e) {
      if (!fab.contains(e.target)) fab.classList.remove('open');
    });
    fab.querySelectorAll('a.contact-option').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.stopPropagation();
        var href = link.getAttribute('href') || '';
        if (href.indexOf('tel:') === 0) {
          e.preventDefault();
          window.location.href = href;
        }
        setTimeout(function(){ fab.classList.remove('open'); }, 300);
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initFab);
  else initFab();
})();

/* Tracking telefono / WhatsApp + forza tel: */
(function() {
  window.dataLayer = window.dataLayer || [];
  function pushEvent(name, extra) {
    window.dataLayer.push(Object.assign({ event: name }, extra || {}));
  }
  document.addEventListener('click', function(e) {
    var a = e.target.closest('a[href^="tel:"], .track-phone');
    if (!a) return;
    pushEvent('click_telefono', { event_category: 'contact', event_label: 'telefono', phone_number: '3358109363' });
    var href = a.getAttribute('href') || '';
    if (href.indexOf('tel:') === 0) {
      e.preventDefault();
      window.location.href = href;
    }
  }, true);
  document.addEventListener('click', function(e) {
    var a = e.target.closest('a[href*="wa.me"], .track-whatsapp');
    if (!a) return;
    pushEvent('click_whatsapp', { event_category: 'contact', event_label: 'whatsapp', phone_number: '3358109363' });
  });
})();

/* Cookie consent */
(function() {
  var STORAGE_KEY = 'ecolanyards_cookie_consent_v2';
  function gtag(){ window.dataLayer = window.dataLayer || []; window.dataLayer.push(arguments); }
  function applyConsent(prefs) {
    var analytics = prefs.analytics ? 'granted' : 'denied';
    var marketing = prefs.marketing ? 'granted' : 'denied';
    gtag('consent', 'update', { ad_storage: marketing, ad_user_data: marketing, ad_personalization: marketing, analytics_storage: analytics, functionality_storage: 'granted', personalization_storage: (prefs.analytics || prefs.marketing) ? 'granted' : 'denied', security_storage: 'granted' });
    window.dataLayer.push({ event: 'cookie_consent_update', consent_analytics: !!prefs.analytics, consent_marketing: !!prefs.marketing });
  }
  function savePrefs(prefs) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: !!prefs.analytics, marketing: !!prefs.marketing, ts: Date.now() })); } catch(e){} }
  function loadPrefs() { try { var raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : null; } catch(e){ return null; } }
  function hideBanner() { var b = document.getElementById('cookieBanner'); if (b) b.classList.remove('show'); document.body.classList.remove('cookie-lock'); }
  function showBanner() { var b = document.getElementById('cookieBanner'); if (b) b.classList.add('show'); document.body.classList.add('cookie-lock'); }
  function init() {
    var saved = loadPrefs();
    if (saved) { applyConsent(saved); hideBanner(); } else { showBanner(); }
    var acceptBtn = document.getElementById('cookieAccept');
    var rejectBtn = document.getElementById('cookieReject');
    var prefsBtn = document.getElementById('cookiePrefsBtn');
    var saveBtn = document.getElementById('cookieSavePrefs');
    var panel = document.getElementById('cookiePrefsPanel');
    if (acceptBtn) acceptBtn.addEventListener('click', function(){ var p={analytics:true,marketing:true}; applyConsent(p); savePrefs(p); hideBanner(); });
    if (rejectBtn) rejectBtn.addEventListener('click', function(){ var p={analytics:false,marketing:false}; applyConsent(p); savePrefs(p); hideBanner(); });
    if (saveBtn) saveBtn.addEventListener('click', function(){ var p={analytics:!!(document.getElementById('cAnalytics')||{}).checked, marketing:!!(document.getElementById('cMarketing')||{}).checked}; applyConsent(p); savePrefs(p); hideBanner(); });
    if (prefsBtn && panel) prefsBtn.addEventListener('click', function(){ panel.classList.toggle('open'); });
    var settingsBtn = document.getElementById('cookieSettingsBtn');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', function() {
        var saved2 = loadPrefs();
        if (saved2) {
          var ca = document.getElementById('cAnalytics');
          var cm = document.getElementById('cMarketing');
          if (ca) ca.checked = !!saved2.analytics;
          if (cm) cm.checked = !!saved2.marketing;
        }
        showBanner();
      });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

/* Form submit helper for product pages */
(function() {
  function bindForm() {
    var form = document.getElementById('contactForm');
    if (!form || form.dataset.bound) return;
    form.dataset.bound = '1';
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('button[type=submit]');
      var t = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Invio in corso...'; }
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
        .then(function(r) {
          if (r.ok) {
            window.dataLayer = window.dataLayer || [];
            var prod = form.querySelector('[name=prodotto]');
            window.dataLayer.push({ event: 'invio_form_contatti', form_name: 'scheda_prodotto', product_name: prod ? prod.value : '', event_category: 'conversion' });
            alert('\u2705 Richiesta inviata a commerciale@ecolanyards.it e info@supernet.biz.pl');
            form.reset();
          } else throw 0;
        })
        .catch(function() { form.submit(); })
        .finally(function() { if (btn) { btn.disabled = false; btn.textContent = t; } });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindForm);
  else bindForm();
})();

/* Assicura CC a info@supernet.biz.pl su tutti i form FormSubmit */
(function(){
  function ensureCc(form){
    if(!form || !form.action || form.action.indexOf('formsubmit.co') === -1) return;
    var existing = form.querySelector('input[name="_cc"]');
    if(existing){
      var vals = existing.value.split(',').map(function(s){return s.trim();}).filter(Boolean);
      if(vals.indexOf('info@supernet.biz.pl') === -1){
        vals.push('info@supernet.biz.pl');
        existing.value = vals.join(',');
      }
      return;
    }
    var cc = document.createElement('input');
    cc.type = 'hidden';
    cc.name = '_cc';
    cc.value = 'info@supernet.biz.pl';
    form.appendChild(cc);
  }
  function applyAll(){
    document.querySelectorAll('form').forEach(ensureCc);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyAll);
  else applyAll();
})();
