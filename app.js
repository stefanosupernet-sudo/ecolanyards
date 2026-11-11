/* Loader: base app + UX + Clarity + nav + safety tracking + fab + cookie modal */
(function(){
  function load(src, cb){
    var s=document.createElement('script');
    s.src=src; s.onload=cb||function(){};
    s.onerror=function(){ if(cb) cb(); };
    document.head.appendChild(s);
  }

  /* Cookie: modale centrata a schermo intero - blocca interazione fino ad Accetta/Rifiuta */
  (function cookieModalCss(){
    if(document.getElementById('cookie-modal-css')) return;
    var st=document.createElement('style');
    st.id='cookie-modal-css';
    st.textContent=[
      '#cookieBanner.cookie-banner, .cookie-banner{',
      '  position:fixed!important;inset:0!important;z-index:100000!important;',
      '  display:none!important;align-items:center;justify-content:center;',
      '  background:rgba(0,0,0,.75)!important;padding:16px!important;',
      '  box-shadow:none!important;bottom:auto!important;left:0!important;right:0!important;top:0!important;',
      '  margin:0!important;max-width:none!important;width:100%!important;height:100%!important;',
      '  overflow:auto;-webkit-overflow-scrolling:touch;',
      '}',
      '#cookieBanner.cookie-banner.show, .cookie-banner.show{display:flex!important;}',
      '.cookie-banner .cookie-inner{',
      '  background:#1a1a1a!important;color:#fff!important;',
      '  max-width:460px!important;width:100%!important;margin:auto!important;',
      '  padding:24px 20px!important;border-radius:16px!important;',
      '  flex-direction:column!important;align-items:stretch!important;',
      '  gap:16px!important;box-shadow:0 16px 48px rgba(0,0,0,.5)!important;',
      '  display:flex!important;flex-wrap:nowrap!important;',
      '}',
      '.cookie-banner .cookie-text{flex:none!important;min-width:0!important;width:100%!important;font-size:.95rem;line-height:1.5;}',
      '.cookie-banner .cookie-actions{',
      '  display:flex!important;flex-direction:column!important;gap:10px!important;',
      '  width:100%!important;align-items:stretch!important;',
      '}',
      '.cookie-banner .cookie-btn{',
      '  width:100%!important;min-height:48px!important;padding:14px 16px!important;',
      '  font-weight:800!important;font-size:1rem!important;border-radius:10px!important;cursor:pointer;',
      '}',
      '.cookie-banner .cookie-btn.accept{background:#4caf50!important;color:#fff!important;border:none!important;order:1;}',
      '.cookie-banner .cookie-btn.reject{background:transparent!important;color:#fff!important;border:1px solid #888!important;order:2;}',
      '.cookie-banner .cookie-btn.prefs{background:#333!important;color:#fff!important;border:1px solid #555!important;order:3;}',
      'body.cookie-lock{overflow:hidden!important;touch-action:none!important;height:100%!important;}',
      'body.cookie-lock > *:not(#cookieBanner):not(script):not(style):not(link):not(noscript){',
      '  pointer-events:none!important;user-select:none!important;',
      '}',
      '#cookieBanner, #cookieBanner *{pointer-events:auto!important;user-select:auto!important;}',
      '@media(max-width:600px){',
      '  .cookie-banner .cookie-inner{padding:20px 16px!important;max-width:100%!important;border-radius:14px!important;}',
      '  .cookie-banner .cookie-btn{font-size:.95rem!important;}',
      '}'
    ].join('');
    document.head.appendChild(st);
  })();

  (function safetyTracking(){
    if(window.__safetyTrack) return;
    window.__safetyTrack=1;
    window.dataLayer=window.dataLayer||[];
    function push(name, extra){
      window.dataLayer.push(Object.assign({event:name}, extra||{}));
    }
    document.addEventListener('click', function(e){
      var a=e.target.closest('a[href^="tel:"], .track-phone');
      if(!a) return;
      if(a.dataset.trackFired==='tel') return;
      a.dataset.trackFired='tel';
      push('click_telefono',{event_category:'contact',event_label:'telefono',phone_number:'3358109363'});
      setTimeout(function(){ try{ delete a.dataset.trackFired; }catch(err){} }, 800);
    }, true);
    document.addEventListener('click', function(e){
      var a=e.target.closest('a[href*="wa.me"], .track-whatsapp');
      if(!a) return;
      if(a.dataset.trackFired==='wa') return;
      a.dataset.trackFired='wa';
      push('click_whatsapp',{event_category:'contact',event_label:'whatsapp',phone_number:'3358109363'});
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
      if(isL) h1.textContent='Laccetti personalizzati in 3-7 giorni \u00b7 Preventivo gratis da 50 pezzi';
      else if(isB) h1.textContent='Portabadge personalizzati \u00b7 Preventivo gratis da 50 pezzi';
      else if(isHome) h1.textContent='Laccetti personalizzati in 3-7 giorni \u00b7 Preventivo gratis da 50 pezzi';
    }
    if(p && isHome) p.textContent='Produzione diretta Made in Italy \u00b7 PET riciclato \u00b7 Risposta rapida su form o WhatsApp';
    if(!hero.querySelector('.trust-badges')){
      var tb=document.createElement('div');
      tb.className='trust-badges';
      tb.setAttribute('aria-label','Vantaggi');
      tb.innerHTML='<span>Preventivo gratuito</span><span>Min. 50-100 pezzi</span><span>Made in Italy</span><span>Risposta in poche ore</span>';
      var cta=hero.querySelector('.hero-cta');
      if(cta) hero.insertBefore(tb, cta);
      else hero.appendChild(tb);
    }
    if(!document.getElementById('trust-badges-css')){
      var st=document.createElement('style'); st.id='trust-badges-css';
      st.textContent='.trust-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:0 auto 20px;max-width:640px}.trust-badges span{background:#e8f5e9;color:#1b5e20;border:1px solid #a5d6a7;border-radius:20px;padding:6px 12px;font-size:.85rem;font-weight:700}@media(max-width:600px){.hero h1{font-size:1.45rem!important;line-height:1.25}.hero-cta{width:100%;max-width:320px;margin:6px auto;display:block;box-sizing:border-box}}';
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
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', enhanceListing);
  else enhanceListing();

  load('https://cdn.jsdelivr.net/gh/stefanosupernet-sudo/ecolanyards@c928dc99a2491efc36f87dccd251f37dc2377464/app.js', function(){
    load('ux-abc.js?v=20261023abc', function(){
      load('ux-clarity.js?v=20261030c', function(){
        if(!window.__fabBoot) load('fab.js?v=20261110grazie');
      });
    });
  });
})();
