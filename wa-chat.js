/* Chat WhatsApp sul sito, poi invio verso WhatsApp vero.
 * 1) click sul pulsante -> click_whatsapp + pannello
 * 2) Invia -> whatsapp_messaggio_inviato + wa.me
 * stopPropagation evita il doppio click_whatsapp degli altri listener. */
(function () {
  if (window.__waChatBoot) return;
  window.__waChatBoot = 1;

  var PHONE = '393358109363';

  if (!document.getElementById('wa-chat-css')) {
    var st = document.createElement('style');
    st.id = 'wa-chat-css';
    st.textContent = [
      '#waChat{position:fixed;inset:0;z-index:100050;display:none}',
      '#waChat.open{display:block}',
      '#waChat .wa-chat-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.45)}',
      '#waChat .wa-chat-panel{position:absolute;right:16px;bottom:16px;width:min(380px,calc(100% - 24px));background:#fff;border-radius:16px;box-shadow:0 16px 48px rgba(0,0,0,.28);display:flex;flex-direction:column;overflow:hidden;font-family:system-ui,-apple-system,sans-serif}',
      '#waChat .wa-chat-head{background:#075e54;color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px}',
      '#waChat .wa-chat-avatar{width:36px;height:36px;border-radius:50%;background:#25D366;color:#075e54;font-weight:800;display:flex;align-items:center;justify-content:center;flex:none}',
      '#waChat .wa-chat-head strong{display:block;font-size:.95rem}',
      '#waChat .wa-chat-head span{display:block;font-size:.75rem;opacity:.85}',
      '#waChat .wa-chat-close{margin-left:auto;background:transparent;border:0;color:#fff;font-size:1.5rem;line-height:1;cursor:pointer;padding:4px 6px}',
      '#waChat .wa-chat-log{background:#ece5dd;padding:14px;min-height:92px}',
      '#waChat .wa-chat-bot{background:#fff;border-radius:0 12px 12px 12px;padding:10px 12px;font-size:.92rem;line-height:1.4;color:#222;margin:0}',
      '#waChat form{display:flex;flex-direction:column;gap:8px;padding:10px;background:#f0f0f0}',
      '#waChat textarea{width:100%;min-height:72px;border:1px solid #ddd;border-radius:10px;padding:10px;font:inherit;resize:vertical;box-sizing:border-box}',
      '#waChat .wa-chat-send{background:#25D366;color:#fff;border:0;border-radius:10px;min-height:48px;font-weight:800;font-size:1rem;cursor:pointer}',
      '#waChat .wa-chat-send:disabled{opacity:.6;cursor:default}',
      '#waChat .wa-chat-err{color:#b71c1c;font-size:.8rem;margin:0;display:none}',
      '@media(max-width:600px){#waChat .wa-chat-panel{left:0;right:0;bottom:0;width:100%;border-radius:16px 16px 0 0}}'
    ].join('');
    document.head.appendChild(st);
  }

  function push(name, extra) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, extra || {}));
  }

  function textFromHref(href) {
    try {
      var u = new URL(href, location.href);
      return u.searchParams.get('text') || '';
    } catch (e) { return ''; }
  }

  function root() {
    var el = document.getElementById('waChat');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'waChat';
    el.innerHTML = '<div class="wa-chat-backdrop"></div>' +
      '<div class="wa-chat-panel" role="dialog" aria-modal="true" aria-labelledby="waChatTitle">' +
      '<div class="wa-chat-head"><div class="wa-chat-avatar">E</div><div><strong id="waChatTitle">EcoLanyards</strong><span>Scrivi qui, poi si apre WhatsApp</span></div>' +
      '<button type="button" class="wa-chat-close" aria-label="Chiudi">\u00d7</button></div>' +
      '<div class="wa-chat-log"><p class="wa-chat-bot">Ciao. Scrivi prodotto e quantit\u00e0. Con Invia il messaggio parte su WhatsApp.</p></div>' +
      '<form><p class="wa-chat-err">Scrivi un messaggio prima di inviare.</p>' +
      '<textarea name="msg" maxlength="500" placeholder="Es. 200 laccetti PET, logo su due lati" required></textarea>' +
      '<button type="submit" class="wa-chat-send">Invia su WhatsApp</button></form></div>';
    document.body.appendChild(el);
    el.querySelector('.wa-chat-backdrop').addEventListener('click', close);
    el.querySelector('.wa-chat-close').addEventListener('click', close);
    el.querySelector('form').addEventListener('submit', onSend);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && el.classList.contains('open')) close();
    });
    return el;
  }

  function close() {
    var el = document.getElementById('waChat');
    if (el) el.classList.remove('open');
  }

  function openChat(href) {
    var el = root();
    var ta = el.querySelector('textarea');
    var pre = textFromHref(href);
    if (pre) ta.value = pre;
    el.querySelector('.wa-chat-err').style.display = 'none';
    el.classList.add('open');
    push('click_whatsapp', { event_category: 'contact', event_label: 'whatsapp', phone_number: '3358109363' });
    setTimeout(function () { try { ta.focus(); } catch (e) {} }, 50);
  }

  function onSend(e) {
    e.preventDefault();
    var el = document.getElementById('waChat');
    var ta = el.querySelector('textarea');
    var text = (ta.value || '').trim();
    var err = el.querySelector('.wa-chat-err');
    if (!text) { err.style.display = 'block'; ta.focus(); return; }
    err.style.display = 'none';
    push('whatsapp_messaggio_inviato', {
      event_category: 'conversion',
      event_label: 'whatsapp',
      phone_number: '3358109363'
    });
    var url = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(text);
    var w = window.open(url, '_blank', 'noopener');
    if (!w) location.href = url;
    close();
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href*="wa.me"], a.track-whatsapp');
    if (!a || a.closest('#waChat')) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('wa.me') === -1 && !a.classList.contains('track-whatsapp')) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    openChat(href.indexOf('wa.me') !== -1 ? a.href : ('https://wa.me/' + PHONE));
  }, true);
})();
