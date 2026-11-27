/* Banner cookie: niente click a vuoto, pagina utilizzabile, contatti sempre cliccabili. */
(function () {
  if (window.__cookieFix) return;
  window.__cookieFix = 1;

  var css = document.createElement('style');
  css.id = 'cookie-fix-css';
  css.textContent = [
    'body.cookie-lock{overflow:auto!important;touch-action:auto!important;height:auto!important}',
    'body.cookie-lock > *{pointer-events:auto!important;user-select:auto!important}',
    '#cookieBanner.cookie-banner.show{align-items:flex-end!important;justify-content:center!important;background:rgba(0,0,0,.4)!important;padding:0!important}',
    '#cookieBanner .cookie-inner{width:min(520px,100%)!important;max-height:min(78vh,560px)!important;overflow:auto!important;border-radius:16px 16px 0 0!important;margin:0!important}',
    '#cookieBanner .cookie-actions{display:flex!important;flex-direction:column!important;gap:8px!important}',
    '#cookieBanner .cookie-btn{min-height:48px!important;width:100%!important;font-size:1rem!important}',
    '#cookieBanner .cookie-btn:active{transform:scale(.98)}',
    '#cookieBanner .cookie-btn.is-pressed{opacity:.75}',
    '#cookieBanner .cookie-tap-hint{display:block;margin-top:8px;font-size:.86rem;font-weight:700;color:#ffe082}',
    '#cookieBanner .cookie-reassure{display:block;margin-top:6px;font-size:.88rem;color:#ddd}',
    '@keyframes cookieNudge{50%{transform:scale(1.03)}}',
    '#cookieBanner .cookie-btn.nudge{animation:cookieNudge .35s ease 2}',
    '@media(min-width:700px){#cookieBanner.cookie-banner.show{align-items:center!important;padding:16px!important}#cookieBanner .cookie-inner{border-radius:16px!important}}'
  ].join('');
  document.head.appendChild(css);

  function banner() { return document.getElementById('cookieBanner'); }

  function clarify() {
    var b = banner();
    if (!b) return;
    var text = b.querySelector('.cookie-text');
    if (!text || text.dataset.clarified) return;
    text.dataset.clarified = '1';
    text.innerHTML = '<strong>Cookie: scegli per continuare</strong>' +
      '<span class="cookie-reassure">Accetta o Rifiuta. In entrambi i casi puoi vedere i prodotti, chiamare e scrivere su WhatsApp.</span>' +
      '<span class="cookie-tap-hint">Tocca Accetta tutto oppure Rifiuta.</span>';
  }

  function nudge() {
    var b = banner();
    if (!b) return;
    var hint = b.querySelector('.cookie-tap-hint');
    if (hint) hint.textContent = 'Serve un tocco sul pulsante: Accetta tutto o Rifiuta.';
    var acc = document.getElementById('cookieAccept');
    if (!acc) return;
    acc.classList.remove('nudge');
    void acc.offsetWidth;
    acc.classList.add('nudge');
  }

  function bind() {
    var b = banner();
    if (!b || b.dataset.fixBound) return;
    b.dataset.fixBound = '1';
    clarify();
    b.addEventListener('click', function (e) {
      if (e.target.closest('button, a, input, label')) return;
      nudge();
    });
    ['cookieAccept', 'cookieReject', 'cookieSavePrefs'].forEach(function (id) {
      var btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener('click', function () {
        btn.classList.add('is-pressed');
        if (id !== 'cookieSavePrefs') btn.textContent = 'Ok\u2026';
      }, true);
    });
    var prefs = document.getElementById('cookiePrefsBtn');
    var panel = document.getElementById('cookiePrefsPanel');
    if (prefs && panel) {
      prefs.addEventListener('click', function () {
        setTimeout(function () {
          var save = document.getElementById('cookieSavePrefs');
          if (save) {
            save.textContent = 'Salva e continua';
            try { save.scrollIntoView({ block: 'nearest' }); } catch (e) {}
          }
        }, 40);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else bind();
  setTimeout(bind, 400);
})();
