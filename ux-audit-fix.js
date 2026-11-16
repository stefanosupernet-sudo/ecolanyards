/*! ux-audit-fix.js – Clarity audit Nov 2026
 * 1) Cookie: messaggio chiaro + sito usabile dopo Rifiuta
 * 2) Meno dead-click / errori JS
 * 3) Percorsi chiari (Chi siamo, Realizzazioni, catalogo)
 * 4) Form -> grazie senza doppi handler problematici
 */
(function () {
  if (window.__uxAuditFix) return;
  window.__uxAuditFix = 1;

  function safe(fn) {
    try { return fn(); } catch (e) { try { console.warn('[ux-audit]', e); } catch (x) {} }
  }

  if (!document.getElementById('ux-audit-css')) {
    var st = document.createElement('style');
    st.id = 'ux-audit-css';
    st.textContent = [
      'body:not(.cookie-lock) > *{pointer-events:auto!important;user-select:auto!important}',
      '.qty-banner,.product-key-facts,.benefit-box,.trust-badges,.card-benefit{cursor:default!important}',
      '.qty-banner a,.benefit-box a,.trust-badges a{cursor:pointer!important}',
      '.ux-cookie-ok{position:fixed;left:50%;transform:translateX(-50%);bottom:24px;z-index:100001;max-width:420px;width:calc(100% - 24px);background:#1b5e20;color:#fff;padding:14px 18px;border-radius:12px;font-size:.92rem;font-weight:600;box-shadow:0 8px 28px rgba(0,0,0,.25);text-align:center;display:none}',
      '.ux-cookie-ok.show{display:block}',
      '.ux-cookie-ok a{color:#c8e6c9;font-weight:800}',
      '.ux-path-bar{max-width:1100px;margin:12px auto 0;padding:0 16px;display:flex;flex-wrap:wrap;gap:8px;align-items:center}',
      '.ux-path-bar a{font-size:.85rem;font-weight:700;color:#1b5e20;background:#e8f5e9;border:1px solid #a5d6a7;border-radius:20px;padding:6px 12px;text-decoration:none}',
      '.ux-path-bar a:hover{background:#2e7d32;color:#fff}',
      '.cookie-banner .cookie-reassure{display:block;margin-top:8px;font-size:.88rem;color:#bdbdbd}',
      '@media(max-width:600px){.ux-path-bar{gap:6px}.ux-path-bar a{font-size:.78rem;padding:5px 10px}}'
    ].join('');
    document.head.appendChild(st);
  }

  function enhanceCookie() {
    var banner = document.getElementById('cookieBanner');
    if (!banner) return;
    var text = banner.querySelector('.cookie-text');
    if (text && !text.querySelector('.cookie-reassure')) {
      var note = document.createElement('span');
      note.className = 'cookie-reassure';
      note.textContent = 'Puoi rifiutare e navigare comunque: catalogo, preventivi e contatti restano disponibili.';
      text.appendChild(note);
    }
    function afterChoice(rejected) {
      document.body.classList.remove('cookie-lock');
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.height = '';
      if (!rejected) return;
      try { if (sessionStorage.getItem('uxCookieOkShown') === '1') return; sessionStorage.setItem('uxCookieOkShown', '1'); } catch (e) {}
      var tip = document.createElement('div');
      tip.className = 'ux-cookie-ok';
      tip.setAttribute('role', 'status');
      tip.innerHTML = 'Ok: puoi usare il sito senza cookie analitici. <a href="laccetti.html">Vedi i laccetti</a> · <a href="portabadge.html">Portabadge</a>';
      document.body.appendChild(tip);
      requestAnimationFrame(function () { tip.classList.add('show'); });
      setTimeout(function () { tip.classList.remove('show'); }, 8000);
    }
    ['cookieReject', 'cookieAccept', 'cookieSavePrefs'].forEach(function (id) {
      var btn = document.getElementById(id);
      if (!btn || btn.dataset.auditBound) return;
      btn.dataset.auditBound = '1';
      btn.addEventListener('click', function () {
        var rejected = (id === 'cookieReject');
        if (id === 'cookieSavePrefs') {
          var ca = document.getElementById('cAnalytics');
          var cm = document.getElementById('cMarketing');
          rejected = !(ca && ca.checked) && !(cm && cm.checked);
        }
        setTimeout(function () { afterChoice(rejected); }, 50);
      });
    });
  }

  function pathBar() {
    if (document.querySelector('.ux-path-bar')) return;
    if (/grazie/i.test(location.pathname || '')) return;
    var path = location.pathname || '';
    if (/\/ecolanyards\/?$|\/index\.html?$/i.test(path)) return;
    var header = document.querySelector('header');
    if (!header) return;
    var bar = document.createElement('nav');
    bar.className = 'ux-path-bar';
    bar.setAttribute('aria-label', 'Percorsi rapidi');
    var items = [
      ['laccetti.html', 'Laccetti'],
      ['portabadge.html', 'Portabadge'],
      ['realizzazioni.html', 'Realizzazioni'],
      ['chi-siamo.html', 'Chi siamo']
    ];
    bar.innerHTML = items.map(function (it) {
      return '<a href="' + it[0] + '">' + it[1] + '</a>';
    }).join('');
    header.insertAdjacentElement('afterend', bar);
  }

  function hardenForm() {
    var form = document.getElementById('contactForm');
    if (!form || form.dataset.auditForm) return;
    form.dataset.auditForm = '1';
    form.addEventListener('submit', function (e) {
      if (form.dataset.submitted === '1') {
        e.preventDefault();
        e.stopImmediatePropagation();
        window.location.href = 'grazie.html';
      }
    }, true);
  }

  function fixDeadLinks() {
    document.querySelectorAll('a[href="#"], a[href=""]').forEach(function (a) {
      if (a.closest('#cookieBanner')) return;
      if (a.dataset.deadFixed) return;
      a.dataset.deadFixed = '1';
    });
  }

  function trackClasses() {
    document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
      a.classList.add('track-phone');
    });
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (a) {
      a.classList.add('track-whatsapp');
    });
  }

  function run() {
    safe(enhanceCookie);
    safe(pathBar);
    safe(hardenForm);
    safe(fixDeadLinks);
    safe(trackClasses);
    setTimeout(function () {
      safe(enhanceCookie);
      safe(trackClasses);
    }, 600);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
