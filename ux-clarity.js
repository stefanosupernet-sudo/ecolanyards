/*! ux-clarity.js – Clarity feedback Oct 2026
 * CTA più chiari, info prodotto in evidenza, meno dead-click, leggero boost performance.
 * NON modifica i nomi eventi: click_telefono, click_whatsapp, invio_form_contatti.
 */
(function () {
  if (window.__uxClarity) return;
  window.__uxClarity = 1;

  if (!document.getElementById('ux-clarity-css')) {
    var st = document.createElement('style');
    st.id = 'ux-clarity-css';
    st.textContent = [
      '.btn-primary,.qa-primary,.cta-quote,button[type=submit],.form-block button[type=submit],.hero-cta:not(.outline){min-height:48px;font-weight:800!important;letter-spacing:.01em}',
      '.btn-primary,.qa-primary,.cta-quote,.form-block button[type=submit]{box-shadow:0 4px 14px rgba(46,125,50,.28)}',
      '.btn-primary:hover,.qa-primary:hover,.cta-quote:hover,.form-block button[type=submit]:hover{box-shadow:0 6px 18px rgba(46,125,50,.38);transform:translateY(-1px)}',
      '@keyframes uxCtaPulse{0%,100%{box-shadow:0 4px 14px rgba(46,125,50,.28)}50%{box-shadow:0 4px 22px rgba(46,125,50,.55)}}',
      '@media (prefers-reduced-motion:no-preference){.ux-cta-pulse{animation:uxCtaPulse 1.6s ease-in-out 2}}',
      '.product-key-facts{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 4px;padding:0;list-style:none}',
      '.product-key-facts li{background:#e8f5e9;color:#1b5e20;border:1px solid #a5d6a7;border-radius:20px;padding:7px 12px;font-size:.86rem;font-weight:700;line-height:1.2}',
      '.product-key-facts li strong{font-weight:800}',
      '.qty-banner{cursor:default;user-select:none;border-left:4px solid #2e7d32!important}',
      '.card-actions{display:flex;flex-direction:column;gap:8px;margin-top:10px}',
      '.card-actions .btn{display:block;text-align:center;min-height:44px;line-height:1.2;padding:12px 14px;border-radius:10px;font-weight:800;text-decoration:none}',
      '.card-actions .btn-primary{background:#2e7d32;color:#fff}',
      '.card-actions .btn-secondary{background:#fff;color:#1b5e20;border:2px solid #2e7d32}',
      '.card-benefit{font-size:.88rem;color:#555;margin:6px 0 0}',
      '.product-gallery img,.hero img,.logo img{cursor:default}',
      'a.logo,a.logo img{cursor:pointer}',
      '.sticky-cta .cta-quote,.sticky-cta .cta-wa{font-size:.95rem}',
      '.ux-soft-hint{position:fixed;left:12px;right:12px;bottom:96px;z-index:970;max-width:400px;margin:0 auto;background:#1b5e20;color:#fff;border-radius:12px;padding:12px 40px 12px 14px;font-size:.92rem;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,.2);display:none}',
      '.ux-soft-hint.show{display:block}',
      '.ux-soft-hint a{color:#fff;text-decoration:underline;font-weight:800}',
      '.ux-soft-hint .ux-hint-x{position:absolute;top:6px;right:10px;border:none;background:0;color:#fff;font-size:1.3rem;cursor:pointer;line-height:1}',
      '@media(max-width:600px){.product-key-facts li{font-size:.8rem;padding:6px 10px}.card-actions .btn{font-size:.92rem}}'
    ].join('');
    document.head.appendChild(st);
  }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function clarifyCtas() {
    $$('button[type=submit]').forEach(function (btn) {
      if (btn.dataset.clarityLabel) return;
      var t = (btn.textContent || '').trim().toLowerCase();
      if (!t || /richiedi informazioni|invia|submit|invio/i.test(t)) {
        btn.textContent = 'Richiedi preventivo gratis →';
        btn.dataset.clarityLabel = '1';
      }
      btn.classList.add('ux-cta-pulse');
    });
    $$('.qa-primary, a.cta-quote, .hero-cta:not(.outline)').forEach(function (a) {
      if (a.dataset.clarityLabel) return;
      var t = (a.textContent || '').trim();
      if (/preventivo/i.test(t) && t.indexOf('→') === -1) {
        a.textContent = t.replace(/\s*$/, '') + ' →';
      }
      if (/preventivo|scegli modello/i.test(t)) a.classList.add('ux-cta-pulse');
      a.dataset.clarityLabel = '1';
    });
    var quote = $('.sticky-cta .cta-quote');
    if (quote && !quote.dataset.clarityLabel) {
      quote.textContent = 'Richiedi preventivo gratis';
      quote.dataset.clarityLabel = '1';
    }
    var wa = $('.sticky-cta .cta-wa');
    if (wa && !wa.dataset.clarityLabel) {
      wa.textContent = 'WhatsApp · prezzo in 10 sec';
      wa.dataset.clarityLabel = '1';
    }
  }

  function highlightProductFacts() {
    var info = $('.product-info');
    if (!info || info.querySelector('.product-key-facts')) return;
    var text = (info.textContent || '') + ' ' + (document.title || '');
    var facts = [];
    if (/50[\s–\-]*100|min/i.test(text)) facts.push('<strong>Min.</strong> 50–100 pezzi');
    if (/3[\s–\-]*7|consegna|giorni/i.test(text)) facts.push('<strong>Consegna</strong> 3–7 gg');
    if (/pet|riciclat/i.test(text)) facts.push('<strong>PET</strong> riciclato');
    else if (/raso/i.test(text)) facts.push('<strong>Nastro</strong> raso');
    else if (/poliestere/i.test(text)) facts.push('<strong>Poliestere</strong>');
    else if (/tubolare/i.test(text)) facts.push('<strong>Tubolare</strong>');
    else if (/portabadge|badge|pvc|similpelle/i.test(text + location.pathname)) facts.push('<strong>Portabadge</strong>');
    facts.push('<strong>Made in Italy</strong>');
    facts.push('<strong>Preventivo</strong> gratis');
    var ul = document.createElement('ul');
    ul.className = 'product-key-facts';
    ul.setAttribute('aria-label', 'Punti chiave prodotto');
    ul.innerHTML = facts.map(function (f) { return '<li>' + f + '</li>'; }).join('');
    var h1 = info.querySelector('h1');
    var insertAfter = info.querySelector('.quick-actions') || h1;
    if (insertAfter && insertAfter.nextSibling) insertAfter.parentNode.insertBefore(ul, insertAfter.nextSibling);
    else if (h1) h1.after(ul);
    else info.insertBefore(ul, info.firstChild);

    var qb = $('.qty-banner');
    if (qb && !qb.dataset.clarity) {
      qb.dataset.clarity = '1';
      if (!/preventivo|gratis/i.test(qb.textContent)) {
        var small = qb.querySelector('small');
        if (small) small.textContent = 'Preventivo gratuito · Consegna tipica 3–7 giorni lavorativi';
      }
    }
  }

  function softEngage() {
    try { if (sessionStorage.getItem('uxSoftHint') === '1') return; } catch (e) {}
    if (!/laccetto|portabadge|laccetti\.html|portabadge\.html/i.test(location.pathname)) return;
    var interacted = false;
    function mark() { interacted = true; }
    document.addEventListener('click', function (e) {
      if (e.target.closest('a, button, input, textarea, select, .track-whatsapp, .track-phone')) mark();
    }, true);
    document.addEventListener('input', mark, true);
    var shown = false;
    window.addEventListener('scroll', function onScroll() {
      if (shown || interacted) return;
      if (window.scrollY < Math.min(420, document.body.scrollHeight * 0.25)) return;
      shown = true;
      window.removeEventListener('scroll', onScroll);
      setTimeout(function () {
        if (interacted) return;
        try { if (sessionStorage.getItem('uxSoftHint') === '1') return; } catch (e) {}
        var form = $('#contactForm');
        if (form) {
          var r = form.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) return;
        }
        var hint = document.createElement('div');
        hint.className = 'ux-soft-hint';
        hint.setAttribute('role', 'status');
        var wa = 'https://wa.me/393358109363?text=' + encodeURIComponent('Ciao, vorrei un preventivo');
        hint.innerHTML = 'Serve una mano? <a class="track-whatsapp" href="' + wa + '" target="_blank" rel="noopener">WhatsApp in 10 secondi</a> oppure <a href="#contactForm">richiedi preventivo</a>.' +
          '<button type="button" class="ux-hint-x" aria-label="Chiudi">×</button>';
        document.body.appendChild(hint);
        requestAnimationFrame(function () { hint.classList.add('show'); });
        try { sessionStorage.setItem('uxSoftHint', '1'); } catch (e) {}
        hint.querySelector('.ux-hint-x').onclick = function () { hint.classList.remove('show'); };
        setTimeout(function () { if (hint.parentNode) hint.classList.remove('show'); }, 12000);
      }, 900);
    }, { passive: true });
  }

  function lightPerf() {
    $$('img:not([loading])').forEach(function (img) {
      if (img.closest('header, .logo, .header-main')) return;
      img.loading = 'lazy';
      img.decoding = 'async';
    });
    if (!document.querySelector('link[data-ux-preconnect="wa"]')) {
      var l = document.createElement('link');
      l.rel = 'preconnect';
      l.href = 'https://wa.me';
      l.setAttribute('data-ux-preconnect', 'wa');
      document.head.appendChild(l);
    }
  }

  function ensureTrackClasses() {
    $$('a[href^="tel:"]').forEach(function (a) {
      if (!a.classList.contains('track-phone')) a.classList.add('track-phone');
    });
    $$('a[href*="wa.me"]').forEach(function (a) {
      if (!a.classList.contains('track-whatsapp')) a.classList.add('track-whatsapp');
    });
  }

  function run() {
    lightPerf();
    clarifyCtas();
    highlightProductFacts();
    ensureTrackClasses();
    softEngage();
    setTimeout(function () {
      clarifyCtas();
      ensureTrackClasses();
      highlightProductFacts();
    }, 400);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
