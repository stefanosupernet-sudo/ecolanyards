/* Loader: base app + catalog-update + UX + cookie modal + wa chat */
(function(){
  function load(src, cb){
    var s=document.createElement('script');
    s.src=src; s.onload=cb||function(){};
    s.onerror=function(){ if(cb) cb(); };
    document.head.appendChild(s);
  }

  if (document.readyState === 'loading') {
    document.write('<script src="wa-chat.js?v=20261127b"><\/script>');
    document.write('<script src="cookie-fix.js?v=20261127d"><\/script>');
  } else {
    if (!window.__waChatBoot) load('wa-chat.js?v=20261127b');
    if (!window.__cookieFix) load('cookie-fix.js?v=20261127d');
  }

  (function cookieModalCss(){
    if(document.getElementById('cookie-fix-css')) return;
    if(document.getElementById('cookie-modal-css')) return;
    var st=document.createElement('style');
    st.id='cookie-modal-css';
    st.textContent='';
    document.head.appendChild(st);
  })();

  (function safetyTracking(){
    if(window.__safetyTrack) return;
    window.__safetyTrack=1;
    window.dataLayer=window.dataLayer||[];
    function push(name, extra){ window.dataLayer.push(Object.assign({event:name}, extra||{})); }
    document.addEventListener('click', function(e){
      var a=e.target.closest('a[href^="tel:"], .track-phone');
      if(!a) return;
      if(a.classList.contains('track-whatsapp') || ((a.getAttribute('href')||'').indexOf('wa.me')!==-1)) return;
      if(a.dataset.trackFired==='tel') return;
      a.dataset.trackFired='tel';
      push('click_telefono',{event_category:'contact',event_label:'telefono',phone_number:'3358109363'});
      setTimeout(function(){ try{ delete a.dataset.trackFired; }catch(err){} }, 800);
    }, true);
  })();

  function ensureNavLinks(){
    document.querySelectorAll('header nav, .header-main nav').forEach(function(nav){
      if(!nav.querySelector('a[href*="realizzazioni"]')){
        var a=document.createElement('a');
        a.href='realizzazioni.html'; a.id='nav-realizzazioni'; a.textContent='Realizzazioni';
        if(/realizzazioni/i.test(location.pathname||'')) a.className='active';
        nav.appendChild(a);
      }
      if(!nav.querySelector('a[href*="chi-siamo"]')){
        var b=document.createElement('a');
        b.href='chi-siamo.html'; b.id='nav-chi-siamo'; b.textContent='Chi siamo';
        if(/chi-siamo/i.test(location.pathname||'')) b.className='active';
        nav.appendChild(b);
      }
    });
  }

  function enhanceListing(){
    try {
      ensureNavLinks();
      var hero=document.querySelector('section.hero');
      if(!hero || hero.dataset.trust) return;
      if(/realizzazioni|chi-siamo|grazie/i.test(location.pathname||'')) return;
      hero.dataset.trust='1';
      var path=location.pathname||'';
      var isL=/laccetti/i.test(path);
      var isB=/portabadge/i.test(path);
      var isHome=!isL && !isB;
      var h1=hero.querySelector('h1');
      var p=hero.querySelector('p');
      if(h1){
        if(isL) h1.textContent='Laccetti personalizzati in 3-7 giorni \u00b7 Preventivo gratis da 100 pezzi';
        else if(isB) h1.textContent='Portabadge personalizzati \u00b7 Preventivo gratis da 100 pezzi';
        else if(isHome) h1.textContent='Laccetti personalizzati in 3-7 giorni \u00b7 Preventivo gratis da 100 pezzi';
      }
      if(p && isHome) p.textContent='Produzione diretta Made in Italy \u00b7 PET riciclato \u00b7 Risposta rapida su form o WhatsApp';
      if(!hero.querySelector('.trust-badges')){
        var tb=document.createElement('div');
        tb.className='trust-badges';
        tb.setAttribute('aria-label','Vantaggi');
        tb.innerHTML='<span>Preventivo gratuito</span><span>Min. 100 pezzi</span><span>Impianti stampa gratis</span><span>Stampa 1-6 colori</span><span>Made in Italy</span>';
        var cta=hero.querySelector('.hero-cta');
        if(cta) hero.insertBefore(tb, cta);
        else hero.appendChild(tb);
      }
      if(!document.getElementById('trust-badges-css')){
        var st=document.createElement('style'); st.id='trust-badges-css';
        st.textContent='.trust-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:0 auto 20px;max-width:720px}.trust-badges span{background:#e8f5e9;color:#1b5e20;border:1px solid #a5d6a7;border-radius:20px;padding:6px 12px;font-size:.85rem;font-weight:700}@media(max-width:600px){.hero h1{font-size:1.45rem!important;line-height:1.25}.hero-cta{width:100%;max-width:320px;margin:6px auto;display:block;box-sizing:border-box}}';
        document.head.appendChild(st);
      }
      var ban=document.querySelector('.wa-banner a');
      if(ban){
        if(!ban.classList.contains('track-whatsapp')) ban.classList.add('track-whatsapp');
        if(ban.textContent.indexOf('10 secondi')===-1){
          ban.innerHTML='<strong>WhatsApp</strong> \u00b7 chiedi il prezzo in 10 secondi (risposta rapida)';
          var msg=isB?'Ciao, vorrei un preventivo per portabadge':(isL?'Ciao, vorrei un preventivo per laccetti personalizzati':'Ciao, vorrei un preventivo per laccetti/portabadge');
          ban.href='https://wa.me/393358109363?text='+encodeURIComponent(msg);
        }
      }
    } catch (err) { try { console.warn('[enhanceListing]', err); } catch(e) {} }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', enhanceListing);
  else enhanceListing();

  load('https://cdn.jsdelivr.net/gh/stefanosupernet-sudo/ecolanyards@c928dc99a2491efc36f87dccd251f37dc2377464/app.js', function(){
    load('catalog-update.js?v=20261117c', function(){
      load('ux-abc.js?v=20261023abc', function(){
        load('ux-clarity.js?v=20261030c', function(){
          load('ux-audit-fix.js?v=20261116a', function(){
            if(!window.__fabBoot) load('fab.js?v=20261110grazie');
          });
        });
      });
    });
  });
})();
