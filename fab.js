/* FAB cornetta (Chiama + WhatsApp) + form + tel + CSS mobile header/FAB
 * Inietta la cornetta se manca HTML; dopo invio form -> grazie.html */
(function () {
  if (window.__fabBoot) return;
  window.__fabBoot = 1;

  if (!document.getElementById('fab-global-css')) {
    var st = document.createElement('style');
    st.id = 'fab-global-css';
    st.textContent = [
      '.contact-fab{position:fixed;right:max(14px,env(safe-area-inset-right));bottom:max(18px,env(safe-area-inset-bottom));z-index:1100;display:flex;flex-direction:column-reverse;align-items:flex-end;gap:10px;pointer-events:none}',
      '.contact-fab > *{pointer-events:auto}',
      '.contact-fab-main{width:58px;height:58px;background:#2e7d32;border-radius:50%;border:none;cursor:pointer;color:#fff;font-size:1.45rem;box-shadow:0 4px 16px rgba(0,0,0,.28);display:flex;align-items:center;justify-content:center;line-height:1;padding:0;-webkit-tap-highlight-color:transparent}',
      '.contact-fab-main:active{transform:scale(.94)}',
      '.contact-fab-options{display:none;flex-direction:column;gap:8px;align-items:flex-end}',
      '.contact-fab.open .contact-fab-options{display:flex}',
      '.contact-option{display:flex;align-items:center;gap:8px;text-decoration:none;background:#fff;padding:10px 14px;border-radius:28px;box-shadow:0 3px 12px rgba(0,0,0,.18);font-weight:700;font-size:.92rem;color:#222;white-space:nowrap}',
      '.contact-option.track-phone,.contact-option[href^="tel:"]{border:1px solid #1976d2}',
      '.contact-option.track-whatsapp,.contact-option[href*="wa.me"]{border:1px solid #25D366}',
      'body.has-sticky-cta .contact-fab{bottom:max(88px,calc(72px + env(safe-area-inset-bottom)))}',
      '@media(max-width:600px){',
      '  .contact-fab{right:max(12px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom))}',
      '  body.has-sticky-cta .contact-fab{bottom:max(92px,calc(78px + env(safe-area-inset-bottom)))}',
      '  .contact-fab-main{width:56px;height:56px;font-size:1.35rem}',
      '  header{position:sticky!important;top:0;z-index:1000;background:#fff}',
      '  .header-top{padding:6px 10px;font-size:.82rem;justify-content:center;text-align:center;gap:6px}',
      '  .header-top > div{width:100%}',
      '  .header-main{flex-wrap:wrap;padding:8px 12px;gap:6px 10px;align-items:center}',
      '  .logo img{height:42px!important;width:auto;max-width:140px;object-fit:contain}',
      '  header nav{display:flex;flex-wrap:wrap;width:100%;justify-content:flex-start;gap:2px 0;margin:0;padding:4px 0 2px;border-top:1px solid #e8e8e8}',
      '  header nav a{margin:0 10px 0 0!important;padding:6px 0;font-size:.82rem!important;font-weight:700}',
      '  .wa-banner{padding:10px 12px;font-size:.92rem}',
      '}'
    ].join('');
    document.head.appendChild(st);
  }

  function ensureFab() {
    var fab = document.getElementById('contactFab');
    if (!fab) {
      fab = document.createElement('div');
      fab.className = 'contact-fab';
      fab.id = 'contactFab';
      fab.innerHTML =
        '<div class="contact-fab-options">' +
        '<a href="tel:+393358109363" class="contact-option track-phone" aria-label="Chiama 335 810 9363"><span>📞 Chiama</span></a>' +
        '<a href="https://wa.me/393358109363?text=' + encodeURIComponent('Ciao, vorrei un preventivo') + '" class="contact-option track-whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp"><span>WhatsApp</span></a>' +
        '</div>' +
        '<button type="button" class="contact-fab-main" id="contactFabBtn" aria-label="Contattaci: telefono o WhatsApp" aria-expanded="false">📞</button>';
      document.body.appendChild(fab);
    } else {
      var opts = fab.querySelector('.contact-fab-options');
      if (!opts) {
        opts = document.createElement('div');
        opts.className = 'contact-fab-options';
        fab.insertBefore(opts, fab.firstChild);
      }
      if (!opts.querySelector('a[href^="tel:"]')) {
        var tel = document.createElement('a');
        tel.href = 'tel:+393358109363';
        tel.className = 'contact-option track-phone';
        tel.innerHTML = '<span>📞 Chiama</span>';
        opts.appendChild(tel);
      }
      if (!opts.querySelector('a[href*="wa.me"]')) {
        var wa = document.createElement('a');
        wa.href = 'https://wa.me/393358109363?text=' + encodeURIComponent('Ciao, vorrei un preventivo');
        wa.className = 'contact-option track-whatsapp';
        wa.target = '_blank';
        wa.rel = 'noopener';
        wa.innerHTML = '<span>WhatsApp</span>';
        opts.appendChild(wa);
      }
      if (!document.getElementById('contactFabBtn')) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'contact-fab-main';
        btn.id = 'contactFabBtn';
        btn.setAttribute('aria-label', 'Contattaci: telefono o WhatsApp');
        btn.textContent = '📞';
        fab.appendChild(btn);
      }
    }
    return fab;
  }

  function initFab() {
    var fab = ensureFab();
    var btn = document.getElementById('contactFabBtn');
    if (!fab || !btn) return;
    if (btn.dataset.fabBound) return;
    btn.dataset.fabBound = '1';
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var open = fab.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!fab.contains(e.target)) {
        fab.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    fab.querySelectorAll('a.contact-option').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.stopPropagation();
        var href = link.getAttribute('href') || '';
        if (href.indexOf('tel:') === 0) {
          e.preventDefault();
          window.location.href = href;
        }
        setTimeout(function () {
          fab.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }, 300);
      });
    });
  }

  function bindForm() {
    var form = document.getElementById('contactForm');
    if (!form || form.dataset.bound) return;
    form.dataset.bound = '1';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var btn = form.querySelector('button[type=submit]');
      var t = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Invio in corso...'; }
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
        .then(function (r) {
          if (r.ok) {
            window.dataLayer = window.dataLayer || [];
            var prod = form.querySelector('[name=prodotto]');
            window.dataLayer.push({ event: 'invio_form_contatti', form_name: 'scheda_prodotto', product_name: prod ? prod.value : '', event_category: 'conversion' });
            form.dataset.submitted = '1';
            window.location.href = 'grazie.html';
            return;
          } else throw 0;
        })
        .catch(function () { form.submit(); })
        .finally(function () { if (btn) { btn.disabled = false; btn.textContent = t; } });
    }, true);
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="tel:"], .track-phone');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('tel:') === 0) {
      e.preventDefault();
      window.location.href = href;
    }
  }, true);

  function init() {
    initFab();
    bindForm();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

(function () {
  function ensureNext(form) {
    if (!form || !form.action || form.action.indexOf('formsubmit.co') === -1) return;
    var next = form.querySelector('input[name="_next"]');
    var url = 'grazie.html';
    try { url = new URL('grazie.html', location.href).href; } catch (e) {}
    if (next) { next.value = url; return; }
    var inp = document.createElement('input');
    inp.type = 'hidden';
    inp.name = '_next';
    inp.value = url;
    form.appendChild(inp);
  }
  function ensureCc(form) {
    if (!form || !form.action || form.action.indexOf('formsubmit.co') === -1) return;
    var existing = form.querySelector('input[name="_cc"]');
    if (existing) {
      var vals = existing.value.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      if (vals.indexOf('info@supernet.biz.pl') === -1) {
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
  function applyAll() {
    document.querySelectorAll('form').forEach(function (f) { ensureCc(f); ensureNext(f); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyAll);
  else applyAll();
})();
